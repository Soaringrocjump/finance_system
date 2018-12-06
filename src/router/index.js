import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const login = r => require.ensure([], () => r(require('@/components/page/login')), 'login')
const index = r => require.ensure([], () => r(require('@/components/page/index')), 'index');
const Monitor = r => require.ensure([], () => r(require('@/components/common/Monitor')), 'Monitor');  //监测中心导航公共部分
const skymonitoring = r => require.ensure([], () => r(require('@/components/page/Monitor/Risk/SkyMonitoring')), 'skymonitoring');  //天罗监测
const groundMonitoring = r => require.ensure([], () => r(require('@/components/page/Monitor/Risk/GroundMonitoring')), 'groundMonitoring');  //地网监测
const riskMonitoring = r => require.ensure([], () => r(require('@/components/page/Monitor/Risk/RiskMonitoring')), 'riskMonitoring');  //风险监测
const groundMonitoringDetail = r => require.ensure([], () => r(require('@/components/page/Monitor/Risk/GroundMonitoringDetail')), 'groundMonitoringDetail');  //地网监测
const informationRetrieval = r => require.ensure([], () => r(require('@/components/page/Monitor/Overall/InformationRetrieval')), 'informationRetrieval');  //信息检索
const executivesDetails = r => require.ensure([], () => r(require('@/components/page/Monitor/Overall/InformationRetrieval/ExecutivesDetails')), 'informationRetrieval');  //高管详情
const PlatformDetails = r => require.ensure([], () => r(require('@/components/page/Monitor/Overall/InformationRetrieval/PlatformDetails')), 'informationRetrieval');  //平台详情
const situationalAwareness = r => require.ensure([], () => r(require('@/components/page/Monitor/Overall/SituationalAwareness')), 'situationalAwareness');  //态势感知
const hjMap = r => require.ensure([], () => r(require('@/components/page/Monitor/Overall/HjMap')), 'hjMap');  //互金地图
const relatedState = r => require.ensure([], () => r(require('@/components/page/Monitor/Relation/relatedState')), 'relatedState');  //关联态势
const relatedPortrait = r => require.ensure([], () => r(require('@/components/page/Monitor/Relation/relatedPortrait')), 'relatedPortrait');  //关联图像
const relatedQuery = r => require.ensure([], () => r(require('@/components/page/Monitor/Relation/relatedQuery')), 'relatedQuery');  //关联查询
const crossDomain = r => require.ensure([], () => r(require('@/components/page/Monitor/Relation/crossDomain')), 'crossDomain');  //跨域经营
//const warningOrg = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/warningOrg')), 'warningOrg');  //预警机构
//const orgDetails = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/warningOrg/orgDetails')), 'warningOrg');  //机构详情'
const institutionsList = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/InstitutionsList')), 'institutionsList');  //机构列表
const InstitutionsListDetails = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/InstitutionsListDetails')), 'institutionsList');  //机构列表详情
// const RiskConsultation = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/RiskConsultation')), 'riskConsultation');  //风险会商
// const RiskConsultationDetails = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/RiskConsultationDetails')), 'riskConsultationDetails');  //风险会商详情
const RiskConsultation = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/RiskConsultation')), 'riskConsultation');  //风险会商
const RiskBeenDetails = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/RiskConsultation/RiskBeenDetails')), 'RiskBeenDetails');  //风险以会商详情
const RiskInDetails = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/RiskConsultation/RiskInDetails')), 'RiskInDetails');  //风险会商中详情

const RiskDispose = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/RiskDispose')), 'RiskDispose');  //风险处置
const DisposeInDetails = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/RiskDispose/DisposeInDetails')), 'DisposeInDetails');  //风险处置中详情
const DisposeBeenDetails = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/RiskDispose/DisposeBeenDetails')), 'DisposeBeenDetails');  //风险已处置详情
const warningOrg = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/warningOrg')), 'warningOrg');  //预警机构列表
const orgWarning = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/warningOrg/orgWarning')), 'orgWarning');  //预警中机构
const orgChecking = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/warningOrg/orgChecking')), 'orgChecking');  //核查中机构
const orgChecked = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/warningOrg/orgChecked')), 'orgChecked');  //已核查机构

const waitMeetingList = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/waitMeetingList')), 'waitMeetingList');  //待会商机构列表
const waitVerification = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/waitVerification')), 'waitVerification');  //待核查机构列表
const meetingDetail = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/MeetingOrg/meetingDetail')), 'meetingDetail');  //会商机构详情
const waitDisposedList = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/waitDisposedList')), 'waitDisposedList');  //待处置机构列表
const disposedDetail = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/disposedOrg/disposedDetail')), 'disposedDetail');  //待处置机构详情
const focusAttention = r => require.ensure([], () => r(require('@/components/page/Monitor/Warn/focusAttention')), 'focusAttention');  //重点关注
const Message = r => require.ensure([], () => r(require('@/components/common/Message')), 'Message');  //消息中心导航公共部分
const inform = r => require.ensure([], () => r(require('@/components/page/Message/inform')), 'inform');  //通知
const publicityEducation = r => require.ensure([], () => r(require('@/components/page/Message/publicityEducation')), 'publicityEducation');  //宣传教育
const policiesRegulations = r => require.ensure([], () => r(require('@/components/page/Message/policiesRegulations')), 'policiesRegulations');  //法律法规
const workMechanism = r => require.ensure([], () => r(require('@/components/page/Message/workMechanism')), 'workMechanism');  //工作机制
const meetingNotice = r => require.ensure([], () => r(require('@/components/page/Message/meetingNotice')), 'meetingNotice');  //会议通知
const workReports = r => require.ensure([], () => r(require('@/components/page/Message/workReports')), 'workReports');  //工作简报
const caseReport = r => require.ensure([], () => r(require('@/components/page/Message/caseReport')), 'caseReport');  //案情通报
const taskManager = r => require.ensure([], () => r(require('@/components/page/Message/taskManager')), 'taskManager');  //任务提醒
const informDetails = r => require.ensure([], () => r(require('@/components/page/Message/informDetails')), 'informDetails');  //通知详情

const DataCenter = r => require.ensure([], () => r(require('@/components/common/DataCenter')), 'DataCenter');  //大数据中心导航公共部分
const departmentalSupervision = r => require.ensure([], () => r(require('@/components/page/DataCenter/departmentalSupervision')), 'departmentalSupervision');//部门监测

const messageDetails = r => require.ensure([], () => r(require('@/components/page/Message/messageDetails')), 'messageDetails');  //消息详情




const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      //监测中心板块
      path: '/Monitor',
      name: 'Monitor',
      component:Monitor ,
      children:[
        {
          path: '/',
          component: situationalAwareness,
          meta: { title: '态势感知' }
        },
        {
          path: '/informationRetrieval',
          component: informationRetrieval,
          meta: { title: '信息检索' }
        },
        {
          path: '/hjMap',
          component: hjMap,
          meta: { title: '互金地图' }
        },
        {
          path: '/executivesDetails',
          component: executivesDetails,
          meta: { title: '信息检索' }
        }
        ,{
          path: '/PlatformDetails',
          component: PlatformDetails,
          meta: { title: '信息检索' }
        },
        {
          path: '/relatedState',
          component: relatedState,
          meta: { title: '关联态势' }
        },
        {
          path: '/relatedPortrait',
          component: relatedPortrait,
          meta: { title: '关联图像' }
        },
        {
          path: '/relatedQuery',
          component: relatedQuery,
          meta: { title: '关联查询' }
        },
        {
          path: '/crossDomain',
          component: crossDomain,
          meta: { title: '跨域经营' }
        },
        {
          path: '/skymonitoring',
          component: skymonitoring,
          meta: { title: '天罗监测' }
        },
        {
          path: '/groundMonitoring',
          component: groundMonitoring,
          meta: { title: '地网监测' }
        }, {
          path: '/riskMonitoring',
          component: riskMonitoring,
          meta: { title: '风险监测' }
        },
        {
          path: '/groundMonitoringDetail',
          component: groundMonitoringDetail,
          meta: { title: '地网监测详情' }
        },
        {
          path: '/warningOrg',
          component: warningOrg,
          meta: { title: '预警机构' }
        },
        {
          path: '/orgWarning',
          component: orgWarning,
          meta: { title: '预警中机构' }
        },
        {
          path: '/orgChecking',
          component: orgChecking,
          meta: { title: '核查中机构' }
        },
        {
          path: '/orgChecked',
          component: orgChecked,
          meta: { title: '已核查机构' }
        },
        {
          path: '/institutionsList',
          component: institutionsList,
          meta: { title: '机构列表' }
        },
        {
          path: '/InstitutionsListDetails',
          component: InstitutionsListDetails,
          meta: { title: '机构列表详情' }
        },
        {
          path: '/RiskConsultation',
          component: RiskConsultation,
          meta: { title: '风险会商' }
        },
        // {
        //   path: '/RiskConsultationDetails',
        //     component: RiskConsultationDetails,
        //   meta: { title: '风险会商详情' }
        // },
        {
          path: '/waitMeetingList',
          component: waitMeetingList,
          meta: { title: '待会商机构' }
        },
        {
          path: '/waitVerification',
          component: waitVerification,
          meta: { title: '待核查机构' }
        },
        {
          path: '/meetingDetail',
          component: meetingDetail,
          meta: { title: '待会商机构详情' }
        },
        {
          path: '/RiskConsultation',
          component: RiskBeenDetails,
          meta: { title: '风险已会商详情' }
        },
        {
          path: '/waitDisposedList',
          component: waitDisposedList,
          meta: { title: '待处置机构' }
        },
        {
          path: '/disposedDetail',
          component: disposedDetail,
          meta: { title: '重点关注' }
        },
        {
          path: '/focusAttention',
          component: focusAttention,
          meta: { title: '重点关注' }
        },
        {
          path: '/RiskConsultation',
          component: RiskInDetails,
          meta: { title: '风险会商中详情' }
        },
        {
          path: '/RiskDispose',
          component: RiskDispose,
          meta: { title: '风险处置' }
        },
        {
          path: '/DisposeInDetails',
          component: DisposeInDetails,
          meta: { title: '风险处置中详情' }
        },
        {
          path: '/DisposeBeenDetails',
          component: DisposeBeenDetails,
          meta: { title: '风险已处置详情' }
        },

      ]
    },
    {
      //大数据中心板块
      path: '/DataCenter',
      name: 'DataCenter',
      component: DataCenter,
      children:[
        {
          path: '/',
          component: departmentalSupervision,
          meta: { title: '部门监测' }
        },

      ]
    },
    {
      //消息中心板块
      path: '/Message',
      name: 'Message',
      component: Message,
      children:[
        {
          path: '/',
          component: inform,
          meta: { title: '通知' }
        },

        {
          path: '/informDetails',
          component: informDetails,
          meta: { title: '通知详情' }
        },
        {
          path: '/messageDetails',
          component: messageDetails,
          meta: { title: '消息详情' }
        },
        {
          path: '/publicityEducation',
          component: publicityEducation,
          meta: { title: '宣传教育' }
        },
        {
          path: '/policiesRegulations',
          component: policiesRegulations,
          meta: { title: '法律法规' }
        },
        {
          path: '/workMechanism',
          component: workMechanism,
          meta: { title: '工作机制' }
        },
        {
          path: '/meetingNotice',
          component: meetingNotice,
          meta: { title: '会议通知' }
        },
        {
          path: '/workReports',
          component: workReports,
          meta: { title: '工作简报' }
        },
        {
          path: '/caseReport',
          component: caseReport,
          meta: { title: '案情通报' }
        },
        {
          path: '/taskManager',
          component: taskManager,
          meta: { title: '任务提醒' }
        }
      ]
    }
  ]
})
/* 拦截 */
router.beforeEach((to, from, next) => {
  let isLogin = window.sessionStorage.getItem('authorization') // 是否登录
  if (!isLogin) {
    if (to.path === '/login') {
      next();
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router

