<template>
  <div class="orgDetails binfor_body rd_body">
    <div class="comDetails">
       <div class="riskWaveBox">
        <div class="title">风险指数波动曲线</div>
         <risk-wave :orgLineChart="comInfo.totalRiskLine"></risk-wave>
      </div>
    </div>

    <div class="comDetails">
      <div class="title display-flex align-items-center" style="border-bottom: none;"><div class="v-line"></div>风险指数分析</div>
      <div class="rd_sen">
        <el-row>
          <el-col :span="3" class="rd_sen_left">
            <div  :class="{active:active[key]}"   v-for="(item,key) in tab" @click="change(key)" :key="key">
              {{item.content}}
            </div>
          </el-col>
          <el-col :span="21" class="rd_sen_right">
            <component :is="who" class="sa_bot"></component>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="comDetails">
      <div class="title display-flex align-items-center" style="border-bottom: none;"><div class="v-line"></div>部门监测</div>
      <div class="rd_sen">
        <el-row>
          <el-col :span="3" class="rd_sen_left">
            <div  :class="{active:active2[key]}"   v-for="(item,key) in tab2" @click="change2(key)" :key="key">
              {{item.content}}
            </div>
          </el-col>
          <el-col :span="21" class="rd_sen_right">
            <component :is="who2" class="sa_bot"></component>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
  /*风险详情*/
    import riskWave from '../common/riskWave';
    import AssociatedRisks from './RiskDetails/AssociatedRisks';
    import BusinessIrregularities from './RiskDetails/BusinessIrregularities';
    import CenterPedestrian from './RiskDetails/CenterPedestrian';
    import CityBranch from './RiskDetails/CityBranch';
    import CityIrs from './RiskDetails/CityIrs';
    import CitySecurity from './RiskDetails/CitySecurity';
    import ComplaintReporting from './RiskDetails/ComplaintReporting';
    import CreditIndex from './RiskDetails/CreditIndex';
    import FalsePublicity from './RiskDetails/FalsePublicity';
    import GridMonitoring from './RiskDetails/GridMonitoring';
    import HumanSecurity from './RiskDetails/HumanSecurity';
    import IntermediateCourt from './RiskDetails/IntermediateCourt';
    import LocalTaxation from './RiskDetails/LocalTaxation';
    import MarketRegulation from './RiskDetails/MarketRegulation';
    import NegativeOpinion from './RiskDetails/NegativeOpinion';
    import NetLetter from './RiskDetails/NetLetter';
    import OperationalAnomaly from './RiskDetails/OperationalAnomaly';
    import StabilityDo from './RiskDetails/StabilityDo';
    import YieldIndex from './RiskDetails/YieldIndex';
    export default {
        name: "RiskDetails",
      components: {
        riskWave,
        "com3":AssociatedRisks,
        "com8":BusinessIrregularities,
        "com3f":CenterPedestrian,
        "com4f":CityBranch,
        "com5f":CityIrs,
        "com1f":CitySecurity,
        "com11f":ComplaintReporting,
        "com7":CreditIndex,
        "com2":FalsePublicity,
        "com4":GridMonitoring,
        "com7f":HumanSecurity,
        "com8f":IntermediateCourt,
        "com6f":LocalTaxation,
        "com2f":MarketRegulation,
        "com6":NegativeOpinion,
        "com9f":NetLetter,
        "com5":OperationalAnomaly,
        "com10f":StabilityDo,
        "com1":YieldIndex,
      },
        data() {
        return {
          comInfo:{
            totalRiskLine: [
              {'2017-01': 25},
              {'2017-02': 21},
              {'2017-03': 22},
              {'2017-04': 21},
              {'2017-05': 28},
              {'2017-06': 30},
              {'2017-07': 33},
              {'2017-08': 28},
              {'2017-09': 29},
              {'2017-10': 36},
              {'2017-11': 45},
              {'2017-12': 41},
              {'2018-01': 47},
              {'2018-02': 60},
              {'2018-03': 65},
              {'2018-04': 78},
              {'2018-05': 86},
              {'2018-06': 91},
              {'2018-07': 98},
              {'2018-08': 99},
            ]
          },
          who: "com1",
          who2: "com1f",
          active: [true, false, false,false, false, false,false, false],//统一管理状态;
          active2: [true, false, false,false, false, false,false, false, false,false,false],//统一管理状态;
          tab: [{
            "content": "收益率指数",
            "func": "com1"
          }, {
            "content": "虚假宣传指数",
            "func": "com2"
          }, {
            "content": "关联风险",
            "func": "com3"
          }, {
            "content": "网格化监测",
            "func": "com4"
          }, {
            "content": "运行异常指数",
            "func": "com5"
          }, {
            "content": "负面舆情指数",
            "func": "com6"
          }, {
            "content": "信用指数",
            "func": "com7"
          }, {
            "content": "业务违规指数",
            "func": "com8"
          }
          ],
          tab2: [{
            "content": "市公安局",
            "func": "com1f"
          }, {
            "content": "市场监管局",
            "func": "com2f"
          }, {
            "content": "人行市中心支行",
            "func": "com3f"
          }, {
            "content": "市银监局",
            "func": "com4f"
          }, {
            "content": "市国税局",
            "func": "com5f"
          },
            {
              "content": "市地税局",
              "func": "com6f"
            },
            {
            "content": "市人力保障局",
            "func": "com7f"
          }, {
            "content": "市中级法院",
            "func": "com8f"
          }, {
            "content": "市网信办",
            "func": "com9f"
          }, {
            "content": "市维稳办",
            "func": "com10f"
          }, {
            "content": "市信访局",
            "func": "com11f"
          }
          ]
        }
      },
      methods:{
        change:function(x){

          for(var i=0;i<this.active.length;i++){
            this.active[i]=false;
            this.active[x]=true;
            this.who=this.tab[x].func;
          }

          this.$set(this.active, 8, 0);
        },
        change2:function(x){

          for(var i=0;i<this.active2.length;i++){
            this.active2[i]=false;
            this.active2[x]=true;
            this.who=this.tab2[x].func;
          }

          this.$set(this.active, 11, 0);
        }
      },

    }
</script>

<style lang='scss' >
  @import "@/assets/css/page/v_ilDetails.scss";
  @import "@/assets/css/page/warn_org.scss";
</style>
