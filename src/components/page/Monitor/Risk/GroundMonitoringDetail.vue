<template>
  <div class="orgDetails warn-content">
    <div>
      <span>地网监测</span>
      -
      <span>宁波米利有限公司</span>
    </div>

    <div class="sm_body il_details_body">
      <el-tabs type="border-card">
        <el-tab-pane label="金融信息">
          <financial-information></financial-information>
        </el-tab-pane>
        <el-tab-pane label="区县核查信息">
          <county-check-info></county-check-info>
        </el-tab-pane>
        <el-tab-pane label="镇街排查信息" lazy=’true’>
          <subdistrict-investigation></subdistrict-investigation>
        </el-tab-pane>
        <el-tab-pane label="网格排摸信息">
          <grid-investigation></grid-investigation>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  /**
   * 地网检测详情页
   * **/

  // import orgTop from './common/orgTop';//机构详情头部组件
  import FinancialInformation from './GroundMonitoring/FinancialInformation'
  import CountyCheckInfo from './GroundMonitoring/CountyCheckInfo'
  import SubdistrictInvestigation from "./GroundMonitoring/SubdistrictInvestigation";
  import GridInvestigation from "./GroundMonitoring/gridInvestigation";

  export default {
    name: "GroundMonitoringDetail",
    components: {GridInvestigation, SubdistrictInvestigation, CountyCheckInfo, FinancialInformation},
    data(){
        return {
          comInfo:{
           },
        }
    }
  }
</script>

<style  lang='scss'>
  @import "@/assets/css/page/warn_org.scss";
  @import "@/assets/css/page/v_index.scss";
  @import "@/assets/css/page/groundMonitoring.scss";
</style>

<style scoped>

</style>
