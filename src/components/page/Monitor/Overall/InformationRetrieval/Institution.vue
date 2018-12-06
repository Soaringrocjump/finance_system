<template>
  <div class="ir_body" >
    <el-row>
      <el-col :span="12">
        <el-input
          placeholder="输入机构名称进行搜索"
          v-model="companyName"
          clearable
         >
        </el-input>
      </el-col>
      <el-col :span="1.5"><el-button type="primary" style="width: 90px;margin-left: 15px;margin-right: 15px;border-radius: 0px;" @click="toSearch">搜索</el-button></el-col>
      <el-col :span="5"><p style="margin-top: 10px" v-if="total">查询到的机构总量{{total}}家</p></el-col>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-col :span="2" >
        <div class="pt_five_l" >
          <ul>
            <li>业务类型</li>
            <li v-if="user.area ==null || user.area ==''">地区</li>
            <li>组织形式</li>
            <li>经营状态</li>
            <li>名单</li>
            <li>风险指数</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="22">
        <div  class="pt_five_r" style="">
          <ul >
            <li >
              <a v-bind:class="[ywlx==''?'backcob':'']"  @click="chooseYwlx('')">全部</a>
              <a v-bind:class="[ywlx==item?'backcob':'']" v-for="item in searchYwlx" @click="chooseYwlx(item)">{{item}}</a>
            </li>
          </ul>
          <ul  v-if="user.area ==null || user.area ==''">
            <li >
              <a v-bind:class="[dq==''?'backcob':'']"  @click="chooseDq('')">全部</a>
              <a v-bind:class="[dq==item?'backcob':'']"  @click="chooseDq(item)" v-for="item in searchDq">{{item}}</a>
            </li>
          </ul>
          <ul >
            <li >
              <a v-bind:class="[zzxs==''?'backcob':'']"  @click="chooseZzxs('')">全部</a>
              <a v-bind:class="[zzxs==item?'backcob':'']"  @click="chooseZzxs(item)" v-for="item in searchZzxs">{{item}}</a>
            </li>
          </ul>
          <ul >
            <li >
              <a v-bind:class="[status==''?'backcob':'']"  @click="chooseStatus('')">全部</a>
              <a v-bind:class="[status==item?'backcob':'']"  @click="chooseStatus(item)" v-for="item in searchStatus">{{item}}</a>
            </li>
          </ul>
          <ul >
            <li >
              <a v-bind:class="[md==''?'backcob':'']"  @click="chooseMd('')">全部</a>
              <a v-bind:class="[md==item?'backcob':'']"  @click="chooseMd(item)" v-for="item in searchMd">{{item}}</a>
            </li>
          </ul>
          <ul >
            <li>
              <a v-bind:class="[fxzs==''?'backcob':'']"  @click="chooseFxzs('')">全部</a>
              <a v-bind:class="[fxzs==item?'backcob':'']"  @click="chooseFxzs(item)" v-for="item in searchFxzs">{{item}}</a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-scrollbar style="height: 100%; border: 1px solid #f3f3f3;"  v-loading="loading">
      <div class="it_tab_head">
          <span style="width: 650px;padding-left: 10px">机构</span>
          <span style="width: 180px">风险等级</span>
          <span style="width: 275px;padding-left: 30px">风险指数</span>
          <span style="width: 200px">经营状态</span>
          <span style="width: 300px;text-align: center;">风险偏向</span>
      </div>

      <div class="it_tab_body" >
        <ul v-for="item in companyList" v-if="companyList.length>0">
          <li class="itb_li">
            <ul>
              <li class="itb_li1">
                <h3>{{item.companyName}}</h3>
                <span><div>法定代表人：</div>{{item.legalName}}</span>
                <span><div>注册资本：</div>{{item.capital}}万{{item.capitalBz}}</span>
                <span><div>注册时间：</div>{{item.registTime}}</span>
                <span v-if="item.companyReal"><div>实际经营地：</div>{{item.companyReal.province}}{{item.companyReal.city}}{{item.companyReal.area}}{{item.companyReal.street}}{{item.companyReal.address}}</span>
                <!--<p>-->
                  <!--宁波米利投资管理有限公司，注册资金2亿元，是宁波本土一家实力雄厚、专业可靠的投资管理公司，-->
                  <!--公司秉承“诚信、稳健、卓越、进取、互利共赢”的经营理念，建立了一个完善的P2P（个人对个人）-->
                  <!--信用借款平台。该企业主要风险点：1.存在行政处罚，罚款10000元，罚款 24000元 2.提供增信服务-->
                  <!--3.信息披露不透明 4.资金未存管在银行业金融机构 5.高息利诱 6.未向投资人提示投资风险 7.存在-->
                  <!--线下推广资金...端业务 8.向不特定人群宣传募集资金-->
                <!--</p>-->
              </li>
              <li class="itb_li2">
                <div v-if="item.riskWave" v-bind:class="{fx_high:item.riskWave.riskIndex>=85,
                                                        fx_mid:item.riskWave.riskIndex<85&&item.riskWave.riskIndex>=55,
                                                        fx_low:item.riskWave.riskIndex<55}" ></div>
              </li>
              <li class="itb_li3">
                <div class="itb_li3_son" v-if="item.riskWave">
                  <span>{{item.riskWave.riskIndex}}</span>
                  <el-progress  :stroke-width="10" :percentage="item.riskWave.riskIndex" :show-text="false"></el-progress>
                </div>
              </li>
              <li class="itb_li4">{{item.status}}</li>
              <li class="itb_li5">
                <div :id="'myzs-' + item.id"></div>
              </li>

            </ul>
          </li>

        </ul>
      </div>

    </el-scrollbar>
    <el-row class="ri_bot">
      <!--<el-col :span="12" style="padding-left: 20px">-->
        <!--<el-checkbox v-model="checked"></el-checkbox>-->
        <!--<el-button class="ri_btn">批量导出</el-button>-->
      <!--</el-col>-->
      <el-col  style="text-align: right;padding-right: 20px">
        <el-pagination background layout="prev, pager, next" :page-size="5" :total="total" @size-change="handleSizeChange"
                       @current-change="handleCurrentChange" ></el-pagination>
      </el-col>

    </el-row>

  </div>
</template>

<script>
  import {ywlbArray, dqArray,searchFxzs,searchZzxs,searchStatus,searchMd} from '@/components/common/codes';
  /*机构*/
  import ChartUtils from '@/components/common/charts'

  // 风险指数

    export default {
        name: "Institution",
      data() {
        return {
          searchYwlx: ywlbArray,
          searchDq: dqArray,
          searchZzxs: searchZzxs,
          searchFxzs: searchFxzs,
          searchStatus:searchStatus,
          searchMd:searchMd,
          loading:true,
          checked:"",
          companyName: "",
          companyList:[],
          total:0,
          pageNum:1,
          ywlx:"",
          dq:"",
          zzxs:"",
          status:"",
          md:"",
          fxzs:"",
          user:{},
        }
      },
      methods:{
        //获取列表数据
        getList(){
          this.loading=true;
          // let loadingInstance1 = Loading.service({ fullscreen: true });
          var that=this;
          this.$axios({
            method: "post",
            url: this.HOME +"company/getList",
            headers: {
              token: sessionStorage.getItem("authorization"),
              "content-type": "application/json;charset=UTF-8"
            },

            data: JSON.stringify({
              "pageNum": this.pageNum,
              "pageSize": 5,
              "companyName":this.companyName,
              "businessType":this.ywlx,
              "area":this.dq,
              "organizational":this.zzxs,
              "status":this.status,
              "isBlackOrGrey":this.md,
              "warningLevel":this.fxzs
            })
          })
            .then(result => {
              if (result.data.resultCode != "200") alert("错误：" + msg.message);
              var msg = !this.$common.isNull(result.data.data)
                ? result.data.data
                : "";
              that.companyList=msg.list;
              that.total=msg.total;
              that.$nextTick(function () {
                for (let i = 0, len = msg.list.length; i < len; i++) {
                  // 顺序:[收益率偏离指数、投诉举报指数、特征词命中指数、传播力指数、合规性指数、部门监管信用指数、网格化监测指数]
                  //'工信部-收益率偏高指数';'工信部-网格化检测指数';'工信部-部门信用指数';'工信部-负面舆情指数';'工信部-运行异常指数';'工信部-业务违规指数';'工信部-关联风险指数';'工信部-虚假宣传指数';
                  let com = msg.list[i].riskWave;
                  if (i == 0) {
                    // console.log(com);
                  }
                  ChartUtils.radarMyzs(
                    'myzs-' + msg.list[i].id,
                    [com.rate, com.wg, com.bmxy, com.fmyq, com.yxxc, com.ywwg, com.glfx, com.xjxc]);
                }
              });
              // that.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
              //   loadingInstance1.close();
              // });
              that.loading=false;
            })
            .catch(err => {
              alert("错误：获取数据异常" + err);
            });
        },
        handleCurrentChange(val) {

          this.pageNum=val;
          this.getList();
        },
        handleSizeChange(val) {
        },
        toSearch(){
          this.getList();
        },
        chooseYwlx:function(item){
          this.ywlx=item;
          this.companyList=[];
          this.total=0;
          this.getList();
        },
        chooseDq:function (item) {
          this.dq=item;
          this.companyList=[];
          this.total=0;
          this.getList();
        },
        chooseZzxs:function (item) {
          this.zzxs=item;
          this.companyList=[];
          this.total=0;
          this.getList();
        },
        chooseStatus:function (item) {
          this.status=item;
          this.companyList=[];
          this.total=0;
          this.getList();
        },
        chooseMd:function (item) {
          this.md=item;
          this.companyList=[];
          this.total=0;
          this.getList();
        },
        chooseFxzs:function (item) {
          this.fxzs=item;
          this.companyList=[];
          this.total=0;
          this.getList();
        }
      },
      mounted() {
        let user=sessionStorage.getItem("user");
        user= JSON.parse(user);
        this.user=user;
        if(user.area!=null && user.area!=''){
          this.dq=user.area;
        }
          this.getList();
        // ChartUtils.radarMyzs(
        //   'myzs-1',
        //   [15, 25, 35, 45, 55, 65, 75, 85]
        // );
      }
    }
</script>

<style scoped>
  .fx_high{
    width: 60px;
    height: 60px;
    margin-top: 90px;
    background-image: url("../../../../../assets/img/high.png");
  }
  .fx_mid{
    width: 60px;
    height: 60px;
    margin-top: 90px;
    background-image: url("../../../../../assets/img/mid.png");
  }
  .fx_low{
    width: 60px;
    height: 60px;
    margin-top: 90px;
    background-image: url("../../../../../assets/img/low.png");
  }
</style>
