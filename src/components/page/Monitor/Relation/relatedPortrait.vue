<!-- 关联画像 -->
<template>
  <div class="relation_content relatedPortrait">
    <el-row :gutter="20" class="">
      <el-col :span="10">
        <div class="box">
          <div class="title display-flex justify-content-space-between align-items-center">
            <h2>搜索</h2>
            <div class="searchBox">
              <input type="text" placeholder="请输入金融机构名称">
              <i class="el-icon-search"></i>
            </div>
          </div>
          <div class="content">
            <el-table :data="relatedCom"  :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" max-height="750" width="100%"  style="width: 100%">
              <el-table-column prop="order" label="序号" width="70"></el-table-column>
              <el-table-column prop="companyName" label="机构名称" width="280"></el-table-column>
              <el-table-column prop="platformName" label="平台名称" width="150"></el-table-column>
              <el-table-column prop="correlationNum" label="直接关联企业" width=""></el-table-column>
            </el-table>
            <div class="bottomCount">共搜索到26个相关结果</div>
          </div>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="box" id="relatedChart">
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
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        },
        {
          order: 1,
          companyName: '宁波米利控股集团有限公司',
          platformName: '米利财富',
          correlationNum: 4
        }
      ]
    };
  },
  methods: {
    //表格头部样式
    headerCellStyle({}){
      return 'background:#f5f5f5;color:#333;padding:7px 0;border:0;textAlign:center;font-size:18px;font-weight:normal;'
    },
    //每行样式
    rowStyle({}){
      return 'text-align:center;font-size:16px;'
    }
  },
}

</script>
<style lang='scss' scoped>
    @import '@/assets/css/page/relation.scss';
</style>