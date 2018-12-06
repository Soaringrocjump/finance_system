<template>
  <div class="NationalTax_page">
    <el-row>
      <el-col :span="24">
        <!--机构涉税信息-国税-->
        <div class="NationalTax">
          <!--小标题-->
          <div class="Subtitle">
            银监局机构处罚信息
          </div>
          <!--图表预留位置1-->
          <div class="table_left_bottom">
            <el-table
              :data="policeData"
              style="width: 100% ">
              <el-table-column type="index" :index="indexMethod"label="序号" width="80" ></el-table-column>
              <el-table-column
                prop="companyName"
                label="工商名称"
                width="340">
              </el-table-column>
              <el-table-column
                prop="creditCode"
                label="统一社会信用代码"
                width="200">
              </el-table-column>
              <el-table-column
                prop="decisionNo"
                label="处罚决定书文号"
                width="200">
              </el-table-column>

              <el-table-column
                prop="content"
                label="处罚内容"
                width="350">
              </el-table-column>
              <el-table-column
                prop="decisionTime"
                label="作出处罚日期"
                width="220">
                <template slot-scope="scope">
                  {{scope.row.decisionTime|formatterDate}}
                </template>
              </el-table-column>
              <el-table-column
                prop="description"
                label="执行情况"
                >
              </el-table-column>
            </el-table>
            <!--分页-->
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageNum"
              :page-size="pageSize"
              layout="total, prev, pager, next"
              :total="total">
            </el-pagination>
          </div>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Ajax from "@/components/common/util";
  /*市公安局*/
  export default {
    data() {
      return {
        total: 0,
        pageNum: 1,
        pageSize: 10,
        policeData:''

      }
    },
    methods: {
      handleSizeChange(val) {
        this.pageSize = val;
        this.pageNum = 1;
        this.getPoliceformation(1, this.pageSize);
      },
      handleCurrentChange(val) {
        this.pageNum = val;
        this.getPoliceformation(val, this.pageSize);
      },
      indexMethod(index) {
        return index+1;
      },
      indexMethodPeople(index) {
        return index+(this.pageNum - 1) * 10 + 1;
      },
      getPoliceformation :function(pageNum,pageSize) {
        this.$axios({
            method: "post",
            url: this.HOME +"yjdecision/selectAllCompanyDecision",
            headers: {
              token: sessionStorage.getItem("authorization"),
              "content-type": "application/json;charset=UTF-8"
            },data:JSON.stringify({
              "pageNum": this.pageNum,
              "pageSize": this.pageSize
            })

          })
          .then( res => {
          this.loading = false;
        this.policeData=res.data.data.list;
        this.total=res.data.data.total;
      })
        .catch(function (error) {
          console.log(error)
        })
      }
    },mounted() {
      this.getPoliceformation(1,10);
    },
  }
</script>

<style scoped>

</style>
