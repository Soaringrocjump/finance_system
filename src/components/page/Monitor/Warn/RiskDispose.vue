<!-- 风险处置 created by zp -->
<template>
  <div class="warn-content riskCon_body" >
    <el-tabs type="border-card" @tab-click="tabClick">
      <el-tab-pane label="处置中">
        <dispose-in :tableData="warningList" :pageData="pageInfo" v-on:changePage="cutPage"></dispose-in>
      </el-tab-pane>
      <el-tab-pane label="已处置">
        <dispose-been :tableData="warningList" :pageData="pageInfo" v-on:changePage="cutPage"></dispose-been>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import DisposeIn from "./RiskDispose/DisposeIn.vue";
import DisposeBeen from "./RiskDispose/DisposeBeen.vue";
export default {
  data() {
    return {
      tabLabel: '处置中',
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
      // debugger;
      this.getList(null, tab.label);
      this.tabLabel = tab.label;
      console.log(tab.label)
    },
    //信息检索查询机构warning/query
    getList(currentPage, warnStatus) {
      var user = this.$common.getLoginUser();
      this.$axios({
        method: "post",
        url: this.HOME +"warning/query",
        headers: {
          "content-type": "application/json;charset=UTF-8"
        },
        data: {
          userDeptId: user.departmentId,
          warnStatus: warnStatus || "处置中",
          pageNum: currentPage || this.pageInfo.pageNum,
          pageSize: this.pageInfo.pageSize
        }
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
    }, 
    //获取子组件分页值重新请求数据
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

<style lang="scss" >
@import "@/assets/css/page/warn_org.scss";
.riskCon_body {
  .el-tabs__content {
    padding: 0px;
  }
}
</style>
