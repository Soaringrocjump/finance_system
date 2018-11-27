<template>
  <div class="inspor_body">

        <div class="inspor_top" v-for="item in items">
          <p>{{item.name}} <span>排行<big>{{item.rank}}</big></span></p>
          <p>{{item.num}}</p>
        </div>
    <div class="height30"></div>
    <div class="comDetails">
      <div class="title display-flex align-items-center"><div class="v-line"></div>30日每日活跃用户数量（人）</div>
      <div class="ib_region" >
        <region-bar-one></region-bar-one>
      </div>

    </div>
      <div class="comDetails">
      <div class="title display-flex align-items-center"><div class="v-line"></div>网站统计</div>
      <el-table :data="it_list"  style="width: 100%;padding: 20px;" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">

        <el-table-column prop="order" label="序号" width="80" ></el-table-column>
        <el-table-column prop="name" label="网站名称" width="230"></el-table-column>

        <el-table-column prop="risk" label="网址"  width="230" ></el-table-column>

        <el-table-column prop="organ" label="备案主体"  width="230"></el-table-column>
        <el-table-column prop="organ" label="备案号"  width="155"></el-table-column>
        <el-table-column prop="organ" label="部署位置"  ></el-table-column>
        <el-table-column prop="organ" label="昨日访问量（人）" width="230" ></el-table-column>

      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
  /*机构画像*/
  import regionBarOne from '@/components/module/regionBarOne.vue'
    export default {
        name: "InstitutionsPortrait",
      data() {
        return {
          items:[{
            "name":"累计用户量（人）",
            "rank":"9",
            "num":"1523642",
          }, {
              "name":"累计资金量（万元）",
              "rank":"9",
              "num":"1523642",
            }, {
            "name":"综合年化收益率（%）",
            "rank":"9",
            "num":"1523642",
          }, {
            "name":"30日累计交易额（万元）",
            "rank":"9",
            "num":"1523642",
          }
          ]
        }
      },
      components: {
        regionBarOne
      },
      methods: {

        //表格头部样式
        headerCellStyle({row, column, rowIndex, columnIndex}){
          if(columnIndex === 0){
            return 'text-align:left;background:#ecf5ff;color:#333;padding:10px 10px 12px;line-height:1;font-size:18px;font-weight:normal;'
          }else{
            return 'background:#ecf5ff;color:#333;padding:10px 0 12px;line-height:1;text-align:center;font-size:18px;font-weight:normal;'
          }
        },
        //每行样式
        rowStyle({}){
          return 'background:#fff;color:#333;text-align:center;font-size:14px;'
        },
        /**/
        cellStyle({row, column, rowIndex, columnIndex}){
          if(columnIndex === 0){
            return 'padding-left:10px;text-align:left;'
          }
        },
      },
      mounted(){

      }
    }
</script>

<style scoped>

</style>
