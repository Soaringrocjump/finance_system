<template>

    <div class="orgDetails warn-content">
      <org-top :orgTopInfo="comInfo" ><!--:ChartData="radarData"-->
        <div slot="report" class="report">
          <!--<i class="el-icon-tickets"></i>
          <p><a href="#">风险分析报告</a></p>-->
        </div>
      </org-top>


    <div class="sm_body il_details_body">
      <el-tabs type="border-card">
        <el-tab-pane label="基本信息">
          <basic-information></basic-information>
        </el-tab-pane>
        <el-tab-pane label="风险详情">
          <risk-details></risk-details>
        </el-tab-pane>
        <el-tab-pane label="大数据" lazy=’true’>
          <big-data></big-data>
        </el-tab-pane>
        <el-tab-pane label="网格化信息">
          <meshing-information></meshing-information>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>

</template>

<script>
    import orgTop from './common/orgTop';//机构详情头部组件
    import  BasicInformation from './InstitutionsListDetails/BasicInformation'
    import  RiskDetails from './InstitutionsListDetails/RiskDetails'
    import  BigData from './InstitutionsListDetails/BigData'
    import  MeshingInformation from './InstitutionsListDetails/MeshingInformation'
    export default {
        name: "InstitutionsListDetails",
        components: {
          orgTop,MeshingInformation,BigData,RiskDetails,BasicInformation
        },
      data () {
        return {
          comInfo:{

          },
          //radarData:[]
        };
      },
      methods: {
        /*机构详情头部*/
        getInstitutionsDetail: function(uuid) {
          var self = this;
          var authorization = sessionStorage.getItem("authorization"); //sessionStorage里取出token;
          var url = this.HOME + "/company/publicDetilsOfWarningFirst";
          var qs = require('qs');

          this.$axios
            .post(url,
              qs.stringify({ uuid :uuid }),
              {
                headers: {
                  authorization: authorization,
                }
              })
            .then(function (res) {
              self.comInfo = res.data.data;
              self.radarData = [res.data.data.rate,res.data.data.ywwg,res.data.data.bmxy,res.data.data.wg,res.data.data.fmyq,res.data.data.yxxc,res.data.data.glfx,res.data.data.xjxc];;
              orgTop.ChartUtils.radarMyzs(
                'radarChart',
                self.radarData
              );
            })
            .catch(function (error) {
              console.log(error)
            })
        },
      },
      activated() {
        /*alert(this.radarData);*/
        this.getInstitutionsDetail(this.$route.query.id);
      },


    }
</script>

<style  lang='scss'>
  @import "@/assets/css/page/warn_org.scss";
  @import "@/assets/css/page/v_index.scss";
</style>
