<template>
  <div class=" orgDetails binfor_body">
    <div class="comDetails">
      <div class="title display-flex align-items-center"><div class="left">基本信息</div></div>
      <div class="basicInfo">
        <table width="100%" border="0">
          <tr>
            <td width="23%">机构名称</td>
            <td colspan="4">{{basicInfo.name}}</td>
          </tr>
          <tr>
            <td width="23%">统一社会信用代码/注册码</td>
            <td colspan="4">{{basicInfo.registrationMark}}</td>
          </tr>
          <tr>
            <td width="23%">排查方式</td>
            <td colspan="4">{{basicInfo.investigationMethod}}</td>
          </tr>
          <tr>
            <td width="23%">填报单位</td>
            <td colspan="4">{{basicInfo.fillInCompany}}</td>
          </tr>
          <tr>
            <td width="23%">联系电话</td>
            <td colspan="4">{{basicInfo.tel}}</td>
          </tr>
          <tr>
            <td width="23%">所在网格的网格员姓名</td>
            <td colspan="4">{{basicInfo.gridPerson}}</td>
          </tr>
          <tr>
            <td width="23%">参加联合排摸单位列表</td>
            <td colspan="4">{{basicInfo.investigationCompany}}</td>
          </tr>

        </table>
      </div>

    </div>

    <div class="comDetails">
      <div class="title display-flex align-items-center"><div class="left">三到</div></div>
      <div class="basicInfo">
        <table width="100%" border="0">
          <tr>
            <td width="20%" style="color: #333;">
              <big>经营场所</big>
            </td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="23%">实际经营地</td>
            <td colspan="4">{{doThree.businessAddress}}</td>
          </tr>
          <tr>
            <td width="23%">场所类型</td>
            <td colspan="4">{{doThree.placeType}}</td>
          </tr>
          <tr>
            <td width="23%">产权属性</td>
            <td colspan="4">{{doThree.propertyRight}}</td>
          </tr>
          <tr>
            <td width="23%">机构变动情况</td>
            <td colspan="4">{{doThree.changesContent}}</td>
          </tr>
          <tr>
            <td width="20%" style="color: #333; padding-top: 30px;">
              <big>实际控制人</big>
            </td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="23%">姓名</td>
            <td colspan="4">{{doThree.fullName}}</td>
          </tr>
          <tr>
            <td width="23%">身份证号码</td>
            <td colspan="4">{{doThree.idCardNO}}</td>
          </tr>
          <tr>
            <td width="23%">金融从业经历</td>
            <td colspan="4">{{doThree.experience}}</td>
          </tr>
          <tr>
            <td width="23%">经营思路及风控意识</td>
            <td colspan="4">{{doThree.managementMentality}}</td>
          </tr>
          <tr>
            <td width="20%" style="color: #333; padding-top: 30px;">
              <big>经营情况</big>
            </td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="23%">实际业务类型</td>
            <td colspan="4">{{doThree.businessType}}</td>
          </tr>
          <tr>
            <td width="23%">机构从业人数</td>
            <td colspan="4">{{doThree.practitioners}}</td>
          </tr>
          <tr>
            <td width="23%">投资者人数</td>
            <td colspan="4">{{doThree.investors}}</td>
          </tr>
          <tr>
            <td width="23%">资金规模</td>
            <td colspan="4">{{doThree.capitalScale}}</td>
          </tr>
          <tr>
            <td width="23%">代收金额</td>
            <td colspan="4">{{doThree.collectionAmount}}</td>
          </tr>

          <tr>
            <td width="23%">代付金额</td>
            <td colspan="4">{{doThree.paymentAmount}}</td>
          </tr>
          <tr>
            <td width="23%">平均年化收益率</td>
            <td colspan="4">{{doThree.annualizedReturn}}</td>
          </tr>
          <tr>
            <td width="23%">债标/项目数</td>
            <td colspan="4">{{doThree.numberOfItems}}</td>
          </tr>
          <tr>
            <td width="23%">分支机构及门店网点</td>
            <td colspan="4">{{doThree.branch}}</td>
          </tr>
          <tr>
            <td width="23%">机构主要银行账户及开户行</td>
            <td colspan="4">{{doThree.mainBankAccount}}</td>
          </tr>
          <tr>
            <td width="23%">公司资产状况</td>
            <td colspan="4">{{doThree.conditionAssets}}</td>
          </tr>
          <tr>
            <td width="23%">互联网金融</td>
            <td colspan="4">{{doThree.onlineFinance}}</td>
          </tr>
          <tr>
            <td width="23%">运营平台名称</td>
            <td colspan="4">{{doThree.platformName}}</td>
          </tr>
          <tr>
            <td width="23%">平台服务器供应商及联系人电话</td>
            <td colspan="4">{{doThree.contactTel}}</td>
          </tr>
          <tr>
            <td width="23%">网站地址</td>
            <td colspan="4">{{doThree.website}}</td>
          </tr>
          <tr>
            <td width="23%">网络平台维护企业或技术人员</td>
            <td colspan="4">{{doThree.technician}}</td>
          </tr>
          <tr>
            <td width="23%">其它资金渠道</td>
            <td colspan="4">{{doThree.remark}}</td>
          </tr>

        </table>
      </div>
    </div>

    <div class="comDetails">
      <div class="title display-flex align-items-center"><div class="left">三核</div></div>
      <div class="basicInfo">
        <table width="100%" border="0">
          <tr>
            <td width="20%" style="color: #333;">
              <big>核证照</big>
            </td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="23%">从事业务是否符合营业执照规定</td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="23%">实际经营地址是否与注册地址一致</td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="23%">法定代表人</td>
            <td colspan="4">{{checkThree.corporation}}</td>
          </tr>
          <tr>
            <td width="23%">注册资金</td>
            <td colspan="4">{{checkThree.registrationCapital}}</td>
          </tr>
          <tr>
            <td width="23%">实缴资金</td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="23%">注册日期</td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="23%">金融业务代理代销许可</td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="23%">税务登记证</td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="20%" style="color: #333; padding-top: 30px;">
              <big>核业务</big>
            </td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="23%">存在异常情况</td>
            <td colspan="4">存在</td>
          </tr>
          <tr>
            <td width="23%">建议处置方式</td>
            <td colspan="4">{{doThree.idCardNO}}</td>
          </tr>
          <tr>
            <td width="23%">资金用途</td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="20%" style="color: #333; padding-top: 30px;">
              <big>核人员</big>
            </td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="23%">请查看</td>
            <td colspan="4">《公司人员情况表》</td>
          </tr>

        </table>
      </div>
    </div>

    <div class="comDetails">
        <div class="title display-flex align-items-center"><div class="left">核查情况</div></div>
        <div class="basicInfo">
          <table width="100%" border="0">
            <tr>
              <td width="20%" style="color: #333; padding-top: 30px;">
                <big>核人员</big>
              </td>
              <td colspan="4"></td>
            </tr>
            <tr>
              <td width="23%">核查方式</td>
              <td colspan="4">{{checkStatus.checkMethod}}</td>
            </tr>
            <tr>
              <td width="23%">附件</td>
              <td colspan="4">
                <a href="#" style="text-decoration: underline; color: #519efe;">核查情况.doc</a>
              </td>
            </tr>
            <tr>
              <td width="20%" style="color: #333; padding-top: 30px;">
                <big>公司人员情况表</big>
              </td>
              <td colspan="4"></td>
            </tr>

          </table>
          <div style="padding: 0 20px;">
            <el-table
              :data="staffSituation"
              header-cell-class-name="list-header-row"
              style="width: 95%">
              <el-table-column
                prop="seq"
                label="序号"
                width="50">
              </el-table-column>
              <el-table-column
              prop="name"
              label="姓名"
              width="120">
              </el-table-column>
              <el-table-column
                prop="sex"
                label="性别"
                width="80">
              </el-table-column>
              <el-table-column
                prop="idCardNO"
                label="身份证号码"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="nativePlace"
                label="籍贯"
                width="100">
              </el-table-column>
              <el-table-column
                prop="permanentAddress"
                label="户籍地址"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="residentialAddress"
                label="经常居住地址"
                show-overflow-tooltip>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>


  </div>
</template>

<script>
    export default {
      name: "SubdistrictInvestigation",
      data () {
        return {
          basicInfo: {
            name: '宁波米利控股集团有限公司',
            registrationMark: '931330200316809914X',
            investigationMethod: '排查方式',
            investigationDate: '实地排摸时间',
            fillInCompany: '宁波鄞州区某某单位',
            tel: '0574-12345678',
            gridPerson: '叶小蒙',
            investigationCompany: 'GGG单位 HHH单位 KKK单位',
          },
          doThree: {
            businessAddress: '宁波市江东区江东北路29号5楼501室',
            placeType: '场所类型',
            propertyRight: '产权属性',
            changesContent: '这里显示机构变动内容信息，这里显示机构变动内容信息。',
            fullName: '张三',
            idCardNO: '3302XXXXXXXXXXXXXX',
            experience: '从业经历',
            managementMentality: '经营思路及风控意识非常棒！',
            businessType: '网络借贷',
            practitioners: '25486人',
            investors: '6000人',
            capitalScale: '50000万元',
            collectionAmount: '20000万元',
            paymentAmount: '22000万元',
            annualizedReturn: '10%',
            numberOfItems: '12个',
            branch: '分支机构及门店网点',
            mainBankAccount: '主要银行账户及开户行',
            conditionAssets: '公司资产状况',
            onlineFinance: '互联网金融',
            platformName: '米利财富',
            contactTel: '平台供服务器供应商及联系人电话',
            website: 'www.XXXXXX.com',
            technician: '网络平台维护企业或技术人员',
            othersFinancingChannel: '其它资金渠道'

          },
          checkThree:{
            corporation: '王雪平',
            registrationCapital: '2000万人民币',
            checkMethod: '核查方式',
          },
          checkStatus:{
            checkMethod: '核查方式',
          },
          staffSituation: [{
            seq: '1',
            name: '叶小蒙',
            sex: '男',
            idCardNO: '3302XXXXXXXXXXXXXX',
            nativePlace: '余姚市',
            permanentAddress: '户籍地址户籍地址户籍地址户籍地址户籍地址户籍地址',
            residentialAddress: '居住地址居住地址居住地址居住地址居住地址居住地址居住地址',
          }, {
            seq: '1',
            name: '叶小蒙',
            sex: '男',
            idCardNO: '3302XXXXXXXXXXXXXX',
            nativePlace: '余姚市',
            permanentAddress: '户籍地址户籍地址户籍地址户籍地址户籍地址户籍地址',
            residentialAddress: '居住地址居住地址居住地址居住地址居住地址居住地址居住地址',
          }]
        };
      },
      methods: {

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
      }
    }
</script>

<style lang='scss'>
  /*@import "@/assets/css/page/groundMonitoring.scss";*/
</style>

<style>
  .list-header-row {
    height: 30px;
    background-color: #46a0fc !important;
    color: #fff;
    text-align: center !important;
    padding: 6px 0 !important;
  }
</style>
