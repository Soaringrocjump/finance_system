<template>
  <div class="ir_body">
    <el-row>
      <el-col :span="12">
        <el-input
          placeholder="输入高管姓名进行搜索"
          v-model="websiteName"
          clearable
        >
        </el-input>
      </el-col>
      <el-col :span="1.5">
        <el-button type="primary" style="width: 90px;margin-left: 15px;margin-right: 15px;border-radius: 0px;"
                   @click="getExeList">搜索
        </el-button>
      </el-col>
      <el-col :span="5"><p style="margin-top: 10px">查询到的高管数量{{this.total}}人</p></el-col>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-col :span="1">
        <div class="pt_five_l">
          <ul>
            <li>地区</li>
            <li>职位</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="23">
        <div class="pt_five_r" style="">
          <ul>
            <li>
              <a v-bind:class="[dq==''?'backcob':'']" @click="chooseDq('')">全部</a>
              <a v-bind:class="[dq==item?'backcob':'']" @click="chooseDq(item)" v-for="item in searchDq">{{item}}</a>
            </li>
          </ul>
          <ul>
            <li>
              <a v-bind:class="[job==''?'backcob':'']" @click="chooseJob('')">全部</a>
              <a v-bind:class="[job==item?'backcob':'']" @click="chooseJob(item)" v-for="item in searchJob">{{item}}</a>
            </li>
          </ul>


        </div>
      </el-col>
    </el-row>

    <el-table
      :data="tableData"
      v-loading="loading"
      style="width: 100%" class="ri_tab">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="people.name"
        label="姓名"
        width="240">
      </el-table-column>
      <el-table-column
        prop="duties"
        label="职务"
        width="330">
      </el-table-column>
      <el-table-column
        prop="companyName"
        label="所属从业机构"
      >
      </el-table-column>
      <el-table-column
        label="查看"
        width="150">
        <template slot-scope="scope">
          <router-link 　:to="{path:'executivesDetails', query:{peopleId:scope.row.people.id,employeeRefId:scope.row.id}}"　class="entranceBox monitor">
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
          :page-size="10"
          layout=" prev, pager, next "
          :total="total">
        </el-pagination>
      </el-col>

    </el-row>

  </div>
</template>

<script>
  /*高管*/
  import {
    dqArray,
    ywlbArray,
    searchFxzs,
    searchZzxs,
    searchStatus,
    searchMd,
    typeFormats,
    stateCode,
    onlineTime,
    jobTit
  } from '@/components/common/codes';
  import Ajax from "@/components/common/util";

  export default {
    name: "Executives",
    data() {
      return {
        tableData: [],
        loading: true,
        total: 0,
        pageNum: 1,
        pageSize: 10,
        input10: "",
        searchDq: dqArray,
        searchJob: jobTit,
        dq: "",
        job: "",
      }
    },
    methods: {
      getExeList(a){
        Ajax(
          {
            method:'post',
            url:'/employee/getTopManager',
            data:{
              pageNum:a||this.pageNum,
              pageSize:this.pageSize,
              area:this.dq,
              duties:this.job,
              name:this.websiteName
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
        // this.getExeList(1, this.pageSize);
      },
      handleCurrentChange(val) {
        this.pageNum = val;
        this.getExeList();
      },
      chooseDq: function (item) {
        this.dq = item;
        this.tableData = [];
        this.total = 0;
        this.getExeList();
      },
      chooseJob: function (item) {
        this.job = item;
        this.tableData = [];
        this.total = 0;
        this.getExeList();
      },
      toExecutivesDetails: function (id) {

      }
    },
    mounted() {
      this.getExeList();
    }
  }
</script>

<style scoped>

</style>
