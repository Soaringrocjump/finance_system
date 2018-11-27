<template>
  <div class="ri_body">
    <el-row>
      <el-col :span="4">
        <div class="ri_top">
          <div class="ri_fir_top">网站未备案</div>
          <div class="ri_fir_mid">4 <span class="ri_fir_bor">个</span></div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="ri_top">
          <div class="ri_fir_top">金融数据在境外</div>
          <div class="ri_fir_mid">4 <span class="ri_fir_bor">个</span></div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="ri_top">
          <div class="ri_fir_top">诱导性宣传</div>
          <div class="ri_fir_mid">4 <span class="ri_fir_bor">个</span></div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="ri_top">
          <div class="ri_fir_top">收益率过高</div>
          <div class="ri_fir_mid">4 <span class="ri_fir_bor">个</span></div>
        </div>
     </el-col>
      <el-col :span="4">
        <div class="ri_top">
          <div class="ri_fir_top">违规开展业务</div>
          <div class="ri_fir_mid">4 <span class="ri_fir_bor">个</span></div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="ri_top" style="border-right: none;">
          <div class="ri_fir_top">工商异常</div>
          <div class="ri_fir_mid">4 <span class="ri_fir_bor">个</span></div>
        </div>
     </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="ri_mid">平台简要信息</div>
      </el-col>

    </el-row>

    <el-row class="ri_mid2">
      <el-col :span="4.8"  style="border-right: 1px solid #f3f3f3;padding-right: 40px;">
        <img src="@/assets/img/text.png">
      </el-col>
      <el-col :span="4.8">
        <p>公司名称：浙江华亿非融资性担保有限公司</p>
        <p>网站链接：http://www.zjhydb.com</p>
      </el-col>
      <el-col :span="4.8">
        <p>登记机关：宁波市海曙区市场监督管理局</p>
        <p>联系方式：131 7598 0055</p>
      </el-col>
      <el-col :span="4.8">
        <p>法人代表：韩玉亮</p>
        <p>工商注册号：330203000203263</p>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"

      style="width: 100%" class="ri_tab">
      <el-table-column
        prop="1"
        label="序号"
        width="75">
      </el-table-column>
      <el-table-column
        prop="2"
        label="平台名称"
        width="260">
      </el-table-column>
      <el-table-column
        prop="3"
        label="机构名称"
       >
      </el-table-column>
      <el-table-column
        prop="4"
        label="上线时间"
        width="240">
      </el-table-column>
      <el-table-column
        prop="5"
        label="网站域名"
        width="290">
      </el-table-column>
      <el-table-column
        prop="6"
        label="所属地"
        width="210">
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
    export default {
        name: "RunIllegal",
      data() {
        return {
          checked: false,
          tableData: [{
            1: '1',
            2: '浙江华亿担保公司',
            3: '浙江华亿非融资性担保有限公司',
            4: '2014-05-21',
            5: 'http://www.zjhydb.com',
            6: '浙江省 · 宁波市',
          },
            {
              1: '1',
              2: '浙江华亿担保公司',
              3: '浙江华亿非融资性担保有限公司',
              4: '2014-05-21',
              5: 'http://www.zjhydb.com',
              6: '浙江省 · 宁波市',
            }
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
