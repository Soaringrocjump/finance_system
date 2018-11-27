<!-- 关联态势 -->
<template>
  <div class="relation_content relatedState">
      <el-row :gutter="20" class="topCount display-flex justify-content-space-around">
        <el-col :span="8" v-for="(item,index) in totalCount" :key="index">
          <div class="box" :class="{active: item.isActive}" @click="addActive(totalCount,index)">
            <div class="title display-flex justify-content-space-between align-items-center">
              <h2>{{item.type}}</h2>
              <a href="" class="more">更多</a>
            </div>
            <p><big>{{item.amount}}</big>家</p>
          </div>
        </el-col>
      </el-row>
      <tab-data></tab-data>
  </div>
</template>

<script>
import tabData from './relatedState/tabData.vue';
export default {
  data () {
    return {
      totalCount:[
        {
          type: '互联网金融企业',
          amount: '476',
          isActive: true
        },
        {
          type: '直接关联机构',
          amount: '5210',
          isActive: false
        },
        {
          type: '相对控股机构',
          amount: '3203',
          isActive: false
        }
      ],
      
    };
  },
  components: {
    tabData
  },
  methods: {
    //顶部三个模块点击选中
    addActive(totalCount,index){
      // item.isActive = false;
      totalCount.forEach(function(el){
        el.isActive = false;
      })
      totalCount[index].isActive = true
    },

  },
  mounted(){
  }
}

</script>
<style lang='scss' >
    @import '@/assets/css/page/relation.scss';
</style>