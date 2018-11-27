<!-- 待会商机构列表 -->
<template>
  <div class="warn-content warningOrg">
    <div class="Listbackground">
        <div class="searchBox">
            <el-input placeholder="请输入金融机构名称" suffix-icon="iconfont icon-sousuo" v-model="inputCont"></el-input>
        </div>
      <el-table :data="warningList" style="width: 100%" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
        <el-table-column prop="companyName" label="机构名称" min-width="350">
          <template slot-scope="scope">
            <el-button @click="toDetails(scope.row)" type="text" size="small" style="text-decoration: underline;cursor: pointer;color: #333;">
              {{scope.row.companyName}}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="company.status"
          label="运营状态"
          :filters="[{ text: '在运营', value: '在运营' }, { text: '已立案', value: '已立案' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
          min-width="100">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status === '在运营' ? 'primary' : 'success'" disable-transitions>{{scope.row.status}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="riskIndex" label="风险指数" sortable min-width="100"></el-table-column>
        <el-table-column
          label="业务类型"
          :filters="[{ text: '网络借贷', value: '网络借贷' }, { text: '私募基金', value: '私募基金' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
          min-width="100">
          <template slot-scope="scope">
            <el-tag :type="scope.row.company.businessType === '网络借贷' ? 'primary' : 'success'" disable-transitions>
              {{scope.row.company.businessType}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="辖区归属"
          :filters="[{ text: '鄞州区', value: '鄞州区' }, { text: '海曙区', value: '海曙区' }, { text: '江北区', value: '江北区' }, { text: '北仑区', value: '北仑区' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
          min-width="100">
          <template slot-scope="scope">
            <el-tag :type="scope.row.company.area === '鄞州区' ? 'primary' : 'success'" disable-transitions>
              {{scope.row.company.area}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="warningTime" label="截止时间" sortable min-width="100"></el-table-column>
        <el-table-column
          prop="high_unit"
          label="上级单位"
          :filters="[{ text: '单位1', value: '单位1' }, { text: '单位1', value: '单位1' }, { text: '单位1', value: '单位1' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
          min-width="100">
          <template slot-scope="scope">
            <el-tag :type="scope.row.high_unit === '单位1' ? 'primary' : 'success'" disable-transitions>{{scope.row.high_unit}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="status"
          label="类型"
          :filters="[{ text: '类型', value: '类型' }, { text: '类型', value: '类型' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
          min-width="100">
          <template slot-scope="scope">
            <el-tag :type="scope.row.type === '类型' ? 'primary' : 'success'" disable-transitions>{{scope.row.type}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" min-width="60"></el-table-column>
        <el-table-column label="操作" min-width="80">
          <template slot-scope="scope">
            <slot name="btn"></slot>
            <el-button type="primary" size="mini" @click="toDetails(scope.row)">会商</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="total,prev, pager, next"
        :total="pageInfo.total">
        </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageInfo: {
        pageNum: 1,
        pageSize: 12,
        total: 0,
      },
      warningList: []
    };
  },
  methods: {
    //表格头部样式
    headerCellStyle({row, column, rowIndex, columnIndex}){
      if(columnIndex === 1){
        return 'text-align:left;background:#ecf5ff;color:#333;padding:10px 0 12px;line-height:1;font-size:18px;font-weight:normal;'
      }else{
        return 'background:#ecf5ff;color:#333;padding:10px 0 12px;line-height:1;text-align:center;font-size:18px;font-weight:normal;'
      }
    },
    //每行样式
    rowStyle({}){
      return 'background:#fff;color:#333;text-align:center;font-size:14px;'
    },
    /*每个单元格样式*/
    cellStyle({row, column, rowIndex, columnIndex}){
      if(columnIndex === 1){
        return 'text-align:left;border-bottom:1px solid rgba(70, 160, 252, 0.2);'
      }else{
        return 'text-align:center;border-bottom:1px solid rgba(70, 160, 252, 0.2);'
      }
    },
    //索引
    indexMethod(index) {
      return this.pageInfo.pageSize * (this.pageInfo.pageNum - 1) + index + 1;
    },
    //筛选
    filterTag(value, row) {
      return row.tag === value;
    },
    //获取列表
    getDataList(currentPage, warnStatus){
      var user = this.$common.getLoginUser();
      this.$axios({
        method: "post",
        url: this.HOME +"warning/query",
        headers: {
          token: sessionStorage.getItem("authorization"),
          "content-type": "application/json;charset=UTF-8"
        },
        data: JSON.stringify({
          userDeptId: user.departmentId,
          warnStatus: warnStatus || "会商中",
          pagebegin: currentPage || this.pageInfo.pageNum,
          pagesize: this.pageInfo.pageSize
        })
      })
        .then(result => {
          if (result.data.resultCode != "200") alert("错误：" + msg.message);
          var msg = !this.$common.isNull(result.data.data)
            ? result.data.data
            : "";

          this.warningList = msg.list;
          this.pageInfo.total = msg.total;

        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    //pageSize 改变时会触发
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      this.getWarningData(1, this.pageSize);
    },
    //currentPage 改变时会触发
    handleCurrentChange(val) {
      this.pageInfo.pageNum = val;
      this.getDataList(val, this.pageInfo.pageSize);
    },
    //跳机构详情
    toDetails(row){
      console.log(row);
      //这里换成详情页路由
      this.$router.push({ path: '/meetingDetail', query: { userId: row.uuid }});
    },
  },
  mounted(){
    this.getDataList();
  }
}

</script>
<style lang='scss' scoped>
    @import "@/assets/css/page/warn_org.scss";


</style>
