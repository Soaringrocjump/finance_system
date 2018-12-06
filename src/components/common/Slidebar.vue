<!-- 左侧导航 -->
<template>
  <div  class="slidebar">
    <div class="collapse-btn" @click="$store.commit('collapseChage')">
        <div v-if="isCollapse">
            <el-tooltip class="item" effect="dark" content="展开" placement="right">
                <i class="el-icon-d-arrow-right "></i>
            </el-tooltip>
        </div>
        <div v-else>
            <el-tooltip class="item" effect="dark" content="收起" placement="right">
                <i class="el-icon-d-arrow-left "></i>
            </el-tooltip>
        </div>
    </div>
    <el-menu class="sidebar-el-menu" :unique-opened="true"  :collapse="isCollapse" :default-active="activeIndex" router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
              {{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
  name: 'slidebar',
  props: ['items'],
  data () {
    return {
        // isCollapse: false;  //不用vuex的情况
    };
  },
  computed: {
      ...mapState([
          "isCollapse"
      ]),
      activeIndex(){
        return this.$route.path.replace('/','')
      }
  },
  methods: {
      ...mapMutations([
            "collapseChage"
        ]),
    //   //不用vuex的情况
    //   collapseChage(){
    //       this.isCollapse = !this.isCollapse;
    //   }
  }
}

</script>
<style lang='' scoped>
</style>
