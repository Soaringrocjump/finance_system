<template>
  <div class="sm_body">
    <el-tabs type="border-card">
      <el-tab-pane label="机构名称">
        <institution></institution>
      </el-tab-pane>
      <el-tab-pane label="平台名称">
       <platform></platform>
      </el-tab-pane>
      <el-tab-pane label="高管查询">
        <executives></executives>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  /*信息检索*/
  import institution from './InformationRetrieval/Institution.vue';
  import executives from './InformationRetrieval/Executives.vue';
  import platform from './InformationRetrieval/Platform.vue';
    export default {
        name: "InformationRetrieval",
        components: {
          institution,
          executives,
          platform
        },
    }
</script>
1
<style lang="scss" >
  @import "@/assets/css/page/v_index.scss";
</style>
