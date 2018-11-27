<template>
  <div class="ir_body">
    <el-row>
      <el-col :span="12">
        <el-input
          placeholder="输入平台名称进行搜索"
          v-model="input10"
          clearable
        >
        </el-input>
      </el-col>
      <el-col :span="1.5"><el-button type="primary" style="width: 90px;margin-left: 15px;margin-right: 15px;border-radius: 0px;">搜索</el-button></el-col>
      <el-col :span="5"><p style="margin-top: 10px">查询到的机构总量28231家</p></el-col>
    </el-row>

    <el-row style="margin-top: 20px;">
      <el-col :span="2" >
        <div class="pt_five_l" >
          <ul>
            <li>注册地点</li>
            <li >业态类型</li>
            <li>运营状态</li>
            <li>上线时间</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="22">
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
          <ul >
            <li >
              <a class="backcob">全部</a>
              <a  value="投资理财" class="">投资理财</a>
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
        label="平台"
        width="180">
      </el-table-column>
      <el-table-column
        prop="2"
        label="资金总量（万）"
        width="190">
      </el-table-column>
      <el-table-column
        prop="3"
        label="用户数量"
        width="190"
      >
      </el-table-column>
      <el-table-column
        prop="4"
        label="所属从业机构"
       >
      </el-table-column>
      <el-table-column
        prop="5"
        label="法人代表"
        width="150">
      </el-table-column>
      <el-table-column
        prop="6"
        label="上线时间"
        width="160">
      </el-table-column>
      <el-table-column
        prop="7"
        label="业态类型"
        width="130">
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
  /*平台*/
    export default {
        name: "Platform",
      data() {
        return {
          tableData: [{
            1: '小鸡理财',
            2: '234506',
            3: '238211',
            4: '宁波合众芸创财富投资管理有限公司',
            5: '杨鹏飞',
            6: '2013-05-10',
            7: '网络借贷',
          },
            {
              1: '小鸡理财',
              2: '234506',
              3: '238211',
              4: '宁波合众芸创财富投资管理有限公司',
              5: '杨鹏飞',
              6: '2013-05-10',
              7: '网络借贷',
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
