<!-- 圆环百分比 -->
<template>
  <div id="ringPie"></div>
</template>

<script>
export default {
  name: 'ringPie',
  props:{
    annularChartList:{
      type:Array,
      default: []
    },
  },
  data(){
    return {
        seriesData:[
            {
                value:1080,
                name:'预警中的机构',
                itemStyle: {
                    color: '#46a0fc'
                }
            },
            {
                value:1,
                name:'会商中的机构',
                itemStyle: {
                    color: '#c4c4c4'
                }
            },
            {
                value:300,
                name:'处置中的机构',
                itemStyle: {
                    color: '#ffb73a'
                }
            }
        ],
    }
  },
  methods: {
    //格式化数据
    formatList(){
      var list=this.annularChartList;
      if(list.length>0){

        var warningTotal=0;
        var meetingTotal=0;
        var disposeTotal=0;
        for(let i=0;i<list.length;i++){
          if(list[i].status=='预警中'){
            warningTotal=list[i].total;
          }
          if(list[i].status=='会商中'){
            meetingTotal=list[i].total;
          }
          if(list[i].status=='处置中'){
            disposeTotal=list[i].total;
          }
        }

        this.seriesData[0].value=warningTotal;
        this.seriesData[1].value=meetingTotal;
        this.seriesData[2].value=disposeTotal;
        this.drawPie();
      }

    },
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
            data:['预警中的机构','会商中的机构','处置中的机构']
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
    this.formatList();
    // this.drawPie();
  }

}
</script>

<style lang='' scoped>
</style>
