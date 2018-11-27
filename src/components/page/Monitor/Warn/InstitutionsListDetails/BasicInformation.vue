<template>
    <div class=" orgDetails binfor_body">
      <div class="comDetails">
        <div class="title display-flex align-items-center"><div class="v-line"></div>基本信息</div>
        <div class="basicInfo">
          <table width="100%" border="0">
            <tr>
              <td width="8%">法人代表</td>
              <td colspan="4">
                <big>{{comInfo.corporation}}</big>
                <a class="themeBlue">他关联了{{comInfo.relevance}}家公司</a>
              </td>
            </tr>
            <tr>
              <td>社会信用代码</td>
              <td width="38%">{{comInfo.credit}}</td>
              <td width="8%">公司状态</td>
              <td width="27%"><span class="themeBlue">{{comInfo.comState}}</span></td>
              <td width="19%" rowspan="4">
                <div class="comLogoBox"></div>
              </td>
            </tr>
            <tr>
              <td>注册日期</td>
              <td>{{comInfo.regDate}}</td>
              <td>注册资本</td>
              <td>{{comInfo.regCapital}}</td>
            </tr>
            <tr>
              <td>营业期限</td>
              <td>{{comInfo.businessTerm}}</td>
              <td>实缴资本</td>
              <td>{{comInfo.paidCapital}}</td>
            </tr>
            <tr>
              <td>注册地址</td>
              <td >{{comInfo.regAddress}}</td>
              <td>实际经营地址</td>
              <td>{{comInfo.operateAddress}}<a class="themeBlue">地图</a></td>
            </tr>
            <tr>
              <td>登记机关</td>
              <td>{{comInfo.regAddress}}</td>
            </tr>
          </table>
        </div>

        <div class="basicInfo">
          <table width="100%" border="0">
            <tr>
              <td>公司类型</td>
              <td width="38%">{{comInfo.credit}}</td>
              <td width="8%">电话号码</td>
              <td width="27%"><span class="themeBlue">{{comInfo.comState}}</span></td>
              <td width="19%" rowspan="4">
              </td>
            </tr>

            <tr>
              <td>行业</td>
              <td>{{comInfo.regDate}}</td>
              <td>传真号码</td>
              <td>{{comInfo.regCapital}}</td>
            </tr>
            <tr>
              <td>参保人数</td>
              <td>{{comInfo.regDate}}</td>
              <td>APP名称</td>
              <td>{{comInfo.regCapital}}</td>
            </tr>
            <tr>
              <td>人员规模</td>
              <td>{{comInfo.businessTerm}}</td>
              <td>网址</td>
              <td>{{comInfo.paidCapital}}</td>
            </tr>
            <tr>
              <td>经营范围</td>
              <td>{{comInfo.regAddress}}</td>

            </tr>

          </table>
        </div>
      </div>

      <div class="comDetails">
        <div class="title display-flex align-items-center"><div class="v-line"></div>平台信息</div>
        <el-table :data="it_list"  style="width: 100%;padding: 20px;" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">

          <el-table-column prop="order" label="序号" width="330" ></el-table-column>
          <el-table-column prop="name" label="平台名称" ></el-table-column>

          <el-table-column prop="risk" label="成立时间"  width="340" ></el-table-column>

          <el-table-column prop="organ" label="用户总量（人）"  width="340"></el-table-column>
          <el-table-column prop="organ" label="资金总量（万元）"  width="320"></el-table-column>

        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>

      <div class="comDetails">
        <div class="title display-flex align-items-center"><div class="v-line"></div>股东信息</div>
        <el-table :data="it_list"  style="width: 100%;padding: 20px;" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">

          <el-table-column prop="order" label="序号" width="330" ></el-table-column>
          <el-table-column prop="name" label="股东（发起人）" ></el-table-column>

          <el-table-column prop="risk" label="认缴出资额（万元）"  width="340" ></el-table-column>

          <el-table-column prop="organ" label="持股比例"  width="340"></el-table-column>
          <el-table-column prop="organ" label="认缴出资日期"  width="320"></el-table-column>

        </el-table>
         </div>

      <div class="comDetails">
        <div class="title display-flex align-items-center"><div class="v-line"></div>从业人员名册</div>
        <el-table :data="it_list"  style="width: 100%;padding: 20px;" :header-cell-style="headerCellStyle" :row-style="rowStyle" :cell-style="cellStyle" :default-sort="{prop: 'date', order: 'descending'}">

          <el-table-column prop="order" label="序号" width="330" ></el-table-column>
          <el-table-column prop="name" label="姓名" width="330"></el-table-column>

          <el-table-column prop="risk" label="职位"  width="340" ></el-table-column>


        </el-table>

      </div>
    </div>
</template>

<script>
  /*基本信息*/
    export default {
        name: "BasicInformation",
      data () {
        return {
          comInfo:{
            name: '宁波米利控股集团有限公司',
            circleIndex: 90,
            riskIndex: [15, 25, 35, 45, 55, 65, 75, 85],
            corporation: '王雪平',
            relevance: '66',
            credit: '931330200316809914X',
            comState: '已立案',
            regDate: '2014-10-10',
            regCapital: '2000万人民币',
            businessTerm: '2014-10-10至2034-10-09',
            paidCapital: '1200万人民币',
            regAddress: '宁波市江东区江东北路29号5楼501',
            operateAddress: '宁波市江东区海曙区江厦街',

          }
        };
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
      }
    }
</script>

<style lang='scss'>
  @import "@/assets/css/page/warn_org.scss";
</style>
