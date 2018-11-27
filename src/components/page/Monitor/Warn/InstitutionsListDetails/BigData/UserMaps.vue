<template>
  <div>
    <div id="hotmap" class="main" style="height: 600px"></div>
  </div>
</template>

<script>
  /*用户地图*/
  import heatmap from '@/assets/js/heatmap.js';
    export default {
        name: "UserMaps",
      mounted() {
        heatmap.radarMyzs();
      }
    }
</script>

<style scoped>

</style>
