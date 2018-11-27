<!-- 风险指数波动曲线 -->
<template>
  <div id="riskWave"></div>
</template>

<script>
export default {
  props: ['orgLineChart'],
  data () {
    return {
    };
  },
  methods: {
    //风险指数波动曲线
    drawLine(){
      var myChart = this.$echarts.init(document.getElementById('riskWave'));
      myChart.setOption({
        // title: {
        //     text: '风险指数波动曲线'
        // },
        // legend: {
        //     show: false,
        //     left: '10%'
        // },
        grid: {
            show: true,
            // left: '5%',
            // right: '5%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: this.orgLineChart.map(function (item) {
                for(let key in item){
                return key;
                }
            }),
            axisLine:{
                lineStyle:{
                    color: '#46a0fc'
                }
            },
            axisLabel:{
                color: 'rgba(51, 51, 51, 0.5)'
            }
            
        },
        yAxis: {
            splitLine: {
                show: true,
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['rgba(70, 160, 252, 0.5)', 'rgba(70, 160, 252, 0.5)', 'rgba(70, 160, 252, 0.5)', 'rgba(255, 183, 58, 0.5)', 'rgba(255, 183, 58, 0.5)', 'rgba(255, 83, 97, 0.5)']
                }
            },
            axisTick:{
                show: false
            },
            axisLine:{
                show: false
            },
            axisLabel:{
                color: 'rgba(51, 51, 51, 0.5)'
            },
        },
        toolbox: {
            left: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        //底部选择时间区间
        dataZoom: [{
            startValue: '2017-02'
        }, {
            type: 'inside'
        }],
        visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 60,
                color: '#46a0fc'
            }, {
                gt: 60,
                lte: 90,
                color: '#ffb73a'
            }, {
                gt: 90,
                lte: 100,
                color: '#ff5361'
            }],
            outOfRange: {
                color: '#999'
            }
        },     
        series: {
            name: 'risk-wave',
            type: 'line',
            data: this.orgLineChart.map(function (item) {
                for(let key in item){
                return item[key];
                }
            }),
            areaStyle: ['#ecf5ff','#fff8eb','#ffedef'],
            markLine: {
                silent: true,
                data: [{
                    yAxis: 60
                }, {
                    yAxis: 90
                }, {
                    yAxis: 100
                }]
            },
            symbol: 'circle',
            symbolSize: 7,
            // markPoint: {
            //     symbol: 'pin',
            //     symbolSize: 90
            // }
        }
      });
    }
  },
  mounted() {
    this.drawLine();
  }
}

</script>
<style lang='' scoped>
#riskWave{
    width: 76.8125vw;
    height: 14.0625vw;
    padding: 20px 0;
    box-sizing: content-box;
}
</style>