<template lang="html">
<div class="x-body-right">
    <div class="x-body-right-container">
        <div class="x-body-toolbar xx-option-right-title"></div>
        <div :class="['x-body-toolbar','xx-option-risk', isRiskDisplayMode ? 'xx-active' : '']" @click="changeDisplayMode('risk')"></div>
        <div :class="['x-body-toolbar','xx-option-count', !isRiskDisplayMode ? 'xx-active' : '']" @click="changeDisplayMode('count')"></div>
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
        'regions'
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
    width: 460px;
    height: 530px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>
