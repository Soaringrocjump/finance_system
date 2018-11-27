<template>
  <div class="hj_body">
    <risk-query @sear-map="searchMap"></risk-query>
    <baidu-map ref="bdmap"></baidu-map>
  </div>
</template>

<script>
  import BaiduMap from "./hjMap/BaiduMap";
  import RiskQuery from "./hjMap/RiskQuery";
  import * as d3 from 'd3';

  export default {
    name: "HjMap",
    components: {RiskQuery, BaiduMap},
    mounted() {
      this.ready()
    },
    methods:{
      ready: function(){
        console.log("............");
      },
      searchMap: function(criteriaParam, regionId, lon, lat){
        this.$refs.bdmap.searchMapByCriteria(criteriaParam, regionId, lon, lat);
      }
    }
  }


</script>

<style lang="scss" >
  @import "@/assets/css/page/hjMap.scss";
</style>
