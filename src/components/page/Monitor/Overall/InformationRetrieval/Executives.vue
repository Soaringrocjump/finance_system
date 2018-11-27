<template>
  <div class="ir_body">
    <el-row>
      <el-col :span="12">
        <el-input
          placeholder="输入高管姓名进行搜索"
          v-model="input10"
          clearable
        >
        </el-input>
      </el-col>
      <el-col :span="1.5"><el-button type="primary" style="width: 90px;margin-left: 15px;margin-right: 15px;border-radius: 0px;">搜索</el-button></el-col>
      <el-col :span="5"><p style="margin-top: 10px">查询到的机构总量28231家</p></el-col>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-col :span="1" >
        <div class="pt_five_l" >
          <ul>
            <li>地区</li>
            <li >职位</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="23">
        <div  class="pt_five_r" style="">
          <ul >
            <li >
              <a class="backcob">全部</a>
              <a  value="投资理财" class="">投资理财</a>
              <a  value="股权众筹" class="">股权众筹</a>
              <a  value="民办教育" class="">民办教育</a>
              <a  value="网络借贷" class="">网络借贷</a>
              <a  value="保险相关类" class="">保险相关类</a>
              <a  value="大宗商品交易" class="">大宗商品交易</a>
              <a  value="房地产" class="">房地产</a>
              <a  value="典当" class="">典当</a>
              <a  value="小额贷款" class="">小额贷款</a>
              <a  value="基金销售" class="">基金销售</a>
              <a  value="融资租赁" class="">融资租赁</a>
              <a  value="融资性担保" class="">融资性担保</a>
              <a  value="私募股权投资" class="">私募股权投资</a>
              <a  value="第三方支付" class="">第三方支付</a>
              <a  value="电子盘交易" class="">电子盘交易</a>
              <a  value="农民专业合作社" class="">农民专业合作社</a>
              <a  value="其他" class="">其他</a>
            </li>
          </ul>
          <ul >
            <li >
              <a class="backcob">全部</a>
              <a  value="投资理财" class="">投资理财</a>
            </li>
          </ul>



        </div>
      </el-col>
    </el-row>

    <el-table
      :data="tableData"
      style="width: 100%" class="ri_tab">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="1"
        label="姓名"
        width="240">
      </el-table-column>
      <el-table-column
        prop="2"
        label="职务"
        width="330">
      </el-table-column>
      <el-table-column
        prop="3"
        label="所属从业机构"
      >
      </el-table-column>
      <el-table-column
        label="查看"
        width="150">
        <template slot-scope="scope">
          <el-button class="ri_btn">查看</el-button>
        </template>

      </el-table-column>

    </el-table>

    <el-row class="ri_bot">
      <el-col :span="12" style="padding-left: 20px">
        <el-checkbox v-model="checked"></el-checkbox>
        <el-button class="ri_btn">批量导出</el-button>
      </el-col>
      <el-col :span="12" style="text-align: right;padding-right: 20px">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100">
        </el-pagination>
      </el-col>

    </el-row>

  </div>
</template>

<script>
  /*高管*/
    export default {
        name: "Executives",
      data() {
        return {
          tableData: [{
            1: '蒋传国',
            2: '执行董事兼总经理',
            3: '宁波合众芸创财富投资管理有限公司',

          },
            {
              1: '蒋传国',
              2: '执行董事兼总经理',
              3: '宁波合众芸创财富投资管理有限公司',
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
