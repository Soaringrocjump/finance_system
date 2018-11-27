<template>
  <div class="sm_body">
    <el-tabs type="border-card">
      <el-tab-pane label="运行违规">
        <run-illegal></run-illegal>
      </el-tab-pane>
      <el-tab-pane label="自融自保">
        <self-preservation></self-preservation>
      </el-tab-pane>
      <el-tab-pane label="重点关注">
        <focus-on></focus-on>
      </el-tab-pane>
      <el-tab-pane label="舆情监测">
        <opinion-monitoring></opinion-monitoring>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
  /*天罗监测*/
  import runIllegal from './SkyMonitoring/RunIllegal.vue';
  import selfPreservation from './SkyMonitoring/SelfPreservation.vue';
  import focusOn from './SkyMonitoring/FocusOn.vue';
  import opinionMonitoring from './SkyMonitoring/OpinionMonitoring.vue';
    export default {
      name: "SkyMonitoring",
      components: {
        runIllegal,
        selfPreservation,
        focusOn,
        opinionMonitoring
      },


    }
</script>

<style lang="scss" >
  @import "@/assets/css/page/v_index.scss";
</style>
