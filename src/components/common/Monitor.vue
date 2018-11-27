<!-- 监测预警中心入口 -->
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
                title: '总体情况',
                subs: [
                  {
                    index: 'Monitor',
                    title: '态势感知'
                  },
                  {
                    index: 'hjMap',
                    title: '互金地图'
                  },
                  {
                    index: 'informationRetrieval',
                    title: '信息检索'
                  }
                ]
              },
              {
                icon: 'el-icon-date',
                index: '2',
                title: '关联关系',
                subs: [
                  {
                    index: 'relatedState',
                    title: '关联态势'
                  },
                  {
                    index: 'relatedPortrait',
                    title: '关联图像'
                  },
                  {
                    index: 'relatedQuery',
                    title: '关联查询'
                  },
                  {
                    index: 'crossDomain',
                    title: '跨域经营'
                  }
                ]
              },
              {
                icon: 'el-icon-date',
                index: '3',
                title: '风险监测',
                subs: [
                  {
                    index: 'skymonitoring',
                    title: '天罗监测'
                  }
                ]
              },
              {
                icon: 'el-icon-date',
                index: '4',
                title: '预警处置',
                subs: [
                  {
                    index: 'institutionsList',
                    title: '机构列表'
                  },
                  {
                    index: 'warningOrg',
                    title: '预警机构'
                  },
                  {
                    index: 'RiskConsultation',
                    title: '风险会商'
                  },
                  {
                    index: 'RiskDispose',
                    title: '风险处置'
                  },
                  {
                    index: 'waitVerification',
                    title: '待核查机构'
                  },
                  {
                    index: 'waitMeetingList',
                    title: '待会商机构'
                  },
                  {
                    index: 'waitDisposedList',
                    title: '待处置机构'
                  },
                  {
                    index: 'focusAttention',
                    title: '重点关注'
                  },
                ]
              }
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
        // ...mapMutations([
        //     "collapseChage"
        // ])
    }
}
</script>

<style>

</style>
