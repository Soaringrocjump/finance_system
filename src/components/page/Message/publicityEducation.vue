<template>
  <div class="all center_massage" >
    <div class="header">
    </div>
    <div class="box">

      <el-table  :data="tableData"
        :header-cell-style="headerCellStyle"
        :cell-style="cellStyle"
        style="width: 100%" class="table">
        <el-table-column type="index" :index="indexMethod"label="序号" width="280" ></el-table-column>
        <el-table-column  prop="title"  label="文章标题"  class="kongge">  </el-table-column>
        <el-table-column   prop="addTime"  label="发表日期"  width="308">
          <template slot-scope="scope">
            {{scope.row.addTime|formatterDate}}
          </template>
        </el-table-column>
        <el-table-column  label="操作" width="100"  >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="foot" style="padding-top: 13px">
      <el-row :gutter="20">
        <el-col :span="6" :offset="18">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-size="pageSize"
            layout=" prev, pager, next ,jumper"
            :total="total">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
        total: 0,
        pageNum: 1,
        pageSize: 10,
        tableData: ''
      }
    },
    methods: {
      indexMethod(index) {
        return index+(this.pageNum - 1) * 10 + 1;
      },
      //分页
      handleSizeChange(val) {
        this.pageSize = val;
        this.pageNum = 1;
        this.getArticle(1, this.pageSize);
      },
      handleCurrentChange(val) {
        this.pageNum = val;
        this.getArticle(val, this.pageSize);
      },
      handleEdit(index, row) {
        this.$router.push({ path: '/informDetails',query:{id:row.id}});
      },
      getArticle: function(pageNum,pageSize) {
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
              type:'宣传教育'
            })
          })
          .then( res => {
          this.loading = false;
          this.tableData = res.data.data.list;
          this.total = res.data.data.total;
      })
        .catch(function (error) {
          console.log(error)
        })
      },
      headerCellStyle({row, column, rowIndex, columnIndex}){
        if(columnIndex === 0){
          return 'padding-left: 100px;background: #f5f5f5;'
        }
        return 'background: #f5f5f5;'
      },
      cellStyle({row, column, rowIndex, columnIndex}){
        if(columnIndex === 0){
          return 'padding-left: 100px'
        }

      },
    },
    mounted() {
      this.getArticle(1,10);
    },
  }
</script>

<style>
  .all{
    height: 100%;
    background-color: #ffffff;
  }
  .all .header{
    height: 50px;
    background-color: #ffffff;
    border-bottom: 1px solid #47a0fc;
    margin-bottom: 20px;
  }
  .table{
    margin-right: 20px;
  }
  .box{
    border:1px solid #f5f6fa;
    height: 85%;
    width:98%;
  }
  .foot{
    background: #f5f6fa;
    padding-bottom: 30px;
    margin-right: 40px;
  }
  .el-table th {
    background: #f5f5f5;
  }
  .el-table td, .el-table th{

  }
  .all .el-table th{
    background: red;
  }
  .center_massage .has-gutter tr th{
    background: red;
  }
</style>

