<!-- 消息中心入口 -->
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
  /*消息中心*/
  import vHeader from './Header.vue';
  import vSlidebar from './Slidebar.vue';
  import { mapState,mapMutations } from 'vuex'
  export default {
    data(){
      return {
        slidebarNav: [
          {
            icon: 'el-icon-setting',
            index: 'Message',
            title: '通知',
          },
          {
            icon: 'el-icon-setting',
            index: 'taskManager',
            title: '任务提醒',
          },
          {
            icon: 'el-icon-setting',
            index: 'meetingNotice',
            title: '会议通知',
          },
          {
            icon: 'el-icon-setting',
            index: 'workReports',
            title: '工作简报',
          },{
            icon: 'el-icon-setting',
            index: 'caseReport',
            title: '案情通报',
          },
          {
            icon: 'el-icon-setting',
            index: 'publicityEducation',
            title: '宣传教育',
          },{
            icon: 'el-icon-setting',
            index: 'policiesRegulations',
            title: '政策法规',
          },{
            icon: 'el-icon-setting',
            index: 'workMechanism',
            title: '工作机制',
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
