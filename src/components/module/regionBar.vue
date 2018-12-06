<!-- 圆环百分比 -->
<template>
  <div id="regionBar"></div>
</template>

<script>
  import {dqArray} from '@/components/common/codes';
  // 地区
  let searchDq = dqArray;
export default {
  name: 'regionBar',
  props: {
    chartList:{
      type:Array,
      default: []
    },
  },
  data(){
    return {
        warningList:[],
        meetingList:[],
        disposeList:[],
        xAxisName:searchDq,
        seriesData: [
            {
                name:'预警中的机构',
                type:'bar',
                data:[18,21,18,8,9,6,6,7,6,5,5,6,6,6,10,10],
                itemStyle: {
                    color: '#46a0fc',  //柱颜色
                    barBorderRadius: [10, 10, 0, 0]  //柱圆角
                },
                barMaxWidth: 10,  //柱宽
                barGap: 0  //柱间距
            },{
                name:'会商中的机构',
                type:'bar',
                data:[70,30,25,22,22,10,18,10,18,18,18,6,12,6,6,21],
                itemStyle: {
                    color: '#ffb73a',
                    barBorderRadius: [10, 10, 0, 0]
                },
                barMaxWidth: 10,
                barGap: 0
            },
            {
                name:'处置中的机构',
                type:'bar',
                data:[140,65,45,45,35,35,20,18,21,26,20,20,20,8,8,8],
                itemStyle: {
                    color: '#c4c4c4',
                    barBorderRadius: [10, 10, 0, 0]
                },
                barMaxWidth: 10,
                barGap: 0
            }
        ]
    }
  },
  methods: {
  //格式化list，换成本页面可以用的数据
  formatList(){
    let area=searchDq;
    let list=this.chartList;

      for(let i=0;i<area.length;i++){
        let warningAmonut=0;
        let meetingAmonut=0;
        let disposeAmonut=0;
        for(let j=0;j<list.length;j++){
          //区域名相等
          if(list[j].area==area[i]){

            if(list[j].status=='处置中'){
              disposeAmonut=list[j].amount;
            }
            if(list[j].status=='会商中'){
              meetingAmonut=list[j].amount;
            }
            if(list[j].status=='预警中'){
              warningAmonut=list[j].amount;
            }
          }
        }
        this.warningList.push(warningAmonut);
        this.meetingList.push(meetingAmonut);
        this.disposeList.push(disposeAmonut);
      }


      this.seriesData[0].data= this.warningList;
      this.seriesData[1].data= this.meetingList;
      this.seriesData[2].data= this.disposeList;
      this.drawBar();

  },
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
        legend: {
          show: false,
          data: ['正在预警','已推送正在核查','已核查反馈']
        },
        tooltip: {
          trigger: 'axis',  //鼠标在x轴触发提示框
          backgroundColor: 'rgba(255,255,255,.3)'
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
            axisLabel:{       //x轴刻度线
                color: '#fff',  //刻度文字颜色
                margin: 15,
                // height: 50,
                formatter : function(params){
                    var newParamsName = "";// 最终拼接成的字符串
                    var paramsNameNumber = params.length;// 实际标签的个数
                    var provideNumber = 1;// 每行能显示的字的个数
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                    /******
                    *** 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                    ***/
                    // 条件等同于rowNumber>1
                    if (paramsNameNumber > provideNumber) {
                        /****** 循环每一行,p表示行 ***/
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";// 表示每一次截取的字符串
                            var start = p * provideNumber;// 开始截取的位置
                            var end = start + provideNumber;// 结束截取的位置
                            // 此处特殊处理最后一行的索引值
                            if (p == rowNumber - 1) {
                                // 最后一次不换行
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                // 每一次拼接字符串并换行
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;// 最终拼成的字符串
                        }
                    } else {
                        // 将旧标签的值赋给新标签
                        newParamsName = params;
                    }
                    //将最终的字符串返回
                    return newParamsName
                }
            }
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
    this.formatList();
    // this.drawBar();

  }

}
</script>

<style lang='' scoped>
</style>
