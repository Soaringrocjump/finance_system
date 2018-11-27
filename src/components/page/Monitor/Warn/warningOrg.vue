<!-- 预警机构 -->
<template>
  <div class="warn-content warningOrg">
    <el-tabs v-model="activeName" class="warn_tab" type="border-card" @tab-click="tabClick">
      <el-tab-pane label="预警中" name="first">
        <table-module :tableData="warningList" :pageData="pageInfo" v-on:changePage="cutPage"></table-module>
      </el-tab-pane>
      <el-tab-pane label="核查中" name="second">
        <table-module :tableData="warningList" :pageData="pageInfo" ></table-module>
      </el-tab-pane>
      <el-tab-pane label="已核查" name="third">
        <table-module :tableData="warningList" :pageData="pageInfo">
          <el-button size="mini" slot="btn">会商</el-button>
        </table-module>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tableModule from "./warningOrg/tableModule.vue";
import Ajax from "@/components/common/util";
export default {
  data() {
    return {
      activeName: 'first',
      tabLabel: '预警中',
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      warningList: []
    };
  },
  components: {
    tableModule
  },
  methods: {
    // tab切换
    tabClick(tab, e) {
      debugger;
      this.getList(null, tab.label);
      this.tabLabel = tab.label
    },
    //信息检索查询机构warning/query
    getList(currentPage, warnStatus) {
      var user = this.$common.getLoginUser();
      this.$axios({
        method: "post",
        url: this.HOME +"warning/query",
        headers: {
          token: sessionStorage.getItem("authorization"),
          "content-type": "application/json;charset=UTF-8"
        },
        data: JSON.stringify({
          userDeptId: user.departmentId,
          warnStatus: warnStatus || "预警中",
          pageNum: currentPage || this.pageInfo.pageNum,
          pageSize: this.pageInfo.pageSize
        })
      })
        .then(result => {
          console.log(result);
          if (result.data.resultCode != "200") alert("错误：" + msg.message);
          var msg = !this.$common.isNull(result.data.data)
            ? result.data.data
            : "";

          this.warningList = msg.list;
          this.pageInfo.total = msg.total;
          let Cstatus = msg.list.company.status;
          console.log(Cstatus)
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    // //pageSize 改变时会触发
    // handleSizeChange(val) {
    //   this.pageSize = val;
    //   this.currentPage = 1;
    //   this.getWarningData(1, this.pageSize);
    // },
    //currentPage 改变时会触发
    handleCurrentChange(val) {
      // this.currentPage = val;
      console.log(val);
      getList(val, this.tabLabel);
    },
    cutPage(val){
      console.log(val);
      console.log(this.tabLabel);
      this.pageInfo.pageNum = val;
      this.getList(val, this.tabLabel);
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/page/warn_org.scss";
.searchItem {
  position: absolute;
  right: 0;
  top: -40px;
  width: 100px;
  height: 40px;
  background: #ccc;
}
</style>
