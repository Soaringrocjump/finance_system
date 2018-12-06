<!-- 大数据中心入口 -->
<template>
  <div class="wrapper">
    <v-header headerType="normalHeader"></v-header>
    <div class="body-box">
      <v-slidebar :items="slidebarNav"></v-slidebar>
      <div class="content-box" :class="{'content-collapse':isCollapse}">
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  /*大数据中心*/
  import vHeader from './Header.vue';
  import vSlidebar from './Slidebar.vue';
  import { mapState,mapMutations } from 'vuex'
  export default {
    data(){
      return {
        slidebarNav: [
          {
            icon: 'el-icon-setting',
            index: '1',
            title: '部门数据',
            subs: [
              {
                index: '1-1',
                title: 'P2P网贷机构摸排表'
              },
              {
                index: 'DataCenter',
                title: '部门监测'
              },
              {
                index: '1-3',
                title: '投诉举报'
              }
            ]
          },

        ]
      }
    },
    components: {
      vHeader,vSlidebar
    },
    computed: {
      ...mapState([
        "isCollapse"
      ])
    },
    methods: {
      ...mapMutations([
        "collapseChage"
      ])
    }
  }
</script>

<style>

</style>
