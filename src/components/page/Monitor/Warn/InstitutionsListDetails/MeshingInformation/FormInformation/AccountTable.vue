<template>
  <div >

    <el-table :data="it_list"  style="width: 100%;padding: 20px;" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">

      <el-table-column prop="order" label="序号" width="80" ></el-table-column>
      <el-table-column prop="name" label="类型" width="140"></el-table-column>
      <el-table-column prop="risk" label="发放机构(开户行)"  width="200" ></el-table-column>
      <el-table-column prop="organ" label="编号（行号）"  width="200"></el-table-column>
      <el-table-column prop="organ" label="终端编号（户名）"  width="250"></el-table-column>
      <el-table-column prop="organ" label="当前余额(元)"  width="200"></el-table-column>
      <el-table-column prop="organ" label="资金去向" ></el-table-column>

    </el-table>

  </div>
</template>

<script>
  /*账户情况汇总表*/
    export default {
        name: "AccountTable",
      methods: {

        //表格头部样式
        headerCellStyle({row, column, rowIndex, columnIndex}){
          if(columnIndex === 0){
            return 'text-align:left;background:#ecf5ff;color:#333;padding:10px 10px 12px;line-height:1;font-size:18px;font-weight:normal;'
          }else{
            return 'background:#ecf5ff;color:#333;padding:10px 0 12px;line-height:1;text-align:center;font-size:18px;font-weight:normal;'
          }
        },
        //每行样式
        rowStyle({}){
          return 'background:#fff;color:#333;text-align:center;font-size:14px;'
        },
        /**/
        cellStyle({row, column, rowIndex, columnIndex}){
          if(columnIndex === 0){
            return 'padding-left:10px;text-align:left;'
          }
        },
      }
    }
</script>

<style lang='scss'>
  @import "@/assets/css/page/warn_org.scss";
</style>
