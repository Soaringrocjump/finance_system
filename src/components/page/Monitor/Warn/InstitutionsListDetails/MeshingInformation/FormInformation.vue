<template>
  <div class="mesfi_body">
    <div class="sm_body il_details_body">
      <el-tabs type="border-card">
        <el-tab-pane label="账户情况汇总表">
          <account-table></account-table>
        </el-tab-pane>
        <el-tab-pane label="未兑付人员名单">
          <unpaid-table></unpaid-table>
        </el-tab-pane>
        <el-tab-pane label="充值表">
          <topup-table></topup-table>
        </el-tab-pane>
        <el-tab-pane label="提现表">
          <withdrawal-table></withdrawal-table>
        </el-tab-pane>
        <el-tab-pane label="用户单位数据">
          <user-data></user-data>
        </el-tab-pane>
        <el-tab-pane label="标的单位数据">
          <unit-data></unit-data>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import AccountTable from './FormInformation/AccountTable';
  import TopupTable from './FormInformation/TopupTable';
  import UnitData from './FormInformation/UnitData';
  import UnpaidTable from './FormInformation/UnpaidTable';
  import UserData from './FormInformation/UserData';
  import WithdrawalTable from './FormInformation/WithdrawalTable';
  /*表单信息*/
    export default {
        name: "FormInformation",
      components: {
        AccountTable,
        TopupTable,
        UnitData,
        UnpaidTable,
        UserData,
        WithdrawalTable,
      },
    }
</script>


