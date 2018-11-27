<template>
  <div class="sm_body riskCon_body" >
    <el-tabs type="border-card" @tab-click="tabClick">
      <el-tab-pane label="会商中">
        <risk-in :tableData="warningList" :pageData="pageInfo"></risk-in>
      </el-tab-pane>
      <el-tab-pane label="已会商">
        <risk-been :tableData="warningList" :pageData="pageInfo"></risk-been>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/*风险会商*/
import RiskIn from "./RiskConsultation/RiskIn.vue";
import RiskBeen from "./RiskConsultation/RiskBeen.vue";
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
  name: "RiskConsultation",
  components: {
    RiskIn,
    RiskBeen
  },
  methods: {
    // tab切换
    tabClick(tab, e) {
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
          warnStatus: warnStatus || "会商中",
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
    },
    //pageSize 改变时会触发
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
