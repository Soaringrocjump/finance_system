<!-- 首页弹框模块 -->
<template>
  <div class="indexFrame" v-if="companyList.length>0">
      <!--<div class="title tc">{{status}}机构-->
          <!--<div class="close"><i class="el-icon-close"></i></div>-->
      <!--</div>-->
      <div class="screen display-flex">
          <div>筛选</div>
          <div class="line"></div>
          <div>全部<span>({{total}}家)</span></div>
          <!--<div>正在预警的企业<span>(1950家)</span></div>-->
          <!--<div>已推送正在核查的企业<span>(11950家)</span></div>-->
          <!--<div>已核查有信息反馈的企业<span>(11950家)</span></div>-->
      </div>
      <el-table ref="multipleTable" :data="companyList" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" style="width: 100%" :default-sort = "{prop: 'risk'}">
        <el-table-column type="selection" width="80"></el-table-column>
        <el-table-column type="index" :index="indexMethod" label="序号" width="80"></el-table-column>
        <el-table-column prop="companyName" label="机构名称"></el-table-column>
        <el-table-column prop="riskIndex" label="风险指数" width="200" sortable></el-table-column>
        <!--<el-table-column prop="businessType" label="业务类别" width="180" :filters="[{ text: '网络借贷', value: '网络借贷' }, { text: '证券', value: '证券' }]"  filter-placement="bottom-end">-->
            <!--<template slot-scope="scope">-->
                <!--<el-tag :type="scope.row.tag === '网络借贷' ? 'primary' : 'success'" disable-transitions>{{scope.row.tag}}</el-tag>-->
            <!--</template>-->
        <!--</el-table-column>-->
        <el-table-column prop="company.businessType" label="业务类别" width="200" sortable></el-table-column>
        <el-table-column prop="operation" label="操作" width="160">
            <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)" class="moreBtn" >查看</el-button>
            </template>
        </el-table-column>
      </el-table>
      <div class="total display-flex justify-content-space-between">
          <div class="clear">已选中 6 家 <a href="">清除</a></div>
          <div class="page">
          <el-pagination background layout="prev, pager, next" :page-size="10" :total="total" @size-change="handleSizeChange"
                         @current-change="handleCurrentChange" ></el-pagination>
          </div>
      </div>
      <div class="btnBox display-flex justify-content-center">
        <button>打印</button>
        <button>下载</button>
      </div>
  </div>
</template>

<script>
  import Ajax from "@/components/common/util";
export default {

  props: {
    status:{
      type:String,
      default: ""
    },
    area:{
      type:String,
      default: ""
    },
    dialogTableVisible:{
      type:Boolean,
    }
  },
  data () {
    return {
        companyList:[],
        total:0,
      pageNum:1

    };
  },
  methods: {
    //表格头部样式
    headerCellStyle({}){
      return 'background:#083157;color:#fff;padding:7px 0;border:0;textAlign:center;font-size:18px;font-weight:normal;'
    },
    //每行样式
    rowStyle({}){
      return 'background:#012444;color:#fff;text-align:center;font-size:14px;'
    },
    /**/
    cellStyle({row, column, rowIndex, columnIndex}){
        return 'background:rgba(70, 160, 252, 0.03);border-bottom:1px solid #083157;padding:9px 0;'
    },
    //获取数据
    getList(){
      let that=this;

      this.$axios({
        method: "post",
        url: this.HOME +"warning/query",
        headers: {
          token: sessionStorage.getItem("authorization"),
          "content-type": "application/json;charset=UTF-8"
        },
        data: JSON.stringify({
          "area":this.area,
          "pageNum": this.pageNum,
          "pageSize": 10,
          "warnStatus":this.status
        })

      })
        .then(result => {
          if (result.data.resultCode != "200") alert("错误：" + msg.message);
          var msg = !this.$common.isNull(result.data.data)
            ? result.data.data
            : "";
          //
          that.companyList=msg.list;
          that.total=msg.total;
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    handleSizeChange(val) {

      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {

      this.pageNum=val;
      this.getList();
    },
    indexMethod(index) {

      return index+(this.pageNum - 1) * 10 + 1;
    }
  },
  mounted(){
  this.getList();

  }
}

</script>
<style lang='scss' scoped>
.indexFrame{
    background: $themeColor;
    border-radius: 10px;
    color: #fff;
    padding-bottom: 30px;
    overflow: hidden;
    .title{
        position: relative;
        height: 60px;
        line-height: 60px;
        background: #47a0fc;
        font-size: 24px;
        .close{
            position: absolute;
            top: 15px;
            right: 30px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background: #fff;
            border-radius: 3px;
            color: #ff5361;
        }
    }
    .screen{
        line-height: 1;
        padding: 30px 5px;
        div{
            margin-left: 25px;
            font-size: 18px;
            span{
                font-size: 14px;
                margin-left: 5px;
            }
        }
        .line{
            width: 1px;
            background: #345069;
        }
    }
    .el-table{
      background: transparent;
      border: 0;
      &::before{
        background-color: #083157;
      }
    }
    .total{
      padding: 20px 30px;
      line-height:30px;
      .el-pagination.is-background .btn-next,
      .el-pagination.is-background .btn-prev,
      .el-pagination.is-background .el-pager li{
          background-color: #083157;
          color: rgba(255,255,255,0.1);
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active {
          background-color: #0e4374;
      }
      .clear a{
        color: rgba(255,255,255,0.5);
        transition: .3s;
        text-decoration: underline;
        &:hover{
          color: #fff;
        }
      }
    }
    .btnBox{
      button{
        width: 200px;
        height: 50px;
        border-radius: 5px;
        background: #46a0fc;
        font-size: 18px;
        margin: 0 25px;
        color: #fff;
        border: none;
        cursor: pointer;
      }
    }
}
</style>
