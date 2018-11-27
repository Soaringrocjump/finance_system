<template>
  <div class="Premises_body">
    <el-form ref="form" :model="form" label-width="270px">

      <el-form-item label="是否存在地推行为或线下宣传行为">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="管理层是否频繁更换">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="母公司是实体企业，设立P2P平台">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="是否承诺保本">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="是否承诺固定收益">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="人员出入量是否较大">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="投资者中是否以老年人居">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="举办大型活动">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="年假日是否有人值班">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="相关异常情况">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item >
        <span>{{form.name}}</span>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  /*异常信息*/
    export default {
        name: "ExceptionInformation",
      data() {
        return {
          form: {
            name: '实际经营地址实际经营地址',
          }
        }
        }
    }
</script>

<style scoped>

</style>
