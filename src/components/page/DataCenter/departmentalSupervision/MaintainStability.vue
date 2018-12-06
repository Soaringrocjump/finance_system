<template>
  <div class="NationalTax_page">
    <el-row>
      <el-col :span="24">
        <!--维稳信息-->
        <div class="NationalTax LandTax MaintainStability"><!--复用NationalTax和LandTax样式-->
          <!--小标题-->
          <div class="Subtitle">
            维稳信息
          </div>

          <!--图表预留位置1-->
          <div class="table_left_bottom">
            <el-table
              :data="Poor_records_tableData"
              style="width: 100% ;height: 700px">
              <el-table-column
                prop="event"
                label="事件">
              </el-table-column>

            </el-table>
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
  /*市维稳办*/
  export default {
    name: "MaintainStability",
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    data() {
      return {
        /*维稳信息*/
        Poor_records_tableData: [{
          event:'1.10月16日至17日，外地“都普特”投资受损人共4人连续两日赴驻京办反映投资受损事宜',
        }, {
          event: '2.10月17日，涉众型投资类人员同网上串联赴京维权。主要有“甬商所”重点人新疆籍张菊，北京网贷平台“国盈金服”投资受损人海曙区陈俊丰，“汉唐古钱币”投资受损人鄞州蔡聪勇',
        },{
          event: '3.10月16日至17日，外地“都普特”投资受损人共4人连续两日赴驻京办反映投资受损事宜',
        },{
          event: '4.10月17日，涉众型投资类人员同网上串联赴京维权。主要有“甬商所”重点人新疆籍张菊，北京网贷平台“国盈金服”投资受损人海曙区陈俊丰，“汉唐古钱币”投资受损人鄞州蔡聪勇'
        }],

      }
    }
  }
</script>

<style scoped>

</style>
