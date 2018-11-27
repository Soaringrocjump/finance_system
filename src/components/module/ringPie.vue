<!-- 圆环百分比 -->
<template>
  <div id="ringPie"></div>
</template>

<script>
export default {
  name: 'ringPie',
  props:['seriesData'],
  data(){
    return {
        // seriesData:[
        //     {
        //         value:1080, 
        //         name:'正在预警的企业',
        //         itemStyle: {
        //             color: '#46a0fc'
        //         } 
        //     },
        //     {
        //         value:0, 
        //         name:'已核查有信息反馈的企业',
        //         itemStyle: {
        //             color: '#c4c4c4'
        //         }
        //     },
        //     {
        //         value:300, 
        //         name:'已推送正在核查的企业',
        //         itemStyle: {
        //             color: '#ffb73a'
        //         }
        //     }
        // ],
    }
  },
  methods: {
    // 绘制圆环图表
    drawPie(){
      var myChart = this.$echarts.init(document.getElementById('ringPie'));
      myChart.setOption({
        color: ['#03aefe', '#ff5361', '#fff659', '#fff'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: 'right',
            top: 'middle',
            itemWidth: 14,
            itemheight: 14,
            textStyle: {
              color: '#fff',
              padding: [0,0,0,10]
            },
            data:['正在预警的企业','已核查有信息反馈的企业','已推送正在核查的企业']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                minAngle:1,
                stillShowZeroSum: false,  //数据为0仍显示扇区
                center: ['40%','50%'],  //圆环位置
                radius: ['60%', '80%'],  //内环半径与外环半径
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{d}% \n {b}'
                    }
                },
                data:this.seriesData
            }
        ]
      });
    }
  },
  mounted(){
    this.drawPie();
  }

}
</script>

<style lang='' scoped>
</style>