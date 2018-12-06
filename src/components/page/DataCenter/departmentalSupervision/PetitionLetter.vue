<template>
  <div class="NationalTax_page">
    <el-row>
      <el-col :span="24">
        <!--市信访局-->
        <div class="NationalTax LandTax Court"><!--复用NationalTax,Court和LandTax样式-->
          <!--小标题-->
          <div class="Subtitle">
            市信访局
          </div>

          <!--图表预留位置1-->
          <div class="table_left_bottom">
            <div class="wait_table">
              <span>建设中</span>
            </div>
            <!--分页-->
            <div class="footer">

              <el-pagination
                background
                pager-count="6"
                layout="prev, pager, next"
                :total="230">
              </el-pagination>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  /*市信访办*/
  export default {
    name: "PetitionLetter",
    data() {
      return {


      }
    }
  }
</script>

<style scoped>

</style>
