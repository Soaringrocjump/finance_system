<template>
  <div class="wrapper">
    <v-header headerType="indexHeader"></v-header>
    <div class="index-content">
      <div class="scroll-box" >
        <el-scrollbar style="height:100%" :native="false" wrapStyle="" wrapClass="" viewClass="" viewStyle="" :noresize="false" tag="section">
          <div class="content-box" >
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="comBox">
              <div class="title display-flex justify-content-space-between">
                <h2>预警中的机构
                  <span>（{{warningTotal}}家）</span>
                </h2>
                <el-button type="text"  @click="moreList('预警中')">MORE</el-button>
              </div>
              <el-table :data="warningCom"  :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" height="200"  style="width: 100%">
                <el-table-column prop="warningTime" label="预警时间" min-width="100">
                  <template slot-scope="scope">
                    <div>{{scope.row.warningTime | formatterDate}}</div>
                  </template>
                </el-table-column>
                <el-table-column prop="companyName" label="企业名称" min-width="180"  :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="riskIndex" label="风险指数" min-width="120">
                  <template slot-scope="scope">
                    <div>
                      <div v-bind:class="[scope.row.riskIndex>=85?'highRisk':'',
                      scope.row.riskIndex<85&&scope.row.riskIndex>=55?'middleRisk':'',
                      scope.row.riskIndex<55?'lowRisk':'']" >{{scope.row.riskIndex}}</div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="operation" label="操作" min-width="95">
                  <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)" class="moreBtn" >查看</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="comBox">
              <div class="title display-flex justify-content-space-between">
                <h2>会商中的机构
                  <span>（{{meetingTotal}}家）</span>
                </h2>
                <el-button type="text"  @click="moreList('会商中')">MORE</el-button>
              </div>
              <el-table :data="meetingCom"  :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" height="200"  style="width: 100%">
                <el-table-column prop="warningTime" label="预警时间" min-width="100">
                  <template slot-scope="scope">
                    <div>{{scope.row.warningTime | formatterDate}}</div>
                  </template>
                </el-table-column>
                <el-table-column prop="companyName" label="企业名称" min-width="180" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="riskIndex" label="风险指数" min-width="120">
                  <template slot-scope="scope">
                    <div>
                      <div v-bind:class="[scope.row.riskIndex>=85?'highRisk':'',
                      scope.row.riskIndex<85&&scope.row.riskIndex>=55?'middleRisk':'',
                      scope.row.riskIndex<55?'lowRisk':'']" >{{scope.row.riskIndex}}</div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="operation" label="操作" min-width="95">
                  <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)" class="moreBtn" >查看</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="comBox">
              <div class="title display-flex justify-content-space-between">
                <h2>处置中的机构
                  <span>（{{disposeTotal}}家）</span>
                </h2>
                <el-button type="text"  @click="moreList('处置中')">MORE</el-button>
              </div>
              <el-table :data="disposeCom"  :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" height="200"  style="width: 100%">
                <el-table-column prop="warningTime" label="预警时间" min-width="100">
                  <template slot-scope="scope">
                    <div>{{scope.row.warningTime | formatterDate}}</div>
                  </template>
                </el-table-column>
                <el-table-column prop="companyName" label="企业名称" min-width="180" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="riskIndex" label="风险指数" min-width="120">
                  <template slot-scope="scope">
                    <div>
                      <div v-bind:class="[scope.row.riskIndex>=85?'highRisk':'',
                      scope.row.riskIndex<85&&scope.row.riskIndex>=55?'middleRisk':'',
                      scope.row.riskIndex<55?'lowRisk':'']" >{{scope.row.riskIndex}}</div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="operation" label="操作" min-width="95">
                  <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)" class="moreBtn" >查看</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col  :lg="12" :xl="9">
            <div class="chartBox">
              <div class="title">类金融机构分布</div>
              <div id="ningboMap">
                <!--<button type="button" v-if="isArea">返回</button>-->
                <ningbo-map
                  v-on:toCity="toCity"
                  :displayMode="rightDisplayMode"
                  :regions="regions"
                  @listenerChangeDisplayMode="changeRightDisplayMode"
                  @listenerChangeSelectedRegionName="changeSelectedRegionName"
                  ref="bodyRight"
                />
              </div>
            </div>
          </el-col>
          <el-col :lg="12" :xl="15">
            <div class="chartBox">
              <div class="title">统计分析</div>
              <!-- <div id="pieCount"></div> -->
              <ring-pie :annularChartList="annularChartList" v-if="annularChartList !=null && annularChartList !=''"></ring-pie>
              <!-- <div id="barCount"></div> -->
              <region-bar :chartList="chartList" v-if="chartList !=null && chartList !='' && isArea==false" ></region-bar>
              <region-area-bar :chartList="chartList" v-if=" chartList !=null && chartList !='' && isArea == true "  ></region-area-bar>
            </div>
          </el-col>
        </el-row>
            <el-dialog v-bind:title="status+'的机构'" :visible.sync="dialogTableVisible" :modal-append-to-body="false" width="70%" custom-class="companyTable" :close="tableClose">
              <list-frame :status="status" :area="selectedRegionName" :dialogTableVisible="dialogTableVisible"  trigger="click" v-if="dialogTableVisible"></list-frame>
            </el-dialog>
        </div>

      </el-scrollbar>
      </div>
      <div class="right_sidebar">
        <div class="adminBox">
          <div class="adminHead"><img src="../../assets/img/user_head.png" alt=""></div>
          <div class="adminInfo">
            <div class="name">用户名<span>{{user.username}}</span></div>
            <div class="date">本次登录<span>{{date}}</span></div>
          </div>
        </div>
        <div class="frequentUse">
          <h2>常用入口</h2>
          <router-link to="Monitor" class="entranceBox monitor"><i class="iconfont icon-leida"></i><span>监测预警中心</span></router-link>
          <router-link to="DataCenter" class="entranceBox bigData"><i class="iconfont icon-kujialeqiyezhan_dashujuzhichi-"></i><span>大数据中心</span></router-link>
        </div>
        <div class="newPush">
          <h2>最新推送</h2>
          <ul class="pushList" v-for="item in messageList">
            <li>
              <h3>{{item.content}}</h3>
              <div class="type-more display-flex justify-content-space-between align-items-center">
                  <!--<div class="risk risk3">高风险</div>-->
                  <a href="javascript:;" class="more">查看详情</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from '../common/Header.vue';
import ningboMap from '@/components/module/ningboMap.vue'
import ringPie from '@/components/module/ringPie.vue'
import regionBar from '@/components/module/regionBar.vue'
import regionAreaBar from '@/components/module/regionAreaBar.vue'
import listFrame from '@/components/module/listFrame.vue'


//此方法不管用
//鼠标划入滚动条展现，鼠标划出滚动条隐藏
// function scrollbarShowHidden(element){
//     element.addClass('scrollbarHide');
//     element.hover(function() {
//         element.addClass('scrollbarShow');
//     }, function() {
//         element.removeClass('scrollbarShow');
//     });
//     console.log("进入方法")

// }
// scrollbarShowHidden($('.el-table__body-wrapper'));

let regions = [
  {name: '海曙区', company_count: 0, risk: 60},
  {name: '江北区', company_count: 0, risk: 0},
  {name: '鄞州区', company_count: 0, risk: 100},
  {name: '镇海区', company_count: 0, risk: 0},
  {name: '高新区', company_count: 0, risk: 0},
  {name: '北仑区', company_count: 0, risk: 0},
  {name: '余姚市', company_count: 0, risk: 0},
  {name: '宁海县', company_count: 0, risk: 0},
  {name: '慈溪市', company_count: 0, risk: 0},
  {name: '象山县', company_count: 0, risk: 0},
  {name: '海洋科技城', company_count: 0, risk: 0},
  {name: '奉化区', company_count: 0, risk: 0},
  {name: '杭州湾新区', company_count: 0, risk: 0},
  {name: '保税区', company_count: 0, risk: 0},
  {name: '东钱湖', company_count: 0, risk: 0},
  {name: '大榭', company_count: 0, risk: 0}
];

export default {
  name: 'index',
  data(){
    return {
      warningCom: [],
      warningTotal:"",
      meetingCom: [],
      meetingTotal:"",
      disposeCom: [],
      disposeTotal:"",
      messageList: [],
      chartList:[],
      annularChartList:[],
      feedbackCom: [],
      //是否为区县
      isArea:false,
      //弹窗风险等级
      status:"",

      // 当前页面是否为登陆页面
      isLoginPage:true,
      // 当前地图选中的地区
      selectedRegionName: '',
      // 右边模块显示模式(risk和count，代表风险模式和数量模式)
      rightDisplayMode: 'risk',
      // 所有地区数据
      regions: regions,
      modal3: false,
      modal4: false,
      flag:1,
      csid:0,
      ljrjglxfb:{},
      ljrjglxfb:{},
      date: new Date(),
      nodiData:[],
      user:{},
      dialogTableVisible: false,
      date:new Date().toLocaleDateString()
    }
  },
  components: {
    vHeader,ningboMap,ringPie,regionBar,listFrame,regionAreaBar
  },
  methods: {
    //表格头部样式
    headerCellStyle({}){
      return 'background:#083157;color:#fff;padding:7px 0;border:0;textAlign:center;font-size:18px;font-weight:normal;'
    },
    //每行样式
    rowStyle({}){
      return 'background:#083157;color:#fff;text-align:center;font-size:14px;'
    },
    /*偶数行底色加深*/
    cellStyle({row, column, rowIndex, columnIndex}){
      if(rowIndex%2 === 1){
        return 'background:rgba(70, 160, 252, 0.03);border:0;padding:9px 0;'
      }else{
        return 'background:#012444;border:0;padding:8px 0;'
      }
    },
    // 右边模块显示模式修改后触发此方法
    changeRightDisplayMode(mode) {

        this.rightDisplayMode = mode;
    },
    // 点击地图上的某一个地区时触发此方法
    changeSelectedRegionName(selectedRegionName) {

        this.selectedRegionName = selectedRegionName;
      this.isArea=true;
      this.getWarningList(selectedRegionName);
      this.getMeetingList(selectedRegionName);
      this.getDisposeList(selectedRegionName);
      this.getMessageList(selectedRegionName);
      this.getStatisticalAnalysis(selectedRegionName);
    },
    // 用户点击了返回按钮
    btnBackClick(){
        this.selectedRegionName = '';
        this.$refs.bodyRight.refreshMap();
    },
    //获取预警中企业
    getWarningList(area){
      this.$axios({
        method: "post",
        url: this.HOME +"warning/query",
        headers: {
          token: sessionStorage.getItem("authorization"),
          "content-type": "application/json;charset=UTF-8"
        },
        data: JSON.stringify({
          "area":area,
          "pageNum": 1,
          "pageSize": 5,
          "warnStatus": "预警中"
        })
      })
        .then(result => {
          if (result.data.resultCode != "200") alert("错误：" + msg.message);
          var msg = !this.$common.isNull(result.data.data)
            ? result.data.data
            : "";
          this.warningCom = msg.list;
         this.warningTotal = msg.total;
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    //获取会商中企业
    getMeetingList(area){

      this.$axios({
        method: "post",
        url: this.HOME +"warning/query",
        headers: {
          token: sessionStorage.getItem("authorization"),
          "content-type": "application/json;charset=UTF-8"
        },
        data: JSON.stringify({
          "area":area,
          "pageNum": 1,
          "pageSize": 5,
          "warnStatus": "会商中"
        })
      })
        .then(result => {
          if (result.data.resultCode != "200") alert("错误：" + msg.message);
          var msg = !this.$common.isNull(result.data.data)
            ? result.data.data
            : "";
          this.meetingCom = msg.list;
          this.meetingTotal = msg.total;
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    //获取处置中企业
    getDisposeList(area){

      this.$axios({
        method: "post",
        url: this.HOME +"warning/query",
        headers: {
          token: sessionStorage.getItem("authorization"),
          "content-type": "application/json;charset=UTF-8"
        },
        data: JSON.stringify({
          "area":area,
          "pageNum": 1,
          "pageSize": 5,
          "warnStatus": "处置中"
        })
      })
        .then(result => {
          if (result.data.resultCode != "200") alert("错误：" + msg.message);
          var msg = !this.$common.isNull(result.data.data)
            ? result.data.data
            : "";
          this.disposeCom = msg.list;
          this.disposeTotal = msg.total;
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    //获取最新推送
    getMessageList(area){

      this.$axios({
        method: "post",
        url: this.HOME +"message/latestPush?pagebegin=1&pagesize=4",
        headers: {
          token: sessionStorage.getItem("authorization"),
          "content-type": "application/json;charset=UTF-8"
        },
        data: {}
      })
        .then(result => {
          if (result.data.resultCode != "200") alert("错误：" + msg.message);
          var msg = !this.$common.isNull(result.data.data)
            ? result.data.data
            : "";
          this.messageList=msg.list;
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    //统计分析
    getStatisticalAnalysis(area){
      var that=this;
      this.chartList=[];
      this.annularChartList=[];
      this.$axios({
        method: "post",
        url: this.HOME +"company/statisticalAnalysis",
        headers: {
          token: sessionStorage.getItem("authorization"),
          "content-type": "application/json;charset=UTF-8"
        },
        data: JSON.stringify({
          "area":area
        })

      })
        .then(result => {
          if (result.data.resultCode != "200") alert("错误：" + msg.message);
          var msg = !this.$common.isNull(result.data.data)
            ? result.data.data
            : "";
          //

          that.chartList=msg.arealist;
          that.annularChartList=msg.companylist;
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    //返回按钮
    toCity(){
      this.isArea=false;
      this.selectedRegionName="";
      this.chartList=[];
      this.annularChartList=[];
      this.getWarningList();
      this.getMeetingList();
      this.getDisposeList();
      this.getMessageList();
      this.getStatisticalAnalysis();
    },
     //点击more 弹窗
    moreList(status){
      this.dialogTableVisible=true;
      this.status=status;
    },
    tableClose(){
      this.status=""
    }

  },
  mounted(){
    //获取用户
    let user=sessionStorage.getItem("user");
    user= JSON.parse(user);
    this.user=user;
    if(user.area!=null && user.area!=''){
      this.isArea=true;
    }

    this.getWarningList(user.area);
    this.getMeetingList(user.area);
    this.getDisposeList(user.area);
    this.getMessageList(user.area);
    this.getStatisticalAnalysis(user.area);
  }

}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/page/index.scss";

</style>
<style>
  .companyTable{
    background: #012444 !important;
  }
  .el-dialog__title{
    color: white !important;

  }
  .el-dialog__header{
    background: #47a0fc;
    text-align: center;
  }
  .el-dialog__close{
    background: #fff;
  }
  .el-dialog__body{
    padding-top: 0px;
  }
  .highRisk{
    color:  #ff4352;
  }
  .middleRisk{
    color:  #fdbb0a;
  }
  .lowRisk{
    color:   #2a6fb2;
  }
</style>
