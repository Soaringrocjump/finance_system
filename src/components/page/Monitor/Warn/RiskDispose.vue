<template>
  <div class="sm_body riskCon_body" @tab-click="tabClick">
    <el-tabs type="border-card">
      <el-tab-pane label="处置中">
        <dispose-in :tableData="warningList" :pageData="pageInfo"></dispose-in>
      </el-tab-pane>
      <el-tab-pane label="已处置">
        <dispose-been :tableData="warningList" :pageData="pageInfo"></dispose-been>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/*风险处置*/
import DisposeIn from "./RiskDispose/DisposeIn.vue";
import DisposeBeen from "./RiskDispose/DisposeBeen.vue";
export default {
  data() {
    return {
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      warningList: []
    };
  },
  name: "RiskDispose",
  components: {
    DisposeIn,
    DisposeBeen
  },
  methods: {
    // tab切换
    tabClick(tab, e) {
      debugger;
      this.getList(null, tab.label);
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
          warnStatus: warnStatus || "处置中",
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
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    }, //pageSize 改变时会触发
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      this.getWarningData(1, this.pageSize);
    },
    //currentPage 改变时会触发
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getWarningData(val, this.pageSize);
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style lang="scss" >
@import "@/assets/css/page/v_index.scss";
.riskCon_body {
  .el-tabs__content {
    padding: 0px;
  }
}
</style>
