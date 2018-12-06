<template>
    <div class="sa_body">
        <div class="sa_top">
          <el-row>
            <el-col :span="6" :class="{active:active[key]}"   v-for="(item,key) in tab" @click.native="change(key)" :key="key">
              <div class="sa_top_s">
                <div class="sa_top_s1">
                  <h3>{{item.content}}</h3>
                  <span @click.stop="clickMore()">更多</span>
                </div>
                <div class="sa_top_s2">
                  <span>{{item.total}}</span>
                  <span class="sa_top_s2_son">{{item.unit}}</span>
                </div>

                <el-row style="font-size: 18px;margin-top: 10px;">
                    <el-col :span="7">日增{{item.day}}</el-col>
                    <el-col :span="7" style="text-align: center;">周增{{item.week}}</el-col>
                    <el-col :span="7" style="text-align: right;">月增{{item.month}}</el-col>
                  </el-row>

                <!--<div class="sa_top_s3">
                  <div style="width: 40%">日增{{item.day}}</div>
                  <div style="width: 40%;">周增{{item.week}}</div>
                  <div>月增{{item.month}}</div>
                </div>-->
              </div>
            </el-col>
          </el-row>
        </div>

      <el-row>
        <el-col :span="24">
          <component :is="who" class="sa_bot" :compkey="currentKey"></component>
        </el-col>

      </el-row>

    </div>
</template>

<script>
  /*态势感知*/
  import cumulative from './SituationalAwareness/Cumulative';
  import cumulativeUsers from './SituationalAwareness/CumulativeUsers';
  import inOperating from './SituationalAwareness/InOperating';
  import totalCapital from './SituationalAwareness/TotalCapital';
  import theMoreList from './SituationalAwareness/TheMoreList';
  import Ajax from "@/components/common/util";

    export default {
        name: "SituationalAwareness",
      data() {
        return {
          who: "com1",
          currentKey: '0',
          active: [true, false, false,false],//统一管理状态;
          tab: [
            {
            "content": "在运营互金平台",
            "func": "com1",
            "day": "",
            "unit": "家",
          }, {
            "content": "累计互金平台",
            "func": "com2",
              "unit": "家",
          }, {
            "content": "累计互金用户",
            "func": "com3",
              "unit": "万",

          }, {
            "content": "资金总量",
            "func": "com4",
            "unit": "亿",
          }]
        }
      },
      methods:{

        change:function(x){
          for(var i=0;i<this.active.length;i++){
            this.active[i]=false;
            this.active[x]=true;
            this.who=this.tab[x].func;
          }
          console.log(this.active);
          // console.log(x);
          this.$set(this.active, 4, 0);
        },
        clickMore: function() {
          for(var i=0;i<this.active.length;i++){
            // this.active[i]=false;
            if (this.active[i] == true)
              this.currentKey = i;
          }
          // this.$set(this.active, 4, 0);
          this.who = "com5";
        },
        /*头部4个指标获取数据格式化*/
        getTopList(){
          Ajax(
            {
              method:'post',
              url:'count/fourHeadIndexList',
            }
          ).then(result => {

            if (result.data.resultCode != "200") alert("错误：" + msg.message);
            var msg = !this.$common.isNull(result.data.data)
              ? result.data.data
              : "";
            let tabList=msg;
            for (let i=0;i<msg.length;i++){
              if(tabList[i].title=='累计平台量'){

                this.tab[1].total=tabList[i].total;
                this.tab[1].day=tabList[i].dayIncrease;
                this.tab[1].week=tabList[i].weekIncrease;
                this.tab[1].month=tabList[i].monthIncrease;
              }
              if(tabList[i].title=='用户量'){
                this.tab[2].total=tabList[i].total/10000;
                this.tab[2].day=tabList[i].dayIncrease/10000;
                this.tab[2].week=tabList[i].weekIncrease/10000;
                this.tab[2].month=tabList[i].monthIncrease/10000;
              }
              if(tabList[i].title=='资金量'){
                this.tab[3].total=tabList[i].total/100000000;
                this.tab[3].day=tabList[i].dayIncrease/100000000;
                this.tab[3].week=tabList[i].weekIncrease/100000000;
                this.tab[3].month=tabList[i].monthIncrease/100000000;
              }
              if(tabList[i].title=='在运营平台量'){
                this.tab[0].total=tabList[i].total;
                this.tab[0].day=tabList[i].dayIncrease;
                this.tab[0].week=tabList[i].weekIncrease;
                this.tab[0].month=tabList[i].monthIncrease;
              }
            }
          })
            .catch(err => {
              alert("错误：获取数据异常" + err);
            });
        }
      },
      components: { // 声明子组件

        "com1": inOperating,
        "com2": cumulative,
        "com3": cumulativeUsers,
        "com4": totalCapital,
        "com5": theMoreList,
      },
      mounted(){
        this.getTopList()
      }
    }
</script>

<style lang="scss" >
  @import "@/assets/css/page/situationalAwareness.scss";
</style>
