<!-- 风险指数分析组件 -->
<template>
  <div class="riskAnalysis">
      <div class="Analysis_l">
        <h2>今日{{this.riskLineData.name}}</h2>
        <p class="riskNum"><big>{{this.riskLineData.riskNum}}</big><i class="iconfont icon-jiantou"></i></p>
        <dl>
          <dt>风险详情</dt>
          <dd v-for="item in this.riskLineData.riskDetails" :key="item.index">{{item}}</dd>
        </dl>
      </div>
      <div class="Analysis_r" id="riskLine"></div>
  </div>
</template>

<script>
export default {
  props: ['riskLineData'],
  data () {
    return {
    };
  },
  methods: {
    //风险指数波动曲线
    drawLine(){
      var myChart = this.$echarts.init(document.getElementById('riskLine'));
      myChart.setOption({
        grid: {
            show: true,
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: this.riskLineData.riskLine.map(function (item) {
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
            name: this.riskLineData.name,
            type: 'line',
            data: this.riskLineData.riskLine.map(function (item) {
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
        }
      });
    }

  },
  watch: {
    // riskLineData: function(){
    //     // this.drawLine();
    //     console.log('aaa')
    //     this.$nextTick(function () {
    //         this.drawLine();
    //     })
    // }

    
  },
  mounted() {
    this.drawLine();
  },
}

</script>
<style lang='scss' scoped>
.riskAnalysis{
  position: relative;
  width: 100%;
  height: 394px;
  .Analysis_l{
    position: absolute;
    left: 0;
    width: 31%;
    height: 100%;
    padding: 16px 20px 0 15px;
    color: #333;
    border-right: 1px solid #46A0FC; 
    h2{
      font-size: 24px;
    }
    .riskNum{
      text-align: center;
      color: #ff5361;
      margin-top: 15px;
      big{
        font-size: 120px;
      }
      i{
        font-size: 45px;
      }
    }
    dl{
      position: absolute;
      bottom: 25px;
      dt{
        font-size: 24px;
        padding: 10px 0;
      }
      dd{
        font-size: 14px;
        padding: 4px 0;
      }
    }
  }
  .Analysis_r{
    position: absolute;
    right: 0;
    width: 69%;
    height: 100%;
  }
  #riskLine{
    width: 48.08vw;
    height: 20.52vw;
    padding: 20px 0;
    box-sizing: content-box;
  }
}
</style>