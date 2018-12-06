<!-- 机构详情头部 -->
<template>
  <div class="comTop display-flex justify-content-space-between align-items-center">

      <img v-if="orgTopInfo.status=='在运营'" class="stamp" src="@/assets/img/status1.png" alt="">
      <img v-else-if="orgTopInfo.status=='失联跑路'" class="stamp" src="@/assets/img/status2.png" alt="">
      <img v-else-if="orgTopInfo.status=='清盘退出'" class="stamp" src="@/assets/img/status3.png" alt="">
      <img v-else-if="orgTopInfo.status=='立案'||orgTopInfo.status=='立案侦查'" class="stamp" src="@/assets/img/status4.png" alt="">
      <img v-else-if="orgTopInfo.status=='注销'" class="stamp" src="@/assets/img/status5.png" alt="">
      <img v-else class="stamp" src="@/assets/img/status6.png" alt=""><!-- 其他 -->


    <div class="left">
        <h1>{{orgTopInfo.companyName}}</h1>
        <p><span>{{orgTopInfo.businessType}}</span>
          <span class="payAttention" v-if="orgTopInfo.focus=='已重点关注'" style="background: #FF5361;color: #fff;">{{orgTopInfo.focus}}</span>
          <span class="payAttention" v-if="orgTopInfo.focus=='已重点关注'">取消关注</span>
          <span class="payAttention" v-else>添加关注</span>
        </p>
    </div>
    <div class="right display-flex align-items-center">
        <slot name="report"></slot>
        <div class="riskIndex">
            <el-progress type="circle" :percentage="riskIndex" color="#ff5361" :width="90">
            </el-progress>
            <div style="position: absolute;top: 87px;width: 90px;text-align: center">{{riskIndex}}</div>
            <p>风险指数</p>

        </div>
        <div id="radarChart"></div>
    </div>
    </div>
</template>

<script>
import ChartUtils from '@/components/common/charts';
export default {
  props: ['orgTopInfo','riskIndex'],
  data () {
    return {
      radarData:[]
    };
  },

}

</script>
<style lang='scss' >
  .el-progress__text{
    display: none;
  }
</style>
