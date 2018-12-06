<template>
  <div class="all">
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <h1>{{articleInfo.title}}</h1>
        </el-col>
        <el-col :span="1" :offset="5">
         <a @click="backPage"> <img src="../../../assets/img/JT.png" alt="arrows" width="30" height="30"></a>
        </el-col>
      </el-row>
      <p class="line1">发表日期：{{articleInfo.addTime|formatterDate}}</p>
      <p class="content">{{articleInfo.content}}</p>

    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        articleInfo: ''
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
            url: this.HOME +"article/getList",
            headers: {
              token: sessionStorage.getItem("authorization"),
              "content-type": "application/json;charset=UTF-8"
            },
            data: JSON.stringify({
              pageNum: this.pageNum,
              pageSize: this.pageSize,
              id:id
            })
          })
          .then( res => {
          debugger
          this.articleInfo = res.data.data.list[0];

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


