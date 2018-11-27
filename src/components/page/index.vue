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
                <h2>正在预警的企业
                  <span>（1500家）</span>
                </h2>
                <a href="javascript:;">MORE></a>
              </div>
              <el-table :data="warningCom"  :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" height="200"  style="width: 100%">
                <el-table-column prop="warnDate" label="预警时间" width="100"></el-table-column>
                <el-table-column prop="comName" label="企业名称" width="180" ></el-table-column>
                <el-table-column prop="riskIndex" label="风险指数" width="120"></el-table-column>
                <el-table-column prop="operation" label="操作" width="95">
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
                <h2>已推送正在核查的企业
                  <span>（5家）</span>
                </h2>
                <a href="javascript:;">MORE></a>
              </div>
              <el-table :data="warningCom"  :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" height="200"  style="width: 100%">
                <el-table-column prop="warnDate" label="预警时间" width="100"></el-table-column>
                <el-table-column prop="comName" label="企业名称" width="180" ></el-table-column>
                <el-table-column prop="riskIndex" label="风险指数" width="120"></el-table-column>
                <el-table-column prop="operation" label="操作" width="95">
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
                <h2>已核查有信息反馈的企业
                  <span>（0家）</span>
                </h2>
                <a href="javascript:;">MORE></a>
              </div>
              <el-table :data="feedbackCom"  :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" height="200"  style="width: 100%">
                <el-table-column prop="warnDate" label="预警时间" width="100"></el-table-column>
                <el-table-column prop="comName" label="企业名称" width="180" ></el-table-column>
                <el-table-column prop="riskIndex" label="风险指数" width="120"></el-table-column>
                <el-table-column prop="operation" label="操作" width="95">
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
                <ningbo-map
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
              <ring-pie :seriesData="PiedefaultData"></ring-pie>
              <!-- <div id="barCount"></div> -->
              <region-bar></region-bar>
            </div>
          </el-col>
        </el-row>
        <list-frame></list-frame>
        </div>

      </el-scrollbar>
      </div>
      <div class="right_sidebar">
        <div class="adminBox">
          <div class="adminHead"><img src="../../assets/img/user_head.png" alt=""></div>
          <div class="adminInfo">
            <div class="name">用户名<span>33200808</span></div>
            <div class="date">本次登录<span>2018-9-11 11:11:11</span></div>
          </div>
        </div>
        <div class="frequentUse">
          <h2>常用入口</h2>
          <router-link to="Monitor" class="entranceBox monitor"><i class="iconfont icon-leida"></i><span>监测预警中心</span></router-link>
          <a href="javascript:;" class="entranceBox bigData"><i class="iconfont icon-kujialeqiyezhan_dashujuzhichi-"></i><span>大数据中心</span></a>
        </div>
        <div class="newPush">
          <h2>最新推送</h2>
          <ul class="pushList">
            <li>
              <h3>鄞州区新增一家高风险90预警机构钱包多金融有限公司机构，请及时查看。</h3>
              <div class="type-more display-flex justify-content-space-between align-items-center">
                  <div class="risk risk3">高风险</div>
                  <a href="javascript:;" class="more">查看详情</a>
              </div>
            </li>
            <li>
              <h3>鄞州区新增一家高风险90预警机构钱包多金融有限公司机构，请及时查看。</h3>
              <div class="type-more display-flex justify-content-space-between align-items-center">
                <div class="risk risk2">中风险</div>
                <a href="javascript:;" class="more">查看详情</a>
              </div>
            </li>
            <li>
              <h3>鄞州区新增一家高风险90预警机构钱包多金融有限公司机构，请及时查看。</h3>
              <div class="type-more display-flex justify-content-space-between align-items-center">
                <div class="risk risk1">低风险</div>
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
      warningCom: [
        {
          warnDate: '2018-8-27',
          comName: '中信银行股份有限公司',
          riskIndex: '38',
          operation: '查看'
        },
        {
          warnDate: '2018-8-27',
          comName: '中信银行股份有限公司',
          riskIndex: '38',
          operation: '查看'
        },
        {
          warnDate: '2018-8-27',
          comName: '中信银行股份有限公司',
          riskIndex: '38',
          operation: '查看'
        },
        {
          warnDate: '2018-8-27',
          comName: '中信银行股份有限公司',
          riskIndex: '38',
          operation: '查看'
        },
        {
          warnDate: '2018-8-27',
          comName: '中信银行股份有限公司',
          riskIndex: '38',
          operation: '查看'
        }
      ],
      feedbackCom: [

      ],
      PiedefaultData:[
          {
              value:1080,
              name:'正在预警的企业',
              itemStyle: {
                  color: '#46a0fc'
              }
          },
          {
              value:0,
              name:'已核查有信息反馈的企业',
              itemStyle: {
                  color: '#c4c4c4'
              }
          },
          {
              value:300,
              name:'已推送正在核查的企业',
              itemStyle: {
                  color: '#ffb73a'
              }
          }
      ],

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
      nodiData:[]

    }
  },
  components: {
    vHeader,ningboMap,ringPie,regionBar,listFrame
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
    },
    // 用户点击了返回按钮
    btnBackClick(){
        this.selectedRegionName = '';
        this.$refs.bodyRight.refreshMap();
    },
  },
  mounted(){
  }

}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/page/index.scss";
</style>
