<!-- 关联态势顶部点击下面要切换的模块 -->
<template>
  <div class="">
    <el-row :gutter="20" class="row1Count display-flex justify-content-space-between">
    <el-col :span="8">
        <div class="box">
        <div class="title display-flex justify-content-space-between align-items-center">
            <h2>宁波</h2>
            <i class="el-icon-search"></i>
        </div>
        <div class="content">
            
        </div>
        </div>
    </el-col>
    <el-col :span="8">
        <div class="box">
        <div class="title display-flex justify-content-space-between align-items-center">
            <h2>控股互金企业排行榜</h2>
            <a href="" class="more">更多</a>
        </div>
        <div class="content">
            <table border="0" width="100%">
            <thead>
                <tr>
                <th width="8%">排行</th>
                <th width="60%">机构名称</th>
                <th width="20%">所在区县</th>
                <th width="12%">控股数</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in listData" :key="item.rank">
                <td>{{item.rank}}</td>
                <td>{{item.name}}</td>
                <td>{{item.site}}</td>
                <td>{{item.num}}</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </el-col>
    <el-col :span="8">
        <div class="box">
        <div class="title display-flex justify-content-space-between align-items-center">
            <h2>互金直接关联机构排行榜</h2>
            <a href="" class="more">更多</a>
        </div>
        <div class="content">
            <table border="0" width="100%">
            <thead>
                <tr>
                <th width="8%">排行</th>
                <th width="60%">机构名称</th>
                <th width="20%">所在区县</th>
                <th width="12%">控股数</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in listData" :key="item.rank">
                <td>{{item.rank}}</td>
                <td>{{item.name}}</td>
                <td>{{item.site}}</td>
                <td>{{item.num}}</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </el-col>
    </el-row>
    <el-row :gutter="20" class="row2Count display-flex justify-content-space-between">
    <el-col :span="8">
        <div class="box">
        <div class="title display-flex justify-content-space-between align-items-center">
            <h2>注册资金分布</h2>
        </div>
        <div class="content" id="capitalBar"></div>
        </div>
    </el-col>
    <el-col :span="8">
        <div class="box">
        <div class="title display-flex justify-content-space-between align-items-center">
            <h2>企业类型/股东分步</h2>
        </div>
        <div class="content" id="typePartnerPie"></div>
        </div>
    </el-col>
    <el-col :span="8">
        <div class="box">
        <div class="title display-flex justify-content-space-between align-items-center">
            <h2>企业背景分布</h2>
        </div>
        <div class="content" id="backgroundPie"></div>
        </div>
    </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listData:[
        {
          rank: 1,
          name: '宁波米力控股集团有限公司',
          site: '北仑区',
          num: 4
        },
        {
          rank: 2,
          name: '宁波米力控股集团有限公司',
          site: '北仑区',
          num: 4
        },
        {
          rank: 3,
          name: '宁波米力控股集团有限公司',
          site: '北仑区',
          num: 4
        },
        {
          rank: 4,
          name: '宁波米力控股集团有限公司',
          site: '北仑区',
          num: 4
        },
        {
          rank: 5,
          name: '宁波米力控股集团有限公司',
          site: '北仑区',
          num: 4
        },
        {
          rank: 6,
          name: '宁波米力控股集团有限公司',
          site: '北仑区',
          num: 4
        },
        {
          rank: 7,
          name: '宁波米力控股集团有限公司',
          site: '北仑区',
          num: 4
        },
      ]
    };
  },
  methods: {
    //注册资金分布柱状图
    capitalBar(){
      var myChart = this.$echarts.init(document.getElementById('capitalBar'));
      myChart.setOption({
        grid: {
            top: '5%',
            left: '2%',
            right: '4%',
            bottom: '2%',
            containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#a2e3ff'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 30,
                color: '#333',
                fontSize: 18
            },
            data: ['未知','10万以下','10-100万','100-1000万','1000万-1亿','1亿-10亿','10亿以上']
        },
        series: [{
            
            name:'',
            type:'bar', 
            barWidth: '40%',
            label: {
                show: true,
                position: 'right',
                color: '#555',
                fontSize: 14,
                formatter: '{c}家'
            },
            data: [
                {
                    value: 4,
                    itemStyle: {
                        color: '#9292d1',
                    }
                    
                },
                {
                    value: 4,
                    itemStyle: {
                        color: '#46a0fc',
                    }
                },
                {
                    value: 4,
                    itemStyle: {
                        color: '#0fc2c9',
                    }
                },
                {
                    value: 25,
                    itemStyle: {
                        color: '#0fc992',
                    }
                },
                {
                    value: 90,
                    itemStyle: {
                        color: '#ffe066',
                    }
                },
                {
                    value: 21,
                    itemStyle: {
                        color: '#ff724b',
                    }
                },
                {
                    value: 1,
                    itemStyle: {
                        color: '#ff5361',
                    }
                }
            ]
        }]
      });  
    },
    //企业类型/股东分布饼图
    typePartnerPie(){
      var myChart = this.$echarts.init(document.getElementById('typePartnerPie'));
      myChart.setOption({
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [
            {
                orient: 'vertical',
                left: 'left',
                top: 'middle',
                data:['公司','合伙企业','个人独资','其他企业']
            },
            {
                orient: 'vertical',
                right: 'right',
                top: 'middle',
                data:['仅含法人股东','仅含自然人股东','混合股东','其他']
            }
        ],
        series: [
            {
                name:'企业类型分布',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '40%'],
                label: {
                    show: true,
                    color: '#333',
                    fontSize: 12,
                    position: 'inside',
                    formatter: '{d}%'
                },
                data:[
                    {
                        value:11, 
                        name:'公司',
                        itemStyle: {
                            color: '#0fc992'
                        }
                    },
                    {
                        value:11, 
                        name:'合伙企业',
                        itemStyle: {
                            color: '#ff5361'
                        }
                    },
                    {
                        value:23, 
                        name:'个人独资',
                        itemStyle: {
                            color: '#ff724b'
                        }
                    },
                    {
                        value:55, 
                        name:'其他企业',
                        itemStyle: {
                            color: '#ffe066'
                        }
                    },
                ]
            },
            {
                name:'股东分布',
                type:'pie',
                radius: ['50%', '65%'],
                label: {
                    show: true,
                    color: '#555',
                    fontSize: 14,
                    formatter: '{d}%'
                },
                data:[
                    {
                        value: 17, 
                        name:'仅含法人股东',
                        itemStyle: {
                            color: '#0fc2c9'
                        }
                    },
                    {
                        value: 32, 
                        name:'仅含自然人股东',
                        itemStyle: {
                            color: '#46a0fc'
                        }
                    },
                    {
                        value: 4, 
                        name:'混合股东',
                        itemStyle: {
                            color: '#9292d1'
                        }
                    },
                    {
                        value: 2, 
                        name:'其他',
                        itemStyle: {
                            color: '#d192c1'
                        }
                    },
                ]
            }
        ]
      });
    },
    //企业背景分布
    backgroundPie(){
      var myChart = this.$echarts.init(document.getElementById('backgroundPie'));
      myChart.setOption({
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: '10%',
            top: 'middle',
            data: ['央企背景','地方国企背景','民企背景','其他']
        },
        series : [
            {
                type: 'pie',
                radius : '55%',
                center: ['60%', '50%'],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    formatter: '{d}%'
                },
                data:[
                    {
                        value:17, 
                        name:'央企背景',
                        itemStyle: {
                            color:'#ff5361'
                        },
                    },
                    {
                        value:15, 
                        name:'地方国企背景',
                        itemStyle: {
                            color:'#ff724b'
                        }
                    },
                    {
                        value:28, 
                        name:'民企背景',
                        itemStyle: {
                            color:'#ffe066'
                        }
                    },
                    {
                        value:40, 
                        name:'其他',
                        itemStyle: {
                            color:'#46a0fc'
                        }
                    }
                ],

            }
        ]
      })
    }

  },
  mounted(){
    this.capitalBar();
    this.typePartnerPie();
    this.backgroundPie();
  }
}

</script>
<style lang='scss' scoped>
    // @import '@/assets/css/page/relation.scss';
</style>