<template>
  <div class="pd_body" >
    <!--<p class="text">平台详情-米利财富</p>-->
    <div class="pd_header" >
      <el-col :span="19">
        <el-col :span="4" style="padding:30px 20px">
          <!--<img src="@/assets/img/text.png" span="5">-->
        </el-col>
        <el-col :span="4" class="militext1" >
          <p>{{website.websiteName}}</p>
        </el-col>
      </el-col>
    </div>
    <div class="pd_nr">
      <div class="pd_title">
        <el-col :span="24">
          <el-col :span="0.5">
            <div class="pd_tt" ></div>
          </el-col>
          <el-col :span="2">
            <p class="details_tt" >平台详情</p>
          </el-col>
        </el-col>
      </div>


      <el-col :span="24">
        <el-col :span="2.5" class="pd_el-col1" >
          <p>平台名称 </p>
          <p>机构名称</p>
          <p>社会信用代码</p>
          <p>注册日期</p>
          <p>营业期限</p>
          <p>登记机关</p>
        </el-col>
        <el-col :span="6" class="mili1" >
          <p>{{website.websiteName}} </p>
          <p class="militext2" > <a href="http://www.milicaifu.com/">{{website.companyName}}</a></p>
          <p>{{company.creditCode}} </p>
          <p>{{company.registTime | formatterDate }} </p>
          <p>{{company.businessStart | formatterDate }}至{{company.businessEnd | formatterDate }} </p>
          <p>{{company.registrationAuthority}}</p>
        </el-col>
        <el-col :span="2.5" :offset="4" class="pd_el-col2" >
          <p>平台状态 </p>
          <p>注册资本</p>
          <p>实缴资本</p>
          <p>注册地址</p>
          <p>实际经营地址</p>
        </el-col>
        <el-col :span="6" class="mili2" >
          <p style="color: #46a0fc">{{website.status}} </p>
          <p>{{company.capital}}{{company.capitalBz}}</p>
          <p>{{company.realpayment}}{{company.realpaymentBz}}</p>
          <p>{{company.province}}{{company.city}}{{company.area}}{{company.street}}{{company.address}}</p>
          <p style="float:left;" v-if="companyReal">{{companyReal.province}}{{companyReal.city}}{{companyReal.area}}{{companyReal.street}}{{companyReal.address}}&nbsp;</p>
          <p class="ditu" ><a href="http://www.milicaifu.com/">地图</a></p>
        </el-col>
      </el-col>
      <el-col :span="19">
        <el-col :span="2.5" class="pd_el-col3">
          <p>APP名称 </p>
          <p>平台网址</p>
          <p>上线时间</p>
          <p>平台类型</p>
          <p>用户总量</p>
          <!--<p>银行存管</p>-->
          <!--<p>信息披露</p>-->
          <!--<p>平台简介</p>-->
        </el-col>
        <el-col :span="9" class="mili3" >
          <p>米利财富 </p>
          <p  class="militext3" >{{website.domainName}}</p>
          <p>{{website.upTime| formatterDate }}</p>
          <p>{{website.allType}} </p>
          <p>{{website.userTotal}} </p>
          <!--<p>暂无</p>-->
          <!--<p style="text-decoration: underline;color: #46a0fc;" > <a href="http://www.milicaifu.com/">www.milicaifu.com</a></p>-->
          <!--<p>宁波米利集团有限公司，是一家国内领先的集财富管理、信用风险评估与数据整合、小额借贷咨询服务、风险控制、回款管理、公益金融服务、金融培训辅导等业务于一体的综合性现代化金融服务企业</p>-->
        </el-col>
        <el-col :span="5" :offset="4" >
          <div id="riskLine">
          </div>
        </el-col>
      </el-col>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id:"",
        website:"",
        company:"",
        companyReal:"",
        app:"",
        time:[],
        rate:[]
      };
    },
    methods: {
      //风险指数波动曲线
      drawLine(){

        var myChart = this.$echarts.init(document.getElementById('riskLine'));
        myChart.setOption({
          color: ['#8EC9EB'],
          title: {
            text: '收益率变动图',
            left:'10px',
            top:'10px',
            textStyle: {
              fontSize: 14,

            }
          },
          xAxis: {
            type: 'category',
            // data: ['9-15', '9-16', '9-17', '9-18', '9-19', '9-20', '9-21','9-22','9-23','9-24','9-25','9-26','9-27','9-28','9-29','9-30'],
            data:this.time,
            // name:'2018年',
            boundaryGap: false,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#B3AFB0'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLine:{
              show:false,    },
            axisTick :{                 //坐标轴刻度相关设置
              show:false},
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                color: ['#F3ADCE', '#c88cfe','#71C3FE','#FED667','#F3A43B']
              }
            },
            axisLabel: {
              formatter: '{value} %',

              textStyle: {
                color: '#B3AFB0'
              }
            },

          },
          series: [{
            // data: [3.8,2.9,3.6,7.2,5.8,3.6,6.1,7.7,11,11.6,10.2,9,12.4,14.2,15,13.8],
            data:this.rate,
            type: 'line',
            smooth: true,
            label: {
              normal: {
                show: true,//显示值
              }
            },
            areaStyle: ['#fffff'],
            symbol: 'circle',
            symbolSize: 8,
          }]
        });
      },
      getDetails(){
        var that=this;
        this.$axios({
          method: "post",
          url: this.HOME +"website/get?id="+this.id,
          headers: {
            token: sessionStorage.getItem("authorization"),
            "content-type": "application/json;charset=UTF-8"
          },
          data:{}
        })
          .then(result => {
            if (result.data.resultCode != "200") alert("错误：" + msg.message);
            var msg = !this.$common.isNull(result.data.data)
              ? result.data.data
              : "";
           this.website=msg;
            this.company=msg.company;
            if (msg.company!=null&&msg.company!=""){
              this.companyReal=msg.company.companyReal;
              this.app=msg.company.companyAppList;
              //格式化波动数据
              let riskWaveList=msg.company.riskWaveList;
              if(riskWaveList){
                let time=[];
                let riskIndex=[];
                for(let i=0;i<riskWaveList.length;i++){
                  let createtime=riskWaveList[i].createTime;
                  if(createtime){
                    let rate=riskWaveList[i].rate;
                    createtime=formatDate(new Date(createtime),'yyyy-MM-dd')
                    time.push(createtime)
                    riskIndex.push(rate)
                  }
                }
                this.time=time;
                this.rate=riskIndex;
              }
            }

          })
          .catch(err => {
            alert("错误：获取数据异常" + err);
          });
      },


    },

    mounted() {
      let id=this.$route.query.websiteId;
      if(id==null||id==""){
        alert("数据错误")
      }else{
        this.id=id;
      }
      this.getDetails();
      this.drawLine();

    },
    watch: {
      // 方法1
      '$route' (to, from) { //监听路由是否变化
        if(this.$route.query.websiteId){// 判断条件1  判断传递值的变化
          let id=this.$route.query.websiteId;
          if(id==null||id==""){
            alert("数据错误")
          }else{
            this.id=id;
          }
          this.getDetails();
        }
      },
      time(newValue,oldValue){
        this.drawLine();
      }

    },


  }

</script>

<style scoped>
  .pd_body {
    padding:10px 30px;
    height: 100%;
    background-color: rgb(245, 245, 245);
  }

  .pd_header{
    border:1px solid #ffffff;
    border-radius: 0.5em;
    background-color: #ffffff;
    margin-top:10px;
    height:13%;
  }
  .pd_nr{
    background-color: #ffffff;
    margin-top:20px;
    height: 75%;
  }
  .pd_title{
    border:4px solid #46a0fc;
    padding:10px 20px;
    height: 70px;
    border-left:none;
    border-right:none;
    border-bottom:none;
    border-bottom:1px solid #a2cffd;
  }
  .pd_tt{
    border:2px solid #46a0fc;
    height:25px;
    width:2px;
    margin:10px 10px 2px;
  }
  .text{
    color: #999999;
  }
  .pd_el-col1{
    direction:rtl;
    padding-left: 50px;
    padding-top: 30px;
    line-height: 200%;
    color: #999999;
    font-size: 14px;
  }
  .pd_el-col2{
    direction:rtl;
    padding-left: 50px;
    padding-top: 30px;
    line-height: 200%;
    color: #999999;
    font-size: 14px;
  }
  .pd_el-col3{
    direction:rtl;
    padding-left: 60px;
    padding-top: 30px;
    line-height: 200%;
    color: #999999;
    font-size: 14px;
  }
  .details_tt{
    font-size: 22px;
    padding-top:8px;
    font-weight: 600;
  }
  .militext1{
    padding:30px 10px;
    font-size: 30px;
  }
  .militext2{
    text-decoration: underline;
    color: #46a0fc;
  }
  .militext3{
    text-decoration: underline;
    color: #46a0fc;
  }
  .mili1{
    padding-top:30px;
    padding-left:30px;
    line-height: 200%;
    font-size:14px;
  }
  .mili2{
    padding-top: 30px;
    padding-left:30px;
    line-height: 200%;
    font-size: 14px;
  }
  .mili3{
    line-height: 200%;
    font-size: 14px;
    padding-left:30px;
    padding-top: 30px;
  }
  .ditu{
    text-decoration: underline;
    color: #46a0fc;
    padding-left:20px;
  }
  #riskLine{
    height: 300px;
    width: 800px;
    border: 1px solid #ccc;
    margin-top: 30px;
    box-shadow: 1px 1px 1px 1px #a2cffd;
  }

</style>
