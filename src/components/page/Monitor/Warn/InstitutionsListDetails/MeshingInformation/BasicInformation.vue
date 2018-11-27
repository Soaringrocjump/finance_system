<template>
  <div class="Premises_body">
    <el-form ref="form" :model="form" label-width="270px">
      <el-form-item label="排查方式">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="实地排摸时间">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="服务所属网格">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="服务地址">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="x坐标">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="y坐标">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="服务内容">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="填报单位">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="联系电话">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="所在网格的网格员姓名">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="参加联合排摸单位列表">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="照片存档">

      </el-form-item>

    </el-form>
  </div>
</template>

<script>
/* 基础信息*/
    export default {
        name: "BasicInformation",
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
