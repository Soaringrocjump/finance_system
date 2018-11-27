<!-- 表格 -->
<template>
  <div style="position:relative;">
    <el-table :data="tableData" style="width: 100%" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
        <el-table-column prop="companyName" label="机构名称" min-width="250">
          <template slot-scope="scope">
            <el-button @click="toDetails(scope.row)" type="text" size="small" style="text-decoration: underline;cursor: pointer;color: #333;">
              {{scope.row.companyName}}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
        prop="managementstatus"
        label="运营状态"
        :filters="[
          { text: '在运营', value: '在运营' },
          { text: '失联跑路', value: '失联跑路' },
          { text: '清盘退出', value: '清盘退出' },
          { text: '立案侦查', value: '立案侦查' },
          { text: '其他', value: '其他' },
          { text: '注销', value: '注销' },
        ]"
        :filter-method="filterStatus"
        filter-placement="bottom-end"
        min-width="100">
          <template slot-scope="scope">
            <el-tag :type="scope.row.company.status == '在运营' ? 'primary' : 'success'" disable-transitions>{{scope.row.company.status}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="risk_index" label="风险指数" sortable min-width="120">
          <template slot-scope="scope">
            <span v-if="scope.row.riskIndex > 85" class="highRisk">{{scope.row.riskIndex}}</span>
            <span v-else-if="scope.row.riskIndex > 55" class="middleRisk">{{scope.row.riskIndex}}</span>
            <span v-else class="lowRisk">{{scope.row.riskIndex}}</span>
          </template>
        </el-table-column>
        <el-table-column
        prop="business_type"
        label="业务类型"
        min-width="100">
          <template slot-scope="scope">
            <el-tag>{{scope.row.company.businessType}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
        prop="area"
        label="辖区归属"
        :filters="[
        { text: '鄞州区', value: '鄞州区' }, 
        { text: '海曙区', value: '海曙区' }, 
        { text: '江北区', value: '江北区' }, 
        { text: '北仑区', value: '北仑区' },
        { text: '高新区', value: '高新区' },
        { text: '奉化区', value: '奉化区' },
        { text: '象山县', value: '象山县' },
        { text: '慈溪市', value: '慈溪市' },
        ]"
        :filter-method="filterArea"
        filter-placement="bottom-end"
        min-width="100">
          <template slot-scope="scope">
            <el-tag :type="scope.row.company.area == '鄞州区' ? 'primary' : 'success'" disable-transitions>{{scope.row.company.area}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="create_time" label="预警时间" sortable min-width="150">
          <template slot-scope="scope">
          {{scope.row.warningTime}}
          </template>
        </el-table-column>
        <el-table-column prop="hs_status" label="状态" min-width="60">
          <template slot-scope="scope">
          {{scope.row.status}}
          </template>
        </el-table-column>
        <el-table-column label="操作" min-width="120">
          <template slot-scope="scope">
            <slot name="btn" @click="toConsultation(scope.row)"></slot>
            <el-button type="primary" size="mini" @click="toDetails(scope.row)">核查</el-button>
          </template>
        </el-table-column>
    </el-table>
    <el-pagination
    background
    @current-change="handleCurrentChange"
    layout="total,prev, pager, next"
    :total="pageData.total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ["tableData", "pageData"],
  data() {
    return {};
  },
  methods: {
    //表格头部样式
    headerCellStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        return "text-align:left;background:#ecf5ff;color:#333;padding:10px 0 12px;line-height:1;border-top:4px solid #46a0fc;font-size:18px;font-weight:normal;";
      } else {
        return "background:#ecf5ff;color:#333;padding:10px 0 12px;line-height:1;border-top:4px solid #46a0fc;text-align:center;font-size:18px;font-weight:normal;";
      }
    },
    //每行样式
    rowStyle({}) {
      return "background:#fff;color:#333;text-align:center;font-size:14px;";
    },
    /*每个单元格样式*/
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        return "text-align:left;border-bottom:1px solid rgba(70, 160, 252, 0.2);";
      } else {
        return "text-align:center;border-bottom:1px solid rgba(70, 160, 252, 0.2);";
      }
    },
    //索引
    indexMethod(index) {
      return this.pageData.pageSize * (this.pageData.pageNum - 1) + index + 1;
    },
    //运营状态筛选
    filterStatus(value, row) {
      return row.company.status === value;
    },
    //辖区筛选
    filterArea(value, row) {
      return row.company.area === value;
    },
    //跳机构详情
    toDetails(row) {
      console.log(row);
      //这里换成详情页路由
      this.$router.push({
        path: "/orgWarning",
        query: { warningNo: 60 }
      });
    },
    handleCurrentChange(val) {
      // console.log(val);
      this.$emit("changePage", val);
    }
    //
  }
};
</script>
<style lang='scss'>
.el-table .cell,
.el-table th div {
  padding: 0 !important;
}
</style>
