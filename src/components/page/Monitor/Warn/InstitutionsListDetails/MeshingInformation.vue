<template>
  <div class="orgDetails binfor_body rd_body">
    <div class="comDetails">
      <div class="title display-flex align-items-center" style="border-bottom: none;"><div class="v-line"></div>大数据
      </div>
      <div class="rd_sen">
        <el-row>
          <el-col :span="3"  class="rd_sen_left">
            <div  :class="{active:active[key]}"   v-for="(item,key) in tab" @click="change(key)" :key="key">
              {{item.content}}
            </div>
          </el-col>
          <el-col :span="21" class="rd_sen_right">
            <component :is="who" class="sa_bot"></component>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
  /*网格化信息*/
  import BasicInformation from './MeshingInformation/BasicInformation';
  import ExceptionInformation from './MeshingInformation/ExceptionInformation';
  import FormInformation from './MeshingInformation/FormInformation';
  import OperatingCondition from './MeshingInformation/OperatingCondition';
  import Premises from './MeshingInformation/Premises';
    export default {
        name: "MeshingInformation",
      components: {
        "com5":BasicInformation,
        "com3":ExceptionInformation,
        "com4":FormInformation,
        "com2":OperatingCondition,
        "com1":Premises,

      },
      data() {
        return {

          who: "com1",
          active: [true, false, false,false,false],//统一管理状态;
          tab: [{
            "content": "经营场所",
            "func": "com1"
          }, {
            "content": "经营情况",
            "func": "com2"
          }, {
            "content": "异常信息",
            "func": "com3"
          }, {
            "content": "表单信息",
            "func": "com4"
          }, {
            "content": "基础信息",
            "func": "com5"
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
    }
</script>

<style scoped>

</style>
