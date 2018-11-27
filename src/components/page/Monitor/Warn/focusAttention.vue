<!-- 重点关注 -->
<template>
  <div class="warn-content warningOrg">
    <div class="Listbackground">
        <div class="searchBox">
             <el-input placeholder="请输入金融机构名称" suffix-icon="iconfont icon-sousuo" v-model="inputCont"></el-input>
        </div>
        <el-table :data="attentionList" style="width: 100%" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">
            <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
            <el-table-column prop="company_name" label="机构名称" min-width="350">
                <template slot-scope="scope">
                    <el-button @click="toDetails(scope.row)" type="text" size="small" style="text-decoration: underline;cursor: pointer;color: #333;">
                    {{scope.row.company_name}}
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column
            prop="managementstatus"
            label="运营状态"
            :filters="[{ text: '在运营', value: '在运营' }, { text: '已立案', value: '已立案' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
            min-width="100">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.managementstatus === '在运营' ? 'primary' : 'success'" disable-transitions>{{scope.row.managementstatus}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="risk_index" label="风险指数" sortable min-width="100"></el-table-column>
            <el-table-column
            prop="business_type"
            label="业务类型"
            :filters="[{ text: '网络借贷', value: '网络借贷' }, { text: '私募基金', value: '私募基金' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
            min-width="100">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.business_type === '网络借贷' ? 'primary' : 'success'" disable-transitions>{{scope.row.business_type}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
            prop="area"
            label="辖区归属"
            :filters="[{ text: '鄞州区', value: '鄞州区' }, { text: '海曙区', value: '海曙区' }, { text: '江北区', value: '江北区' }, { text: '北仑区', value: '北仑区' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
            min-width="100">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.area === '鄞州区' ? 'primary' : 'success'" disable-transitions>{{scope.row.area}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="80">
                <template slot-scope="scope">
                    <el-button plain type="danger" size="mini" @click="cancelAttention(scope.row)" >取消关注</el-button>
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
      attentionList: []
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
    getDataList(){
      var sendData = {
        status: 'WARNING',
        pagebegin: this.pageInfo.pageNum,
        pagesize: this.pageInfo.pageSize,
      }
      var self = this;
      this.$axios
        //这里要换接口地址
        .get(this.HOME + "warning/queryWarning", {
          params: sendData
        })
        .then(function(res) {
          console.log(res);

          self.attentionList = res.data.data.list;
          self.pageInfo.total = res.data.data.total;
          self.pageInfo.pageNum = res.data.data.pageNum;
        })
        .catch(function(res) {
          console.log(res + "12");
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
      this.currentPage = val;
      this.getDataList(val, this.pageSize);
    },
    //跳机构详情
    toDetails(row){
      console.log(row);
      //这里换成详情页路由
      this.$router.push({ path: '/orgWarning', query: { userId: row.uuid }});
    },
    //取消关注
    cancelAttention(){

    }
  },
  mounted(){
    this.getDataList();
  }
}

</script>
<style lang='scss' scoped>
    @import "@/assets/css/page/warn_org.scss";


</style>
