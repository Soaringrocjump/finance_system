<!-- 重点关注 -->
<template>
  <div class="warn-content warningOrg">
    <div class="Listbackground">
        <div class="searchBox">
             <el-input placeholder="请输入金融机构名称" suffix-icon="iconfont icon-sousuo" v-model="inputCont"></el-input>
        </div>
        <el-table :data="it_list" style="width: 100%" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">
            <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
            <el-table-column prop="companyName" label="机构名称" min-width="300">
                <template slot-scope="scope">
                    <el-button @click="toDetails(scope.row)" type="text" size="small" style="text-decoration: underline;cursor: pointer;color: #333;">
                      {{scope.row.companyName}}
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column prop="company" label="运营状态" min-width="100">
                <template slot-scope="scope">
                  <div v-if="scope.row.company!= null">
                    {{scope.row.company.status}}
                  </div>
                  <div v-else>
                    {{""}}
                  </div>
                </template>
            </el-table-column>
            <el-table-column prop="company" label="风险指数" sortable min-width="100">
              <template slot-scope="scope">
                <div v-if="scope.row.company!= null">
                  <div v-if="scope.row.company.riskWave!= null">
                    <!-- {{scope.row.company.riskWave.riskIndex}} -->
                    <span v-if="scope.row.company.riskWave.riskIndex > 85" class="danger">{{scope.row.company.riskWave.riskIndex}}</span>
                    <span v-else-if="scope.row.company.riskWave.riskIndex > 55" class="warning">{{scope.row.company.riskWave.riskIndex}}</span>
                    <span v-else class="primary">{{scope.row.company.riskWave.riskIndex}}</span>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="company" label="业务类型" min-width="100">
              <template slot-scope="scope">
              <div v-if="scope.row.company!= null">
                {{scope.row.company.businessType}}
              </div>
              <div v-else>
                {{""}}
              </div>
                </template>
            </el-table-column>
            <el-table-column prop="company" label="辖区归属"  min-width="100">
                <template slot-scope="scope">
                  <div v-if="scope.row.company!= null">
                    {{scope.row.company.area}}
                  </div>
                  <div v-else>
                    {{""}}
                  </div>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="80">
                <template slot-scope="scope">
                    <el-button plain type="danger" size="mini" @click="cancelAttention(scope.row.id)" >取消关注{{scope.row.id}}</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="total,prev, pager, next"
        :total="total">
        </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      inputCont: '',
      total: 0,
      loading: true,
      pageNum: 1,
      pageSize: 10,
      it_list: [],
      attentionList: []
    };
  },
  methods: {
    //表格头部样式
    headerCellStyle({row, column, rowIndex, columnIndex}) {
      if (columnIndex === 1) {
        return 'text-align:left;background:#ecf5ff;color:#333;padding:10px 0 12px;line-height:1;font-size:18px;font-weight:normal;'
      } else {
        return 'background:#ecf5ff;color:#333;padding:10px 0 12px;line-height:1;text-align:center;font-size:18px;font-weight:normal;'
      }
    },
    //每行样式
    rowStyle({}) {
      return 'background:#fff;color:#333;text-align:center;font-size:14px;'
    },
    /*每个单元格样式*/
    cellStyle({row, column, rowIndex, columnIndex}) {
      if (columnIndex === 1) {
        return 'text-align:left;border-bottom:1px solid rgba(70, 160, 252, 0.2);'
      } else {
        return 'text-align:center;border-bottom:1px solid rgba(70, 160, 252, 0.2);'
      }
    },
    //索引
    indexMethod(index) {
      return this.pageSize * (this.pageNum - 1) + index + 1;
    },
    //筛选
    // filterTag(value, row) {
    //   return row.tag === value;
    // },
    //获取列表
    getDataList(pageNum, pageSize) {
      this.$axios({
        method: "post",
        url: this.HOME + "getList",
        headers: {
          "content-type": "application/json;charset=UTF-8"
        },
        data: {
          pageNum: pageNum || this.pageNum,
          pageSize: pageSize || this.pageSize,

        }
      })
        .then(res => {
          console.info(res.data.data.list);
          this.loading = false;
          this.it_list = res.data.data.list;
          this.total = res.data.data.total;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    //currentPage 改变时会触发
    handleCurrentChange(val) {
      this.currentPage = val;
      this.pageNum = val;
      this.getDataList(val, this.pageSize);
    },
    //跳机构详情
    toDetails(row) {
      console.log(row);
      //这里换成详情页路由
      this.$router.push({path: '/orgWarning', query: {userId: row.uuid}});
    },
    //取消关注
    cancelAttention(id) {
      this.$axios({
        method: "post",
        url: this.HOME + "cancelAttention?followId="+id,
        data: []

      })
        .then(res => {
          console.log(res);
          this.getDataList();
        })
        .catch(function (error) {
          console.log(error)
        })
      
    }
  },
  mounted() {
    this.getDataList();
  }
}
</script>
<style lang='scss' scoped>
    @import "@/assets/css/page/warn_org.scss";


</style>
