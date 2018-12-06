<template>
  <div class="io_body">
    <el-row>
      <el-col :span="8">
        <div class="iob_left">
          <div class="title">资金地域分布</div>
          <div id="ningboMap">
            <ningbo-map
              :displayMode="rightDisplayMode"
              :regions="regions"
              componentId="3"
              @listenerChangeDisplayMode="changeRightDisplayMode"
              @listenerChangeSelectedRegionName="changeSelectedRegionName"
              ref="bodyRight"
            />
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="iob_right">
          <div class="title">各区县资金分布</div>
          <div>
            <div id="gqxzjfbPie" style="width: 100%; height:100%; min-height: 500px;">
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="iob_right">
          <div class="title">
            <h3>平台资金总量排行榜</h3>
            <span>全部</span>
          </div>
          <div>
            <el-row class="ranking-row"  v-for="(item, index) in ytlxRanking" :key="item.index">
              <el-col :span="7"><div class="grid-content bg-purple col-left">{{item.name}}</div></el-col>
              <el-col :span="9"><div class="col-mid"><div class="bar" :style="{width: item.barWidth, background: item.barColor}">&nbsp;</div></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple">{{item.num}}万</div></el-col>
            </el-row>
          </div>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts';
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
    name: "TotalCapital",
    components: {NingboMap},
    data() {
      return {
        pieList:[],
        pieListTit:[],
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
          name: '私银家',
          num: '3,740,624',
          barWidth: '100%',
          barColor: '#e52e2d'
        },{
          name: '超人贷',
          num: '536,991',
          barWidth: '90%',
          barColor: '#eea51c'
        },{
          name: '小鸡理财',
          num: '400,000',
          barWidth: '80%',
          barColor: '#eea51c'
        },{
          name: '小鸡理财',
          num: '350,000',
          barWidth: '70%',
          barColor: '#52a0fc'
        },{
          name: '小鸡理财',
          num: '300,000',
          barWidth: '60%',
          barColor: '#52a0fc'
        },{
          name: '小鸡理财',
          num: '200,000',
          barWidth: '40%',
          barColor: '#52a0fc'
        },{
          name: '小鸡理财',
          num: '160,000',
          barWidth: '32%',
          barColor: '#52a0fc'
        },{
          name: '小鸡理财',
          num: '150,000',
          barWidth: '30%',
          barColor: '#52a0fc'
        },{
          name: '小鸡理财',
          num: '120,000',
          barWidth: '24%',
          barColor: '#52a0fc'
        },{
          name: '小鸡理财',
          num: '100,000',
          barWidth: '20%',
          barColor: '#52a0fc'
        },{
          name: '小鸡理财',
          num: '50,000',
          barWidth: '10%',
          barColor: '#52a0fc'
        },{
          name: '小鸡理财',
          num: '50,000',
          barWidth: '10%',
          barColor: '#52a0fc'
        },{
          name: '小鸡理财',
          num: '10,000',
          barWidth: '2%',
          barColor: '#52a0fc'
        },{
          name: '小鸡理财',
          num: '5,000',
          barWidth: '1%',
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
      drawPie() {
        let pieOption = {
          title : {
            text: '',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'horizontal',
            bottom: '0',
            itemWidth: 14,
            data: this.pieListTit
          },
          series : [
            {
              name: '各区县资金分布',
              type: 'pie',
              bottom: '0px',
              radius : '50%',
              center: ['50%', '40%'],
              data:this.pieList,
              color:[
                '#CC2D2D',
                '#FFE066',
                '#FFB73A',
                '#00C566',
                '#01965D',
                '#018A9F',
                '#FF893A',
                '#CC2D2D',
                '#F7596F',
                '#0FC2C9',
                '#FF7353',
                '#0F6FC9',
                '#695EFF',
                '#AA5EFF',
                '#B7D454',
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };

        let myPieChart = echarts.init(document.getElementById('gqxzjfbPie'));
        myPieChart.setOption(pieOption);
      },
      getPieList(){
        Ajax(
          {
            method:'post',
            url:'regioncount/selectMoneyDistribution',
          }
        ).then(result => {
          if (result.data.resultCode != "200") alert("错误：" + msg.message);
          var msg = !this.$common.isNull(result.data.data)
            ? result.data.data
            : "";

          for (let i=0;i<msg.length;i++){
            this.pieListTit.push(msg[i].areaReal);
            this.pieList.push({value:msg[i].amount ,name: msg[i].areaReal});

          }
          console.log(this.pieListTit);
          console.log(this.pieList);
          this.drawPie();
        })
          .catch(err => {
            alert("错误：获取数据异常" + err);
          });

      },
      /*平台资金总量排行榜*/
      getRightList(){
        Ajax(
          {
            method:'post',
            url:'moneycount/selectTotalMoneyList',
          }
        ).then(result => {

          if (result.data.resultCode != "200") alert("错误：" + msg.message);
          var msg = !this.$common.isNull(result.data.data)
            ? result.data.data
            : "";
          console.log(msg);
          for (let i=0;i<msg.length;i++){
            this.ytlxRanking[i].name=msg[i].name;
            this.ytlxRanking[i].num=msg[i].total
          }

        })
          .catch(err => {
            alert("错误：获取数据异常" + err);
          });
      }
    },
    mounted() {
      this.getPieList();
      this.getRightList();
    }

  }
</script>

<style scoped>

</style>
