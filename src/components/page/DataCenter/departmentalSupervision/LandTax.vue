<template>
  <div class="NationalTax_page">
    <el-row>
      <el-col :span="24">
        <!--机构涉税信息-地税-->
        <div class="NationalTax LandTax"><!--复用NationalTax样式-->
          <!--小标题-->
          <div class="Subtitle">
            机构涉税信息-地税
          </div>

          <!--图表预留位置1-->
          <div class="table_left_bottom">
            <el-table
              :data="Poor_records_tableData"
              style="width: 100% ;height: 700px">
              <el-table-column
                prop="organization"
                label="机构名称"
                width="320">
              </el-table-column>
              <el-table-column
                prop="credit_code"
                label="统一社会信用代码"
                width="230">
              </el-table-column>
              <el-table-column
                prop="credit_rating"
                label="信用等级"
                width="140">
              </el-table-column>
              <el-table-column
                prop="abnormal"
                label="非正常纳税户"
                width="160">
              </el-table-column>
              <el-table-column
                prop="iftax"
                label="是否欠税"
                width="150">
              </el-table-column>
              <el-table-column
                prop="sumtax"
                label="本季度入库税额（万元）"
                width="250">
              </el-table-column>
              <el-table-column
                prop="manage"
                label="征管单位"
                width="330">
              </el-table-column>
              <el-table-column
                prop="other"
                label="其他涉税问题">
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
  /*市地税局*/
  export default {
    name: "LandTax",
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    data() {
      /*机构涉税信息-地税*/
      return {
        Poor_records_tableData: [{
          organization: '宁波合众芸创财富投资管理有限公司',
          credit_code:'9130204066620026D',
          credit_rating: 'BBB',
          abnormal: '1',
          iftax:'否',
          sumtax:'6.60',
          manage:'宁波市鄞州区地方税务局江东分局',
          other:'',
        }, {
          organization: '宁波合众芸创财富投资管理有限公司',
          credit_code:'9130204066620026D',
          credit_rating: 'BBB',
          abnormal: '1',
          iftax:'否',
          sumtax:'6.60',
          manage:'宁波市鄞州区地方税务局江东分局',
          other:'已注销',
        }, {
          organization: '宁波合众芸创财富投资管理有限公司',
          credit_code:'9130204066620026D',
          credit_rating: 'BBB',
          abnormal: '1',
          iftax:'否',
          sumtax:'6.60',
          manage:'宁波市鄞州区地方税务局江东分局',
          other:'已注销',
        }, {
          organization: '宁波合众芸创财富投资管理有限公司',
          credit_code:'9130204066620026D',
          credit_rating: 'BBB',
          abnormal: '1',
          iftax:'否',
          sumtax:'6.60',
          manage:'宁波市鄞州区地方税务局江东分局',
          other:'已注销',
        }, {
          organization: '宁波合众芸创财富投资管理有限公司',
          credit_code:'9130204066620026D',
          credit_rating: 'BBB',
          abnormal: '1',
          iftax:'否',
          sumtax:'6.60',
          manage:'宁波市鄞州区地方税务局江东分局',
          other:'已注销',
        }, {
          organization: '宁波合众芸创财富投资管理有限公司',
          credit_code:'9130204066620026D',
          credit_rating: 'BBB',
          abnormal: '1',
          iftax:'否',
          sumtax:'6.60',
          manage:'宁波市鄞州区地方税务局江东分局',
          other:'已注销',
        }, {
          organization: '宁波合众芸创财富投资管理有限公司',
          credit_code:'9130204066620026D',
          credit_rating: 'BBB',
          abnormal: '1',
          iftax:'否',
          sumtax:'6.60',
          manage:'宁波市鄞州区地方税务局江东分局',
          other:'已注销',
        }, {
          organization: '宁波合众芸创财富投资管理有限公司',
          credit_code:'9130204066620026D',
          credit_rating: 'BBB',
          abnormal: '1',
          iftax:'否',
          sumtax:'6.60',
          manage:'宁波市鄞州区地方税务局江东分局',
          other:'已注销',
        }, {
          organization: '宁波合众芸创财富投资管理有限公司',
          credit_code:'9130204066620026D',
          credit_rating: 'BBB',
          abnormal: '1',
          iftax:'否',
          sumtax:'6.60',
          manage:'宁波市鄞州区地方税务局江东分局',
          other:'已注销',
        }, {
          organization: '宁波合众芸创财富投资管理有限公司',
          credit_code:'9130204066620026D',
          credit_rating: 'BBB',
          abnormal: '1',
          iftax:'否',
          sumtax:'6.60',
          manage:'宁波市鄞州区地方税务局江东分局',
          other:'已注销',
        }, {
          organization: '宁波合众芸创财富投资管理有限公司',
          credit_code:'9130204066620026D',
          credit_rating: 'BBB',
          abnormal: '1',
          iftax:'否',
          sumtax:'6.60',
          manage:'宁波市鄞州区地方税务局江东分局',
          other:'已注销',

        }],

      }
    }
  }
</script>

<style scoped>

</style>
