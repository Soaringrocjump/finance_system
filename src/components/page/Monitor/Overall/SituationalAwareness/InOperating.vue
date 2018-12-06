<template>
  <div class="io_body">
    <el-row>
      <el-col :span="8">
        <div class="iob_left">
          <div class="title">平台实际经营地分布</div>
          <div id="ningboMap">
            <ningbo-map
              :displayMode="rightDisplayMode"
              :regions="regions"
              componentId="1"
              @listenerChangeDisplayMode="changeRightDisplayMode"
              @listenerChangeSelectedRegionName="changeSelectedRegionName"
              ref="bodyRight"
            />
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="iob_right">
          <div class="title">
            <h3>实际经营地分布排行榜</h3>
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
      <el-col :span="8">
        <div class="iob_right">
          <div class="title">
            <h3>平台业态类型分布排行榜</h3>

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
  // import NingboMap from "@/components/module/ningboMap";
  import NingboMap from "./ningboMap";
  import Ajax from "@/components/common/util";

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
        jydfbRanking: [
          {
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
        ytlxRanking: [
          {
          name: '',
          num: '',
          barWidth: '82%',
          barColor: '#e52e2d'
        },{
          name: '',
          num: '',
          barWidth: '27%',
          barColor: '#eea51c'
        },{
          name: '',
          num: '',
          barWidth: '21%',
          barColor: '#eea51c'
        },{
          name: '',
          num: '',
          barWidth: '11%',
          barColor: '#52a0fc'
        }
        ]
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
        //alert(this.selectedRegionName);
      },
      /*实际经营地分布排行榜*/
      getMiddleList(){
        Ajax(
          {
            method:'post',
            url:'regioncount/selectRealAreaList?type=1',
          }
        ).then(result => {

          if (result.data.resultCode != "200") alert("错误：" + msg.message);
          var msg = !this.$common.isNull(result.data.data)
            ? result.data.data
            : "";
          for (let i=0;i<msg.length;i++){
            this.jydfbRanking[i].name=msg[i].areaReal
            this.jydfbRanking[i].num=msg[i].total
          }

          //this.jydfbRanking=msg.areaReal;
         //this.num=msg.total;
          //console.log(msg.areaReal);

        })
          .catch(err => {
            alert("错误：获取数据异常" + err);
          });
      },

      /*平台业态类型分布排行榜*/
      getRightList(){
        Ajax(
          {
            method:'post',
            url:'count/onlineGoldBusinessTypeList',
          }
        ).then(result => {

          if (result.data.resultCode != "200") alert("错误：" + msg.message);
          var msg = !this.$common.isNull(result.data.data)
            ? result.data.data
            : "";
          console.log(msg);
          for (let i=0;i<msg.length;i++){
            this.ytlxRanking[i].name=msg[i].businessType;
            this.ytlxRanking[i].num=msg[i].amount
          }

        })
          .catch(err => {
            alert("错误：获取数据异常" + err);
          });
      }
    },
    mounted(){
        this.getMiddleList();
        this.getRightList();
    }
  }
</script>

<style scoped>

</style>
