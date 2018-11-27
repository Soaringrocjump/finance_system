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
    <!--<el-menu :unique-opened="true"  :collapse="isCollapse" :default-active="activeIndex" router>
        <el-submenu index="1">
            <template slot="title"><i class="iconfont icon-fenlei"></i><span slot="title">总体情况</span></template>
            <el-menu-item index="1-1">态势感知</el-menu-item>
            <el-menu-item index="1-2">互金地图</el-menu-item>
            <el-menu-item index="1-3" >信息检索</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title"><i class="iconfont icon-guanxitu"></i><span slot="title">关联关系</span></template>
            <el-menu-item index="2-1">关联态势</el-menu-item>
            <el-menu-item index="2-2">关联画像</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title"><i class="iconfont icon-leida"></i><span slot="title">风险监测</span></template>
            <el-menu-item index="skymonitoring">天罗监测</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title"><i class="iconfont icon-yujing"></i><span slot="title">预警处置</span></template>
            <el-menu-item ind ex="4-1">子页1</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
            <template slot="title"><i class="iconfont icon-tubiao-"></i><span slot="title">机构监管</span></template>
            <el-menu-item index="5-1">子页1</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
            <template slot="title"><i class="iconfont icon-icon-test"></i><span slot="title">统计考核</span></template>
            <el-menu-item index="6-1">子页1</el-menu-item>
        </el-submenu>
    </el-menu>-->
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
        // isCollapse: false
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

    //   collapseChage(){
    //       this.isCollapse = !this.isCollapse;
    //   }
  }
}

</script>
<style lang='' scoped>
</style>
