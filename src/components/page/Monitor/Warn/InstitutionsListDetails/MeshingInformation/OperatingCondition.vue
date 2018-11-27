<template>
  <div class="Premises_body">
    <el-form ref="form" :model="form" label-width="270px">

      <el-form-item label="ICP备案许可证号码">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="产品备案号码">
        <span>{{form.name}}</span>
      </el-form-item>
      <div class="height30"></div>
      <el-form-item label="资金规模">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="资金池规模">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="代收金额">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="未兑付代偿金额">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="当前逾期金额">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="未兑付投资人数">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="平均年化收益率">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="预计最高年化收益">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="债标/项目数">
        <span>{{form.name}}</span>
      </el-form-item>
      <div class="height30"></div>
      <el-form-item label="分支机构及门店网点">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="机构主要银行账户及开户行">
        <span>{{form.name}}</span>
      </el-form-item>
      <div class="height30"></div>
      <el-form-item label="融资担保单位">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="存管银行/第三方支付公司">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="存管银行账号">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="总公司银行账户">
        <span>{{form.name}}</span>
      </el-form-item>
      <div class="height30"></div>
      <el-form-item label="平台名称">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="平台网址">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="运营人数">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="平台开发公司">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="平台数据保管人姓名">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="服务器托管单位">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="客户端类型">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="平台服务器供应商及联系人电话">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="网络平台维护企业或技术人员">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="其他资金通道">
        <span>{{form.name}}</span>
      </el-form-item>
      <div class="height30"></div>
      <el-form-item label="合作机构名称">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="合作性质">
        <span>{{form.name}}</span>
      </el-form-item>

      <div class="height30"></div>
    </el-form>
  </div>
</template>

<script>
  /*经营情况*/
    export default {
        name: "OperatingCondition",
      data() {
        return {
          form: {
            name: '实际经营地址实际经营地址',

          }
        }
      },
    }
</script>

<style scoped>

</style>
