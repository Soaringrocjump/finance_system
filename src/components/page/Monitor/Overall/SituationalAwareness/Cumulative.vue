<template>
  <div class="io_body">
    <el-row>
      <el-col :span="9">
        <div class="iob_left">
          <div class="title">累计平台业态类型分布</div>
          <div>
            <div id="ytlxfbPie" style="width: 380px; height:100%; min-height: 500px;">
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="iob_right">
          <div class="title">
            <h3>平台上线消亡趋势</h3>
            <span>2012/1/1-2018/8/31</span>
          </div>
          <div>
            <div id="sxxwqsBar" style="width: 100%; height:100%; min-height: 500px;">
            </div>
          </div>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    name: "Cumulative",
    methods: {
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
            data: ['网络借贷','互联网基金销售','互联网资产管理','网络银行','互联网期货',
              '互联网证券','交易所','网络众筹','门户导航','第三方支付',
              '互联网保险','网络外汇','催收','互联网信托','互联网+X']
          },
          series : [
            {
              name: '业态类型分布',
              type: 'pie',
              bottom: '0px',
              radius : '50%',
              center: ['50%', '40%'],
              data:[
                {value:82, name:'网络借贷'},
                {value:27, name:'互联网基金销售'},
                {value:21, name:'互联网资产管理'},
                {value:11, name:'网络银行'},
                {value:9, name:'互联网期货'},
                {value:8, name:'互联网证券'},
                {value:6, name:'交易所'},
                {value:6, name:'网络众筹'},
                {value:5, name:'门户导航'},
                {value:4, name:'第三方支付'},
                {value:4, name:'互联网保险'},
                {value:3, name:'网络外汇'},
                {value:3, name:'催收'},
                {value:2, name:'互联网信托'},
                {value:1, name:'互联网+X'},
              ],
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

        let myPieChart = echarts.init(document.getElementById('ytlxfbPie'));
        myPieChart.setOption(pieOption);
      },
      drawBar() {
        let dataAll = [
          [30,14,28,49,60,9,44,49,60,9,44,33,30,14,28,49,60,9,44,49,60,9,44,33,30,14,28,49,60,9,44,49,60,9,44,33,30,14,28,49,60,9,44,49,60,9,44,33],
          [12,7,13,12,10,11,8,12,10,5,8,5,12,7,13,12,10,11,8,3,10,1,18,15,12,7,13,12,10,11,8,12,10,5,8,5,12,7,13,12,10,11,8,3,10,1,18,15]
        ];
        let barOption = {
          color: ['#3398DB'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['上线平台量（家）', '消亡平台量（家）'],
            align: 'left',
          },
          grid: [
            {x: '7%', y: '7%', width: '78%', height: '38%'},

            {x: '7%', y2: '12.3%', width: '78%', height: '38%', bottom: '46px'},

          ],
          xAxis : [
            {gridIndex: 0,
              data : ['','','','','','6','','','','','','12','','','','','','6','','','','','','12','','','','','','6','','','','','','12','','','','','','6','','','','','','12'],
              axisLabel:{
                show:true,
                interval:0,
              },
              axisTick: {
                show: true,
                boundaryGap: true

              },
              nameGap:'50',
            },
            {gridIndex: 1,
              data : ['2012','2012','2012','2012','2012','2012','2012','2012','2012','2012','2012','2012','2013','2012','2012','2012','2012','2012','2012','2012','2012','2012','2012','2012','2014','2012','2012','2012','2012','2012','2012','2012','2012','2012','2012','2012','2015','2012','2012','2012','2012','2012','2012','2012','2012','2012','2012','2012'],
              axisLabel:{
                show:true,
                interval:11,
                margin: 8
              },
              axisTick: {
                show: true,
                boundaryGap: true

              },
              nameLocation:'middle',
              position: 'top',
              barGap: '100%',
            },
          ],
          yAxis : [
            {gridIndex: 0, min: 0, max: 60,splitLine:{lineStyle:{type:'dashed'}}},
            {gridIndex: 1, min: 0, max: 60,inverse:true,splitLine:{lineStyle:{type:'dashed'}}},

          ],
          series : [
            {
              name: '上线平台量（家）',
              type: 'bar',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: dataAll[0],
              itemStyle:{normal:{color:new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [
                      {offset: 1, color: '#38C4FF'},
                      {offset: 0, color: '#38C4FF'}
                    ]
                  )}},
              barWidth:10,

              label: {
                normal: {
                  show: false,
                  position: 'top'
                }
              },
            },
            {
              name: '消亡平台量（家）',
              type: 'bar',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: dataAll[1],
              itemStyle:{normal:{color:new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [
                      {offset: 1, color: '#FF893A'},
                      {offset: 0, color: '#FF893A'}
                    ]
                  )}},
              barWidth:10,
              label: {
                normal: {
                  show: false,
                  position: 'bottom'
                }
              },
            },
          ]
        };
        let myBarChart = echarts.init(document.getElementById('sxxwqsBar'));
        myBarChart.setOption(barOption);
      }
    },
    mounted(){
      this.drawPie();
      this.drawBar();
    }
  }
</script>

<style scoped>

</style>
