<template>
  <div class="NationalTax_page">
    <el-row>
      <el-col :span="24">
        <!--市中级法院-->
        <div class="NationalTax LandTax Court"><!--复用NationalTax和LandTax样式-->
          <!--小标题-->
          <div class="Subtitle">
            市中级法院
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
  /*中级法院*/
  export default {
    name: "Court",

    data() {
      return {


      }
    }
  }
</script>

<style scoped>

</style>
