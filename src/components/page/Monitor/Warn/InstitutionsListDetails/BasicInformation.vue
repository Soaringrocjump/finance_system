<template>
    <div class=" orgDetails binfor_body">
      <div class="comDetails">
        <div class="title display-flex align-items-center"><div class="v-line"></div>基本信息</div>
        <div class="basicInfo">
          <table width="100%" border="0">
            <tr>
              <td width="8%">法人代表</td>
              <td colspan="4">
                <big>{{comInfo.legalName}}</big>
                <a class="themeBlue">他关联了{{comInfo.relevance}}家公司</a>
              </td>
            </tr>
            <tr>
              <td>社会信用代码</td>
              <td width="38%">{{comInfo.creditCode}}</td>
              <td width="8%">公司状态</td>
              <td width="27%"><span class="themeBlue">{{comInfo.status}}</span></td>
              <td width="19%" rowspan="4">
                <div class="comLogoBox"></div>
              </td>
            </tr>
            <tr>
              <td>注册日期</td>
              <td>{{comInfo.registTime | formatterDate }}</td>
              <td>注册资本</td>
              <td>{{comInfo.capital | moneyFormat}}万人民币</td>
            </tr>
            <tr>
              <td>营业期限</td>
              <td>{{comInfo.businessStart |formatterDate }} 至 {{comInfo.businessEnd |formatterDate}}</td>
              <td>实缴资本</td>
              <td>{{comInfo.realpayment | moneyFormat}}万人民币</td>
            </tr>
            <tr>
              <td>注册地址</td>
              <td >{{comInfo.address}}</td>
              <td>实际经营地址</td>
              <td v-if="comInfo.companyReal">{{comInfo.companyReal.address}}<a class="themeBlue">地图</a></td>
              <td v-else>暂无数据<a class="themeBlue">地图</a></td>
            </tr>
            <tr>
              <td>登记机关</td>
              <td>{{comInfo.registrationAuthority}}</td>
            </tr>
          </table>
        </div>

        <div class="basicInfo">
          <table width="100%" border="0">
            <tr>
              <td>公司类型</td>
              <td >{{comInfo.companyType}}</td>
              <td>电话号码</td>
              <td>{{comInfo.telephone}}</td>
            </tr>

            <tr>
              <td>行业</td>
              <td width="38%">{{comInfo.regDate}}</td>
              <td width="8%">传真号码</td>
              <td width="27%">{{comInfo.fix}}</td>
              <td width="19%" rowspan="4">

              </td>
            </tr>
            <br>
            <tr>
              <td>参保人数</td>
              <td>{{empAndIns.insuranceCount}}</td>
              <td>APP名称</td>
              <td ><div v-for="item in app" >{{item.appName}}</div></td>
            </tr>
            <tr>
              <td>人员规模</td>
              <td>{{empAndIns.employeeRefCount}}</td>
              <td>网址</td>
              <td ><div v-for="item in website">{{item.domainName}}</div></td>
            </tr>
            <tr>
              <td>经营范围</td>
              <td>{{comInfo.operation}}</td>

            </tr>

          </table>
        </div>
      </div>

      <div class="comDetails">
        <div class="title display-flex align-items-center"><div class="v-line"></div>网站信息</div>
        <el-table :data="website"  style="width: 100%;padding: 20px;" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">

          <el-table-column type="index" :index="indexMethod"label="序号" width="80" ></el-table-column>
          <el-table-column prop="websiteName" label="网站名称"  width="260"></el-table-column>
          <el-table-column prop="domainName" label="网站地址" width="260"></el-table-column>

          <el-table-column prop="sendTime" label="备案时间"  width="200" >
            <template slot-scope="scope">
                {{scope.row.sendTime|formatterDate}}
            </template>
          </el-table-column>
          <el-table-column prop="upTime" label="上线时间"  width="200" >
            <template slot-scope="scope">
              {{scope.row.upTime|formatterDate}}
            </template>
          </el-table-column>

          <el-table-column prop="userTotal" label="用户总量（人）"  width="150"></el-table-column>
          <el-table-column prop="moneyTotal" label="资金总量（万元）"  >
            <template slot-scope="scope">
              {{scope.row.moneyTotal|moneyFormat}}
            </template>
          </el-table-column>

        </el-table>
      </div>
      <div class="comDetails">
        <div class="title display-flex align-items-center"><div class="v-line"></div>APP信息</div>
        <el-table :data="app"  style="width: 100%;padding: 20px;" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">

          <el-table-column type="index" :index="indexMethod"label="序号" width="80" ></el-table-column>
          <el-table-column prop="appName" label="app名称"  width="260"></el-table-column>
          <el-table-column prop="downUrl" label="下载地址" width="260"></el-table-column>
          <el-table-column prop="appService" label="运行平台" width="260"></el-table-column>

          <el-table-column prop="firstTime" label="上线时间"  width="200" >
            <template slot-scope="scope">
              {{scope.row.firstTime|formatterDate}}
            </template>
          </el-table-column>


          <el-table-column prop="ishaverecord" label="是否备案"  width="150"></el-table-column>
          <el-table-column prop="appDown" label="下载量"  ></el-table-column>
        </el-table>
      </div>
      <div class="comDetails">
        <div class="title display-flex align-items-center"><div class="v-line"></div>股东信息</div>
        <el-table :data="shareholder"  style="width: 100%;padding: 20px;" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">

          <el-table-column type="index" :index="indexMethod" label="序号" width="80" ></el-table-column>
          <el-table-column prop="name" label="股东（发起人）"  width="260"></el-table-column>

          <el-table-column prop="money" label="认缴出资额（万元）"  width="260" >
            <template slot-scope="scope">
              {{scope.row.money|moneyFormat}}
            </template>

          </el-table-column>

          <el-table-column prop="shares" label="持股比例"  ></el-table-column>
        </el-table>
         </div>

      <div class="comDetails">
        <div class="title display-flex align-items-center"><div class="v-line"></div>从业人员名册</div>
        <el-table :data="emp"  style="width: 100%;padding: 20px;" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">

          <el-table-column type="index" :index="indexMethodPeople" label="序号" width="80" ></el-table-column>
          <el-table-column prop="duties" label="职务"  width="260"  ></el-table-column>
          <el-table-column prop="people.name" label="姓名" width="260"></el-table-column>
          <el-table-column prop="people.nationality" label="国籍" width="260"></el-table-column>
          <el-table-column prop="people.card" label="身份证号" width="200"></el-table-column>
          <el-table-column prop="people.mobile" label="手机号码"></el-table-column>
        </el-table>

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
</template>

<script>
  import Ajax from "@/components/common/util";
  /*基本信息*/
    export default {
        name: "BasicInformation",
      data () {
        return {
          total: 0,
          pageNum: 1,
          pageSize: 5,
          comInfo:'',
          website:'',
          app:'',
          empAndIns:'',//员工总数和参保总数
          shareholder:'',//股东信息
          emp:''//从业人员信息
        };
      },
      methods: {
        handleSizeChange(val) {
          this.pageSize = val;
          this.pageNum = 1;
          this.getEmpInformation(1, this.pageSize);
        },
        handleCurrentChange(val) {
          this.pageNum = val;
          this.getEmpInformation(val, this.pageSize);
        },
        indexMethod(index) {
          return index+1;
        },
        indexMethodPeople(index) {
          return index+(this.pageNum - 1) * 5 + 1;
        },
        getBasicInformation :function() {
          this.$axios({
              method: "post",
              url: this.HOME +"company/get?uuid="+this.$route.query.id,
              headers: {
                token: sessionStorage.getItem("authorization"),
                "content-type": "application/json;charset=UTF-8"
              },

            })
            .then( res => {
            this.loading = false;
          this.comInfo=res.data.data;
        })
          .catch(function (error) {
            console.log(error)
          })
        },
        getWebsiteformation :function() {
          this.$axios({
              method: "post",
              url: this.HOME +"company/getWebsite?companyUuid="+this.$route.query.id,
              headers: {
                token: sessionStorage.getItem("authorization"),
                "content-type": "application/json;charset=UTF-8"
              },

            })
            .then( res => {

            this.loading = false;
            this.website=res.data.data;
        })
          .catch(function (error) {
            console.log(error)
          })
        },
        getAppInformation :function() {
          this.$axios({
              method: "post",
              url: this.HOME +"company/getApp?companyUuid="+this.$route.query.id,
              headers: {
                token: sessionStorage.getItem("authorization"),
                "content-type": "application/json;charset=UTF-8"
              },

            })
            .then( res => {
            this.loading = false;
          this.app=res.data.data;
        })
          .catch(function (error) {
            console.log(error)
          })
        },
    //        获取员工总数和参保人数
        getInsuranceInformation :function() {
          this.$axios({
              method: "post",
              url: this.HOME +"company/getEmpAndInsCount?companyUuid="+this.$route.query.id+"&creditCode="+this.$route.query.creditCode,
              headers: {
                token: sessionStorage.getItem("authorization"),
                "content-type": "application/json;charset=UTF-8"
              },

            })
            .then( res => {
            this.loading = false;
            this.empAndIns=res.data.data[0];
        })
          .catch(function (error) {
            console.log(error)
          })
        },
        //获取股东信息
    getShareholderInformation :function() {
    this.$axios({
        method: "post",
        url: this.HOME +"companyshareholder/getListByUuid?companyUuid="+this.$route.query.id,
        headers: {
          token: sessionStorage.getItem("authorization"),
          "content-type": "application/json;charset=UTF-8"
        },

      })
      .then( res => {
      this.loading = false;
      this.shareholder=res.data.data;
  })
  .catch(function (error) {
      console.log(error)
    })
    },
        //获取从业人员列表信息
        getEmpInformation :function(pageNum,pageSize) {
          this.$axios({
              method: "post",
              url: this.HOME +"employee/getListByUuid?companyUuid="+this.$route.query.id+"&pageNum="+pageNum+"&pageSize="+pageSize,
              headers: {
                token: sessionStorage.getItem("authorization"),
                "content-type": "application/json;charset=UTF-8"
              },
            })
            .then( res => {
            this.loading = false;
          this.emp=res.data.data.list;
          this.total=res.data.data.total;
        })
          .catch(function (error) {
            console.log(error)
          })
        },


        //表格头部样式
        headerCellStyle({row, column, rowIndex, columnIndex}){
          if(columnIndex === 0){
            return 'text-align:left;background:#ecf5ff;color:#333;padding:10px 10px 12px;line-height:1;font-size:18px;font-weight:normal;'
          }else{
            return 'background:#ecf5ff;color:#333;padding:10px 0 12px;line-height:1;text-align:center;font-size:18px;font-weight:normal;'
          }
        },
        //每行样式
        rowStyle({}){
          return 'background:#fff;color:#333;text-align:center;font-size:14px;'
        },
        /**/
        cellStyle({row, column, rowIndex, columnIndex}){
          if(columnIndex === 0){
            return 'padding-left:10px;text-align:left;'
          }
        },

      },
      mounted() {
        this.getBasicInformation();
        this.getWebsiteformation();
        this.getAppInformation();
        this.getInsuranceInformation();
        this.getShareholderInformation();
        this.getEmpInformation(1,5);
      },
    }
</script>

<style lang='scss'>
  @import "@/assets/css/page/warn_org.scss";
</style>
