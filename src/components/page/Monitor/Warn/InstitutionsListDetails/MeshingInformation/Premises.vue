<template>
  <div class="Premises_body">
    <el-form ref="form" :model="form" label-width="270px">
      <el-form-item label="实际经营地址">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="场所类型">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="产权属性">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="房东姓名">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="房东电话">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="租赁开始时间">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="租赁到期时间">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="公司车辆情况">
        <div class="car_width">
          <el-form-item label="车辆品名">
            <span>{{form.car}}</span>
          </el-form-item>
          <el-form-item label="使用者">
            <span>{{form.car}}</span>
          </el-form-item>
          <el-form-item label="车辆颜色">
            <span>{{form.car}}</span>
          </el-form-item>
          <el-form-item label="车牌号">
            <span>{{form.car}}</span>
          </el-form-item>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  /*经营场所*/
    export default {
        name: "Premises",
      data() {
        return {
          form: {
            name: '实际经营地址实际经营地址',
            car: '黑色',

          }
        }
      },
    }
</script>

<style scoped>

</style>
