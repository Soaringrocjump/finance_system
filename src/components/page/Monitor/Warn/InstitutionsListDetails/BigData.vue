<template>
  <div class="orgDetails binfor_body rd_body">
    <div class="comDetails">
      <div class="title display-flex align-items-center" style="border-bottom: none;"><div class="v-line"></div>大数据
      </div>
      <div class="rd_sen">
        <el-row>
          <el-col :span="3"   class="rd_sen_left">
            <div  :class="{active:active[key]}"   v-for="(item,key) in tab" @click="change(key)" :key="key">
            {{item.content}}
          </div>
          </el-col>
          <el-col :span="21" class="rd_sen_right">
            <component :is="who" class="sa_bot">

            </component>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
  /*大数据*/
  import CorrelationAnalysis from './BigData/CorrelationAnalysis';
  import InstitutionsPortrait from './BigData/InstitutionsPortrait';
  import OpinionMonitoring from './BigData/OpinionMonitoring';
  import UserMaps from './BigData/UserMaps';
    export default {
        name: "BigData",
      components: {
        "com2":CorrelationAnalysis,
        "com1":InstitutionsPortrait,
        "com3":OpinionMonitoring,
        "com4":UserMaps,
      },
      data() {
        return {

          who: "com1",

          active: [true, false, false,false],//统一管理状态;
           tab: [{
            "content": "机构画像",
            "func": "com1"
          }, {
            "content": "关联分析",
            "func": "com2"
          }, {
            "content": "舆情监测",
            "func": "com3"
          }, {
            "content": "用户地图",
            "func": "com4"
          }
          ]
        }
      },
      methods:{
        change:function(x){

          for(var i=0;i<this.active.length;i++){
            this.active[i]=false;
            this.active[x]=true;
            this.who=this.tab[x].func;
          }

          this.$set(this.active, 8, 0);
        }
      },
      mounted(){
        /*InstitutionsPortrait.regionBarOne.drawBar()*/
      }
    }
</script>

<style scoped>

</style>
