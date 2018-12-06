<template>
  <div class="ir_body">
    <el-row>
      <el-col :span="12">
        <el-input
          placeholder="输入平台名称进行搜索"
          v-model="websiteName"
          clearable
        >
        </el-input>
      </el-col>
      <el-col :span="1.5">
        <el-button type="primary" style="width: 90px;margin-left: 15px;margin-right: 15px;border-radius: 0px;"  @click="getPlatList()">搜索</el-button>
      </el-col>
      <el-col :span="5"><p style="margin-top: 10px">查询到的平台总量{{this.total}}家</p></el-col>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-col :span="2" >
        <div class="pt_five_l" >
          <ul>
            <li>注册地点</li>
            <li >业态类型</li>
            <li>运营状态</li>
            <li>上线时间</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="22">
        <div  class="pt_five_r" style="">
          <ul >
            <li>
              <a v-bind:class="[dq==''?'backcob':'']"  @click="chooseDq('')">全部</a>
              <a v-bind:class="[dq==item?'backcob':'']"  @click="chooseDq(item)" v-for="item in searchDq">{{item}}</a>
            </li>
          </ul>
          <ul >
            <li>
              <a v-bind:class="[formats==''?'backcob':'']"  @click="chooseFormats('')">全部</a>
              <a v-bind:class="[formats==item?'backcob':'']"  @click="chooseFormats(item)" v-for="item in searchtypeFormats">{{item}}</a>
            </li>
          </ul>
          <ul >
            <li>
              <a v-bind:class="[code==''?'backcob':'']"  @click="chooseCode('')">全部</a>
              <a v-bind:class="[code==item?'backcob':'']"  @click="chooseCode(item)" v-for="item in searchstateCode">{{item}}</a>
            </li>
          </ul>
          <ul >
            <li>
              <a v-bind:class="[linetime==''?'backcob':'']"  @click="chooselineTime('')">全部</a>
              <a v-bind:class="[linetime==item?'backcob':'']"  @click="chooselineTime(item)" v-for="item in searchonlineTime">{{item}}</a>
            </li>
          </ul>


        </div>
      </el-col>
    </el-row>

    <el-table
      :data="tableData"
      v-loading="loading"
      style="width: 100%;" class="ri_tab">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="websiteName"
        label="平台"
        width="180">
      </el-table-column>
      <el-table-column
        prop="moneyTotal"
        label="资金总量（万）"
        width="190">
      </el-table-column>
      <el-table-column
        prop="userTotal"
        label="用户数量"
        width="190"
      >
      </el-table-column>
      <el-table-column
        prop="companyName"
        label="所属从业机构"
       >
      </el-table-column>
      <el-table-column
        prop="legalName"
        label="法人代表"
        width="150">
      </el-table-column>
      <el-table-column
        prop="upTime"
        label="上线时间"
        :formatter="formatter"
        width="160">
      </el-table-column>
      <el-table-column
        prop="allType"
        label="业态类型"
        width="130">
      </el-table-column>
      <el-table-column
        label="查看"
        width="150">
        <template slot-scope="scope">
          <router-link 　:to="{path:'PlatformDetails', query:{websiteId:scope.row.id}}"　class="entranceBox monitor">
            <el-button class="ri_btn" >
              <span>查看</span>
            </el-button>
          </router-link>

        </template>

      </el-table-column>

    </el-table>

    <el-row class="ri_bot">
      <el-col :span="12" style="padding-left: 20px">
        <el-checkbox v-model="checked"></el-checkbox>
        <el-button class="ri_btn">批量导出</el-button>
      </el-col>
      <el-col :span="12" style="text-align: right;padding-right: 20px">
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
</template>

<script>
    /*平台*/
    import {dqArray,ywlbArray,searchFxzs,searchZzxs,searchStatus,searchMd,typeFormats,stateCode,onlineTime,jobTit} from '@/components/common/codes';
    import Ajax from "@/components/common/util";
    export default {
        name: "Platform",
      data() {
        return {
          tableData: [],
          loading: true,
          total: 0,
          pageNum: 1,
          pageSize: 10,
          websiteName:"",
          searchDq: dqArray,
          searchtypeFormats:typeFormats,
          searchstateCode:stateCode,
          searchonlineTime:onlineTime,
          dq:"",
          formats:"",
          code:"",
          linetime:""

        }
      },
      methods:{
        getPlatList(){
          Ajax(
            {
              method:'post',
              url:'website/getList',
              data:{
                pageNum:this.pageNum,
                pageSize:this.pageSize,
                area:this.dq,
                allType:this.formats,
                manageStatus:this.code,
                year:this.linetime,
                websiteName:this.websiteName
              }
            }
          ).then(result => {

            if (result.data.resultCode != "200") alert("错误：" + msg.message);
            var msg = !this.$common.isNull(result.data.data)
              ? result.data.data
              : "";
            this.loading = false;
            this.tableData = msg.list;
            this.total = msg.total;
          })
            .catch(err => {
              alert("错误：获取数据异常" + err);
            });

        },
        //分页
        handleSizeChange(val) {
          // this.pageSize = val;
          // this.pageNum = 1;
          // this.getPlatList(1, this.pageSize);
        },
        handleCurrentChange(val) {
          this.pageNum = val;
          this.getPlatList();
        },
        chooseDq:function (item) {
          this.dq=item;
          this.tableData=[];
          this.total=0;
          this.getPlatList();
        },
        chooseFormats:function (item) {
          this.formats=item;
          this.tableData=[];
          this.total=0;
          this.getPlatList();
        },
        chooseCode:function (item) {
          this.code=item;
          this.tableData=[];
          this.total=0;
          this.getPlatList();
        },
        chooselineTime:function (item) {
          this.linetime=item;
          this.tableData=[];
          this.total=0;
          this.getPlatList();
        },
        formatter(row, column) {
          let time=row;
          if(row.company){
            if(row.company.registTime){
              return formatDate(new Date(row.company.registTime),'yyyy-MM-dd')
            }
          }
          return ""

        },
      },
      mounted(){
        this.getPlatList();
      },
      watch:{

        dq(newValue, oldValue){
          this.getExeList();
        },
        formats(newValue, oldValue){
          this.getExeList();
        },
        code(newValue, oldValue){
          this.getExeList();
        },
        linetime(newValue, oldValue){
          this.getExeList();
        },
      }
    }
</script>

<style scoped>

</style>
