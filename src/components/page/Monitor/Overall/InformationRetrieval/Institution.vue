<template>
  <div class="ir_body">
    <el-row>
      <el-col :span="12">
        <el-input
          placeholder="输入机构名称进行搜索"
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
            <li>业务类型</li>
            <li >地区</li>
            <li>组织形式</li>
            <li>经营状态</li>
            <li>名单</li>
            <li>风险指数</li>
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
          <ul >
            <li >
              <a class="backcob">全部</a>
              <a  value="投资理财" class="">投资理财</a>
            </li>
          </ul>
          <ul >
            <li>
              <a class="backcob">全部</a>
              <a  value="投资理财" class="">投资理财</a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-scrollbar style="height: 100%; border: 1px solid #f3f3f3;">
      <div class="it_tab_head">
          <span style="width: 650px;padding-left: 10px">机构</span>
          <span style="width: 180px">风险等级</span>
          <span style="width: 275px;padding-left: 30px">风险指数</span>
          <span style="width: 200px">经营状态</span>
          <span style="width: 300px;text-align: center;">风险偏向</span>
      </div>

      <div class="it_tab_body">
        <ul>
          <li class="itb_li">
            <ul>
              <li class="itb_li1">
                <h3>宁波米利控股集团有限公司余姚分公司</h3>
                <span><div>法定代表人：</div>王雪平</span>
                <span><div>注册资本：</div>300万人民币元</span>
                <span><div>成立时间：</div>2016-4-28</span>
                <span><div>实际经营地：</div>余姚市四明西路478-8号</span>
                <p>
                  宁波米利投资管理有限公司，注册资金2亿元，是宁波本土一家实力雄厚、专业可靠的投资管理公司，
                  公司秉承“诚信、稳健、卓越、进取、互利共赢”的经营理念，建立了一个完善的P2P（个人对个人）
                  信用借款平台。该企业主要风险点：1.存在行政处罚，罚款10000元，罚款 24000元 2.提供增信服务
                  3.信息披露不透明 4.资金未存管在银行业金融机构 5.高息利诱 6.未向投资人提示投资风险 7.存在
                  线下推广资金...端业务 8.向不特定人群宣传募集资金
                </p>
              </li>
              <li class="itb_li2">
                <div class="fx_high"></div>
              </li>
              <li class="itb_li3">
                <div class="itb_li3_son">
                  <span>95</span>
                  <el-progress  :stroke-width="10" :percentage="95" :show-text="false"></el-progress>
                </div>
              </li>
              <li class="itb_li4">已注销</li>
              <li class="itb_li5">
                <div id="myzs-1"></div>
              </li>

            </ul>
          </li>
          <li class="itb_li">
            <ul>
              <li class="itb_li1">
                <h3>宁波米利控股集团有限公司余姚分公司</h3>
                <span>法定代表人：王雪平</span>
                <span>注册资本：300万人民币元</span>
                <span>成立时间：2016-4-28</span>
                <span>实际经营地：余姚市四明西路478-8号</span>
                <p>
                  宁波米利投资管理有限公司，注册资金2亿元，是宁波本土一家实力雄厚、专业可靠的投资管理公司，
                  公司秉承“诚信、稳健、卓越、进取、互利共赢”的经营理念，建立了一个完善的P2P（个人对个人）
                  信用借款平台。该企业主要风险点：1.存在行政处罚，罚款10000元，罚款 24000元 2.提供增信服务
                  3.信息披露不透明 4.资金未存管在银行业金融机构 5.高息利诱 6.未向投资人提示投资风险 7.存在
                  线下推广资金...端业务 8.向不特定人群宣传募集资金
                </p>
              </li>
              <li class="itb_li2">
                <div class="fx_mid"></div>
              </li>
              <li class="itb_li3">
                <div class="itb_li3_son">
                  <span>70</span>
                  <el-progress :stroke-width="10" :percentage="70" :show-text="false"></el-progress>
                </div>

              </li>
              <li class="itb_li4">已注销</li>
              <li class="itb_li5"></li>
            </ul>
          </li>
          <li class="itb_li">
            <ul>
              <li class="itb_li1">
                <h3>宁波米利控股集团有限公司余姚分公司</h3>
                <span>法定代表人：王雪平</span>
                <span>注册资本：300万人民币元</span>
                <span>成立时间：2016-4-28</span>
                <span>实际经营地：余姚市四明西路478-8号</span>
                <p>
                  宁波米利投资管理有限公司，注册资金2亿元，是宁波本土一家实力雄厚、专业可靠的投资管理公司，
                  公司秉承“诚信、稳健、卓越、进取、互利共赢”的经营理念，建立了一个完善的P2P（个人对个人）
                  信用借款平台。该企业主要风险点：1.存在行政处罚，罚款10000元，罚款 24000元 2.提供增信服务
                  3.信息披露不透明 4.资金未存管在银行业金融机构 5.高息利诱 6.未向投资人提示投资风险 7.存在
                  线下推广资金...端业务 8.向不特定人群宣传募集资金
                </p>
              </li>
              <li class="itb_li2">
                <div class="fx_low"></div>
              </li>
              <li class="itb_li3">
                <div class="itb_li3_son">
                  <span>30</span>
                  <el-progress :stroke-width="10" :percentage="30" :show-text="false"></el-progress>
                </div>
              </li>
              <li class="itb_li4">已注销</li>
              <li class="itb_li5">

              </li>
            </ul>
          </li>
        </ul>
      </div>

    </el-scrollbar>
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
  /*机构*/
  import ChartUtils from '@/components/common/charts'
    export default {
        name: "Institution",
      data() {
        return {
          input10: ''
        }
      },
      mounted() {
        ChartUtils.radarMyzs(
          'myzs-1',
          [15, 25, 35, 45, 55, 65, 75, 85]
        );
      }
    }
</script>

<style scoped>
  .fx_high{
    width: 60px;
    height: 60px;
    margin-top: 90px;
    background-image: url("../../../../../assets/img/high.png");
  }
  .fx_mid{
    width: 60px;
    height: 60px;
    margin-top: 90px;
    background-image: url("../../../../../assets/img/mid.png");
  }
  .fx_low{
    width: 60px;
    height: 60px;
    margin-top: 90px;
    background-image: url("../../../../../assets/img/low.png");
  }
</style>
