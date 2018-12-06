/**
 * Created by xy on 2017/4/22.
 */
import MapDataNingbo from './map-ningbo.json'

import Raphael from 'Raphael'


const RISK_COLORS = [
    "#AA1014",
    "#D71A21",
    "#EB2625",
    "#EE4600",
    "#F37000",
    "#FAA51A",
    "#FABE0A",
    "#70D477",
    "#54C6C4",
    "#29AAE3",
    "#009BDE",
    "#1A75BC",
    "#00539F",
    "#204096",
    "#142076",
    "#16195E"
];

const RISK_LEVELS = [{
    color:'#EB2625',
    min:80,
    max:1000
},{
    color:'#FAA51A',
    min:60,
    max:79
},{
    color:'#54C6C4',
    min:40,
    max:59
},{
    color:'#00539F',
    min:20,
    max:39
},{
    color:'#46a0fc',
    min:-100,
    max:19
}];

function getRiskColor(risk) {
    let newRisk = risk || 0;
    //console.log(newRisk)
    for(let cp of RISK_LEVELS) {
        if(newRisk >= cp.min && newRisk <= cp.max) {
            return cp.color;
        }
    }
    return '';
}

const COUNT_COLORS = ["#0b377e","#053d90","#0750af","#0c60c3","#0d6ed7","#0d78e0","#0e84e6","#108cec","#0f9aeb","#14a9e1","#23bbd2","#31cdc9","#30d7b9","#5ed7b8","#77d8b9","#94d6c8"];

/** 宁波地图 */
let mapNbPaper;
let vueVm;

function createMapRegion(paper, region) {
    let group = paper.set();
    for (let i = 0, len = region.paths.length; i < len; i++) {
        group.push(paper.path(region.paths[i]));
    }
    let text = paper.text(region.nameX, region.nameY, region.name)
        .attr('font-size', '12px')
        .attr('font-family', '微软雅黑')
        .attr('font-weight', 'normal')
        .attr('text-anchor', 'start')
        .attr('cursor', 'pointer')
        .attr('opacity', .6)
        .attr('fill', region.nameFillColor)
        .attr('title', '点击显示“'+region.name+'”信息')
        .data('cache-fill', region.nameFillColor)
        .data('name', region.name)
        .data('x-type', 'text');

    group.attr('fill', region.pathFillColor)
        .attr('stroke', '#46a0fc')
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-miterlimit', '10')
        .attr('title', '点击显示“'+region.name+'”信息')
        .data('name', region.name)
        .data('x-type', 'group')
        .attr('cursor', 'pointer');

    let mouseOver = function () {
        text.attr('opacity', 1);
        group.animate({
            opacity: .8
        }, 300);
    }
    let mouseOut = function () {
        text.attr('opacity', .8);
        group.animate({
            opacity: 1
        }, 300);
    }
    text.hover(mouseOver, mouseOut);
    group.hover(mouseOver, mouseOut);

    let regionClick = function (clickRegionName) {
        {
            // 第一次点击
            vueVm.selectedRegionName = clickRegionName;


            mapNbPaper.forEach(function (el) {
                if (el.data('x-type') == 'group') {
                    let regionName = el.data('name');
                    if (clickRegionName != regionName) {
                        el.attr('fill', '#083157').attr('stroke', '#fff');
                    } else {
                        el.attr('fill', '#46a0fc');
                    }
                } else if (el.data('x-type') == 'text') {
                    let regionName = el.data('name');
                    if (clickRegionName == regionName) {
                        if (['高新区', '东钱湖', '保税区'].includes(regionName)) {
                            el.attr('fill', '#fff');
                        } else {
                            el.attr('fill', el.data('cache-fill'));
                        }
                    } else {
                        el.attr('fill', '#666');
                    }
                }
            });
        }
    };

    group.click(function () {
        regionClick(this.data('name'));
    });
    text.click(function () {
        regionClick(this.data('name'));
    });
}

function refreshMapRiskData(regions) {
    mapNbPaper.forEach(function (el) {
        if (el.data('x-type') == 'group') {
            el.attr('fill', RISK_COLORS[15]).attr('stroke', '#fff');
        } else if(el.data('x-type') == 'text') {
            el.attr('fill', el.data('cache-fill'));
        }
    });


    mapNbPaper.forEach(function (el) {
        if (el.data('x-type') == 'group') {
            let regionName = el.data('name');
            for (let region of regions) {
                if (region.name == regionName) {
                    let fill = getRiskColor(region.risk);
                    el.attr('fill', fill);
                    el.data('cache-fill', fill);
                    break;
                }
            }
        }
    });
}

function refreshMapCountData(regions) {
    mapNbPaper.forEach(function (el) {
        if (el.data('x-type') == 'group') {
            el.attr('fill', COUNT_COLORS[15]).attr('stroke', '#fff');
        } else if(el.data('x-type') == 'text') {
            el.attr('fill', el.data('cache-fill'));
        }
    });

    let maxCount = 0;
    for (let region of regions) {
        if (region.company_count > maxCount) {
            maxCount = region.company_count;
        }
    }

    if(maxCount == 0) {
        return;
    }

    // 分数排名
    let ranks = [];
    for (let region of regions) {
        var isExists = false;
        for (let r of ranks) {
            if (region.company_count == r) {
                isExists = true;
                break;
            }
        }
        if (!isExists) {
            ranks.push(region.company_count);
        }
    }
    ranks.sort((a, b) => b-a);

    mapNbPaper.forEach(function (el) {
        if (el.data('x-type') == 'group') {
            var regionName = el.data('name');
            for (var i = 0, len = regions.length; i < len; i++) {
                if (regions[i].name == regionName) {
                    for(var j=0,jLen=ranks.length; j<jLen; j++) {
                        if(regions[i].company_count == ranks[j]) {
                            el.attr('fill', COUNT_COLORS[j]);
                        }
                    }
                    break;
                }
            }
        }
    });
}

export default {
    createMap(vm, elementId) {
        mapNbPaper = Raphael(elementId, '100%', '100%');
        mapNbPaper.setViewBox(0, 0, 460, 460);
        vueVm = vm;
        for (let mapRegion of MapDataNingbo) {
            createMapRegion(mapNbPaper, mapRegion);
        }
    },
    refreshCount: function (regions) {
        refreshMapCountData(regions);
    },
    refreshRisk: function (regions) {
        refreshMapRiskData(regions);
    },
    riskColors: RISK_COLORS,
    countColors: COUNT_COLORS
}
