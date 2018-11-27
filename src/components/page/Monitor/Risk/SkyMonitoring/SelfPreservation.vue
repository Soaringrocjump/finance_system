<template>
  <div class="sp_body">
    <el-row>
      <el-col :span="5">
        <el-table
          :data="tableData"
          style="width: 100%" class="ri_tab ri_tab2">
          <el-table-column
            prop="1"
            label="序号"
            width="75">
          </el-table-column>
          <el-table-column
            prop="2"
            label="平台名称"
          >
          </el-table-column>
        </el-table>
      </el-col>


      <el-col :span="19" style="padding-left: 20px;margin-top: 20px;">
        <el-row>
            <el-col :span="12"  :class="{active:active[key]}"   v-for="(item,key) in tab" @click.native="change(key)" :key="key" class="spr_r">
              {{item.content}}
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="24">
            <component :is="who" class="ts_right"></component>
          </el-col>

        </el-row>
      </el-col>
    </el-row>
  </div>


</template>

<script>
  import selfPreservationL from '../SelfPreservation/SelfPreservationL.vue';
  import selfPreservationR from '../SelfPreservation/SelfPreservationR.vue';
    export default {
        name: "SelfPreservation",
      data() {
        return {
          who: "com1",
          active: [true, false],//统一管理状态;
          tab: [{
            "content": "关联融资情况分析",
            "func": "com1"
          }, {
            "content": "关联担保情况分析",
            "func": "com2"
          }],
          tableData: [{
              1: '1',
              2: '浙江华亿担保公司',
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

          this.$set(this.active, 4, 0);
        }
      },
      components: { // 声明子组件
        "com1": selfPreservationL,
        "com2": selfPreservationR,

      },
    }
</script>

<style scoped>

</style>
