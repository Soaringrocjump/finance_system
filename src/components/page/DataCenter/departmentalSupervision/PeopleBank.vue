<template>
  <div class="PeopleBank_page">
    <el-row>
      <el-col :span="24">
        <!--左边栏：类金融机构不良征信-->
        <div class="Poor_records_of_financial_institutions">
          <!--小标题-->
          <div class="Subtitle">
            企业严重不良贷款信息
          </div>

          <!--图表预留位置1-->
          <div class="table_left_bottom">
            <el-table
              v-loading="loading"
              :data="peopleBankTableData"
              style="width: 100%">
              <el-table-column type="index" :index="indexMethodPeoplea"label="序号" width="120" ></el-table-column>
              <el-table-column
                prop="companyName"
                label="企业名称"
                width="340">
              </el-table-column>
              <el-table-column
                prop="creditCode"
                label="统一社会信用代码"
                width="250">
              </el-table-column>
              <el-table-column
                prop="money"
                label="严重不良贷款金额（万）"
                width="250">
                <template slot-scope="scope">
                  {{scope.row.money|moneyFormat}}
                </template>
              </el-table-column>
              <el-table-column
                prop="isPay"
                label="贷款金额是否已偿清"
                width="250"
                >
              </el-table-column>
              <el-table-column
                prop="payTime"
                label="偿清日期"
              >
                <template slot-scope="scope">
                  {{scope.row.payTime|formatterDate}}
                </template>
              </el-table-column>
            </el-table>
            <!--分页-->
            <el-pagination
              background
              @size-change="handleSizeChangea"
              @current-change="handleCurrentChangea"
              :current-page="pageNuma"
              :page-size="pageSizea"
              layout="total, prev, pager, next"
              :total="totala">
            </el-pagination>
          </div>
        </div>
      </el-col>

    </el-row>
    <el-row>
      <el-col :span="24">
        <!--右边栏：类金融机构摸排调查-->
        <div class="Financial_institutions_investigation">
          <!--小标题-->
          <div class="Subtitle">
            企业其他处罚信息
          </div>
          <!--图表预留位置1-->
          <div class="table_left_bottom">
            <el-table
              v-loading="loading"
              :data="Investigation_tableData"
              style="width: 100%">
              <el-table-column type="index" :index="indexMethodPeopleb"label="序号" width="120" ></el-table-column>
              <el-table-column
                prop="companyName"
                label="处罚机构名称"
                width="340">
              </el-table-column>
              <el-table-column
                prop="creditCode"
                label="统一社会信用代码"
                width="250">
              </el-table-column>
              <el-table-column
                prop="decisionNo"
                label="处罚决定书文号"
                width="250">
              </el-table-column>
              <el-table-column
                prop="content"
                label="处罚内容"
                width="250">
              </el-table-column>
              <el-table-column
                prop="decisionTime"
                label="处罚日期"
              >
                <template slot-scope="scope">
                  {{scope.row.decisionTime|formatterDate}}
                </template>
              </el-table-column>
            </el-table>
            <!--分页-->
            <el-pagination
              background
              @size-change="handleSizeChangeb"
              @current-change="handleCurrentChangeb"
              :current-page="pageNumb"
              :page-size="pageSizeb"
              layout="total, prev, pager, next"
              :total="totalb">
            </el-pagination>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  /*人行市中心分行*/
  export default {
    data() {
      return {
        loading: true,
        totala: 0,
        pageNuma: 1,
        pageSizea: 6,
        totalb: 0,
        pageNumb: 1,
        pageSizeb: 6,
        /*类金融机构不良征信*/
      peopleBankTableData: '',
        /*类金融机构摸排调查*/
      Investigation_tableData: ''

      }
    },methods:{
      handleSizeChangea(val) {
        this.pageSizea = val;
        this.pageNuma = 1;
        this.getLoanformation(1, this.pageSizea);
      },
      handleCurrentChangea(val) {
        this.pageNuma = val;
        this.getLoanformation(val, this.pageSizea);
      },
      handleSizeChangeb(val) {
        this.pageSizeb = val;
        this.pageNumb = 1;
        this.getCompanyformation(1, this.pageSizeb);
      },
      handleCurrentChangeb(val) {
        this.pageNumb = val;
        this.getCompanyformation(val, this.pageSizeb);
      },
      indexMethodPeoplea(index) {
        return index+(this.pageNumb - 1) * 6 + 1;
      },
      indexMethodPeopleb(index) {
        return index+(this.pageNumb - 1) * 6 + 1;
      },
      //不良贷款
      getLoanformation :function(pageNum,pageSize) {
        this.$axios({
            method: "post",
            url: this.HOME +"rhloan/selectAllCompanyLoan",
            headers: {
              token: sessionStorage.getItem("authorization"),
              "content-type": "application/json;charset=UTF-8"
            },data:JSON.stringify({
              "pageNum": pageNum,
              "pageSize": pageSize
            })

          })
          .then( res => {
          this.loading = false;
        this.peopleBankTableData=res.data.data.list;
        this.totala=res.data.data.total;
      })
        .catch(function (error) {
          console.log(error)
        })
      }, //机构信息
      getCompanyformation :function(pageNum,pageSize) {
        this.$axios({
            method: "post",
            url: this.HOME +"rhdecision/selectAllCompanyDecision",
            headers: {
              token: sessionStorage.getItem("authorization"),
              "content-type": "application/json;charset=UTF-8"
            },data:JSON.stringify({
              "pageNum": pageNum,
              "pageSize": pageSize
            })

          })
          .then( res => {
        this.loading = false;
        this.Investigation_tableData=res.data.data.list;
        this.totalb=res.data.data.total;
      })
        .catch(function (error) {
          console.log(error)
        })
      }
    },mounted() {
      this.getLoanformation(1,6);
      this.getCompanyformation(1,6);
    },
  }
</script>

<style scoped>

</style>
