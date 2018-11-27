<!-- 表格 -->
<template>
  <div>
    <el-table :data="tableData" style="width: 100%" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column prop="order" label="序号" width="75"></el-table-column>
        <el-table-column prop="name" label="机构名称" width="640"></el-table-column>
        <el-table-column 
        prop="operateState"
        label="运营状态" 
        :filters="[{ text: '在运营', value: '在运营' }, { text: '已立案', value: '已立案' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
        width="140">
          <template slot-scope="scope">
            <el-tag :type="scope.row.operateState === '在运营' ? 'primary' : 'success'" disable-transitions>{{scope.row.operateState}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="risk" label="风险指数" sortable ></el-table-column>
        <el-table-column 
        prop="type"
        label="业务类型" 
        :filters="[{ text: '网络借贷', value: '网络借贷' }, { text: '私募基金', value: '私募基金' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
        width="140">
          <template slot-scope="scope">
            <el-tag :type="scope.row.type === '网络借贷' ? 'primary' : 'success'" disable-transitions>{{scope.row.type}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column 
        prop="origin"
        label="辖区归属" 
        :filters="[{ text: '鄞州区', value: '鄞州区' }, { text: '海曙区', value: '海曙区' }, { text: '江北区', value: '江北区' }, { text: '北仑区', value: '北仑区' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
        width="140">
          <template slot-scope="scope">
            <el-tag :type="scope.row.origin === '鄞州区' ? 'primary' : 'success'" disable-transitions>{{scope.row.origin}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="预警时间" sortable width="140"></el-table-column>
        <el-table-column prop="state" label="状态" width="95"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <slot name="btn"></slot>
            <router-link to="orgDetails"><el-button size="mini">核查</el-button></router-link>
          </template>
        </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  props: ['tableData'],
  data () {
    return {
      
    };
  },
  methods: {
    //表格头部样式
    headerCellStyle({row, column, rowIndex, columnIndex}){
      if(columnIndex === 1){
        return 'text-align:left;background:#ecf5ff;color:#333;padding:10px 10px 12px;line-height:1;border-top:4px solid #46a0fc;font-size:18px;font-weight:normal;'
      }else{
        return 'background:#ecf5ff;color:#333;padding:10px 0 12px;line-height:1;border-top:4px solid #46a0fc;text-align:center;font-size:18px;font-weight:normal;'
      }
    },
    //每行样式
    rowStyle({}){
      return 'background:#fff;color:#333;text-align:center;font-size:14px;'
    },
    /**/
    cellStyle({row, column, rowIndex, columnIndex}){
      if(columnIndex === 1){
        return 'padding-left:10px;text-align:left;border-bottom:1px solid rgba(70, 160, 252, 0.2);'
      }else{
        return 'border-bottom:1px solid rgba(70, 160, 252, 0.2);'
      }
    },
  }
}

</script>
<style lang='scss' scoped>
  
</style>