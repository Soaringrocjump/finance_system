<!-- 待会商列表 created by zp -->
<template>
  <div class="warn-content warningOrg">
    <div class="Listbackground">
        <div class="searchBox">
            <el-input placeholder="请输入金融机构名称" suffix-icon="iconfont icon-sousuo" v-model="inputCont"></el-input>
        </div>
      <el-table :data="warningList" style="width: 100%" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column  type="index" :index="indexMethod" label="序号" width="60" ></el-table-column>
        <el-table-column  label="机构名称" min-width="180" >
          <template slot-scope="scope">
            <el-button @click="toDetails(scope.row)" type="text" size="small" style="text-decoration: underline;cursor: pointer;color: #333;">
              {{scope.row.companyName}}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column  label="运营状态" min-width="100">
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
        <el-table-column  label="辖区归属" min-width="100">
          <template slot-scope="scope">
            {{scope.row.company.area}}
          </template>
        </el-table-column>
        <el-table-column  label="截止时间" sortable min-width="120">
          <template slot-scope="scope">
            {{scope.row.warningTime.substr(0,10)}}
          </template>
        </el-table-column>
        <el-table-column label="上级单位" min-width="100">
          <template slot-scope="scope">
            <!-- {{scope.row.high_unit}} -->
            市金融办
          </template>
        </el-table-column>
        <el-table-column  label="类型" min-width="60">
          <template slot-scope="scope">
            <!-- {{scope.row.type}} -->
            主送
          </template>
        </el-table-column>
        <el-table-column  label="状态" min-width="60">
          <template  slot-scope="scope">
            <span class="primary">{{scope.row.status}}</span>
          </template>
        </el-table-column>
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
      inputCont: '',
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
      },
      warningList: []
    };
  },
  methods: {
    //表格头部样式
    headerCellStyle({row, column, rowIndex, columnIndex}){
      if(columnIndex === 1){
        return 'text-align:left;background:#ecf5ff;color:#333;padding:10px 0;line-height:1;font-size:18px;font-weight:normal;'
      }else{
        return 'background:#ecf5ff;color:#333;padding:10px 0;line-height:1;text-align:center;font-size:18px;font-weight:normal;'
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
    getDataList(currentPage){
      var user = this.$common.getLoginUser();
      this.$axios({
        method: "post",
        url: this.HOME +"warning/query",
        headers: {
          "content-type": "application/json;charset=UTF-8"
        },
        data: {
          userDeptId: user.departmentId,
          warnStatus: "会商中",
          joinMeet: true,
          pageNum: currentPage || this.pageInfo.pageNum,
          pageSize: this.pageInfo.pageSize
        }
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
    //currentPage 改变时会触发
    handleCurrentChange(val) {
      this.pageInfo.pageNum = val;
      this.getDataList(val);
    },
    //跳机构详情
    toDetails(row) {
      console.log(row);
      this.$router.push({
        path: "/orgWarning",
        query: { warningNo: row.warningNo }
      });
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
