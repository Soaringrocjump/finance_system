<template>
  <div class="il_body" style="overflow-y: scroll;">
      <div class="il_body_son">
        <el-row>
          <el-col :span="12">
            <h3>
              共<span>1253</span>家
            </h3>
          </el-col>
          <el-col :span="12">
            <div class="searchBox ">
              <input type="text" placeholder="请输入金融机构名称">
              <i class="el-icon-search"></i>
            </div>
          </el-col>
        </el-row>

        <el-row style="margin-top: 20px;">
          <el-col :span="1.5" style="width: 88px">
            <div class="pt_five_l" >
              <ul>
                <li>业务类型</li>
                <li >地区</li>
                <li>组织形式</li>
                <li>名单</li>
                <li>运营状态</li>
                <li>风险指数</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="22">
            <div  class="pt_five_r" style="">
              <ul >
                <li >
                  <a class="backcob">全部</a>
                  <a  value="投资理财" class="">投资理财</a>
                  <a  value="股权众筹" class="">股权众筹</a>
                  <a  value="民办教育" class="">民办教育</a>
                  <a  value="网络借贷" class="">网络借贷</a>
                  <a  value="保险相关类" class="">保险相关类</a>
                  <a  value="大宗商品交易" class="">大宗商品交易</a>
                  <a  value="房地产" class="">房地产</a>
                  <a  value="典当" class="">典当</a>
                  <a  value="小额贷款" class="">小额贷款</a>
                  <a  value="基金销售" class="">基金销售</a>
                  <a  value="融资租赁" class="">融资租赁</a>
                  <a  value="融资性担保" class="">融资性担保</a>
                  <a  value="私募股权投资" class="">私募股权投资</a>
                  <a  value="第三方支付" class="">第三方支付</a>
                  <a  value="电子盘交易" class="">电子盘交易</a>
                  <a  value="农民专业合作社" class="">农民专业合作社</a>
                  <a  value="其他" class="">其他</a>
                </li>
              </ul>
              <ul >
                <li >
                  <a class="backcob">全部</a>
                  <a  value="投资理财" class="">鄞州区</a>
                  <a  value="投资理财" class="">江北区</a>
                  <a  value="投资理财" class="">海曙区</a>
                  <a  value="投资理财" class="">北仑区</a>
                  <a  value="投资理财" class="">海洋科技城</a>
                  <a  value="投资理财" class="">奉化区</a>
                  <a  value="投资理财" class="">宁海县</a>
                  <a  value="投资理财" class="">大榭</a>
                  <a  value="投资理财" class="">保税区</a>
                  <a  value="投资理财" class="">高新区</a>
                  <a  value="投资理财" class="">余姚市</a>
                  <a  value="投资理财" class="">象山县</a>
                  <a  value="投资理财" class="">东钱湖</a>
                  <a  value="投资理财" class="">镇海区</a>
                  <a  value="投资理财" class="">慈溪市</a>
                  <a  value="投资理财" class="">杭州湾新区</a>
                </li>
              </ul>
              <ul >
                <li >
                  <a class="backcob">全部</a>
                  <a  value="投资理财" class="">在运营</a>
                  <a  value="投资理财" class="">立案侦查</a>
                  <a  value="投资理财" class="">清盘退出</a>
                  <a  value="投资理财" class="">失联跑路</a>
                  <a  value="投资理财" class="">其他</a>
                </li>
              </ul>
              <ul >
                <li >
                  <a class="backcob">全部</a>
                  <a  value="投资理财" class="">总部机构</a>
                  <a  value="投资理财" class="">分支机构</a>
                </li>
              </ul>
              <ul>
                <li >
                  <a class="backcob">全部</a>
                  <a  value="投资理财" class="">黑名单</a>
                  <a  value="投资理财" class="">灰名单</a>
                </li>
              </ul>
              <ul >
                <li >
                  <a class="backcob">全部</a>
                  <a  value="投资理财" class="">高风险</a>
                  <a  value="投资理财" class="">中风险</a>
                  <a  value="投资理财" class="">低风险</a>
                </li>
              </ul>


            </div>
          </el-col>
        </el-row>

      </div>

      <el-table v-loading="loading" :data="it_list"   style="width: 100%" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column  type="index"  :index="indexMethod" label="序号" width="95" ></el-table-column>
        <el-table-column  prop="company_name" label="机构名称" width="640" >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small" style="text-decoration: underline;cursor: pointer;color: #333;">
              {{scope.row.company_name}}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="status"
          label="运营状态"
          width="140">

        </el-table-column>
        <el-table-column prop="risk_index" label="风险指数" sortable width="140" ></el-table-column>
        <el-table-column
          prop="business_type"
          label="业务类型"
          width="140">

        </el-table-column>
        <el-table-column
          prop="area"
          label="辖区归属"
          width="140">

        </el-table-column>
        <el-table-column prop="organizational" label="组织形式" sortable width="140"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <slot name="btn"></slot>
         <el-button size="mini">关注</el-button>
          </template>
        </el-table-column>
      </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagebegin"
      :page-size="pageSize"
      layout=" prev, pager, next ,jumper"
      :total="total">
    </el-pagination>

    <div class="height60"></div>
  </div>
</template>

<script>
    export default {
        name: "InstitutionsList",

        data () {
          return {
            loading: true,
            total: 0,
            pagebegin: 1,
            pageSize: 10,
            activeName: 'first',
            it_list: [],
          };
        },

        methods: {
          indexMethod(index) {
            return this.pageSize * (this.pagebegin - 1) + index + 1;
          },
          /*机构列表*/
          getInstitutions: function(pagebegin,pageSize) {
            var self = this;
            var authorization = sessionStorage.getItem("authorization"); //sessionStorage里取出token;
            var url = this.HOME + "company/companySearch";
            var qs = require('qs');
            this.$axios
              .post(url,
                qs.stringify({ pagebegin: pagebegin,pagesize:pageSize }),
                {
              headers: {
                authorization: authorization,
              }
            })
              .then(function (res) {
                console.info(res.data.data.list);
                self.loading = false;
                self.it_list = res.data.data.list;
                self.total = res.data.data.total;

              })
              .catch(function (error) {
              console.log(error)
            })
          },
          //分页
          handleSizeChange(val) {
            this.pageSize = val;
            this.pagebegin = 1;
            this.getInstitutions(1, this.pageSize);
          },
          handleCurrentChange(val) {
            this.pagebegin = val;
            this.getInstitutions(val, this.pageSize);
          },
          handleClick(index) {
            const uuid=index.uuid;
            this.$router.push({ path: '/InstitutionsListDetails', query: {id: uuid}});

          },

        //表格头部样式
        headerCellStyle({row, column, rowIndex, columnIndex}){
          if(columnIndex === 2){
            return 'text-align:left;background:#ecf5ff;color:#333;padding:10px 10px 12px;line-height:1;border-top:4px solid #46a0fc;font-size:18px;font-weight:normal;'
          }else{
            return 'background:#ecf5ff;color:#333;padding:10px 0 12px;line-height:1;border-top:4px solid #46a0fc;text-align:center;font-size:18px;font-weight:normal;'
          }
        },
        //每行样式
        rowStyle({}){
          return 'background:#fff;color:#333;text-align:center;font-size:14px;'
        },
        /**/
        cellStyle({row, column, rowIndex, columnIndex}){
          if(columnIndex === 2){
            return 'padding-left:10px;text-align:left;'
          }
        },

        },


        mounted() {
          this.getInstitutions(1,10);
      },
    }
</script>

<style lang="scss" >
  @import "@/assets/css/page/v_index.scss";
</style>
