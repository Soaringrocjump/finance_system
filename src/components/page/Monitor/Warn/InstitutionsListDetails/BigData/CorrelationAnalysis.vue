<template>
  <div id="wrapper" style="min-height: 650px;">
    <div id ="nav">
    </div>
    <div id ="content">
      <div class='frosted-glass'></div>
      <div id ="chart">
        <div id="myContent" style="height:100%;margin-top:1%;">
          <div class="bottom bg-base border-base" style="width: 39%;height:99%">

            <div class="one" style="height:100%;padding:5px">
              <div style="width: 100%;height:10%;padding:8px;">

              </div>

            </div></div>
          <div id="d3box" class="bottom bg-base border-base" style="overflow: hidden;padding:5px;position:absolute;right:1%;top:2% ;width: 85%;height:96.7%;z-index: 11;">
            <div id="nl"></div>
            <div id="tool_box" style="top: 63%;left: 87%;">
              <div style="width:100%;height:100%">
                <div id="fgsgx" style="transform: scale(.6);display: inline-block;position: absolute;top: -102%; width: 95%;left: -12%;font-size:18px;">分公司关系<input class="ios7CBox" type="checkbox" checked="checked" style="display:inline-block;vertical-align: sub;margin-left: 8px;">
                </div>
                <div id="yjjdbt" style="transform: scale(.6);display: inline-block;position: absolute;top: -96%; width: 95%;left: -9%;font-size:18px;">一级节点<input class="jibie ios7CBox" type="checkbox" checked="checked" bd-data="1" style="display:inline-block;vertical-align: sub;margin-left: 8px;">
                </div>
                <div id="ejjdbt" style="transform: scale(.6);display: inline-block;position: absolute;top: -90%;width: 95%;left: -9%;font-size:18px;">二级节点<input class="jibie ios7CBox" type="checkbox" bd-data="2" style="display:inline-block;vertical-align: sub;margin-left: 8px;">
                </div>
                <div id="sjjdbt" style="transform: scale(.6);display: inline-block;position: absolute;top: -84%; width: 95%;left: -9%;font-size:18px;">三级节点<input class="jibie ios7CBox" type="checkbox" bd-data="3" style="display:inline-block;vertical-align: sub;margin-left: 8px;">
                </div>
                <div id="gqgxbt" style="transform: scale(.6);display: inline-block;position: absolute;top: -78%;width: 95%;left: -9%;font-size:18px;">相对控股<input class="ios7CBox" type="checkbox" checked="checked" style="display:inline-block;vertical-align: sub;margin-left: 8px;">
                </div>
                <div style="width: 135px;height:80px;   ">
                  <div style="transform: scale(.6);display: inline-block;font-size:18px;"><div class='tuli' style="background: #0095cb;"></div> 机构</div>
                  <div style="transform: scale(.6);display: inline-block;font-size:18px;margin-left:-10%"><div class='tuli' style="background: yellow;"></div> 平台</div></br>
                  <div style="transform: scale(.6);display: inline-block;font-size:18px;"><div class='tuli' style="background: #ff4b00;"></div> 人员</div>
                  <div style="transform: scale(.6);display: inline-block;font-size:18px;margin-left:-10%"><div class='tuli' style="background: green;"></div> 通联</div>
                </div>
                <span class="linetuli" style="border-color:red;">
										<b style="border-left-color:red;"></b>
										<span style="color: red;font-size:18px;margin-top: -15%;">投资关系</span>
									</span>
                <span class="linetuli" style="border-color:yellow;">
										<b style="border-left-color:yellow;"></b>
										<span style="color: yellow;font-size:18px;margin-top: -15%;">法人关系</span>
									</span>
                <span class="linetuli" style="border-color:#ff03e0;">
										<b style="border-left-color:#ff03e0;"></b>
										<span style="color: #ff03e0;font-size:18px;margin-top: -15%;">任职关系</span>
									</span>
                <span class="linetuli" style="border-color:#d1d1d1;">
										<b style="border-left-color:#d1d1d1;"></b>
										<span style="color: #d1d1d1;font-size:18px;margin-top: -15%;">分公司关系</span>
									</span>
                <span class="linetuli" style="border-color:green;">
										<b style="border-left-color:green;"></b>
										<span style="color: green;font-size:18px;margin-top: -15%;">平台公司关系</span>
									</span>
                <span class="linetuli" style="border-color:lightblue;">
										<b style="border-left-color:lightblue;"></b>
										<span style="color: lightblue;font-size:18px;margin-top: -15%;">通讯地址关联</span>
									</span>
                <span class="linetuli" style="border-color:aqua;">
                                        <b style="border-left-color:aqua;"></b>
                                        <span style="color: aqua;font-size:18px;margin-top: -15%;">相对控股关系</span>
                                    </span>

              </div>
            </div>
            <div id="msg_box" style="position: absolute;width: 80%;top: 0;left: 1%;z-index:-1">
              <div style="width: 32%;"><span>关联企业</span><span id="glqysl" class="msg_box_num">0</span>家</div>

              <div style="width: 32%;"><span>关联平台</span><span id="glptsl" class="msg_box_num">0</span>家</div>

              <div style="width: 32%;"><span>关联自然人</span><span id="glzrrsl" class="msg_box_num">0</span>人</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as d3 from 'd3';
  import category from './Category';

  /*关联分析*/

    export default {
      name: "CorrelationAnalysis",

      mounted(){
        let oc = {
          level2: true,
          person: true,

        }

        let displayLevel = 1;
        let checkedTr = null;
        let whatTheFuck = false;

        $("body").on("mouseover", ".node", function(e) {
          let datas = $(this).find("div").text();
          $(".redisplay").empty();
          $(".redisplay").append(datas);
          $(".redisplay").css({top:15+e.pageY,left:15+e.pageX});
          $(".redisplay").show();

        })
        $("body").on("mouseout", ".node", function(e) {
          $(".redisplay").hide();
        });

        let data = category;

        $("#nl").empty();
        if ( data.code == "failed" ) {

          $("#glqysl").text(0);
          $("#glptsl").text(0);
          $("#glzrrsl").text(0);
          alert(data.msg);
        } else {
          $("#nl").empty();
          let glqynum = -1, glptnum = 0, glzrrnum = 0;

          for (let i = 0; i < data.nodes.length; i++) {
            if (data.nodes[i].type == 0) {glqynum++;}
            if (data.nodes[i].type == 1) {glzrrnum++;}
            if (data.nodes[i].type == 2) {glptnum++;}
          }

          for (let i = 0; i < data.edges.length; i++) {
            data.edges[i].data.forEach(function(val) {
              //if (val.lineType == 9) {glqynum--;}
            });
          }

          if ( displayLevel == 1 ) {
            //$("#glqysl").text($(_this).find("td").last().text());
            $("#glqysl").text(glqynum);
          } else {
            $("#glqysl").text(glqynum);
          }
          $("#glptsl").text(glptnum);
          $("#glzrrsl").text(glzrrnum);

          for (let i = 0; i < data.edges.length; i++) {
            for (let j = 0; j < data.nodes.length; j++) {

              if ( data.nodes[j].id == data.edges[i].source ) {
                data.edges[i].source = j;
              }

              if ( data.nodes[j].id == data.edges[i].target ) {

                data.edges[i].id = data.nodes[j].id
                data.edges[i].target = j;
              }
            }
          }

          /**
           * 某个type的 元素属性映射
           */
          let mapping = {
            //结点背景色
            background: ["#0095cb", "#ff4b00", "yellow", "green"],
            //线条颜色 SHAREHOLDER=0,股东TEL=1,	电话 EMAIL=2 邮箱,PRODUCT=3 平台,	WORK=4 任职,LEGALPERSON=5 法人,SUBCOMPANY=6 子公司

            linecolor: ["red", "lightblue", "lightblue", "green", "#ff03e0", "yellow", "#d1d1d1", "aqua", "aqua", "aqua"],
            //结点直径
            size: [60, 30, 30, 40],
            //节点内文字颜色
            color: ["#fff", "#fff", "blue", "#fff"],
            //连线上剪头的的偏移量
            flag: [22, 15, 15, 22],
            //结点与连线的类型映射 COMPANY=0  公司,PERSON=1  人<包括自然人股东、主要人员> ,PLATFORM=2 平台,COMMUNCATION=3
            types: ["company", "person", "platform", "communcation"]
          }

          let ram = {

          }


          let width = 1360;
          let height = 600;

          d3.select("#nl")
            .call(
              d3.behavior
                .zoom()
                .scaleExtent([-10, 10])
                .on("zoom", function() {
                  d3.select("#box")
                    .attr("style","transform:translate(" + d3.event.translate.map(function(v) {return v/2 + "px"}) + ") scale(" + d3.event.scale + ")");
                })
            )
            .on("dblclick.zoom",null)

          let container = d3
            .select("#nl")
            .append("div")
            .attr("id", "box")
            .attr("width",width + "px")
            .attr("height",height + "px")
            .style("transform", "translate(-220px,-79.5px) scale(.8)")

          let force = d3.layout.force()
            .nodes(data.nodes)
            .links(data.edges)
            .size([width, height])
            .linkDistance(function(d) {
              return [140, 160, 180, 200][d.source.level]
            })
            .charge(function(d){
              return -2000 / d.level
            });

          force.start();

          let nodes = container.selectAll("span")
            .data(data.nodes)
            .enter()
            .append("span")
            .attr({"class": function(d) {
                return "node "
              }, "level": function(d) {
                return d.level;
              }, "bind": function(d) {
                return d.id;
              }, "type": function(d) {
                return mapping["types"][d.type];
              }, "isopen": function(d) {
                return d.level > 0 ? 0 : 1
              }})
            .html(function(d) {
              return "<div>" + d.name + "</div>";
            })
            .style({"width": function(d) {
                return mapping["size"][d.type] + "px"
              }, "height": function(d) {
                return mapping["size"][d.type] + "px"
              }, "background": function(d) {
                return mapping["background"][d.type];
              }, "color": function(d) {
                return mapping["color"][d.type];
              }, "border": function(d) {
                if (d.level == 0) return "3px solid red"
                return null;
              }})
            .call(force.drag);	//使得节点能够拖动

          //添加连线
          let lines = container.selectAll("span:not(.node)")
            .data(data.edges)
            .enter()
            .append("span")
            .attr({"class": function(d) {
                let rt = "line ";

                let target = d.target;
                if ( d.target.level < d.source.level ) target = d.source;
                return rt;
              }, "bind": function(d){
                return d.target.id
              }, "sourceType": function(d) {
                return mapping["types"][d.source.type];
              }, "targetType": function(d) {
                return mapping["types"][d.target.type];
              }, "sourcelevel": function(d) {
                return d.source.level;
              }, "targetlevel": function(d) {
                return d.target.level;
              }})
            .html(function(d) {
              if ( !ram[d.source.id] ) {
                ram[d.source.id] = new Array();
              }

              d.target.level > d.source.level ? ram[d.source.id].push(d.target.id) : "";
              let rt = "";
              let temp = [undefined, 0, 3.5, 7][d.data.length];
              d.data.forEach(function(v) {
                let lineClass = " ";
                if ( v.lineType == 6 ) {
                  if ( d.data.length == 1 ) {
                    $("[bind='" + d.target.id + "']").addClass("fengongsi");
                  }
                  lineClass += "fengongsi"
                }

                if ( v.lineType == 9 ) {
                  if ( d.data.length == 1 ) {
                    $("[bind='" + d.target.id + "']").addClass("guquan");
                    //$("[bind='" + d.target.id + "']").addClass("hide");
                  } else {
                    //$("[bind='" + d.target.id + "']").removeClass("hide");
                  }
                  //lineClass += " guquan hide"
                  lineClass += " guquan"
                }

                let linecolor = mapping["linecolor"][v.lineType],
                  rotate = v.direction ? 0 : 180,
                  flagRight = mapping["flag"][v.direction ? d.target.type : d.source.type],
                  flagColor = mapping["linecolor"][v.lineType];
                rt += "<span class='insline" + lineClass + "' style='border-color:" + linecolor + ";top:" + temp + "px;transform: rotate(" + rotate + "deg);'><b style='right:" + flagRight + "px;border-left-color:" + flagColor + ";'></b><span class='lineInfo'>" + (function(d) {
                  if (v.lineType == 0 ) {
                    if ( d=="" ) { return ""; }
                    if (d.match(/^\.|^1\.00/)) {
                      if (d.match(/^\.00/)) {
                        return "";
                      }
                      return ( d * 100 ) + "%"
                    } else {
                      return ( d ) + "%"
                    }
                  } else {
                    return d
                  }
                })(v.info) + "</span></span>"
                temp -= 7;
              });

              return rt;
            });

          force.on("tick", function(){

            //更新连线坐标
            lines.attr("style", function(d) {
              //if (!d.target.px) console.log(d)
              let s = d.source,
                t = d.target,
                lineLenght = Math.sqrt(Math.pow((s.x - t.x), 2) + Math.pow((s.y - t.y), 2)),
                lineCenter = {x: (s.x + t.x) / 2, y: (s.y + t.y) / 2},
                lineStart = {x: lineCenter.x - lineLenght / 2 , y: lineCenter.y};
              let transform = Math.atan((s.y - t.y) / (s.x - t.x)) * 180 / Math.PI;

              transform = t.x < s.x ? transform + 180 : transform;

              return "width:" + lineLenght + "px;top:" + lineStart.y + "px;left:"+ lineStart.x + "px;transform:rotate(" + transform  + "deg);";
            });


            //更新节点坐标
            nodes.style({"left": function(d){
                return d.x - mapping["size"][d.type] / 2  + "px";
              }, "top": function(d){
                return d.y - mapping["size"][d.type] / 2 + "px";
              }});
          });
        }

        $("body").on("click", "#jgList tr", function() {
          if ( !whatTheFuck ) {
            $("#fgsgx").show();
            $(".jibie").prop("checked", false);
            $("#yjjdbt input").prop("checked", true);
            $("#fgsgx input").prop("checked", true);
            $("#gqgxbt input").prop("checked", true)

            displayLevel = 1;
          }

          let _this = this;
          checkedTr = this;
          $("#jgList tr").css("background", "")
          $(this).css("background", "#162485")

          let jgmc = $(this).attr('bind');

          whatTheFuck = false;

        });

        setTimeout(function() {$("#jgList tr:nth-child(2)").click();}, 500)

        $(".jibie").click(function() {
          whatTheFuck = true;
          $("#fgsgx").hide();
          $(".jibie").not(this).prop("checked", false);
          if ( $(this).parent().attr("id") == "yjjdbt" ) {$("#fgsgx").show();}
          displayLevel = $(this).attr("bd-data");
          $(checkedTr).click();
        })

        $("#d3box").dblclick(function() {
          $(".cover").show();
          $("#d3box").css({top: "0%",left: "0%",width: "94%",height: "99%"})
        })
        $(".cover").click(function() {
          $(this).hide();
          $("#d3box").css({top: "2%",left:"40%",width: "59%",height: "98.7%"});
        })
      },
      method: {
        ready: function(){

        }
      }

    }
</script>

<style lang="scss" >
  @import "@/assets/css/page/dtRelation.scss";
  @import "@/assets/css/page/gxt.scss";
</style>

<style scoped>

</style>
