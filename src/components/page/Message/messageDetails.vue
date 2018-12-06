<template>
  <div class="all">
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <h1>{{messageInfo.title}}</h1>
        </el-col>
        <el-col :span="1" :offset="5">
          <a @click="backPage"> <img src="../../../assets/img/JT.png" alt="arrows" width="30" height="30"></a>
        </el-col>
      </el-row>
      <p class="line1">通知日期：{{messageInfo.sendTime|formatterDate}}</p>
      <p class="content">{{messageInfo.content}}</p>

    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messageInfo: ''
      }
    },
    methods: {
      backPage:function(){
        this.$router.go(-1)
      },
      getArticle: function() {
        let id=this.$route.query.id;
      this.$axios({
        method: "post",
        url: this.HOME +"message/queryDetailById?id="+id,
        headers: {
          token: sessionStorage.getItem("authorization"),
          "content-type": "application/json;charset=UTF-8"
        },
      })
      .then( res => {
      debugger
      this.loading = false;
  this.messageInfo = res.data.data;
  this.total = res.data.data.total;
  })
  .catch(function (error) {
    console.log(error)
  })
  },
    },
    activated() {
      this.getArticle();
    },
  }
</script>

<style scoped>
  .all{
    padding:20px;
    height: 100%;
    background-color: #f5f5f5;
  }
  .box-card{
    margin:25px;
    height: 100%;
    overflow-y: scroll;
  }
  h1{
    text-align:center;
    font-size:30px;
  }
  .line1{
    text-align:center;
    font-size:10px;
    color:#999999;
    padding:25px;
  }
  .box-card{
    margin:25px;
    height: 100%;
    overflow-y: scroll;
  }
  .content{
    text-indent:50px;
    padding:25px;
  }
  .line2{
    text-align:center;
    font-size:10px;
    padding:25px;
  }
</style>


