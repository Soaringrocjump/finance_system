<template>
  <div class="io_body">
    <el-row>
      <el-col :span="9">
        <div class="iob_left">
          <div class="title">累计平台业态类型分布</div>
          <div>
            <div id="ytlxfbPie" style="width: 100%; height:100%; min-height: 500px;">
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="iob_right">
          <div class="title">
            <h3>平台上线消亡趋势</h3>
            <span>{{dateBegin}}-{{dateEnd}}</span>
          </div>
          <div>
            <div id="sxxwqsBar" style="width: 100%; height:100%; min-height: 500px; margin-top: 20px;">
            </div>
          </div>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import Ajax from "@/components/common/util";
  let max = 0;
  let min = 0;
  let sj = [];
  export default {
    name: "Cumulative",
    data(){
      return{
        pieList:[],
        pieListTit:[],
        barListTop:[],
        barListBot:[],
        dateBegin: '',
        dateEnd: '',

      }
    },
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
            data: this.pieListTit
          },
          series : [
            {
              name: '业态类型分布',
              type: 'pie',
              bottom: '0px',
              radius : '50%',
              center: ['50%', '40%'],
              data:this.pieList
              ,
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
     /* drawBar() {
        let dataAll = [
          [
            30,14,28,49,60,9,44,49,60,9,44,33,
            30,14,28,49,60,9,44,49,60,9,44,33,
            30,14,28,49,60,9,44,49,60,9,44,33,
            30,14,28,49,60,9,44,49,60,9,44,33,
            30,14,28,49,60,9,44,49,60,9,44,33,
            30,14,28,49,60,9,44,49,60,9,44,33,
            30,14,28,49,60,9,44,49,60,9,44,33
          ],
          [
            12,7,13,12,10,11,8,12,10,5,8,5,
            12,7,13,12,10,11,8,3,10,1,18,15,
            12,7,13,12,10,11,8,12,10,5,8,5,
            12,7,13,12,10,11,8,3,10,1,18,15,
            12,7,13,12,10,11,8,12,10,5,8,5,
            12,7,13,12,10,11,8,3,10,1,18,15,
            12,7,13,12,10,11,8,12,10,5,8,5,
          ]
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
            {x: '7%', y: '7%', width: '88%', height: '38%'},

            {x: '7%', y2: '12.3%', width: '88%', height: '38%', bottom: '46px'},

          ],
          xAxis : [
            {gridIndex: 0,
              data : [
                '','','','','2012-5','2012-6','','','','','','12',
                '','','','','','6','','','','','','12',
                '','','','','','6','','','','','','12',
                '','','','','','6','','','','','','12',
                '','','','','','6','','','','','','12',
                '','','','','','6','','','','','','12',
                '','','','','','6','','','','','','12'
              ],
              axisLabel:{
                show:true,
                interval:0,
              },
              axisTick: {
                show: true,
                boundaryGap: true

              },
              nameGap:'50',
              boundaryGap: false,
            },
            {gridIndex: 1,
              data : [
                '','','','','','2012-6','','','','','','',
                '','','','','','2013','','','','','','',
                '','','','','','2014','','','','','','',
                '','','','','','2015','','','','','','',
                '','','','','','2016','','','','','','',
                '','','','','','2017','','','','','','',
                '','','','','','2018','','','','','',''
              ],
              axisLabel:{
                show:true,
                interval:0,
                margin: 8
              },
              axisTick: {
                show: true,
                boundaryGap: true

              },
              nameLocation:'middle',
              position: 'top',
              barGap: '100%',
              boundaryGap: false
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
              barWidth:'80%',

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
              barWidth:'80%',
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
      },*/
       drawBar() {
         let barOption = {
           color: ['#38C4FF', '#FF893A'],
           legend: {
             data: ['新增', '消亡'],
             align: 'center',
             //left: 10,
             textStyle: {
               color: "#d7d7d7"
             }
           },
           xAxis: [
             {
               type: 'category',
               axisLine: {lineStyle: {color: '#fff'}},
               data: sj,
             },
             {
               gridIndex: 1,
               type: 'category',
               axisLine: {lineStyle: {color: '#fff'}},
               data: sj,
               position: 'top',
               axisLabel: {
                 show: false
               }
             }
           ],
           yAxis: [
             {
               name: '上\n\n线\n\n平\n\n台\n\n量',
               type: 'value',
               nameLocation: 'middle',
               nameRotate: '0',
               max: max,
               nameGap: 50,
               nameTextStyle: {
                 fontSize: 20,
                 color:'#000'
               },
               splitLine: {
                 show: false,
               },
               axisLine: {lineStyle: {color: '#38C4FF'}},
//						axisLine:{
//							show: false,
//						}
               //splitArea: {show: false},
//					axisLabel:{
//						color:"#fff"
//					}
             },
             {
               show: false,
               name: '比率(%)',
               type: 'value',
               nameTextStyle: {
                 fontSize: 20,
               },
               splitLine: {show: false},
               axisLine: {lineStyle: {color: '#fff'}},
//						axisLine:{
//							show: false,
//						}
//						axisLine:{lineStyle:{color:'#fff'}}
             },
             {
               gridIndex: 1,
               name: '消\n\n亡\n\n平\n\n台\n\n量',
               type: 'value',
               nameLocation: 'middle',
               nameRotate: '0',
               max: min,
               nameGap: 50,
               nameTextStyle: {
                 fontSize: 20,
                 color:'#000'
               },
               type: 'value',
               inverse: true,
               splitLine: {
                 show: false,
               },
               axisLine: {lineStyle: {color: '#38C4FF'}},
//						axisLine:{
//							show: false,
//						}
               //splitArea: {show: false},
//						axisLabel:{
//							color:"#fff"
//						}
             },
             {
               show: false,
               gridIndex: 1,
               name: '比率(%)',
               nameTextStyle: {
                 fontSize: 20,
               },
               splitLine: {show: false},
               axisLine: {
                 show: false,
               },
//						axisLine:{lineStyle:{color:'#fff'}},
               type: 'value',
               inverse: true
             }
           ],
           grid:
             [
               /*{
               left: '8%',
               right: '10%',
               height: '40%',
               bottom: '52%'
             }, {
               left: '8%',
               right: '10%',
               top: '51%',
               height: '40%'
             },*/
               {x: '12%', y: '7%', width: '83%', height: '38%'},
               {x: '12%', y2: '12.3%', width: '83%', height: '38%', bottom: '56px'},
//					{
//						left: '15%'
//
//					},
           ],

           textStyle: {
             color: "#333"

           },
           tooltip : {
             trigger: 'axis',
             axisPointer : {            // 坐标轴指示器，坐标轴触发有效
               type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
             }
           },
           series: [

             {
               name: '新增平台',
               type: 'bar',
               symbolSize: 8,
               hoverAnimation: false,
               data: this.barListTop
             }
             ,
             {
               name: '消亡平台',
               type: 'bar',
               xAxisIndex: 1,
               yAxisIndex: 2,
               symbolSize: 8,
               hoverAnimation: false,
               data: this.barListBot
             }


           ],
           dataZoom: [
             {
               show: true,
               start: 0,
               end: 100,
               realtime: true,
               height: 20,
               xAxisIndex: [0, 1],
             },
             {
               type: 'inside',
               realtime: true,
               start: 0,
               end: 100,
               xAxisIndex: [0, 1],
             },
           ]
         };
         let myBarChart = echarts.init(document.getElementById('sxxwqsBar'));
         myBarChart.setOption(barOption);
       },
      getPieList(){
          Ajax(
            {
              method:'post',
              url:'count/goldBusinessTypeList',
            }
          ).then(result => {

            if (result.data.resultCode != "200") alert("错误：" + msg.message);
            var msg = !this.$common.isNull(result.data.data)
              ? result.data.data
              : "";

              for (let i=0;i<msg.length;i++){
                this.pieListTit.push(msg[i].businessType);
                this.pieList.push({value:msg[i].amount ,name: msg[i].businessType});

              }

            this.drawPie();
          })
            .catch(err => {
              alert("错误：获取数据异常" + err);
            });

      },
      getBarList(){
         sj = [];
        Ajax(
          {
            method:'post',
            url:'countMonth/onlineAndDeadList',
          }
        ).then(result => {

          if (result.data.resultCode != "200") alert("错误：" + msg.message);
          var msg = !this.$common.isNull(result.data.data)
            ? result.data.data
            : "";

          this.dateBegin = msg[0].countTime.replace(/-0/g,"/").replace(/-/g,"/");
          this.dateEnd = msg[msg.length-1].countTime.replace(/-0/g,"/").replace(/-/g,"/");

          sj.push(msg[0].countTime);
          for (let i=1;i<msg.length;i++){
            if (msg[i].countTime.substring(0,7) != msg[i-1].countTime.substring(0,7)){
              sj.push(msg[i].countTime);
            }
          }

          for (let i=0;i<msg.length;i++){

            if(msg[i].onlineAndDead=='上线平台量'){

              this.barListTop.push({value:msg[i].monthTotal ,name: msg[i].countTime});
              if (msg[i].monthTotal > max){
                max = msg[i].monthTotal;
              }
            }
            else{
              this.barListBot.push({value:msg[i].monthTotal ,name: msg[i].countTime});
              if (msg[i].monthTotal > min){
                min = msg[i].monthTotal;
              }
            }
          }
          console.log(this.barListTop);
          console.log(this.barListTop);
          this.drawBar();
        })
          .catch(err => {
            alert("错误：获取数据异常" + err);
          });

      },
    },

    mounted(){

      this.getPieList();
      this.getBarList();
    }
  }
</script>

<style scoped>

</style>
