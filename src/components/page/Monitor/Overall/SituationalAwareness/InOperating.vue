<template>
  <div class="io_body">
    <el-row>
      <el-col :span="10">
        <div class="iob_left">
          <div class="title">平台实际经营地分布</div>
          <div id="ningboMap">
            <ningbo-map
              :displayMode="rightDisplayMode"
              :regions="regions"
              @listenerChangeDisplayMode="changeRightDisplayMode"
              @listenerChangeSelectedRegionName="changeSelectedRegionName"
              ref="bodyRight"
            />
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="iob_right">
          <div class="title">
            <h3>实际经营地分布排行榜</h3>
            <span>全部</span>
          </div>
          <div>
            <el-row class="ranking-row"  v-for="(item, index) in jydfbRanking" :key="item.index">
              <el-col :span="8"><div class="grid-content bg-purple col-left">{{item.name}}</div></el-col>
              <el-col :span="11"><div class="col-mid"><div class="bar" :style="{width: item.barWidth, background: item.barColor}">&nbsp;</div></div></el-col>
              <el-col :span="5"><div class="grid-content bg-purple">{{item.num}}家</div></el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="iob_right">
          <div class="title">
            <h3>平台业态类型分布排行榜</h3>
            <span>全部</span>
          </div>
          <div>
            <el-row class="ranking-row"  v-for="(item, index) in ytlxRanking" :key="item.index">
              <el-col :span="9"><div class="grid-content bg-purple col-left">{{item.name}}</div></el-col>
              <el-col :span="10"><div class="col-mid"><div class="bar" :style="{width: item.barWidth, background: item.barColor}">&nbsp;</div></div></el-col>
              <el-col :span="5"><div class="grid-content bg-purple">{{item.num}}家</div></el-col>
            </el-row>
          </div>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  /*在运营*/
  import NingboMap from "./ningboMap";

  let regions = [
    {name: '海曙区', company_count: 0, risk: 60},
    {name: '江北区', company_count: 0, risk: 0},
    {name: '鄞州区', company_count: 0, risk: 100},
    {name: '镇海区', company_count: 0, risk: 0},
    {name: '高新区', company_count: 0, risk: 0},
    {name: '北仑区', company_count: 0, risk: 0},
    {name: '余姚市', company_count: 0, risk: 0},
    {name: '宁海县', company_count: 0, risk: 0},
    {name: '慈溪市', company_count: 0, risk: 0},
    {name: '象山县', company_count: 0, risk: 0},
    {name: '海洋科技城', company_count: 0, risk: 0},
    {name: '奉化区', company_count: 0, risk: 0},
    {name: '杭州湾新区', company_count: 0, risk: 0},
    {name: '保税区', company_count: 0, risk: 0},
    {name: '东钱湖', company_count: 0, risk: 0},
    {name: '大榭', company_count: 0, risk: 0}
  ];

  export default {
    name: "InOperating",
    components: {NingboMap},
    data() {
      return {
        // 当前地图选中的地区
        selectedRegionName: '',
        // 右边模块显示模式(risk和count，代表风险模式和数量模式)
        rightDisplayMode: 'risk',
        // 所有地区数据
        regions: regions,
        jydfbRanking: [{
          name: '海洋科技城',
          num: '82',
          barWidth: '82%',
          barColor: '#e52e2d'
        },{
          name: '保税区',
          num: '27',
          barWidth: '27%',
          barColor: '#eea51c'
        },{
          name: '鄞州区',
          num: '21',
          barWidth: '21%',
          barColor: '#eea51c'
        },{
          name: '余姚市',
          num: '11',
          barWidth: '11%',
          barColor: '#52a0fc'
        },{
          name: '慈溪市',
          num: '9',
          barWidth: '11%',
          barColor: '#52a0fc'
        },{
          name: '江北区',
          num: '8',
          barWidth: '8%',
          barColor: '#52a0fc'
        },{
          name: '海曙区',
          num: '6',
          barWidth: '6%',
          barColor: '#52a0fc'
        },{
          name: '高新区',
          num: '6',
          barWidth: '6%',
          barColor: '#52a0fc'
        },{
          name: '镇海区',
          num: '5',
          barWidth: '5%',
          barColor: '#52a0fc'
        },{
          name: '北仑区',
          num: '4',
          barWidth: '4%',
          barColor: '#52a0fc'
        },{
          name: '奉化区',
          num: '4',
          barWidth: '4%',
          barColor: '#52a0fc'
        },{
          name: '宁海县',
          num: '3',
          barWidth: '3%',
          barColor: '#52a0fc'
        },{
          name: '象山县',
          num: '3',
          barWidth: '3%',
          barColor: '#52a0fc'
        },{
          name: '大榭',
          num: '2',
          barWidth: '2%',
          barColor: '#52a0fc'
        }],
        ytlxRanking: [{
          name: '网络借贷',
          num: '82',
          barWidth: '82%',
          barColor: '#e52e2d'
        },{
          name: '互联网基金销售',
          num: '27',
          barWidth: '27%',
          barColor: '#eea51c'
        },{
          name: '互联网资产管理',
          num: '21',
          barWidth: '21%',
          barColor: '#eea51c'
        },{
          name: '网络银行',
          num: '11',
          barWidth: '11%',
          barColor: '#52a0fc'
        },{
          name: '互联网期货',
          num: '9',
          barWidth: '11%',
          barColor: '#52a0fc'
        },{
          name: '互联网证券',
          num: '8',
          barWidth: '8%',
          barColor: '#52a0fc'
        },{
          name: '交易所',
          num: '6',
          barWidth: '6%',
          barColor: '#52a0fc'
        },{
          name: '网络众筹',
          num: '6',
          barWidth: '6%',
          barColor: '#52a0fc'
        },{
          name: '门户导航',
          num: '5',
          barWidth: '5%',
          barColor: '#52a0fc'
        },{
          name: '第三方支付',
          num: '4',
          barWidth: '4%',
          barColor: '#52a0fc'
        },{
          name: '互联网保险',
          num: '4',
          barWidth: '4%',
          barColor: '#52a0fc'
        },{
          name: '网络外汇',
          num: '3',
          barWidth: '3%',
          barColor: '#52a0fc'
        },{
          name: '催收',
          num: '3',
          barWidth: '3%',
          barColor: '#52a0fc'
        },{
          name: '互联网信托',
          num: '2',
          barWidth: '2%',
          barColor: '#52a0fc'
        }]
      }

    },
    methods: {
      // 右边模块显示模式修改后触发此方法
      changeRightDisplayMode(mode) {
        this.rightDisplayMode = mode;
      },
      // 点击地图上的某一个地区时触发此方法
      changeSelectedRegionName(selectedRegionName) {
        this.selectedRegionName = selectedRegionName;
      },
    }
  }
</script>

<style scoped>

</style>
