<template>
  <div style="height: 100%;">
    <div class="wallpaper"></div>
    <div class="wallpaper2 animated flash"></div>
    <div id="header" style="overflow:hidden;">
      <img src="../../assets/img/login/logo2.png" alt="" style="width: 50%;margin-right: auto;margin-left: auto;display: inherit;margin-top: 2%;">
      <!--<div id="x-login-container">
        <form>
          <table>
            <tbody>
            <tr>
              <td style="padding-right: 5px">
                <input type="text" id="username" style="width: 120px; height: 30px;font-size: 20px;" placeholder="请输入账号" name="username" value="">
              </td>
              <td style="padding-right: 5px">
                <input type="password" id="password" style="width: 120px; height: 30px;font-size: 20px;" placeholder="请输入密码" name="password" value="">
              </td>
              <td style="padding-right: 5px;">
                <input type="button" id="btn-login" value="登 录" style="width: 90px; height: 30px;font-size: 20px;">
              </td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>-->
      <div class="login">
        <div class="login_son">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
            <el-form-item prop="username">
              <el-input size="small" placeholder="请输入账号" type="text" v-model="ruleForm2.username" autocomplete="off" ref="username"></el-input>
            </el-form-item>
            <el-form-item prop="password">

              <el-input size="small" placeholder="请输入密码" type="password" v-model="ruleForm2.password" autocomplete="off" ref="password"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button size="small" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div id="main">
      <div class='context'>
        <div class="container left" style="background: rgba(255, 255, 255, .1);">
          <div class="top">
            <div class="title"><span style="background: #00c5ff; margin: 0 2% 0 2%;">&nbsp;</span><span style="color:#00c5ff;font-weight: bold;">天罗地网</span></div>
            <div id="button" class="x-tldw" style="overflow: hidden;">
              <div style="padding-top: 5%; width: 100%; height: 100%;">
                <img src="../../assets/img/login/001-.png" style="width: 50%;height: 95%;">
              </div>
              <div style="position: relative; top: -100%; width: 100%; height: 100%;">
                <div style="cursor:pointer;position:absolute;top:3%;left:26%;font-size:1.5em;"><img src="../../assets/img/login/04.png" style="width: 20%; vertical-align: top; margin-right: 6%;"/>天罗巡查</div>
                <div style="cursor:pointer;position:absolute;top:24%;left:46%;font-size:1.5em;"><img src="../../assets/img/login/02.png" style="width: 19%; vertical-align: top; margin-right: 4%;"/>企业画像</div>
                <div style="cursor:pointer;position:absolute;top:46%;left:57%;font-size:1.5em;"><img src="../../assets/img/login/10.png" style="width: 22%; vertical-align: top; margin-right: 6%;"/>关联分析</div>
                <div style="cursor:pointer;position:absolute;top:69%;left:46%;font-size:1.5em;"><img src="../../assets/img/login/01.png" style="width: 22%; vertical-align: top; margin-right: 6%;margin-top:1%"/>舆情监测</div>
                <div style="cursor:pointer;position:absolute;top:88%;left:26%;font-size:1.5em;"><img src="../../assets/img/login//11.png" style="width: 21%; vertical-align: top; margin-right: 9%;"/>广告监测</div>

              </div>
            </div>
          </div>
          <div class="sa"></div>
          <div class="bottom">
            <div id="button" style="overflow: hidden;">
              <div style="padding-top: 5%; width: 100%; height: 100%;">
                <img src="../../assets/img/login/002-.png" style="margin-left:50%; width: 50%;height: 95%;">
              </div>
              <div style="position: relative; top: -100%; width: 100%; height: 100%;">
                <div style="cursor:pointer;position:absolute;top:3%;left:46%;font-size:1.5em;"><img src="../../assets/img/login/1213.png" style="width: 22%; vertical-align: top; margin-right: 6%;"/>地网排查</div>
                <div style="cursor:pointer;position:absolute;top:23%;left:25%;font-size:1.5em;"><img src="../../assets/img/login/07.png" style="width: 18%; vertical-align: top; margin-right: 6%;"/>机构监管</div>
                <div style="cursor:pointer;position:absolute;top:46%;left:16%;font-size:1.5em;"><img src="../../assets/img/login/13.png" style="width: 23%; vertical-align: top; margin-right: 6%;"/>信息汇聚</div>
                <div style="cursor:pointer;position:absolute;top:69%;left:25%;font-size:1.5em;"><img src="../../assets/img/login/06.png" style="width: 19%; vertical-align: top; margin-right: 6%;"/>部门协同</div>
                <div style="cursor:pointer;position:absolute;top:89%;left:46%;font-size:1.5em;"><img src="../../assets/img/login/08.png" style="width: 19%; vertical-align: top; margin-right: 6%;"/>预警处置</div>
              </div>
            </div>
          </div>
        </div>
        <div class="container center">
          <div class="top">
            <div class="title" style="display:none;padding-top: 1.5%;"><span style="background: #00c5ff; margin: 0 2% 0 2%;">&nbsp;</span>宁波市类金融影响辐射地图</div>
            <div class="vessel" style="width: 56%; z-index: 9001; height: 24%; position: absolute; overflow: hidden; left: 22%;">

              <div class="cen-top2" style="width: 50%;float: left;">
                <div class="text" style=" font-size: 30px; width: 100%; height: 100%; line-height: 150%; color: #fff; font-weight: normal; font-family: ΢���ź�; white-space: nowrap; text-align: center; padding-right: 2%;">监测覆盖规模</div>
                <div class="dataStatistics" style="color: #fedec2; font-family: 'Helvetica Neue', sans-serif; font-size: 4.6vw; font-weight: bold; height: 5vw; margin: 0 auto;  margin-right: 10px; margin-left: 24px;">
                </div>
                <div class="text text-b" style="font-size: 1.6vw; width: 33%; height: 100%; line-height: 150%; color: #fff; font-weight: 600; white-space: nowrap; text-align: right; padding-right: 2%;position: relative;margin-top: 42px">&nbsp;家</div>
              </div>

              <div class="cen-top" style="width: 48%;float: left;">
                <div class="text" style=" font-size: 30px; width: 100%; height: 100%; line-height: 150%; color: #fff; font-weight: normal; font-family: ΢���ź�; white-space: nowrap; text-align: center; padding-right: 2%;">类金融机构总量</div>
                <div class="dataStatistics" style="color: #fedec2; font-family: 'Helvetica Neue', sans-serif; font-size: 4.6vw; font-weight: bold; height: 5vw; margin: 0 auto;  margin-right: 10px; margin-left: 24px;">
                </div>
                <div class="text text-b" style="font-size: 1.6vw; width: 33%; height: 100%; line-height: 150%; color: #fff; font-weight: 600; white-space: nowrap; text-align: right; padding-right: 2%;position: relative;margin-top: 42px">&nbsp;家</div>
              </div>



            </div>
            <canvas id="chinaMap" style="padding-top:12%"></canvas>
          </div>
        </div>
        <div class="container right">
          <div class="top">
            <div class="title"><span style="background: #00c5ff; margin: 0 2% 0 2%;">&nbsp;</span><span style="color:#00c5ff;font-weight: bold;">全面覆盖</span></div>
            <div id="pie" style="height:85%;/*background: radial-gradient(hsl(214, 49%, 34%), hsl(230, 96%, 13%));*/">
              <div id="bg"></div>
              <div class="_fuxk" style="top: -6vw; left: 11vw;">
                <div class="_demo"></div>
                <div style="font-size:16px;">累计平台量<br><span id="ptsl"></span></div>
              </div>
              <div class="_fuxk" style="top: -15vw; left: 5vw;">
                <div class="_demo"></div>
                <div style="font-size:16px;">在运营平台<br><span id="zyysl"></span></div>
              </div>
              <div class="_fuxk" style="top: -11vw; left: 6vw;">
                <div class="_demo"></div>
                <div style="font-size:16px;">类金融机构<br><span id="ljrsl"></span></div>
              </div>
              <div class="_fuxk" style="top: -18vw; left: 2vw;">
                <div class="_demo"></div>
                <div style="font-size:16px;">网站数量<br><span id="wzsl"></span></div>
              </div>
              <div class="_fuxk" style="top: -25vw; left: 10vw;">
                <div class="_demo"></div>
                <div style="font-size:16px;">业态种类<br><span id="ytsl"></span></div>
              </div>
            </div>
            <div class="glass"></div>
          </div>
          <div class="sa"></div>
          <div class="bottom">
            <div class="title"><span style="background: #00c5ff; margin: 0 2% 0 2%;">&nbsp;</span><span style="color:#00c5ff;font-weight: bold;">精准防控</span></div>
            <div id="line" style="height:54%">
            </div>
            <div id="r1"></div>
            <div id="r2"></div>
            <div id="r3"></div>
            <div class="glass"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="footer" style="text-align:center">
      <div style="margin-right: auto;margin-left: auto;display: inherit;margin-top: 3%;font-size: 1.5em;">
        <span style="color:#fff;vertical-align: middle;">宁波市人民政府金融工作办公室</span>
        <img src="../../assets/img/login/sponsor-3.png" style="height: 20px;padding: 0px 1.5% 0 0.5%;vertical-align: middle;margin-top: 2px;">
        <span style="color:#fff;vertical-align: middle;line-height: 0px;">国家互联网应急中心</span>
        <img src="../../assets/img/login/sponsor-1.png" style="height: 13px;padding: 0px 1.5% 0 0.5%;vertical-align: middle;margin-top: 2px;">
        <span style="color:#fff;vertical-align: middle;">宁波大学</span>
        <img src="../../assets/img/login/sponsor-2.png" style="height: 20px;padding: 0 1.5% 0 0.5%;vertical-align: middle;">
      </div>
    </div>

  </div>
</template>

<style lang="scss">
  @import "@/assets/css/page/login/login.scss";
  @import "../../assets/css/page/login/dataStatistics.css";
</style>

<style scoped>
  .nav {
    border-bottom: 0;
  }
  .dataStatistics .digit_set{
    width: 2vw;
    height: 79px;
    margin-top: 10px;
    margin-left: 24px;
  }
  .dataStatistics .digit > div.digit_top,  .dataStatistics .digit > div.shadow_top{
    width: 3.5vw;
  }
  .dataStatistics .digit > div.shadow_top{
    width: 3.5vw;
  }
  .dataStatistics .digit > div{
    width: 3.5vw;
  }
  .digit_wrap{
    line-height: 4vw;
    font-size: 3.6vw;

  }

  #line,
  #pie,
  #radar,
  #button {
    width: 100%;
  }

  #line,
  #pie,
  #radar,
  #button {
    height: 85%;
  }

  #chinaMap {
    /*height: 107% !important;*/
    padding-top: 10% !important;
  }

  .title {
    padding-top: 1.5%;
    font-size: 1.5em;
    color: #fff;
    border-bottom: 1px solid #037abb;
    border-top: 1px solid #037abb;
  }

  div#button div {
    color: aliceblue;
  }

  div#button div img {
    vertical-align: middle;
  }

  div#button div span {
    cursor: pointer;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Helvetica, Calibri, Roboto, Open Sans, sans-serif;
    -webkit-backface-visibility: hidden;
  }

  * {
    box-sizing: inherit;
  }

  h1 {
    text-align: center;
  }

  svg {
    margin: auto;
    display: block;
  }

  ._fuxk {
    color: #fff;
    position: relative;
    width: 80px;
    text-align: center;
    font-size: 0.1em;
    display: none;
  }

  ._demo {
    width: 10px;
    height: 10px;
    margin: auto;
    border: 6px solid #db98c8;
    border-radius: 50%;
  }

  .circle-overlay {
    font-size: 16px;
    border-radius: 50%;
    position: absolute;
    overflow: hidden;
    /*it's buggy with the foreignObject background right now*/
    /*background-color: rgba(255,255,255,0.5);*/
  }

  .circle-overlay__inner {
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .hidden {
    display: none;
  }

  .node-icon--faded {
    opacity: 0.2;
  }

  #r1, #r2, #r3 {
    height: 30%;
    width: 22%;
    margin-left: 8%;
    display: inline-block;
  }

  .legend-size circle {
    fill: rgb(31, 119, 180);
  }

  .tech-stack-container {
    padding: 1rem 2rem;
    position: relative;
  }

  @media screen and (min-width: 992px) {
    .tech-stack-container {
      padding: 1rem 5rem;
    }
  }

  #bg {
    margin: auto;
  }

  .tech-stack-title {
    margin: 0;
  }

  .circle-overlay__title {
    color: #fff;
  }

  .circle-overlay__body {
    color: #fff;
    font-size: 16px;
  }

  #x-login-container {
    position: absolute;
    z-index: 2;
    top: 30px;
    right: 20px;
    color: #2e5585;
  }

  #x-login-container input[type="text"],
  #x-login-container input[type="password"] {
    width: 110px;
    height: 25px;
    padding: 0 5px;
    outline: none;
    border: 1px solid rgba(33, 150, 243, 1);
    background: rgba(20, 111, 182, 0.5);
    color: #fff;
  }

  #x-login-container input[type="text"]::placeholder,
  #x-login-container input[type="password"]::placeholder {
    color: #ccc;
    background: rgba(20, 111, 182, 0.5);
  }

  #x-login-container input[type="button"] {
    height: 25px;
    background: rgb(0, 104, 187);
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid rgb(20, 111, 182);
    color: #fff;
    padding: 0 10px;
    outline: none;
    cursor: pointer;
  }

  .x-tldw a {
    color: aliceblue;
    text-decoration: none;
  }
  .digit_bottom .digit_wrap {
    margin-left:0;
    margin-top:-60% !important;
  }
</style>

<script>
  import echarts from 'echarts';
  import {dataStatistics} from '../../assets/js/jquery.dataStatistics';
  import {tldw} from "../../assets/js/login-tldw";
  import {loadChinaMap} from '../../assets/js/china-map-distribution'

  let intervalId_1 = 0;
  let intervalId_2 = 0;

  function setSum($dsContent, sum, sumLength) {

    //补位用空白html
    var htmlnone = '<div class="digit_set" style="box-shadow:0 0px 0px;border:0px"></div>';
    var html = '<div class="digit_set set_activity"></div>';
    var htmlmiddle = '<div class="digit_set set_activity set_middle"></div>';
    var htmlend = '<div class="digit_set set_activity set_last"></div>';

    //初始化html
    var kbsum = 5 - sumLength;

    //var sumArray = sum.split("");
    for (var i = 0; i < kbsum; i++) {
      $dsContent.append(htmlnone);
    }
    for (var j = 0; j < sumLength; j++) {
      if (j == sumLength - 1) {
        $dsContent.append(htmlend);
      } else if (j == 2) {
        $dsContent.append(htmlmiddle);
      } else {
        $dsContent.append(html);
      }
    }
    $dsContent.dataStatistics({min: 0, max: sum, time: 100, len: sumLength});

  }

  export default {
    name: "login",
    mounted() {

      $("#bg").css("width", $("#pie").height())
      $("#bg").css("height", $("#pie").height())
      var radar = document.getElementById('bg'),
        diameter = $("#bg").width() > $("#bg").height() ? $("#bg").height() : $("#bg").width(),
        radius = diameter / 2,
        padding = 28,
        ctx = tldw.create({
          container: radar,
          fullscreen: false,
          width: diameter,
          height: diameter
        }),
        dToR = function (degrees) {
          return degrees * (Math.PI / 180);
        },
        sweepAngle = 270,
        sweepSize = 2,
        sweepSpeed = 1.2,
        rings = 4,
        hueStart = 120,
        hueEnd = 170,
        hueDiff = Math.abs(hueEnd - hueStart),
        saturation = 50,
        lightness = 40,
        lineWidth = 4,
        gradient = ctx.createLinearGradient(radius, 0, 0, 0);


      gradient.addColorStop(0, 'hsla( ' + hueStart + ', ' + saturation + '%, ' + lightness + '%, 1 )');
      gradient.addColorStop(1, 'hsla( ' + hueEnd + ', ' + saturation + '%, ' + lightness + '%, 0.1 )');

      var renderRings = function () {
        var i;
        for (i = 0; i < rings; i++) {
          ctx.beginPath();
          ctx.arc(radius, radius, ((radius - (lineWidth / 2)) / rings) * (i + 1), 0, TWO_PI, false);
          ctx.strokeStyle = 'hsla(' + (hueEnd - (i * (hueDiff / rings))) + ', ' + saturation + '%, ' + lightness + '%, 0.1)';
          ctx.lineWidth = lineWidth;
          ctx.stroke();
        }
        ;
      };

      var renderGrid = function () {
        ctx.beginPath();
        ctx.moveTo(radius - lineWidth / 2, lineWidth);
        ctx.lineTo(radius - lineWidth / 2, diameter - lineWidth);
        ctx.moveTo(lineWidth, radius - lineWidth / 2);
        ctx.lineTo(diameter - lineWidth, radius - lineWidth / 2);
        ctx.strokeStyle = 'hsla( ' + ((hueStart + hueEnd) / 2) + ', ' + saturation + '%, ' + lightness + '%, .03 )';
        ctx.stroke();
      };

      var renderSweep = function () {
        ctx.save();
        ctx.translate(radius, radius);
        ctx.rotate(dToR(sweepAngle));
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, dToR(-sweepSize), dToR(sweepSize), false);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      };

      var renderScanLines = function () {
        var i;
        var j;
        ctx.beginPath();
        for (i = 0; i < diameter; i += 2) {
          ctx.moveTo(0, i + .5);
          ctx.lineTo(diameter, i + .5);
        }
        ;
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'hsla( 0, 0%, 0%, .02 )';
        ctx.globalCompositeOperation = 'source-over';
        ctx.stroke();
      };

      ctx.clear = function () {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'hsla( 0, 0%, 0%, 0.1 )';
        ctx.fillRect(0, 0, diameter, diameter);
      };

      ctx.update = function () {
        sweepAngle += sweepSpeed;
      };

      ctx.draw = function () {
        ctx.globalCompositeOperation = 'lighter';
        renderRings();
        renderGrid();
        renderSweep();
        renderScanLines();
      };


      $("#button span").click(function () {
        var id = $(this).attr("id");
        location.assign("./" + id);
      });


      //金融影响辐射地图
      loadChinaMap.chinaMap(document.getElementById('chinaMap'));


      //全面覆盖雷达图
      var mySyRadarChart, optionRadar;

      var option1 = {

        grid: {
          z: 1,    //grid作为柱状图的坐标系，其层级要和仪表图层级不同，同时隐藏
          show: false,
          left: '-30%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          splitLine: {
            show: false    //隐藏分割线
          },
        },
        xAxis: [   //这里有很多的show，必须都设置成不显
          {
            type: 'category',
            data: [],
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            splitArea: {
              interval: 'auto',
              show: false
            }
          }
        ],
        yAxis: [ //这里有很多的show，必须都设置成不显示
          {
            type: 'value',
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
          }
        ],
        toolbox: {
          show: false,
        },
        series: [
          {
            name: '刻度盘',
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ["50%", "90%"], //整体的位置设置
            z: 3,

            min: 0,
            max: 100,

            splitNumber: 10,
            radius: '170%',
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 30,
                color: [
                  [0.25, '#2ec7c9'],
                  [0.75, '#5ab1ef'],
                  [1, '#d87a80']
                ],
              }
            },
            axisTick: {            // 坐标轴小标记
              length: 12,        // 属性length控制线长
              splitNumber: 2,
              lineStyle: {       // 属性lineStyle控制线条样式
                color: '#cdcdcd'
              }
            },
            splitLine: {           // 分隔线
              length: 12,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: true,
              length: '70%',
              width: 8,
            },
            title: {   //仪表盘标题
              show: true,
              offsetCenter: ["0%", "-35%"],
              textStyle: {
                color: '#fff',
                fontSize: 18,
                fontFamily: 'Microsoft YaHei'
              }
            },
            detail: {
              textStyle: {
                fontSize: 18,
                color: '#fff'
              },
              offsetCenter: ["0%", "-40%"],
              formatter: function () {
                return '天罗地网指数';
              }
            },
            data: [{value: '12', name: '天罗地网指数'}]
          },

          {
            name: '第一阶段',
            type: 'bar',
            barWidth: '60%',  //不显示，可以随便设置
            data: [0],
            itemStyle: {
              normal: {
                color: '#2ec7c9',  //这里的图例要注意，颜色设置和仪表盘的颜色对应起来
              }
            }
          },
          {
            name: '第二阶段',
            type: 'bar',
            barWidth: '60%',
            data: [0],
            itemStyle: {
              normal: {
                color: '#5ab1ef',
              }
            }
          },
          {
            name: '第三阶段',
            type: 'bar',
            barWidth: '60%',
            data: [0],
            itemStyle: {
              normal: {
                color: '#d87a80',
              }
            }
          }
        ]
      }

      var dataStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          shadowBlur: 40,
          shadowColor: 'rgba(40, 40, 40, 0.5)',
        }
      };

      var placeHolderStyle = {
        normal: {
          color: '#0a3c70', // 未完成的圆环的颜色
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        },
        emphasis: {
          color: '#0a3c70' // 未完成的圆环的颜色
        }
      };

      let zjwoption = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
          name: "在境外",
          type: 'pie',
          clockWise: false,
          radius: ['80%', '90%'],
          itemStyle: dataStyle,
          hoverAnimation: false,
          avoidLabelOverlap: false,
          data: [{
            value: 100,
            name: 'invisible',
            itemStyle: placeHolderStyle,
          }, {
            value: 4.84,
            label: {
              normal: {
                formatter: '{a}\n{d}%',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'normal',
                  color: '#a6f08f'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#a6f08f',
                shadowColor: '#a6f08f',
                shadowBlur: 10
              }
            }
          }]
        }]
      };

      let wbaoption = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
          name: "未备案",
          type: 'pie',
          clockWise: false,
          radius: ['80%', '90%'],
          itemStyle: dataStyle,
          hoverAnimation: false,
          avoidLabelOverlap: false,
          data: [{
            value: 100,
            name: 'invisible',
            itemStyle: placeHolderStyle,
          }, {
            value: 1.61,
            label: {
              normal: {
                formatter: '{a}\n{d}%',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'normal',
                  color: '#3dd4de'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#3dd4de',
                shadowColor: '#3dd4de',
                shadowBlur: 10
              }
            }
          }]
        }]
      };
      let gsyoption = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
          name: "高收益",
          type: 'pie',
          clockWise: false,
          radius: ['80%', '90%'],
          itemStyle: dataStyle,
          hoverAnimation: false,
          avoidLabelOverlap: false,
          data: [{
            value: 100,
            name: 'invisible',
            itemStyle: placeHolderStyle,
          }, {
            value: 13.44,
            label: {
              normal: {
                formatter: '{a}\n{d}%',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'normal',
                  color: '#87cefa'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#87cefa',
                shadowColor: '#87cefa',
                shadowBlur: 10
              }
            }
          }]
        }]
      };


      let wzzoption = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
          name: "无资质",
          type: 'pie',
          clockWise: false,
          radius: ['80%', '90%'],
          itemStyle: dataStyle,
          hoverAnimation: false,
          avoidLabelOverlap: false,
          data: [{
            value: 100,
            name: 'invisible',
            itemStyle: placeHolderStyle,
          }, {
            value: 0.51,
            label: {
              normal: {
                formatter: '{a}\n{d}%',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'normal',
                  color: '#ff7f50'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#ff7f50',
                shadowColor: '#ff7f50',
                shadowBlur: 10
              }
            }
          }]
        }]
      };

      let sxoption = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
          name: "失信",
          type: 'pie',
          clockWise: false,
          radius: ['80%', '90%'],
          itemStyle: dataStyle,
          hoverAnimation: false,
          avoidLabelOverlap: false,
          data: [{
            value: 100,
            name: 'invisible',
            itemStyle: placeHolderStyle,
          }, {
            value: 2.99,
            label: {
              normal: {
                formatter: '{a}\n{d}%',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'normal',
                  color: '#da70d6'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#da70d6',
                shadowColor: '#da70d6',
                shadowBlur: 10
              }
            }
          }]
        }]
      };


      let ssoption = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
          name: "涉诉",
          type: 'pie',
          clockWise: false,
          radius: ['80%', '90%'],
          itemStyle: dataStyle,
          hoverAnimation: false,
          avoidLabelOverlap: false,
          data: [{
            value: 100,
            name: 'invisible',
            itemStyle: placeHolderStyle,
          }, {
            value: 5.38,
            label: {
              normal: {
                formatter: '{a}\n{d}%',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'normal',
                  color: '#32cd32'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#32cd32',
                shadowColor: '#32cd32',
                shadowBlur: 10
              }
            }
          }]
        }]
      };


      let gsycoption = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
          name: "工商异常",
          type: 'pie',
          clockWise: false,
          radius: ['80%', '90%'],
          itemStyle: dataStyle,
          hoverAnimation: false,
          avoidLabelOverlap: false,
          data: [{
            value: 100,
            name: 'invisible',
            itemStyle: placeHolderStyle,
          }, {
            value: 29.6,
            label: {
              normal: {
                formatter: '{a}\n{d}%',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'normal',
                  color: '#ba55d3'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#ba55d3',
                shadowColor: '#ba55d3',
                shadowBlur: 10
              }
            }
          }]
        }]
      };


      let xjxcoption = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
          name: "虚假宣传",
          type: 'pie',
          clockWise: false,
          radius: ['80%', '90%'],
          itemStyle: dataStyle,
          hoverAnimation: false,
          avoidLabelOverlap: false,
          data: [{
            value: 100,
            name: 'invisible',
            itemStyle: placeHolderStyle,
          }, {
            value: 6.99,
            label: {
              normal: {
                formatter: '{a}\n{d}%',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'normal',
                  color: '#ff69b4'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#ff69b4',
                shadowColor: '#ff69b4',
                shadowBlur: 10
              }
            }
          }]
        }]
      };


      echarts.init(document.querySelector("#line")).setOption(option1)
      intervalId_2 = setInterval(function () {
        option1.series[0].data[0].value = (Math.random() * 20).toFixed(1) + 0;
        echarts.init(document.querySelector("#line")).setOption(option1)
      }, 2000);
      echarts.init(document.querySelector("#r1")).setOption(zjwoption)
      echarts.init(document.querySelector("#r2")).setOption(gsyoption)
      echarts.init(document.querySelector("#r3")).setOption(wbaoption)

      var asdqwe = 0;

      intervalId_1 =  setInterval(function () {
        var qweasd = (asdqwe++) % 3;
        if (qweasd == 0) {
          echarts.init(document.querySelector("#r1")).setOption(xjxcoption)
          echarts.init(document.querySelector("#r2")).setOption(gsycoption)
          echarts.init(document.querySelector("#r3")).setOption(ssoption)
        } else if (qweasd == 1) {
          echarts.init(document.querySelector("#r1")).setOption(wzzoption)
          echarts.init(document.querySelector("#r2")).setOption(sxoption)
          echarts.init(document.querySelector("#r2")).setOption(sxoption)
        } else {
          echarts.init(document.querySelector("#r1")).setOption(zjwoption)
          echarts.init(document.querySelector("#r2")).setOption(gsyoption)
          echarts.init(document.querySelector("#r3")).setOption(wbaoption)
        }
      }, 3000)

      var ptdata, yhdata, zjdata;

      function getAsdfNum(data) {
        data.forEach(function (v) {
          if (v.tjlx == "ljrsl") {
            ptdata = v.zl + "";
            setSum($("div.cen-top>div.dataStatistics"), ptdata || 0, ptdata.length);
          }
          $("#" + v.tjlx).text(v.zl);
        })
        setInterval(function () {
          if ($("._fuxk").is(":hidden")) {
            $("._fuxk").fadeIn()
          } else {
            $("._fuxk").fadeOut();
          }
        }, 2000);
      }
      function getAsdfNum2(data) {
        data.forEach(function (v) {
          if (v.tjlx == "ljrsl") {
            ptdata = v.zl + "";
            setSum($("div.cen-top2>div.dataStatistics"), ptdata || 0, ptdata.length);
          }
          // $("#" + v.tjlx).text(v.zl);
        })
        /* setInterval(function () {
            if ($("._fuxk").is(":hidden")) {
                $("._fuxk").fadeIn()
            } else {
                $("._fuxk").fadeOut();
            }
        }, 2000); */
      }


      let respText = "{\"body\":{\"allsize\":22574,\"heisize\":0,\"huisize\":0,\"v3size\":22551},\"header\":{\"msg\":\"调用成功\",\"code\":0}}"

      var resp = $.parseJSON(respText);
      var jgdaTotal = resp.body.v3size;
      var allTotal = resp.body.allsize;

      getAsdfNum([
        {"tjlx": "ptsl", "zl": 447},
        {"tjlx": "zyysl", "zl": 171},
        // {"tjlx": "qysl", "zl": 159},
        {"tjlx": "ytsl", "zl": 17},
        {"tjlx": "wzsl", "zl": 728},
        {"tjlx": "ljrsl", "zl": jgdaTotal}
      ]);
      getAsdfNum2([
        {"tjlx": "ljrsl", "zl": allTotal}
      ]);
      localStorage.setItem('_login_jgdaTotal_', jgdaTotal);
    },
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          callback(); //放行
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入用户名"));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          username: "nbsjrb",
          password: "xiyuan123"
        },
        rules2: {
          password: [{ validator: validatePass, trigger: "blur" }],
          username: [{ validator: validatePass2, trigger: "blur" }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        var self = this;
        this.$refs[formName].validate(valid => {
          if (!valid) {//校验失败
            alert("用户名或密码为空，无法登录");
            return;
          }

          var username = this.$refs.username.value;
          var password = this.$refs.password.value;
          var data = {
            username: username,
            password: password
          };

          var url = this.HOME +"account/login?" + "username=" +  username + "&password=" + password;
          this.$axios.post(url).then(function(res) {

            if (res.status == "200") {
              var user = res.data.data;
              sessionStorage.setItem("user", JSON.stringify(user));
              sessionStorage.setItem("authorization", user.token);
              sessionStorage.setItem("userId", user.id);
              sessionStorage.setItem("departmentId", user.departmentId);
              self.$router.replace({ path: "/" }); //成功跳转首页

              //销毁相关的setInterval事件
              clearInterval(intervalId_1);
              clearInterval(intervalId_2);
            }

            if (res.status == "500") {
              alert(res.data.msg);
            }

          });

        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="scss" scoped>
.login {
  background-size: 100% 100%;
  width: 100%;
  height: 1080px;
  .login_son {
    float: right;
    .el-form-item {
      width: 120px;
      height: 32px;
      float: left;
      margin-left: 5px;
    }
    .el-form-item:last-child {
      width: 80px;
      margin-left: 10px;
    }
  }
}
</style>
