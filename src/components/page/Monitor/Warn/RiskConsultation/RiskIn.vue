<template>
  <div class="risk_body" style="overflow-y: scroll;">

    <el-table :data="tableData" style="width: 100%" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column  type="index" :index="indexMethod" label="序号" width="75" ></el-table-column>
      <el-table-column  prop="companyName" label="机构名称" width="380" >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small" style="text-decoration: underline;cursor: pointer;color: #333;">
            {{scope.row.companyName}}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="companyStatus"
        label="运营状态"
        width="130">
          <template slot-scope="scope">
            <el-tag :type="scope.row.company.status == '在运营' ? 'primary' : 'success'" disable-transitions>{{scope.row.company.status}}</el-tag>
          </template>      
          </el-table-column>
      <el-table-column prop="riskIndex" label="风险指数" sortable width="130">
        <template slot-scope="scope">
          {{scope.row.riskIndex}}
          </template>
      </el-table-column>
      <el-table-column
        prop="businessType"
        label="业务类型"
        width="130">
      <template slot-scope="scope">
            <el-tag :type="scope.row.company.businessType == '网络借贷' ? 'primary' : 'success'" disable-transitions>{{scope.row.company.businessType}}</el-tag>
          </template>
      </el-table-column>
      <el-table-column
        prop="area"
        label="辖区归属"
        width="130">
      <template slot-scope="scope">
            <el-tag :type="scope.row.company.area == '鄞州区' ? 'primary' : 'success'" disable-transitions>{{scope.row.company.area}}</el-tag>
          </template>
      </el-table-column>
      <el-table-column prop="warningTime" label="预警时间" sortable width="130">
        <template slot-scope="scope">
          {{scope.row.warningTime}}
          </template>
      </el-table-column>
      <el-table-column prop="hsStatus" label="状态" sortable width="130">
         <template slot-scope="scope">
          {{scope.row.status}}
          </template>
      </el-table-column>
      <el-table-column prop="jindu" label="进度" sortable width="130">
        <template slot-scope="scope">
          {{scope.row.hasBackRisk}}/{{scope.row.totalRisk}}
          </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <slot name="btn"></slot>
          <el-button size="mini">会商</el-button>
          <el-button size="mini">处置</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout=" prev, pager, next ,jumper"
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
    jinduFormatter(row, column, cellValue) {
      return row.offrate + "/" + row.allrate;
    },

    handleClick(index) {
      const uuid = index.uuid;
      this.$router.push({ path: "/DisposeInDetails", query: { id: uuid } });
    },
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
    //pageSize 改变时会触发
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      this.getRiskInData(1, this.pageSize);
    },
    //currentPage 改变时会触发
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getRiskInData(val, this.pageSize);
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
