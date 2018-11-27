<template>
    <div class="sa_body">
        <div class="sa_top">
          <el-row>
            <el-col :span="6" :class="{active:active[key]}"   v-for="(item,key) in tab" @click.native="change(key)" :key="key">
              <div class="sa_top_s">
                <div class="sa_top_s1">
                  <h3>{{item.content}}</h3>
                  <span>更多</span>
                </div>
                <div class="sa_top_s2">
                  <span>476</span>
                  <span class="sa_top_s2_son">家</span>
                </div>
                <div class="sa_top_s3">
                  <div style="width: 40%">日增1</div>
                  <div style="width: 40%;">周增1</div>
                  <div>月增1</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

      <el-row>
        <el-col :span="24">
          <component :is="who" class="sa_bot"></component>
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

    export default {
        name: "SituationalAwareness",
      data() {
        return {
          who: "com1",
          active: [true, false, false,false],//统一管理状态;
          tab: [{
            "content": "在运营互金平台",
            "func": "com1"
          }, {
            "content": "累计互金平台",
            "func": "com2"
          }, {
            "content": "累计互金用户",
            "func": "com3"
          }, {
            "content": "资金总量",
            "func": "com4"
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
        }
      },
      components: { // 声明子组件

        "com1": inOperating,
        "com2": cumulative,
        "com3": cumulativeUsers,
        "com4": totalCapital,
      },
    }
</script>

<style lang="scss" >
  @import "@/assets/css/page/situationalAwareness.scss";
</style>
