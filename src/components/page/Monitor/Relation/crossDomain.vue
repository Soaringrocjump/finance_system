<!-- 关系查询 -->
<template>
  <div class="relation_content crossDomain">
    <el-row :gutter="20" class="">
      <el-col :span="7">
        <div class="box">
          <div class="title display-flex justify-content-space-between align-items-center">
            <h2>跨域经营企业及其分支机构</h2>
          </div>
          <div class="searchCont display-flex justify-content-center align-items-center">
            <div class="doubleInput">
              <div class="searchBox">
                <input type="text" placeholder="请输入金融机构名称">
                <i class="el-icon-search"></i>
              </div>
            </div>
          </div>
          <div class="content">
            <el-table :data="relatedCom"  :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" max-height="600" width="100%"  style="width: 100%">
              <el-table-column prop="order" label="序号" width="70"></el-table-column>
              <el-table-column prop="companyName" label="机构名称" width="280"></el-table-column>
              <el-table-column prop="branch" label="分支机构" width=""></el-table-column>
            </el-table>
            <div class="bottomCount">共搜索到26个相关结果</div>
          </div>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="box">
          <el-table :data="branchList"  :header-cell-style="branchListHeader" :row-style="rowStyle" :cell-style="cellStyle" max-height="600" width="100%"  style="width: 100%">
            <el-table-column prop="companyName" label="机构名称" width="230"></el-table-column>
            <el-table-column prop="legalPerson" label="法人" width="120"></el-table-column>
            <el-table-column prop="regAddress" label="注册地址" width="120"></el-table-column>
            <el-table-column prop="operationPlace" label="实际经营地" width="200"></el-table-column>
            <el-table-column prop="area" label="辖区归属" width="120" 
            :filters="[
            { text: '海曙区', value: '海曙区' }, 
            { text: '鄞州区', value: '鄞州区' }, 
            { text: '江北区', value: '江北区' }, 
            { text: '北仑区', value: '北仑区' }, 
            { text: '镇海区', value: '镇海区' }, 
            { text: '余姚市', value: '余姚市' }, 
            { text: '慈溪市', value: '慈溪市' },
            { text: '奉化市', value: '奉化市' }, 
            { text: '宁海县', value: '宁海县' },
            { text: '象山县', value: '象山县' }
            ]"
            :filter-method="filterArea"
            filter-placement="bottom-end">
              <template slot-scope="scope">
                <span :type="scope.row.area === '海曙区' ? 'primary' : 'success'" disable-transitions>{{scope.row.area}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="riskIndex" label="风险指数" width=""></el-table-column>
            <el-table-column prop="operation" label="操作" width="">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)" class="moreBtn" >查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
</div>
</template>

<script>
export default {
  data () {
    return {
      relatedCom: [
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          branch: 156
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          branch: 156
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          branch: 156
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          branch: 156
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          branch: 156
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          branch: 156
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          branch: 156
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          branch: 156
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          branch: 156
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          branch: 156
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          branch: 156
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          branch: 156
        }
      ],
      branchList: [
        {
          companyName: '宁波米利控股集团有限公司',
          legalPerson: '在运营',
          regAddress: '在运营',
          operationPlace: '浙江省 宁波市 海曙区',
          area: '海曙区',
          riskIndex: '100'
        },
        {
          companyName: '宁波米利控股集团有限公司',
          legalPerson: '在运营',
          regAddress: '在运营',
          operationPlace: '浙江省 宁波市 海曙区',
          area: '海曙区',
          riskIndex: '100'
        },
        {
          companyName: '宁波米利控股集团有限公司',
          legalPerson: '在运营',
          regAddress: '在运营',
          operationPlace: '浙江省 宁波市 海曙区',
          area: '海曙区',
          riskIndex: '100'
        }
      ]
    };
  },
  methods: {
    //表格头部样式
    headerCellStyle({}){
      return 'background:#f5f5f5;color:#333;padding:7px 0;border:0;textAlign:center;font-size:18px;font-weight:normal;'
    },
    //分支机构列表头部
    branchListHeader({}){
      return 'background:#46a0fc;color:#fff;padding:12px 0;textAlign:center;font-size:18px;font-weight:normal;'
    },
    //每行样式
    rowStyle({}){
      return 'text-align:center;font-size:16px;'
    },
    filterTag(value, row) {
      return row.area === value;
    },
  },
}

</script>
<style lang='scss' scoped>
    @import '@/assets/css/page/relation.scss';
</style>