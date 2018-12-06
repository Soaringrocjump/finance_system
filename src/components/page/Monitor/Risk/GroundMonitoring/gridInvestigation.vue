<template>
  <div class=" orgDetails binfor_body">
    <div class="comDetails">
      <div class="title display-flex align-items-center"><div class="left">基础信息</div></div>
      <div class="basicInfo">
        <table width="100%" border="0">
          <tr>
            <td width="20%">服务对象</td>
            <td colspan="4">{{basicInfo.serviceObject}}</td>
          </tr>
          <tr>
            <td width="20%">服务时间</td>
            <td colspan="4">{{basicInfo.serviceDate}}</td>
          </tr>
          <tr>
            <td width="20%">服务所属网格</td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="20%">服务地址</td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="20%">x坐标</td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="20%">服务内容</td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td width="20%">附件</td>
            <td colspan="4"></td>
          </tr>

        </table>
      </div>

    </div>

  </div>
</template>

<script>
    export default {
      name: "gridInvestigation",
      data () {
        return {
          basicInfo:{
            serviceObject: '宁波米利控股集团有限公司',
            serviceDate: '2018-11-10',
          }
        };
      },
    }
</script>

<style scoped>

</style>
