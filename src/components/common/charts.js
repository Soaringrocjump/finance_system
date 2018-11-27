import EChart from 'echarts';

// 准备启用

let ChartUtils = {};
ChartUtils.radarMyzs = function (mapID, values) {
    // let values = [
    //     40, 65, 35, 63, 45
    // ];
    // if(mapID == 'myzs-55348') {
    //     values.push(20);
    // } else if(mapID == 'myzs-64411'){
    //     values.push(50);
    // } else if(mapID == 'myzs-155'){
    //     values.push(20);
    // } else {
    //     values.push(0);
    // }
    // values.push(0);

    let chart = EChart.init(document.getElementById(mapID));
    chart.setOption({
        title: {
            show:false,
            text: '工信部-风险指数',
            textStyle: {
                color: '#fff'
            },
            padding: [0, 0, 0, 0],
        },
        tooltip: {
            trigger: 'axis',
            position: [10, 10]
        },
        radar: [{
            // shape: 'circle',
            indicator: [
                {name: '收益率偏移指数', max: 100},
                {name: '网格化监测指数', max: 100},
                {name: '部门信用指数', max: 100},
                {name: '负面舆情指数', max: 100},
                {name: '运行异常指数', max: 100},
                {name: '业务违规指数', max: 100},
                {name: '关联风险指数', max: 100},
                {name: '虚假宣传指数', max: 100}
            ],
            splitLine: {
                show: true,
                lineStyle: {
                    color: [
                        '#cdd0d2',
                    ],
                    opacity:1
                }
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: '#4da3fc'
                }
            },
            name: {
                    color: '#666666'
            },
            radius: '50%',
            axisLine: {
                lineStyle: {
                    color:'#cdd0d2'
                }
            }
        }],
        series: [{
            type: 'radar',
            itemStyle: {
              normal: {
                color : "#47a1fc",

              }
            },
            tooltip: {
                trigger: 'item'
            },
            data: [{
                value: values,
                name: '风险指数'
            }],
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#47a1fc'
                    }
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.15,
                    color:'#47a1fc',
                }
            },
            lineStyle: {

                normal: {
                    color:'#47a1fc',
                    width: 1
                }
            },
            symbolSize: 1
        }]
    });
};


export default ChartUtils;
