<template>
    <div class="io_body">
      <div>
        <el-row>
          <el-col :span="24">
            <el-table v-loading="loading" :data="it_list"   style="width: 100%; border-top-left-radius: 10px; border-top-right-radius: 10px;" :cell-class-name="setRiskIndex" header-cell-class-name="list-header-cell">

              <el-table-column  type="index"  :index="indexMethod" label="序号" width="120"></el-table-column>
              <el-table-column  prop="companyName" label="机构名称">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small" style="text-decoration: underline;cursor: pointer;color: #333;">
                    {{scope.row.companyName}}
                  </el-button>
                </template>
              </el-table-column>

              <el-table-column prop="risk_index" label="风险指数" sortable  ></el-table-column>

              <el-table-column
                prop="area"
                label="区县"
               >
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <slot name="btn"></slot>
                  <el-button size="mini">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" style="background-color: #fff; padding: 20px 0; text-align: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageNum"
              :page-size="pageSize"
              layout=" prev, pager, next ,jumper"
              :total="total">
            </el-pagination>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
    import Ajax from "@/components/common/util";
    export default {
        name: "TheMoreList",
      props:[
        'compkey'
      ],
      data() {
        return {
          it_list: [],
          loading: true,
          total: 0,
          pageNum: 1,
          pageSize: 10,
        }
      },
      methods: {
        setRiskIndex({row, column, columnIndex, rIndex}){
          if (columnIndex == 2) {
            if (row.rIndex > 85)
              return "risk-index-1";
            else if (row.rIndex < 55)
              return "risk-index-3";
            else
              return "risk-index-2";
          }
        },
        getTableList(){
          this.$axios(
            {
              method: "post",
              url: this.HOME +"company/getList",
              headers: {
                token: sessionStorage.getItem("authorization"),
                "content-type": "application/json;charset=UTF-8"
              },
              data: JSON.stringify({
                pageNum: this.pageNum,
                pageSize: this.pageSize,

              })
            })
            .then( res => {
              console.info(res.data.data.list);
              this.loading = false;
              this.it_list = res.data.data.list;
              this.total = res.data.data.total;
            })
            .catch(function (error) {
                console.log(error)
              }
            )
        },
        fourStatusChange(){
            this.getTableList()
        },
        handleSizeChange(val) {
          this.pageSize = val;
          this.pageNum = 1;
          this.getInstitutions(1, this.pageSize);
        },
        handleCurrentChange(val) {
          this.pageNum = val;
          this.getInstitutions(val, this.pageSize);
        },
        handleClick(index) {
          const uuid=index.uuid;
          this.$router.push({ path: '/InstitutionsListDetails', query: {id: uuid}});

        },

      },
      mounted(){
          this.getTableList();
      }
    }
</script>

<style>
  .el-table th.list-header-cell {
    background-color: #47a0fc;
    color: #fff;
  }
  .risk-index-1 {
    color: #e65369;
    font-weight: 600;
  }
  .risk-index-2 {
    color: #ecd637;
    font-weight: 600;
  }
  .risk-index-3 {
    color: #519efe;
    font-weight: 600;
  }
  .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
    padding-left: 10px;
  }

</style>
