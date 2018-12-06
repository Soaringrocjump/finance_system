<template>
  <div class=" orgDetails binfor_body">
    <div class="comDetails">
      <div class="title display-flex align-items-center"><div class="left">经营情况</div></div>
      <div class="basicInfo">
        <table width="100%" border="0">
          <tr>
            <td width="20%">实际业务类别</td>
            <td colspan="4">{{businessCircumstance.businessType}}</td>
          </tr>
          <tr>
            <td width="20%">机构类型</td>
            <td colspan="4">{{businessCircumstance.institutionType}}</td>
          </tr>
          <tr>
            <td width="20%">机构变动情况</td>
            <td colspan="4">{{businessCircumstance.institutionChanges}}</td>
          </tr>
          <tr>
            <td width="20%">变动内容</td>
            <td colspan="4">{{businessCircumstance.changesContent}}</td>
          </tr>
          <tr>
            <td width="20%">注册情况</td>
            <td colspan="4">{{businessCircumstance.registrationStatus}}</td>
          </tr>
          <tr>
            <td width="20%">从业人数</td>
            <td colspan="4">{{businessCircumstance.practitioners}}</td>
          </tr>
          <tr>
            <td width="20%">投资者人数</td>
            <td colspan="4">{{businessCircumstance.investors}}</td>
          </tr>
          <tr>
            <td width="20%">吸收资金规模</td>
            <td colspan="4">{{businessCircumstance.capitalScale}}</td>
          </tr>
          <tr>
            <td width="20%">平均年华收益率</td>
            <td colspan="4">{{businessCircumstance.annualizedReturn}}</td>
          </tr>
          <tr>
            <td width="20%">资金用途</td>
            <td colspan="4">{{businessCircumstance.useOfFound}}</td>
          </tr>
          <tr>
            <td width="20%">网站地址</td>
            <td colspan="4">{{businessCircumstance.website}}</td>
          </tr>
          <tr>
            <td width="20%">存在异常情况</td>
            <td colspan="4">{{businessCircumstance.abnormal}}</td>
          </tr>
          <tr>
            <td width="20%">核查方式</td>
            <td colspan="4">{{businessCircumstance.verificationMode}}</td>
          </tr>

        </table>
      </div>

    </div>

    <div class="comDetails">
      <div class="title display-flex align-items-center"><div class="left">机构处置方式</div></div>
      <div class="basicInfo">
        <table width="100%" border="0">
          <tr>
            <td width="20%">机构名称</td>
            <td colspan="4">{{disposal.name}}</td>
          </tr>
          <tr>
            <td width="20%">联系电话</td>
            <td colspan="4">{{disposal.tel}}</td>
          </tr>
          <tr>
            <td width="20%">乡镇街道建议处置方式</td>
            <td colspan="4">{{disposal.suggestDisposalMode}}</td>
          </tr>
          <tr>
            <td width="20%">实际处置方式</td>
            <td colspan="4">{{disposal.actualDisposalMode}}</td>
          </tr>
          <tr>
            <td width="20%">处置前有无会商</td>
            <td colspan="4">{{disposal.isConsultation}}</td>
          </tr>
          <tr>
            <td width="20%">会商日期</td>
            <td colspan="4">{{disposal.consultationDate}}</td>
          </tr>
          <tr>
            <td width="20%">参与会商单位</td>
            <td colspan="4">{{disposal.consultationCompany}}</td>
          </tr>
          <tr>
            <td width="20%">参与处置单位</td>
            <td colspan="4">{{disposal.disposalCompany}}</td>
          </tr>
          <tr>
            <td width="20%">处置进展情况</td>
            <td colspan="4">{{disposal.disposalProgress}}</td>
          </tr>
          <tr>
            <td width="20%">注册登记会商情况</td>
            <td colspan="4">{{disposal.registrationConsultation}}</td>
          </tr>
          <tr>
            <td width="20%">相关广告会商情况</td>
            <td colspan="4">{{disposal.advertisementConsultation}}</td>
          </tr>
          <tr>
            <td width="20%">相关案件会商情况</td>
            <td colspan="4">{{disposal.casesConsultation}}</td>
          </tr>
          <tr>
            <td width="20%">备注</td>
            <td colspan="4">{{disposal.remark}}</td>
          </tr>

        </table>
      </div>

      <div class="comDetails">
        <div class="title display-flex align-items-center"><div class="left">机构处置方式</div></div>
        <div class="basicInfo">
          <table width="100%" border="0">
            <tr>
              <td width="20%">填报单位</td>
              <td colspan="4">{{fillIn.fillInCompany}}</td>
            </tr>
            <tr>
              <td width="20%">填报日期</td>
              <td colspan="4">{{fillIn.fillInDate}}</td>
            </tr>

          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      name: "CountyCheckInfo",
      data () {
        return {
          businessCircumstance:{
            businessType: '网络借贷',
            institutionType: '机构类型',
            institutionChanges: '这里显示机构变动情况信息',
            changesContent: '这里显示机构变动内容信息，这里显示机构变动内容信息。',
            registrationStatus: '注册情况',
            practitioners: '25486人',
            investors: '6000人',
            capitalScale: '50000万元',
            annualizedReturn: '10%',
            useOfFound: '资金用途是什么',
            website: 'www.xxxxxx.com',
            abnormal: '异常情况',
            verificationMode: '网格摸排',
          },
          disposal:{
            name: '宁波米利控股集团有限公司',
            tel: '0574-12345678',
            suggestDisposalMode: '立案调查',
            actualDisposalMode: '实际上也立案调查了',
            isConsultation: '有',
            consultationDate: '2018-11-29',
            consultationCompany: 'AAA单位 BBB单位 CCC单位',
            disposalCompany: 'DDD单位 EEE单位 FFF单位',
            disposalProgress: '已完成处置',
            registrationConsultation: '注册登记会商情况',
            advertisementConsultation: '相关广告会商情况',
            casesConsultation: '相关案件会商情况',
            remark: '备注',
          },
          fillIn:{
            fillInCompany: '宁波鄞州区某某单位',
            fillInDate: '2018-11-01'
          },
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
