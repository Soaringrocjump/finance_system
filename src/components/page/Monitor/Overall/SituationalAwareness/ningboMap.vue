<template lang="html">
<div class="x-body-right">
    <div class="x-body-right-container">
      <div class="x-body-toolbar xx-option-right-title"></div>
      <div :class="['x-body-toolbar','xx-option-risk', isRiskDisplayMode ? 'xx-active' : '']" @click="changeDisplayMode('risk')"></div>
      <div :class="['x-body-toolbar','xx-option-count', !isRiskDisplayMode ? 'xx-active' : '']" @click="changeDisplayMode('count')"></div>
      <div style="float: right;">
        <div class="annotation">
          <div class="left color-1"></div>
          <div class="right" v-if="componentId === '1'">50家以上</div>
          <div class="right" v-else-if="componentId === '2'">50,000人以上</div>
          <div class="right" v-else-if="componentId === '3'">10,000万元以上</div>
        </div>
        <div class="annotation">
          <div class="left color-2"></div>
          <div class="right" v-if="componentId === '1'">20-50家</div>
          <div class="right" v-else-if="componentId === '2'">10,000-50,000人</div>
          <div class="right" v-else-if="componentId === '3'">1,000-10,000万元</div>
        </div>
        <div class="annotation">
          <div class="left color-3"></div>
          <div class="right" v-if="componentId === '1'">20家以下</div>
          <div class="right" v-else-if="componentId === '2'">1,000-10,000万元</div>
          <div class="right" v-else-if="componentId === '3'">1,000万元以下</div>
        </div>
      </div>
      <div id="map-nb"></div>
      <div :class="isRiskDisplayMode ? 'x-map-nb-tip-1' : 'x-map-nb-tip-3'"></div>
      <!--<div class="x-map-nb-tip-2"></div>

        -->
    </div>
</div>
</template>

<script>
import MapNingbo from '@/assets/js/map-ningbo.js'

export default {
    props: [
        // 显示模式
        'displayMode',
        // 地区数据
        'regions',
        //标签卡id
        'componentId'
    ],
    data(){
        return {
            selectedRegionName:''
        };
    },
    methods: {
        /**
         * 修改显示模式
         *  @param mode 显示模式，取值范围：['list','chart']
         */
        changeDisplayMode: function (mode) {
            // 由于显示模式是从父组件取值，所以修改时也需要从父组件修改
            this.$emit('listenerChangeDisplayMode', mode);
        },
        /**
         * 刷新地图
         */
        refreshMap() {
            if(this.isRiskDisplayMode) {
                MapNingbo.refreshRisk(this.regions);
            } else {
                MapNingbo.refreshCount(this.regions);
            }
        }
    },
    computed: {
        isRiskDisplayMode: function () {
            return this.displayMode == 'risk';
        }
    },
    mounted: function () {
        MapNingbo.createMap(this, 'map-nb');
        MapNingbo.refreshRisk(this.regions);
    },
    watch: {
        regions: function(val, oldVal) {
            if(this.isRiskDisplayMode) {
                MapNingbo.refreshRisk(this.regions);
            } else {
                MapNingbo.refreshCount(this.regions);
            }
        },
        displayMode: function (val, oldVal) {
            if(this.isRiskDisplayMode) {
                MapNingbo.refreshRisk(this.regions);
            } else {
                MapNingbo.refreshCount(this.regions);
            }
        },
        selectedRegionName: function (val, oldVal) {
            this.$emit('listenerChangeSelectedRegionName', val);
        }
    }
}
</script>

<style lang="css">
#map-nb {
    position: absolute;
    width: 90%;
    height: 100%;
    left: 52%;
    top: 60%;
    transform: translate(-50%,-50%);
}
</style>
