<template>
  <div class=" orgDetails binfor_body">
    <div class="comDetails">
      <div class="title display-flex align-items-center"><div class="left">基础信息</div></div>
      <div class="basicInfo">
        <table width="100%" border="0">
          <tr>
            <td width="20%">机构名称</td>
            <td colspan="4">
              <big>{{comInfo.name}}</big>
            </td>
          </tr>
          <tr>
            <td width="20%">法定代表人（负责人）</td>
            <td colspan="4">{{comInfo.corporation}}</td>
          </tr>
          <tr>
            <td width="20%">统一社会信用代码/注册码</td>
            <td colspan="4">{{comInfo.registrationMark}}</td>
          </tr>
          <tr>
            <td width="20%">注册日期</td>
            <td colspan="4">{{comInfo.registrationDate}}</td>
          </tr>
          <tr>
            <td width="20%">注册资本</td>
            <td colspan="4">{{comInfo.registeredCapital}}</td>
          </tr>
          <tr>
            <td width="20%">注册地址</td>
            <td colspan="4">{{comInfo.registeredAddress}}</td>
          </tr>
          <tr>
            <td width="20%">联系电话</td>
            <td colspan="4">{{comInfo.tel}}</td>
          </tr>
          <tr>
            <td width="20%">经营范围</td>
            <td colspan="4">{{comInfo.businessScope}}</td>
          </tr>
          <tr>
            <td width="20%">登记机关</td>
            <td colspan="4">{{comInfo.registrationAuthority}}</td>
          </tr>

        </table>
      </div>

    </div>

    <div class="comDetails">
      <div class="title display-flex align-items-center"><div class="left">金融信息</div></div>
      <div class="basicInfo">
        <table width="100%" border="0">
          <tr>
            <td width="20%">机构实际地址</td>
            <td colspan="4">{{comInfo.businessAddress}}</td>
          </tr>
          <tr>
            <td width="20%">业务类别</td>
            <td colspan="4">{{comInfo.businessType}}</td>
          </tr>
          <tr>
            <td width="20%">机构类型</td>
            <td colspan="4">{{comInfo.institutionType}}</td>
          </tr>
          <tr>
            <td width="20%">机构变动情况</td>
            <td colspan="4">{{comInfo.institutionChanges}}</td>
          </tr>
          <tr>
            <td width="20%">机构名称关键字</td>
            <td colspan="4">{{comInfo.institutionKeywords}}</td>
          </tr>
          <tr>
            <td width="20%">注册情况</td>
            <td colspan="4">{{comInfo.registrationStatus}}</td>
          </tr>
          <tr>
            <td width="20%">信息来源</td>
            <td colspan="4">{{comInfo.infoSources}}</td>
          </tr>
          <tr>
            <td width="20%">认领的县级部门</td>
            <td colspan="4">{{comInfo.countyDepartment}}</td>
          </tr>
          <tr>
            <td width="20%">建议处置方式</td>
            <td colspan="4">{{comInfo.disposalMode}}</td>
          </tr>
          <tr>
            <td width="20%">核查方式</td>
            <td colspan="4">{{comInfo.verificationMode}}</td>
          </tr>

        </table>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      name: "FinancialInformation",
      data () {
        return {
          comInfo:{
            name: '宁波米利控股集团有限公司',
            corporation: '王雪平',
            registrationMark: '931330200316809914X',
            registrationDate: '2014-10-10',
            registrationCapital: '2000万人民币',
            tel: '0574-12345678',
            registeredCapital: '1200万人民币',
            registeredAddress: '宁波市江东区江东北路29号5楼501',
            businessScope: '投资管理；企业管理咨询；经济贸易咨询；二手车经纪、经销；房产信息咨询；商务信息咨询；物业管理；会议服务；广告服务；展览展示服务；接受金融机构委托从事金融业务流程外包。（未经金融等监管部门批准不得从事吸收存款、资质担保、代客理财、向社会公众集（融）资等金融业务）。',
            registrationAuthority: '宁波市市场监察管理局某某分局',
            businessAddress: '宁波市江东区江东北路29号5楼501室',
            businessType: '网络借贷',
            institutionType: '机构类型',
            institutionChanges: '这里显示机构变动情况信息',
            institutionKeywords: '米利',
            registrationStatus: '注册情况',
            infoSources:'信息来源',
            countyDepartment: '鄞州区某某部门',
            disposalMode: '立案调查',
            verificationMode: '网格摸排',
          }
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
  /*@import "@/assets/css/page/warn_org.scss";*/
</style>

<style scoped>

</style>
