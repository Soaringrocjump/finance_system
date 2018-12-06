<template>
  <div class="hj-right">
    <div id="mpContainer"></div>
  </div>
</template>

<script>
  import BMap from 'BMap';

  export default {
    name: "BaiduMap",
    mounted() {
      this.ready()
    },
    methods: {
      ready: function() {
        let map = new BMap.Map("mpContainer");
        let point = new BMap.Point(121.84431, 29.89889);
        map.centerAndZoom(point, 11);
        map.enableScrollWheelZoom(true);
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("宁波"); //

        // 添加带有定位的导航控件
        let navigationControl = new BMap.NavigationControl({
          // 靠左上角位置
          anchor: BMAP_ANCHOR_TOP_LEFT,
          // LARGE类型
          type: BMAP_NAVIGATION_CONTROL_LARGE,
          // 启用显示定位
          enableGeolocation: true
        });
        map.addControl(navigationControl);
        // 添加定位控件
        let geolocationControl = new BMap.GeolocationControl();
        geolocationControl.addEventListener("locationSuccess", function(e){
          // 定位成功事件
          let address = '';
          address += e.addressComponent.province;
          address += e.addressComponent.city;
          address += e.addressComponent.district;
          address += e.addressComponent.street;
          address += e.addressComponent.streetNumber;
          alert("当前定位地址为：" + address);
        });
        geolocationControl.addEventListener("locationError",function(e){
          // 定位失败事件
          alert(e.message);
        });
      },
      searchMapByCriteria:function(markPointInfo, regionId, lon, lat) {
        console.log("开始检索地图");
        console.log(regionId);
        console.log(lon+" , "+lat);
        let centerAndZoom = 10;
        if (regionId > "")
          centerAndZoom = 12;
        if (markPointInfo.length == 1)
          centerAndZoom = 15;

        let map = new BMap.Map("mpContainer");
        let point = new BMap.Point(lon, lat);
        map.centerAndZoom(point, centerAndZoom);
        map.enableScrollWheelZoom(true);
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("宁波"); //

        // 添加带有定位的导航控件
        var navigationControl = new BMap.NavigationControl({
          // 靠左上角位置
          anchor: BMAP_ANCHOR_TOP_LEFT,
          // LARGE类型
          type: BMAP_NAVIGATION_CONTROL_LARGE,
          // 启用显示定位
          enableGeolocation: true
        });
        map.addControl(navigationControl);
        // 添加定位控件
        var geolocationControl = new BMap.GeolocationControl();
        geolocationControl.addEventListener("locationSuccess", function(e){
          // 定位成功事件
          var address = '';
          address += e.addressComponent.province;
          address += e.addressComponent.city;
          address += e.addressComponent.district;
          address += e.addressComponent.street;
          address += e.addressComponent.streetNumber;
          alert("当前定位地址为：" + address);
        });
        geolocationControl.addEventListener("locationError",function(e){
          // 定位失败事件
          alert(e.message);
        });
        map.addControl(geolocationControl);

        // let lonLatArr = markPointInfo;
        for(let i=0; i<markPointInfo.length; i++) {
          let opts = {
            width : 250,     // 信息窗口宽度
            height: 50,     // 信息窗口高度
            title : markPointInfo[i].companyName , // 信息窗口标题
            enableMessage:true//设置允许信息窗发送短息
          };
          let content = "风险指数："+markPointInfo[i].riskIndex;
          let pointMark = new BMap.Point(markPointInfo[i].longitude, markPointInfo[i].latitude);
          let marker = new BMap.Marker(pointMark);
          map.addOverlay(marker);
          marker.addEventListener("click",function(e){
            let p = e.target;
            let point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            let infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
            map.openInfoWindow(infoWindow,point); //开启信息窗口
          });
          if (markPointInfo.length == 1) {
            console.log("单点定位...");
            let point = new BMap.Point(markPointInfo[0].longitude, markPointInfo[0].latitude);
            let infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
            map.openInfoWindow(infoWindow,point); //开启信息窗口
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
