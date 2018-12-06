<!-- 机构详情 -->
<template>
  <div class="warn-content orgDetails">
      <div class="crumbs display-flex justify-content-space-between align-items-center">
        <div>
          <span class="state">预警中</span>-<span class="name">{{comInfo.name}}</span>
        </div>
        <router-link go="-1">
          <i class="iconfont icon-liebiao1"></i><span class="">返回列表</span>
        </router-link>
      </div>
      <div class="stepBox display-flex justify-content-space-around align-items-center">
        <div class="step">预警</div>
        <div class="line"></div>
        <div class="step">核查</div>
        <div class="line"></div>
        <div class="step">会商</div>
        <div class="line"></div>
        <div class="step">处置</div>
      </div>
      <org-top :orgTopInfo="comInfo">
        <div slot="report" class="report">
            <i class="el-icon-tickets"></i>
            <p><a href="#">风险分析报告</a></p>
        </div>
      </org-top>
      <div class="comDetails">
        <div class="title display-flex align-items-center">
          <div class="left">基本信息</div>
        </div>
        <div class="basicInfo">
          <table width="100%" border="0">
            <tr>
              <td width="8%">法人代表</td>
              <td colspan="4"><big>{{comInfo.corporation}}</big></td>
            </tr>
            <tr>
              <td>社会信用代码</td>
              <td width="38%">{{comInfo.credit}}</td>
              <td width="8%">公司状态</td>
              <td width="27%"><span class="themeBlue">{{comInfo.comState}}</span></td>
              <td width="19%" rowspan="4">
                <div class="comLogoBox"></div>
              </td>
            </tr>
            <tr>
              <td>注册日期</td>
              <td>{{comInfo.regDate}}</td>
              <td>注册资本</td>
              <td>{{comInfo.regCapital}}</td>
            </tr>
            <tr>
              <td>营业期限</td>
              <td>{{comInfo.businessTerm}}</td>
              <td>实缴资本</td>
              <td>{{comInfo.paidCapital}}</td>
            </tr>
            <tr>
              <td>注册地址</td>
              <td>{{comInfo.regAddress}}</td>
              <td>实际经营地址</td>
              <td>{{comInfo.operateAddress}}<a class="themeBlue">地图</a></td>
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
            <el-tab-pane v-for="item in comInfo.partRiskLine" :label="item.name" :key="item.key" :name="item.key">
              <risk-analysis v-if="item.key == activeTab" :riskLineData="comInfo.partRiskLine[item.key]"></risk-analysis>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="comDetails">
        <div class="title display-flex align-items-center">
          <div class="left">风险描述</div>
        </div>
        <div class="describeCont">
          风险描述风险描述风险描述风险描述风险描述风险描述风险描述风险描述风险描述风险描述风险描述风险描述风险描述风险描述
        </div>
      </div>
      <div class="comDetails">
        <div class="title display-flex justify-content-space-between align-items-center">
          <div class="left">风险点</div>
          <div class="right">核查总进度0/5</div>
        </div>
        <div class="riskPoint">
          <el-table :data="comInfo.riskPointData" style="width: 100%" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" >
            <el-table-column prop="order" label="序号" min-width="50"></el-table-column>
            <el-table-column prop="point" label="风险点" min-width="120"></el-table-column>
            <el-table-column prop="riskDetail" label="风险详情" min-width="210"></el-table-column>
            <el-table-column prop="state" label="状态" min-width="80"></el-table-column>
            <el-table-column prop="result" label="核查结果" min-width="80"></el-table-column>
            <el-table-column prop="feedback" label="反馈进度" min-width="80"></el-table-column>
            <el-table-column prop="checkDetail" label="核查详情" min-width="240"></el-table-column>
            <el-table-column prop="checkDate" label="核查时间" min-width="90"></el-table-column>
            <el-table-column label="操作" min-width="130">
              <template slot-scope="scope">
                <el-button type="primary" size="mini"  @click="comInfo.DialogBox.details = true">详情</el-button>
                <!--详情-->
                <el-dialog title="风险点详情" :visible.sync="comInfo.DialogBox.details" width="40%" center :show-close="false" :modal-append-to-body="false" :close-on-click-modal="false">
                  <p class="from" style="color:#999;margin-top: -23px;font-size: 14px;">2018-10-10 12:25:45 来自 天罗监测</p>
                  <dl>
                    <dt class="display-flex align-items-center">风险点</dt>
                    <dd>
                      <p><span class="themeBlue">集体上访</span></p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>风险详情</dt>
                    <dd>
                      <p>风险详情描述风险详情描述</p>
                    </dd>
                  </dl>
                  <dl>
                    <dt>核查过程</dt>
                    <dd>
                      <p>风险详情描述风险详情描述</p>
                    </dd>
                  </dl>
                  <span slot="footer" class="dialog-footer">
                    <el-button class="cancel" @click="comInfo.DialogBox.details = false">关闭</el-button>
                    <!-- <el-button class="confirm" type="primary" @click="comInfo.DialogBox.details = false">发起核查</el-button> -->
                  </span>
                </el-dialog>
                <!--详情-->
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="disposeBox">
            <el-button type="primary" class="consultation" @click="comInfo.DialogBox.consultation = true">会商</el-button>
            <!--会商-->
            <el-dialog title="会商" :visible.sync="comInfo.DialogBox.consultation" width="40%" center :show-close="false" :modal-append-to-body="false" :close-on-click-modal="false">
                <dl >
                <dt class="display-flex align-items-center">会商对象</dt>
                <dd>
                    <p><span class="themeBlue">宁波米利控股集团有限公司</span></p>
                </dd>
                </dl>
                <dl>
                <dt>会商详情</dt>
                <dd>
                    <p>截止日期<span class="red">*</span><span class="closeDate">2018-09-29</span><span class="closeDate">16:30</span>15天（默认）</p>
                    <el-input type="textarea" :rows="4" placeholder="请输入工作要求（选填）" style="margin-top:10px;"></el-input>
                    <el-upload
                    class="upload-demo"
                    style="padding-left:0"
                    action=""
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <div class="addBtn clearfix">
                      <div class="blueBg">
                        <i class="el-icon-plus"></i>
                      </div>
                      <span>添加图片/附件</span>
                    </div>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </dd>
                </dl>
                <dl>
                <dt>主送单位<span class="red">*</span></dt>
                <dd>
                    <el-checkbox-group v-model="checkboxGroup1" size="small">
                    <el-checkbox-button v-for="item in unit" :label="item" :key="item.index">{{item}}</el-checkbox-button>
                    </el-checkbox-group>
                </dd>
                </dl>
                <dl>
                <dt>抄送单位</dt>
                <dd>
                    <el-checkbox-group v-model="checkboxGroup2" size="small">
                    <el-checkbox-button v-for="item in unit" :label="item" :key="item.index">{{item}}</el-checkbox-button>
                    </el-checkbox-group>
                </dd>
                </dl>
                <span slot="footer" class="dialog-footer">
                <el-button class="cancel" @click="comInfo.DialogBox.consultation = false">取消</el-button>
                <el-button class="confirm" type="primary" @click="comInfo.DialogBox.consultation = false">发起会商</el-button>
                </span>
            </el-dialog>
            <!--会商-->
            <el-button type="primary" class="disposition" @click="comInfo.DialogBox.disposition = true">处置</el-button>
            <!--处置-->
            <el-dialog title="处置" :visible.sync="comInfo.DialogBox.disposition" width="40%" center :show-close="false" :modal-append-to-body="false" :close-on-click-modal="false">
                <dl >
                <dt class="display-flex align-items-center">处置对象</dt>
                <dd>
                    <p><span class="themeBlue">宁波米利控股集团有限公司</span></p>
                </dd>
                </dl>
                <dl>
                <dt>处置工作要求<span class="red">*</span></dt>
                <dd>
                    <p>截止日期<span class="red">*</span><span class="closeDate">2018-09-29</span><span class="closeDate">16:30</span>15天（默认）</p>
                    <el-input type="textarea" :rows="4" placeholder="请输入工作要求（选填）" style="margin-top:10px;"></el-input>
                    <el-upload
                    class="upload-demo"
                    style="padding-left:0"
                    action=""
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <div class="addBtn clearfix">
                      <div class="blueBg">
                        <i class="el-icon-plus"></i>
                      </div>
                      <span>添加图片/附件</span>
                    </div>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </dd>
                </dl>
                <dl>
                <dt>主送单位<span class="red">*</span></dt>
                <dd>
                    <el-checkbox-group v-model="checkboxGroup1" size="small">
                    <el-checkbox-button v-for="item in unit" :label="item" :key="item.index">{{item}}</el-checkbox-button>
                    </el-checkbox-group>
                </dd>
                </dl>
                <dl>
                <dt>抄送单位</dt>
                <dd>
                    <el-checkbox-group v-model="checkboxGroup2" size="small">
                    <el-checkbox-button v-for="item in unit" :label="item" :key="item.index">{{item}}</el-checkbox-button>
                    </el-checkbox-group>
                </dd>
                </dl>
                <span slot="footer" class="dialog-footer">
                <el-button class="cancel" @click="comInfo.DialogBox.disposition = false">取消</el-button>
                <el-button class="confirm" type="primary" @click="comInfo.DialogBox.disposition = false">发起处置</el-button>
                </span>
            </el-dialog>
            <!--处置-->
        </div>
      </div>
  </div>
</template>

<script>
import orgTop from '../common/orgTop';//机构详情头部组件
import riskWave from '../common/riskWave';//风险指数波动曲线组件
import riskAnalysis from '../common/riskAnalysis';//风险指数分析组件

export default {
  data () {
    return {
      activeTab: 0,
      unit: ['市非处半','市工商局','市监管局','市银监局','市政法委','市信用中心','市国税局','市证监局','市公安局','市网信办','市信访办'],
      checkboxGroup1: [],
      checkboxGroup2: [],
      radio: [],
      selRiskPoint: '',
      placeholder_n: '请输入核查结果详情\n情况属实时选填\n情况不属实时必填',
      riskPoint: [ '大量投诉举报','法人频繁变更','注册地异常','用户量巨大','集体上访'],
      comInfo:{
        name: '宁波米利控股集团有限公司',
        circleIndex: 90,
        riskIndexName: ['收益率指数','虚假宣传指数','关联风险','网格化监测','运行异常指数','负面舆情指数','信用指数','业务违规指数'],
        riskIndex: [15, 25, 35, 45, 55, 65, 75, 85],
        corporation: '王雪平',
        credit: '931330200316809914X',
        comState: '已立案',
        regDate: '2014-10-10',
        regCapital: '2000万人民币',
        businessTerm: '2014-10-10至2034-10-09',
        paidCapital: '1200万人民币',
        regAddress: '宁波市江东区江东北路29号5楼501',
        operateAddress: '宁波市江东区海曙区江厦街',
        totalRiskLine: [
          {'2017-01': 25},
          {'2017-02': 21},
          {'2017-03': 22},
          {'2017-04': 21},
          {'2017-05': 28},
          {'2017-06': 30},
          {'2017-07': 33},
          {'2017-08': 28},
          {'2017-09': 29},
          {'2017-10': 36},
          {'2017-11': 45},
          {'2017-12': 41},
          {'2018-01': 47},
          {'2018-02': 60},
          {'2018-03': 65},
          {'2018-04': 78},
          {'2018-05': 86},
          {'2018-06': 91},
          {'2018-07': 98},
          {'2018-08': 99},
        ],
        partRiskLine: [
          {
            name: '收益率指数',
            key: 0,
            riskNum: 38,
            riskDetails: ['收益率超过15%','收益率超过15%','收益率超过15%'],
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
            riskDetails: ['虚假宣传指数超过20%','虚假宣传指数超过20%'],
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
            riskDetails: ['关联风险超过20%'],
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
            riskDetails: ['网格化监测超过20%','网格化监测超过20%'],
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
            riskDetails: ['运行异常指数超过20%','运行异常指数超过15%'],
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
            riskDetails: ['负面舆情指数超过20%','负面舆情指数超过15%'],
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
            riskDetails: ['信用指数低于80','信用指数低于80'],
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
            riskDetails: ['业务违规指数超过15%','业务违规指数超过15%'],
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
        riskPointData: [
          {
            order: 1,
            point: '集体上访',
            riskDetail: '集体上访',
            state: '已核查',
            result: '属实',
            feedback: '3/3',
            checkDetail: '',
            checkDate: '2018-10-24'
          },
          {
            order: 1,
            point: '大量投诉举报',
            riskDetail: '',
            state: '已核查',
            result: '属实',
            feedback: '3/3',
            checkDetail: '',
            checkDate: ''
          },
          {
            order: 1,
            point: '法人频繁变更',
            riskDetail: '法人变更',
            state: '已核查',
            result: '属实',
            feedback: '3/3',
            checkDetail: '',
            checkDate: ''
          },
          {
            order: 1,
            point: '注册地异常',
            riskDetail: '',
            state: '已核查',
            result: '属实',
            feedback: '3/3',
            checkDetail: '处理详情处理详情',
            checkDate: ''
          }
        ],
        DialogBox:{
          check: false,
          confirm: false,
          addRisk: false,
          details: false,
          consultation: false,
          disposition: false
        }
      }
    };
  },
  components: {
    orgTop,riskWave,riskAnalysis
  },
  methods: {
    //表格头部样式
    headerCellStyle({row, column, rowIndex, columnIndex}){
      if(columnIndex === 1 || columnIndex === 2 || columnIndex === 6){
        return 'text-align:left;background:#ecf5ff;color:#333;padding:10px;font-size:18px;font-weight:normal;'
      }else{
        return 'background:#ecf5ff;color:#333;padding:10px 0 12px;text-align:center;font-size:18px;font-weight:normal;'
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
        return 'padding:10px;text-align:center;border-bottom:1px solid rgba(70, 160, 252, 0.2);'
      }
    },
    //文件超出个数限制时的钩子
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    //删除文件之前的钩子
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  },
  mounted() {

  }
}
</script>
<style lang='scss' >
    @import "@/assets/css/page/warn_org.scss";
    // .el-dialog__header{
    //   background: $fontColorBlue;
    //   color: #fff;
    //   padding-top: 10px;
    // }
    // .el-dialog__title {
    //   color: #fff;
    // }
    // .el-dialog--center {
    //   border-radius: 5px;
    //   overflow: hidden;
    // }
    // .el-dialog--center .el-dialog__body {
    //   padding: 40px 50px 40px;
    // }
    // .el-textarea__inner{
    //   border: 1px solid $fontColorBlue !important;
    // }
    // .el-checkbox-button{
    //   margin: 0 12px 10px 0;
    // }
    // .el-checkbox-button__inner {
    //   border: 1px solid $fontColorBlue;
    //   border-radius: 3px;
    //   color: $fontColorBlue;
    // }
    // .el-checkbox-button:first-child .el-checkbox-button__inner,.el-checkbox-button:last-child .el-checkbox-button__inne{
    //   border: 1px solid $fontColorBlue !important;
    //   border-radius: 3px !important;
    // }
    // .el-checkbox-button--small .el-checkbox-button__inner{
    //   border-radius: 3px !important;
    // }
    // .el-dialog__footer {
    //   padding: 10px 20px 50px;
    // }
    // .el-dialog__footer .el-button{
    //   width: 200px;
    //   padding: 16px 20px;
    //   font-size: 18px;
    // }
    // .el-dialog__footer .cancel{
    //   background: #c4c4c4 !important;
    // }
    // .el-dialog__footer .el-button+.el-button {
    //   margin-left: 40px;
    // }

</style>
