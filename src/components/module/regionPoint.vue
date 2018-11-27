<!-- 圆环百分比 -->
<template>
  <div id="regionBar"></div>
</template>

<script>
export default {
  name: 'regionPoint',
//   props:['xAxisName','seriesData'],
  data(){
    return {
        xAxisName:['9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25', '9/25'],
        seriesData: [
            {
                name:'用户人数',
                type:'scatter',
                data:["正面","中立","负面","中立","负面","中立","负面","正面","中立","负面","中立","负面","中立","负面","中立","负面"],
              itemStyle: {
                normal: {
                  color: function (params) {
                    if (params.value =="正面") {
                      return "#46a0fc";
                    } else if (params.value =="中立") {
                      return "#6fbe54";
                    }
                    return "#ffb73a";
                  }
                }
              },
            }
        ]
    }
  },
  methods: {
    // 绘制柱状图
    drawBar(){
      var myChart = this.$echarts.init(document.getElementById('regionBar'));
      myChart.setOption({

        grid: {
            left: '0%',
            right: '0%',
            top: '15%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            type : 'category',
            data : this.xAxisName,
            axisLine: {
              lineStyle: {
                color: '#333333'
              }
            },
            axisTick: {
                show: true,
            },

        },
        yAxis: {
          data: ["负面","中立","正面"],
          axisTick: {
            show: false,
          },
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
