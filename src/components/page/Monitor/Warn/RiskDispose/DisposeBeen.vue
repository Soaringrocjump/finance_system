<template>
  <div class="risk_body">
    <el-table :data="tableData" style="width: 100%" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column  type="index" :index="indexMethod" label="序号" width="75" ></el-table-column>
      <el-table-column  prop="companyName" label="机构名称" min-width="230" >
        <template slot-scope="scope">
          <el-button @click="toDetails(scope.row)" type="text" size="small" style="text-decoration: underline;cursor: pointer;color: #333;">
            {{scope.row.companyName}}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column prop="companyStatus" label="运营状态" min-width="100">
          <template slot-scope="scope">
            {{scope.row.company.status}}
          </template>      
          </el-table-column>
      <el-table-column  label="风险指数" sortable min-width="120">
          <template slot-scope="scope">
            <span v-if="scope.row.riskIndex > 85" class="danger">{{scope.row.riskIndex}}</span>
            <span v-else-if="scope.row.riskIndex > 55" class="warning">{{scope.row.riskIndex}}</span>
            <span v-else class="primary">{{scope.row.riskIndex}}</span>
          </template>
        </el-table-column>
      <el-table-column label="业务类型" min-width="100">
        <template slot-scope="scope">
          {{scope.row.company.businessType}}
        </template>
      </el-table-column>
      <el-table-column label="辖区归属" min-width="100">
        <template slot-scope="scope">
          {{scope.row.company.area}}
        </template>
      </el-table-column>
      <el-table-column label="预警时间" sortable min-width="120">
        <template slot-scope="scope">
          {{scope.row.warningTime.substr(0,10)}}
          </template>
      </el-table-column>
      <el-table-column label="状态" min-width="60">
         <template slot-scope="scope">
          <span class="primary">{{scope.row.status}}</span>
          </template>
      </el-table-column>
      <el-table-column label="处置结果" min-width="100">
        <template slot-scope="scope">
          {{scope.row.warningSummaryForMeet.result}}
          </template>
      </el-table-column>
      <el-table-column label="操作" min-width="100">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="toDetails(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
    background
    @current-change="handleCurrentChange"
    layout="total,prev, pager, next"
    :total="pageData.total">
    </el-pagination>
    <div class="height60"></div>
  </div>
</template>

<script>
export default {
  props: ["tableData", "pageData"],
  data() {
    return {};
  },
  name: "RiskIn",
  methods: {
    //索引
    indexMethod(index) {
      return this.pageData.pageSize * (this.pageData.pageNum - 1) + index + 1;
    },
    //跳机构详情
    toDetails(row) {
      console.log(row);
      //这里换成详情页路由
      this.$router.push({
        path: "/orgWarning",
        query: { warningNo: row.warningNo }
      });
    },
    //表格头部样式
    headerCellStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        return "text-align:left;background:#ecf5ff;color:#333;padding:10px 0;line-height:1;border-top:4px solid #46a0fc;font-size:18px;font-weight:normal;";
      } else {
        return "background:#ecf5ff;color:#333;padding:10px 0;line-height:1;border-top:4px solid #46a0fc;text-align:center;font-size:18px;font-weight:normal;";
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
    //分页事件触发父组件请求
    handleCurrentChange(val) {
      // console.log(val);
      this.$emit("changePage", val);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" >
.risk_body {
  .el-pagination {
    text-align: right;
  }
}
</style>
