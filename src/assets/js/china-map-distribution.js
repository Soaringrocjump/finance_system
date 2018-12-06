/***
 * 分布情况地图
 * */

import echarts from 'echarts';
require('echarts/map/js/china')

let loadChinaMap = {};

loadChinaMap.chinaMap = function (domID) {

  domID.width = document.body.scrollWidth*0.8;
  domID.height = document.body.scrollHeight*0.8;

  const geoCoordMap = {
    '宁波': [121.5967, 29.6466],
    '新疆': [84.9023, 41.748],
    '西藏': [88.7695, 31.6846],
    '内蒙古': [117.5977, 44.3408],
    '青海': [96.2402, 35.4199],
    '四川': [102.9199, 30.1904],
    '黑龙江': [128.1445, 48.5156],
    '甘肃': [95.7129, 40.166],
    '云南': [101.8652, 25.1807],
    '广西': [108.2813, 23.6426],
    '湖南': [111.5332, 27.3779],
    '陕西': [109.5996, 35.6396],
    '广东': [113.4668, 22.8076],
    '吉林': [126.4746, 43.5938],
    '河北': [115.4004, 37.9688],
    '湖北': [112.2363, 31.1572],
    '贵州': [106.6113, 26.9385],
    '山东': [118.7402, 36.4307],
    '江西': [116.0156, 27.29],
    '河南': [113.4668, 33.8818],
    '辽宁': [122.3438, 41.0889],
    '山西': [112.4121, 37.6611],
    '安徽': [117.2461, 32.0361],
    '福建': [118.3008, 25.9277],
    '浙江': [121.613624, 29.873801],
    '江苏': [120.0586, 32.915],
    '重庆': [107.7539, 30.1904],
    '宁夏': [105.9961, 37.3096],
    '海南': [109.9512, 19.2041],
    '台湾': [121.0254, 23.5986],
    '北京': [116.4551, 40.2539],
    '天津': [117.4219, 39.4189],
    '上海': [121.4648, 31.2891],
    '香港': [114.2578, 22.3242],
    '澳门': [113.5547, 22.1484]
  };

  let BJData = [
    [{name: '广东', value: 140}, {name: '宁波'}],
    [{name: '北京', value: 20}, {name: '宁波'}],
    [{name: '上海', value: 30}, {name: '宁波'}],
    [{name: '浙江', value: 10}, {name: '宁波'}],
    [{name: '江苏', value: 40}, {name: '宁波'}],
    [{name: '福建', value: 20}, {name: '宁波'}],
    [{name: '河南', value: 20}, {name: '宁波'}],
    [{name: '山东', value: 20}, {name: '宁波'}],
    [{name: '湖北', value: 10}, {name: '宁波'}],
    [{name: '四川', value: 160}, {name: '宁波'}],
    [{name: '河北', value: 20}, {name: '宁波'}],
    [{name: '江西', value: 10}, {name: '宁波'}],
    [{name: '湖南', value: 10}, {name: '宁波'}],
    [{name: '辽宁', value: 20}, {name: '宁波'}],
    [{name: '安徽', value: 20}, {name: '宁波'}],
    [{name: '重庆', value: 10}, {name: '宁波'}],
    [{name: '天津', value: 10}, {name: '宁波'}],
    [{name: '贵州', value: 20}, {name: '宁波'}],
    [{name: '陕西', value: 60}, {name: '宁波'}],
    [{name: '云南', value: 10}, {name: '宁波'}],
    [{name: '黑龙江', value: 10}, {name: '宁波'}],
    [{name: '山西', value: 10}, {name: '宁波'}],
    [{name: '广西', value: 20}, {name: '宁波'}],
    [{name: '新疆', value: 20}, {name: '宁波'}],
    [{name: '吉林', value: 10}, {name: '宁波'}],
    [{name: '内蒙古', value: 10}, {name: '宁波'}],
    [{name: '海南', value: 10}, {name: '宁波'}],
    [{name: '宁夏', value: 10}, {name: '宁波'}],
    [{name: '甘肃', value: 10}, {name: '宁波'}],
    [{name: '青海', value: 10}, {name: '宁波'}],
    [{name: '西藏', value: 10}, {name: '宁波'}]
  ];

// var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

  let convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord]
        });
      }
    }
    return res;
  };

  let covertColor = function (data) {
    var value = data[1].value;
    var result = 'aqua';
    if (value > 80) {
      result = '#ff3333';
    } else if (value > 60) {
      result = 'orange';
    } else if (value > 40) {
      result = 'yellow';
    } else if (value > 60) {
      result = 'lime';
    }
    return result;
  };

  let color = ['#56e88c', '#ffa022', '#46bee9'];
  let series = [];
  [['北京', BJData]].forEach(function (item, i) {
    series.push(
      {
        name: item[2],
        type: 'lines',
        zlevel: 2,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.1,
//            symbol: planePath,
          symbol: 'arrow',
          symbolSize: 5
        },
        lineStyle: {
          normal: {
            color: '#60ff44',
            width: 1,
            opacity: 0.4,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        //       name: item[1],
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}'
          }
        },
        symbolSize: function (val) {
          return 3 + val[2] / 10;
        },
        itemStyle: {
          normal: {
            color: '#60ff44'
          }
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[0].name,
            value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
          };
        })
      });
  });

  let mapOption = {
    // backgroundColor: '#003872',
    title: {
      text: '',
      subtext: '',
      left: 'center',
      textStyle: {
        color: '#222'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true,
      layoutCenter: ['30%', '43%'],
      layoutSize: 700,
      itemStyle: {
        normal: {
          areaColor: '#004882',
          borderColor: '#20a6C7'
        },
        emphasis: {
          areaColor: '#fff91e'
        }
      }
    },
    series: series
  };

  // let canvasMap = document.getElementById('chinaMap');
  //初始化echarts实例
  // let myChart = echarts.init(document.getElementById('chinaMap'));
  let myChart = echarts.init(domID);

  //使用制定的配置项和数据显示图表
  myChart.setOption(mapOption);
}


export {
  loadChinaMap
}
