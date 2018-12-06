<template>
    <div class="">
      <el-table
        :data="errorData"
          height="270"
        style="width: 100%">
        <el-table-column
          prop="organization"
          label="机构名称"
          width="310">
        </el-table-column>
        <el-table-column
          prop="credit_code"
          label="统一社会信用代码"
          width="270">
        </el-table-column>
        <el-table-column
          prop="people"
          label="法定代表人"
          width="120">
        </el-table-column>
        <el-table-column
          prop="money"
          label="注册资金（万元）">
        </el-table-column>
      </el-table>
      <!--分页-->
      <el-pagination
        background
        pager-count="6"
        layout="prev, pager, next"
        :total="230">
      </el-pagination>
    </div>
</template>

<script>
  /*新注册机构*/
    export default {
        name: "newOrganization",
      data() {
        return {
          errorData:[{
            organization: '宁波合众芸创财富投资管理有限公司',
            credit_code: '9130201MA2AFKB06L ',
            people: '王静江',
            money: '1000',
          },{
            organization: '宁波合众芸创财富投资管理有限公司',
            credit_code: '9130204066620026D',
            people: '胡杰',
            money: '1000',
          },{
            organization: '宁波合众芸创财富投资管理有限公司',
            credit_code: '9130204066620026D',
            people: '杨腾飞',
            money: '1000',
          },{
            organization: '宁波合众芸创财富投资管理有限公司',
            credit_code: '9130204066620026D',
            people: '杨腾飞',
            money: '1000',
          },{
            organization: '宁波合众芸创财富投资管理有限公司',
            credit_code: '9130204066620026D',
            people: '杨腾飞',
            money: '1000',
          }],
        }
      }
    }
</script>

<style scoped>

</style>
