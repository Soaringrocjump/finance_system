<template xmlns="http://www.w3.org/1999/html">
  <div class="excDeat" >
    <div>
      <el-row :gutter="24">
        <el-col :span="5">
      <!--<p class="headline">高管详情-王雪平</p>-->
        </el-col>
        <el-col :span="2" :offset="17">

      <!--<img src="../../../../../assets/img/login/01.png" alt="arrows" width="28" height="28">-->
        </el-col>
      </el-row>
    </div>
  <el-card class="box-card">
    <div class="pagehead">
      {{people.name}}&nbsp;&nbsp;<a class="line" href="#">他关联了{{total}}家公司</a>
    </div>
  </el-card>
  <el-card class="box-card0">
    <div class="head-1">
      <h1>&nbsp;&nbsp;高管信息</h1>
    </div>
    <div class="massage" v-if="employeeRef !=''">
      <el-row :gutter="24">
        <el-col :span="2.5" class="title">
          <br>
          <p>姓名</p>
          <p>职位</p>
          <p>任职机构</p>
          <!--<p>任职平台</p>-->
          <!--<p>任职状态</p>-->
        </el-col>
        <el-col :span="12" :offset="0.5" class="titles">
          <br>
          <p>{{people.name}}</p>
          <p>{{employeeRef.duties}}</p>
          <p>{{employeeRef.companyName}}</p>
          <!--<p>未知</p>-->
          <!--<p>现任</p>-->
        </el-col>
        <el-col :span="3" :offset="6">
          <br>
          <el-card shadow="always" :body-style="{ padding: '0px' }">
          <img :src="people.portrait" width="100%" height="100%">
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="head">
      <h1>&nbsp;&nbsp;失信信息</h1>
    </div>
    <el-table
      :data="people.peopleUnfulfilledList"
      style="width: 100%" >
      <el-table-column
        type="index"
        label="序号"
        :index="indexMethod"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="被执行人姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="card"
        label="身份证号码">
      </el-table-column>
      <el-table-column
        prop="court"
        label="执行法院">
      </el-table-column>
      <el-table-column
        prop="caseTime"
        label="立案时间">
      </el-table-column>
      <el-table-column
        prop="caseNo"
        label="案号">
      </el-table-column>
      <el-table-column
        prop="performance"
        label="被执行人的履行情况">
      </el-table-column>
    </el-table>
    <div class="head">
      <h1>&nbsp;&nbsp;任职关联关系</h1>
    </div>
    <el-table
      :data="people.employeeRefList"
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        :index="indexMethod"
        width="100">
      </el-table-column>
      <el-table-column
        prop="companyName"
        label="公司"
        width="260">
      </el-table-column>
      <el-table-column
        prop="company.province"
        label="省份地区">
      </el-table-column>
      <el-table-column
        prop="company.registTime"
        label="注册日期"
        :formatter="formatter"
      >
      </el-table-column>
      <el-table-column
        prop="company.capital"
        label="注册资本">
      </el-table-column>
      <el-table-column
        prop="duties"
        label="角色">
      </el-table-column>
      <el-table-column
        prop="company.status"
        label="经营状态">
      </el-table-column>
    </el-table>
  </el-card>
  </div>
</template>

<script>
  export default {
    name: "ExecutivesDetails",
    data() {
      return {
        id:"",
        employeeRefId:"",
        people:"",
        employeeRef:"",
        total:0
      }
    },
    methods:{
      getDetails(){
        var that=this;
        this.$axios({
          method: "post",
          url: this.HOME +"people/getDetails?id="+this.id,
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
           that.people=msg;
           if(msg.employeeRefList.length>0){
            for(let i=0;i<msg.employeeRefList.length;i++){

              if(that.employeeRefId==msg.employeeRefList[i].id){
                that.employeeRef=msg.employeeRefList[i];
              }
            }
            that.total=msg.employeeRefList.length;
           }
          })
          .catch(err => {
            alert("错误：获取数据异常" + err);
          });
      },
      formatter(row, column) {
        let time=row;
        if(row.company){
          if(row.company.registTime){
            return row.company.registTime.substring(0,10)
          }
        }
        return ""

      },
      indexMethod(index) {

        return index + 1;
      }
    },
    mounted(){

      let id=this.$route.query.peopleId;
      let employeeRefId=this.$route.query.employeeRefId;
      if(id==null||id==""){
        alert("数据错误")
      }else{
        this.id=id;
      }
      this.getDetails();
      this.employeeRefId=employeeRefId;
    },
    watch: {
      // 方法1
      '$route' (to, from) { //监听路由是否变化
        if(this.$route.query.employeeRefId){// 判断条件1  判断传递值的变化
          let id=this.$route.query.peopleId;
          let employeeRefId=this.$route.query.employeeRefId;
          if(id==null||id==""){
            alert("数据错误")
          }else{
            this.id=id;
          }
          this.getDetails();
          this.employeeRefId=employeeRefId;
        }
      }

    }
  }
</script>

<style  type="text/css">
  .excDeat .headline{
    color:#999999;
    padding:5px 25px 0px 25px
  }
  .excDeat .body-box .content-box {
    background:#f5f5f5;
  }
  .excDeat{
    background:#f5f5f5;
  }
  .excDeat .box-card{
    margin:25px;
    padding:5px;
  }
  .excDeat .pagehead {
    font-size:30px;
  }
  .excDeat .title{
    direction:rtl;
    color:#d6d6d6;
    line-height:200%;
  }
  .excDeat .titles{
    line-height:200%;
  }
  .excDeat .line {
    font-size:20px;
    color:#46a0fc;
    text-decoration:underline;
  }
  .excDeat .box-card0{
    margin:25px;
    border-top:2px solid #46a0fc;
  }
  .excDeat .head-1{
    padding:0px 10px 10px 10px;
    border-bottom:2px solid #daecfe;
  }
  .excDeat .head{
    padding:30px 10px 10px 10px;
    border-bottom:2px solid #daecfe;
  }
  .excDeat h1{
    font-size:20px;
    border-left:3px solid #46a0fc;
  }
  .excDeat .asd .has-gutter tr th{
    background: #ecf5ff;
  }
  .excDeat .el-card.is-always-shadow, .excDeat .el-card.is-hover-shadow:focus,  .excDeat .el-card.is-hover-shadow:hover {
    margin:20px 25px 24px 25px;
  }
</style>
