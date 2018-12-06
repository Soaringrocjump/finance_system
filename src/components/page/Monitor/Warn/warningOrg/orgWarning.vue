  <!-- 机构详情 created by zp -->
<template>
  <div class="warn-content orgDetails">
      <div class="crumbs display-flex justify-content-space-between align-items-center">
        <div>
          <span class="state">{{comInfo.status}}</span>-<span class="name">{{comInfo.companyName}}</span>
        </div>
        <div @click="$router.go(-1)" style="cursor:pointer">
          <i class="iconfont icon-liebiao1"></i><span class="">返回列表</span>
        </div>
      </div>
      <div class="stepBox display-flex justify-content-space-around align-items-center">
        <div :class="[comInfo.status == '预警中' ? 'stepGoing' : '']" class="step">预警</div>
        <div class="line"></div>
        <div v-if="comInfo.status == '核查中'"  class="step stepGoing">核查</div>
        <div v-else-if="comInfo.status == '已核查'" class="step stepOver">核查</div>
        <div v-else class="step">核查</div>
        <div class="line"></div>
        <div v-if="comInfo.status == '会商中'"  class="step stepGoing">会商</div>
        <div v-else-if="comInfo.status == '已会商'" class="step stepOver">会商</div>
        <div v-else class="step">会商</div>
        <div class="line"></div>
        <div :class="[comInfo.status == '处置中' ? 'stepGoing' : '']" class="step">处置</div>
      </div>
      <org-top :orgTopInfo="company" :riskIndex="comInfo.riskIndex">

      </org-top>
      <div class="comDetails">
        <div class="title display-flex align-items-center">
          <div class="left">基本信息</div>
        </div>
        <div class="basicInfo">
          <table width="100%" border="0">
            <tr>
              <td width="12%">法人代表</td>
              <td colspan="4"><big>{{company.legalName}}</big></td>
            </tr>
            <tr>
              <td>社会信用代码</td>
              <td width="30%">{{company.creditCode}}</td>
              <td width="12%">公司状态</td>
              <td width="26%"><span class="themeBlue">{{company.remark}}</span></td>
              <td width="20%" rowspan="4">
                <div class="comLogoBox"></div>
              </td>
            </tr>
            <tr>
              <td>注册日期</td>
              <td>{{company.registTime}}</td>
              <td>注册资本</td>
              <td>{{company.capital}}</td>
            </tr>
            <tr>
              <td>营业期限</td>
              <td>{{company.businessStart}}—{{company.businessEnd}}</td>
              <td>实缴资本</td>
              <td>{{company.realpayment}}</td>
            </tr>
            <tr>
              <td>注册地址</td>
              <td>{{company.address}}</td>
              <td>实际经营地址</td>
              <td>{{company.companyReal}}<a class="themeBlue">地图</a></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="comDetails">
        <div class="title display-flex align-items-center">
          <div class="left">风险详情</div>
        </div>
        <div class="riskWaveBox">
          <div class="title">风险指数波动曲线</div>
          <risk-wave :orgLineChart="comInfo.totalRiskLine"></risk-wave>
        </div>
        <div class="title display-flex align-items-center" style="border: none;">
          <div class="left">风险指数分析</div>
        </div>
        <div class="riskTab">
          <el-tabs type="card" tab-position="left" v-model="activeTab">
            <el-tab-pane v-for="item in partRiskLine" :label="item.name" :key="item.key" >
              <risk-analysis v-if="item.key == activeTab" :riskLineData="partRiskLine[item.key]"></risk-analysis>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="comDetails">
        <div class="title display-flex align-items-center">
          <div class="left">风险描述</div>
        </div>
        <div class="describeCont">
          {{comInfo.description}}
        </div>
      </div>
      <div class="comDetails">
        <div class="title display-flex justify-content-space-between align-items-center">
          <div class="left">风险点</div>
          <div class="right">核查总进度{{comInfo.hasBackRisk}}/{{comInfo.totalRisk}}</div>
        </div>
        <div class="">
          <el-table :data="comInfo.warningRisks" style="width: 100%" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" >
            <el-table-column type="index" label="序号" width="60"></el-table-column>
            <el-table-column prop="title" label="风险点" min-width="120"></el-table-column>
            <el-table-column prop="description" label="风险详情" min-width="150"></el-table-column>
            <el-table-column prop="status" label="状态" min-width="70">
              <template slot-scope="scope">
                <span v-if="scope.row.status == '待处理'" class="warning">{{scope.row.status}}</span>
                <span v-else-if="scope.row.status == '待核查'" class="warning">{{scope.row.status}}</span>
                <span v-else-if="scope.row.status == '待反馈'" class="warning">{{scope.row.status}}</span>
                <span v-else-if="scope.row.status == '已核查'" class="primary">{{scope.row.status}}</span>
                <span v-else-if="scope.row.status == '有退回||超时退回'" class="danger">{{scope.row.status}}</span>
                <span v-else>{{scope.row.status}}</span>
                <!-- <span >{{scope.row.status}}</span> -->
              </template>
            </el-table-column>
            <el-table-column label="核查结果" min-width="90">
              <template slot-scope="scope">
                <span v-if="scope.row.result == '不属实'" class="danger"><i class="el-icon-circle-check"></i>{{scope.row.result}}</span>
                <span v-else-if="scope.row.result == '属实'" class="primary"><i class="el-icon-circle-check"></i>{{scope.row.result}}</span>
                <span v-else>{{scope.row.result}}</span>
              </template>
            </el-table-column>
            <el-table-column  label="反馈进度" min-width="90">
              <template slot-scope="scope">
                <span>{{scope.row.hasBackRiskDown}}/{{scope.row.totalRiskDown}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="decsripent" label="核查详情" min-width="150"></el-table-column>
            <el-table-column  label="核查时间" min-width="90">
              <template slot-scope="scope">
                <span v-if="scope.row.backTime == null">{{scope.row.backTime}}</span>
                <span v-else>{{scope.row.backTime.substr(0,10)}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" min-width="120">
              <template slot-scope="scope">
                <div v-if="departmentId == 38">
                  <div v-if="scope.row.status == '待处理'">
                    <el-button  type="primary" size="mini" @click="checkPop(scope.row)">核查</el-button>
                    <el-button  type="primary" size="mini"  @click="confirmPop(scope.row)">确认</el-button>
                  </div>
                  <el-button v-else-if="scope.row.status == '待核查'" type="primary" size="mini" @click="checkDetail(scope.row)">详情</el-button>
                  <el-button v-else-if="scope.row.status == '已核查'" type="primary" size="mini" @click="checkDetail(scope.row)">详情</el-button>
                </div>
                <div v-else>
                  <div v-if="scope.row.status == '待核查'">
                    <el-button  type="primary" size="mini" @click="checkConfirmPop(scope.row)">退回</el-button>
                    <el-button  type="primary" size="mini" @click="checkConfirmPop(scope.row)">确认</el-button>
                  </div>
                  <el-button v-else-if="scope.row.status == '已核查'" type="primary" size="mini" @click="checkDetail(scope.row)">详情</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 金融办账号才显示 -->
        <div v-if="departmentId == 38" class="addRow">
          <div v-if="status == '预警中'|| status == '核查中'" class="addBtn clearfix" @click="addRiskPop(warningNo)">
            <div class="blueBg">
              <i class="el-icon-plus"></i>
            </div>
            <span>添加风险点</span>
          </div>
        </div>
      </div>
      <div v-if="warningDownForMeet !== null && warningDownForMeet.length > 0" class="comDetails">
        <div class="title display-flex justify-content-space-between align-items-center">
          <div class="left">会商详情</div>

          <div v-if="userDownForMeet.departmentId == departmentId" class="right">
            反馈进度{{userDownForMeet.backCountReady}}/{{userDownForMeet.backCountAll}}
          </div>
        </div>
        <div v-if="departmentId == 38">
          <table  class="consDetailTable" style="width: 100%">
            <thead>
              <tr>
                <th width="10%">序号</th>
                <th width="20%">时间</th>
                <th width="20%">单位</th>
                <th width="50%">会商详情</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in warningDownForMeet" :key="index">
                <td v-if="item.warningBack !== null">{{index + 1}}</td>
                <td v-if="item.warningBack !== null">{{item.warningBack.backTime | formatterDate}}</td>
                <td v-if="item.warningBack !== null">{{item.warningBack.departmentId}}</td>
                <td v-if="item.warningBack !== null">{{item.warningBack.remark}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="userDownForMeet.departmentId !== 38" class="riskPoint">
          <p>{{userDownForMeet.downTime | formatterDate}} 来自 {{userDownForMeet.fromDepartmentId}}</p>
          <p>{{userDownForMeet.remark}}</p>
        </div>
      </div>
      <p v-if="userDownForMeet.departmentId !== 38 && userDownForMeet.departmentId == departmentId && userDownForMeet.warningBack == null" class="endTime">会商截止日期：{{userDownForMeet.upTime | formatterDate}} 请您尽快回复</p>
      <div v-if="userDownForMeet.departmentId !== 38 && userDownForMeet.departmentId == departmentId && userDownForMeet.warningBack == null" class="receiptBox">
        <el-button type="primary" @click="consReceiptPop(userDownForMeet)">会商回执</el-button>
      </div>
      <div v-if="warningSummaryForMeet !== null" class="comDetails">
        <div class="title display-flex align-items-center">
          <div class="left">会商总结</div>
        </div>
        <div class="describeCont">
            <h2 class="danger">机构状态：{{warningSummaryForMeet.result}}</h2>
            <p>{{warningSummaryForMeet.remark}}</p>
        </div>
      </div>
      <div v-if="departmentId == 38"> 
        <div v-if="status == '已核查' || status == '会商中'" class="disposeBox">
              <el-button type="primary" @click="consultationPop(comInfo)">会商</el-button>
              <el-button type="primary" @click="dispositionPop(comInfo)">处置</el-button>
        </div>
        <div v-if="status == '已会商'" class="disposeBox">
            <span v-if="warningSummaryForMeet == null">
              <el-button type="primary" @click="constSumPop(comInfo)">会商总结</el-button>
            </span>
              <el-button type="primary" @click="dispositionPop(comInfo)">处置</el-button>
        </div>
        <!-- <div v-if="status == '处置中'" class="disposeBox">
          <el-button type="primary" @click="dispositionPop(comInfo)">处置</el-button>
        </div> -->
        <!-- <div v-if="status == '已处置'" class="disposeBox">
          <el-button type="primary" @click="dispSumPop(comInfo)">处置总结</el-button>
        </div> -->
      </div>
      <!-- 弹框组件 --> 
      <add-risk-dialog ref="addRiskBox" v-on:reRequest="updatePage"></add-risk-dialog>
      <check-dialog ref="checkBox" v-on:reRequest="updatePage"></check-dialog>
      <confirm-dialog ref="confirmBox" v-on:reRequest="updatePage"></confirm-dialog>
      <confirm-dialog ref="confirmBox" v-on:reRequest="updatePage"></confirm-dialog>
      <check-detail-dialog ref="checkDetailBox" v-on:reRequest="updatePage" :departmentId="departmentId"></check-detail-dialog>
      <consultation-dialog ref="consultationBox" v-on:reRequest="updatePage"></consultation-dialog>
      <disposition-dialog ref="dispositionBox" v-on:reRequest="updatePage"></disposition-dialog>
      <const-sum-dialog ref="constSumBox" v-on:reRequest="updatePage"></const-sum-dialog>
      <disp-sum-dialog ref="dispSumBox" v-on:reRequest="updatePage"></disp-sum-dialog>
      <check-confirm-dialog ref="checkConfirmBox" v-on:reRequest="updatePage" :departmentId="departmentId"></check-confirm-dialog>
      <cons-receipt-dialog ref="consReceiptBox" v-on:reRequest="updatePage"></cons-receipt-dialog>
  </div>
</template>

<script>
import orgTop from '../common/orgTop';//机构详情头部组件
import riskWave from '../common/riskWave';//风险指数波动曲线组件
import riskAnalysis from '../common/riskAnalysis';//风险指数分析组件
import addRiskDialog from '../common/addRiskDialog';//添加风险点弹框组件
import checkDialog from '../common/checkDialog';//核查弹框组件
import confirmDialog from '../common/confirmDialog';//确认弹框组件
import checkDetailDialog from '../common/checkDetailDialog';//详情弹框组件
import consultationDialog from '../common/consultationDialog';//会商弹框组件
import dispositionDialog from '../common/dispositionDialog';//处置弹框组件
import constSumDialog from '../common/constSumDialog';//会商总结弹框组件
import dispSumDialog from '../common/dispSumDialog';//处置总结弹框组件
import checkConfirmDialog from '../common/checkConfirmDialog';//核查回执弹框组件
import consReceiptDialog from '../common/consReceiptDialog';//会商回执弹框组件

export default {
  data () {
    return {
      warningNo: '',
      departmentId: sessionStorage.getItem('departmentId'),
      activeTab: 0,
      comInfo: '',
      company: '',
      status: '',
      warningDownForMeet: '',  //会商详情
      warningSummaryForMeet: '',  //会商总结详情
      userDownForMeet: '',  //下发到的部门id所在下发详情对象
      //风险指数分析假数据 暂用
      partRiskLine: [
        {
          name: '收益率指数',
          key: 0,
          riskNum: 38,
          riskDetails: ['收益率达到15%'],
          riskLine: [
            {'2017-01': 25},
            {'2017-02': 21},
            {'2017-03': 22},
            {'2017-04': 21},
            {'2017-05': 28},
            {'2017-06': 31},
            {'2017-07': 31},
            {'2017-08': 28},
            {'2017-09': 29},
            {'2017-10': 26},
            {'2017-11': 25},
            {'2017-12': 31},
            {'2018-01': 37},
            {'2018-02': 40},
            {'2018-03': 35},
            {'2018-04': 38},
            {'2018-05': 36},
            {'2018-06': 51},
            {'2018-07': 48},
            {'2018-08': 49},
          ]
        },
        {
          name: '虚假宣传指数',
          key: 1,
          riskNum: 65,
          riskDetails: ['虚假宣传指数达到30%'],
          riskLine: [
            {'2017-01': 25},
            {'2017-02': 31},
            {'2017-03': 42},
            {'2017-04': 41},
            {'2017-05': 48},
            {'2017-06': 51},
            {'2017-07': 51},
            {'2017-08': 58},
            {'2017-09': 59},
            {'2017-10': 56},
            {'2017-11': 55},
            {'2017-12': 61},
            {'2018-01': 67},
            {'2018-02': 60},
            {'2018-03': 65},
            {'2018-04': 68},
            {'2018-05': 76},
            {'2018-06': 71},
            {'2018-07': 78},
            {'2018-08': 79},
          ]
        },
        {
          name: '关联风险',
          key: 2,
          riskNum: 75,
          riskDetails: ['关联风险达到23%'],
          riskLine: [
            {'2017-01': 75},
            {'2017-02': 71},
            {'2017-03': 72},
            {'2017-04': 71},
            {'2017-05': 78},
            {'2017-06': 71},
            {'2017-07': 71},
            {'2017-08': 78},
            {'2017-09': 79},
            {'2017-10': 76},
            {'2017-11': 75},
            {'2017-12': 71},
            {'2018-01': 77},
            {'2018-02': 70},
            {'2018-03': 75},
            {'2018-04': 78},
            {'2018-05': 76},
            {'2018-06': 71},
            {'2018-07': 78},
            {'2018-08': 79},
          ]
        },
        {
          name: '网格化监测',
          key: 3,
          riskNum: 95,
          riskDetails: ['网格化监测达到30%'],
          riskLine: [
            {'2017-01': 95},
            {'2017-02': 91},
            {'2017-03': 92},
            {'2017-04': 91},
            {'2017-05': 98},
            {'2017-06': 91},
            {'2017-07': 91},
            {'2017-08': 98},
            {'2017-09': 99},
            {'2017-10': 96},
            {'2017-11': 95},
            {'2017-12': 91},
            {'2018-01': 97},
            {'2018-02': 90},
            {'2018-03': 95},
            {'2018-04': 98},
            {'2018-05': 96},
            {'2018-06': 91},
            {'2018-07': 98},
            {'2018-08': 99},
          ]
        },
        {
          name: '运行异常指数',
          key: 4,
          riskNum: 65,
          riskDetails: ['运行异常指数达到75%'],
          riskLine: [
            {'2017-01': 25},
            {'2017-02': 31},
            {'2017-03': 42},
            {'2017-04': 41},
            {'2017-05': 48},
            {'2017-06': 51},
            {'2017-07': 51},
            {'2017-08': 58},
            {'2017-09': 59},
            {'2017-10': 56},
            {'2017-11': 55},
            {'2017-12': 61},
            {'2018-01': 67},
            {'2018-02': 60},
            {'2018-03': 65},
            {'2018-04': 68},
            {'2018-05': 76},
            {'2018-06': 71},
            {'2018-07': 78},
            {'2018-08': 79},
          ]
        },
        {
          name: '负面舆情指数',
          key: 5,
          riskNum: 65,
          riskDetails: ['负面舆情指数达到80%'],
          riskLine: [
            {'2017-01': 95},
            {'2017-02': 91},
            {'2017-03': 92},
            {'2017-04': 91},
            {'2017-05': 98},
            {'2017-06': 91},
            {'2017-07': 91},
            {'2017-08': 98},
            {'2017-09': 99},
            {'2017-10': 96},
            {'2017-11': 95},
            {'2017-12': 91},
            {'2018-01': 97},
            {'2018-02': 90},
            {'2018-03': 95},
            {'2018-04': 98},
            {'2018-05': 96},
            {'2018-06': 91},
            {'2018-07': 98},
            {'2018-08': 99},
          ]
        },
        {
          name: '信用指数',
          key: 6,
          riskNum: 65,
          riskDetails: ['信用指数低于80'],
          riskLine: [
            {'2017-01': 25},
            {'2017-02': 31},
            {'2017-03': 42},
            {'2017-04': 41},
            {'2017-05': 48},
            {'2017-06': 51},
            {'2017-07': 51},
            {'2017-08': 58},
            {'2017-09': 59},
            {'2017-10': 56},
            {'2017-11': 55},
            {'2017-12': 61},
            {'2018-01': 67},
            {'2018-02': 60},
            {'2018-03': 65},
            {'2018-04': 68},
            {'2018-05': 76},
            {'2018-06': 71},
            {'2018-07': 78},
            {'2018-08': 79},
          ]
        },
        {
          name: '业务违规指数',
          key: 7,
          riskNum: 95,
          riskDetails: ['业务违规指数达到15%'],
          riskLine: [
            {'2017-01': 95},
            {'2017-02': 91},
            {'2017-03': 92},
            {'2017-04': 91},
            {'2017-05': 98},
            {'2017-06': 91},
            {'2017-07': 91},
            {'2017-08': 98},
            {'2017-09': 99},
            {'2017-10': 96},
            {'2017-11': 95},
            {'2017-12': 91},
            {'2018-01': 97},
            {'2018-02': 90},
            {'2018-03': 95},
            {'2018-04': 98},
            {'2018-05': 96},
            {'2018-06': 91},
            {'2018-07': 98},
            {'2018-08': 99},
          ]
        },
      ],
    };
  },
  components: {
    orgTop,riskWave,riskAnalysis,addRiskDialog,checkDialog,confirmDialog,checkDetailDialog,consultationDialog,dispositionDialog,constSumDialog,consReceiptDialog,checkConfirmDialog,dispSumDialog
  },
  methods: {
    //表格头部样式
    headerCellStyle({row, column, rowIndex, columnIndex}){
      if(columnIndex === 1 || columnIndex === 2 || columnIndex === 6){
        return 'text-align:left;background:#ecf5ff;color:#333;padding:10px;font-size:18px;font-weight:normal;'
      }else{
        return 'background:#ecf5ff;color:#333;padding:10px 0;text-align:center;font-size:18px;font-weight:normal;'
      }
    },
    //每行样式
    rowStyle({}){
      return 'background:#fff;color:#333;text-align:center;font-size:14px;'
    },
    //每单元格样式
    cellStyle({row, column, rowIndex, columnIndex}){
      if(columnIndex === 1 || columnIndex === 2 || columnIndex === 6){
        return 'padding:10px;text-align:left;border-bottom:1px solid rgba(70, 160, 252, 0.2);'
      }else{
        return 'padding:10px 0;text-align:center;border-bottom:1px solid rgba(70, 160, 252, 0.2);'
      }
    },
    
    //会商详情表格头部样式
    consHeaderCellStyle({row, column, rowIndex, columnIndex}){
      if(columnIndex === 3){
        return 'text-align:left;background:#ecf5ff;color:#333;padding:10px;font-size:18px;font-weight:normal;'
      }else{
        return 'background:#ecf5ff;color:#333;padding:10px 0;text-align:center;font-size:18px;font-weight:normal;'
      }
    },
    //每行样式
    // rowStyle({}){
    //   return 'background:#fff;color:#333;text-align:center;font-size:14px;'
    // },
    //每单元格样式
    consCellStyle({row, column, rowIndex, columnIndex}){
      if(columnIndex === 3){
        return 'padding:10px;text-align:left;border-bottom:1px solid rgba(70, 160, 252, 0.2);'
      }else{
        return 'padding:10px 0;text-align:center;border-bottom:1px solid rgba(70, 160, 252, 0.2);'
      }
    },
    //文件超出个数限制时的钩子
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    //获取页面详情数据
    getCompanyDetail(queryId){
      console.log(queryId);
      this.$axios({
        method: "post",
        url: this.HOME +"warning/get?warningNo=" + queryId,
        headers: {
          "content-type": "application/json;charset=UTF-8"
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.resultCode != "200") alert("错误：" + res.data.message);
          let msg = !this.$common.isNull(res.data)
            ? res.data.data
            : "";
          this.comInfo = msg;
          this.company = msg.company;
          this.status = msg.status;
          // if(msg.warningDownForMeet.length > 0){}
          this.warningDownForMeet = msg.warningDownForMeet;
          //拿到会商详情数组里部门id等于当前登录人部门id的一组数据
          let departmentId = this.departmentId;
          msg.warningDownForMeet.forEach(e => {
            if(e.departmentId == departmentId){
              this.userDownForMeet = e;
              this.userDownForMeet.companyName = msg.companyName;
            }
          });
          this.warningSummaryForMeet = msg.warningSummaryForMeet;
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    //添加风险点按钮事件
    addRiskPop(val){
      this.$refs['addRiskBox'].showDialog(val);
    },
    //核查按钮事件
    checkPop(val){
      this.$refs['checkBox'].showDialog(val);
    },
    //确认按钮事件
    confirmPop(val){
      this.$refs['confirmBox'].showDialog(val);
    },
    //风险点详情
    checkDetail(val){
      this.$refs['checkDetailBox'].showDialog(val);
    },
    //会商
    consultationPop(val){
      this.$refs['consultationBox'].showDialog(val);
    },
    //处置
    dispositionPop(val){
      this.$refs['dispositionBox'].showDialog(val);
    },
    //会商总结
    constSumPop(val){
      this.$refs['constSumBox'].showDialog(val);
    },
    //处置总结
    dispSumPop(val){
      this.$refs['dispSumBox'].showDialog(val);
    },
    //核查回执
    checkConfirmPop(val){
      this.$refs['checkConfirmBox'].showDialog(val);
    },
    //会商回执
    consReceiptPop(val){
      this.$refs['consReceiptBox'].showDialog(val);
    },
    //重新请求详情页数据
    updatePage(){
      this.getCompanyDetail(this.warningNo);
    }
  },
  //过滤器 有问题
  // filters: {
  //   formatDepartmentId(val){
  //     if (!val) return ''
  //     this.$axios({
  //       method: "get",
  //       url: this.HOME +"dic/getDepartment",
  //       headers: {
  //         token: sessionStorage.getItem("authorization"),
  //         "content-type": "application/json;charset=UTF-8"
  //       }
  //     })
  //       .then(res => {
  //         if (res.data.resultCode == 200){
  //           res.data.data.values.forEach(e => {
  //             if(e.code == val){
  //               return e.name
  //             }
  //           });
  //         }
  //       })
  //       .catch(err => {
  //         alert("错误：获取数据异常" + err);
  //       });
  //   }
  // },
  activated(){
    //获取传入warningNo
    this.warningNo = this.$route.query.warningNo;
    this.getCompanyDetail(this.warningNo);
    // console.log(this.departmentId);
  }
}

</script>
<style lang='scss' >
    @import "@/assets/css/page/warn_org.scss";

</style>
