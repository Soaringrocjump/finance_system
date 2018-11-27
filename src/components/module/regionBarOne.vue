<!-- 圆环百分比 -->
<template>
  <div id="regionBar"></div>
</template>

<script>
export default {
  name: 'regionBarOne',
//   props:['xAxisName','seriesData'],
  data(){
    return {
        xAxisName:['9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25'],
        seriesData: [
            {
                name:'用户人数',
                type:'bar',
                data:[18,21,180,8,9,6,6,7,6,5,5,6,6,6,10,10],
                itemStyle: {
                    color: '#46a0fc',  //柱颜色

                },
                barMaxWidth: 10,  //柱宽
                barGap: 0  //柱间距
            }
        ]
    }
  },
  methods: {
    // 绘制柱状图
    drawBar(){
      var myChart = this.$echarts.init(document.getElementById('regionBar'));
      myChart.setOption({
        color: ['#03aefe', '#ff5361', '#fff659', '#fff'],
        grid: {
            left: '0%',
            right: '0%',
            top: '15%',
            bottom: '5%',
            containLabel: true
        },

        tooltip: {
          trigger: 'axis',  //鼠标在x轴触发提示框
          backgroundColor: '#C4C4C4'
        },
        xAxis: {
            type : 'category',
            data : this.xAxisName,
            axisLine: {
              lineStyle: {
                color: '#46a0fc'
              }
            },
            axisTick: {
                show: false,
            },

        },
        yAxis: {
            type : 'value',
            axisLine: {
              show: false
            },
            axisLabel: {
              margin: 20,
              color: '#8092a2'   //刻度值颜色
            },
            splitLine: {
              lineStyle: {
                color: '#0f3d69'  //分割线颜色
              }
            }
        },
        series : this.seriesData
      });



    },
  },
  mounted(){
    this.drawBar();
  },


}
</script>

<style lang='' scoped>
</style>
