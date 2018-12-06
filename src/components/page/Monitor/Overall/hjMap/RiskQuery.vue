<template>
  <div class="hj-left">
    <el-row :gutter="20" class="sear-bar">
      <el-col :span="6" id="regionSel">
        <div class="grid-content bg-purple">
          <el-select
            size="small"
            v-model="regionOption"
            v-on:change="loadMapByCriteria"
            clearable placeholder="全市">
            <el-option
              v-for="item in countyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <input type="hidden" id="regionIdSelected" v-model="regionOption"/>
        </div>
      </el-col>
      <el-col :span="18" id="searchInp">
        <div class="grid-content bg-purple">
          <el-input ref="critinsti" size="small" v-model="instituInp"
                    placeholder="可输入金融机构名称搜索">
            <i slot="suffix" ref="searchbtn" class="el-input__icon el-icon-search" v-on:click="loadMapByCriteria"></i>
          </el-input>
        </div>
        <input type="hidden" id="institutionInp" v-model="instituInp"/>
      </el-col>
    </el-row>

    <el-tabs id="riskWarnSear" v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane label="高风险预警" name="first">
        <el-table
          :data="riskWarnData"
          v-loading="loading"
          @row-click="loadMapByOnePoint"
          style="width: 100%">
          <el-table-column
            type="index"
            :index="indexMethod"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="companyName"
            label="机构名称"
            width="200"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="riskWave.riskIndex"
            label="风险指数"
            width="100"
            class-name="rIndex-td-first">
          </el-table-column>
          <el-table-column
            label="处置状态">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent=""
                type="primary"
                size="mini">
                未处置
              </el-button>
              <i class="lon-hidden">{{ scope.row.longitude }}</i>
              <i class="lat-hidden">{{ scope.row.latitude }}</i>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="中风险预警" name="second">
        <el-table
          :data="riskWarnData"
          v-loading="loading"
          @row-click="loadMapByOnePoint"
          style="width: 100%">
          <el-table-column
            type="index"
            :index="indexMethod"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="companyName"
            label="机构名称"
            width="200"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="riskWave.riskIndex"
            label="风险指数"
            width="100"
            class-name="rIndex-td-first">
          </el-table-column>
          <el-table-column
            label="处置状态">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent=""
                type="primary"
                size="mini">
                未处置
              </el-button>
              <i class="lon-hidden">{{ scope.row.longitude }}</i>
              <i class="lat-hidden">{{ scope.row.latitude }}</i>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="低风险预警" name="third">
        <el-table
          :data="riskWarnData"
          v-loading="loading"
          @row-click="loadMapByOnePoint"
          style="width: 100%">
          <el-table-column
            type="index"
            :index="indexMethod"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="companyName"
            label="机构名称"
            width="200"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="riskWave.riskIndex"
            label="风险指数"
            width="100"
            class-name="rIndex-td-first">
          </el-table-column>
          <el-table-column
            label="处置状态">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent=""
                type="primary"
                size="mini">
                未处置
              </el-button>
              <i class="lon-hidden">{{ scope.row.longitude }}</i>
              <i class="lat-hidden">{{ scope.row.latitude }}</i>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <el-row :gutter="20" id="ratioRisk" style="margin-top: 20px; background-color: #fff;">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-progress type="circle" :percentage="25" :width="66" color="#f5556b"></el-progress>
        </div>
        <span>高风险机构</span>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-progress type="circle" :percentage="25" :width="66" color="#ecd637"></el-progress>
        </div>
        <span>中风险机构</span>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-progress type="circle" :percentage="50" :width="66" color="#519efe"></el-progress>
        </div>
        <span>低风险机构</span>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import Ajax from "@/components/common/util";

  let datalist;
  export default {
      name: "RiskQuery",
      mounted() {
        let mapParams = {companyName:'',
          area: '',
          warningLevel:'高风险',
        };
        this.getCompanyList(mapParams);
      },
      data() {
        return {
          countyOptions: [{
            value: '海曙区',
            label: '海曙区'
          }, {
            value: '鄞州区',
            label: '鄞州区'
          }, {
            value: '江北区',
            label: '江北区'
          }, {
            value: '北仑区',
            label: '北仑区'
          }, {
            value: '镇海区',
            label: '镇海区'
          }, {
            value: '奉化区',
            label: '奉化区'
          }, {
            value: '余姚市',
            label: '余姚市'
          }, {
            value: '慈溪市',
            label: '慈溪市'
          }, {
            value: '宁海县',
            label: '宁海县'
          }, {
            value: '象山县',
            label: '象山县'
          }],
          regionOption: '',
          riskWarnData: [],
          riskWarnDataSecond: [],
          riskWarnDataThird: [],
          activeTab: 'first',
          instituInp: '',
          pageNum: 1,
          pageSize: 10,
          loading: true,
        }
      },
      methods: {
        indexMethod(index) {
          return this.pageSize * (this.pageNum - 1) + index + 1;
        },
        loadMapByCriteria: function(event) {
          let warningLevel = '高风险';
          if (this.activeTab == "second")
            warningLevel = "中风险";
          if (this.activeTab == "third")
            warningLevel = "低风险";
          let mapParams = {companyName:this.instituInp,
            area: this.regionOption,
            warningLevel:warningLevel,
          };
          this.getCompanyList(mapParams);
          loadMap(this);
        },
        /**
         * 定位单个标注点
         * **/
        loadMapByOnePoint (row){
          if (row.longitude==null || row.latitude==null) {
            this.openAlert();
            return false;
          }
          let lonLatInfo = [{longitude:row.longitude,
            latitude: row.latitude,
            companyName: row.companyName,
            riskIndex:(row.riskWave==null?'':row.riskWave.riskIndex)
          }];
          let lon = row.longitude, lat = row.latitude;
          let regionId = document.getElementById("regionIdSelected").value;//区域id
          this.$emit('sear-map',lonLatInfo, regionId, lon, lat);
        },
        handleClick(tab, event) {
          console.log(tab, event);
          console.log(this.activeTab);
          this.loadMapByCriteria(event);
        },
        openAlert() {
          this.$alert('无经度或纬度数据', '机构定位错误', {
            confirmButtonText: '确定',
            /*callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }*/
          });
        },
        /**
         * 获取机构列表
         * **/
        getCompanyList(mapParams) {
          Ajax({
            method:'post',
            url:'company/getList',
            data: {
              companyName: mapParams.companyName,
              area: mapParams.area,
              warningLevel:mapParams.warningLevel,
              pageNum: 1,
              pageSize: 10
            }
          }).then(result => {
              console.log("从后台获取的数据：");
              console.log(result);

              datalist = result.data.data.list;
              console.log(datalist);
              this.riskWarnData = datalist;
              loadMap(this);
              this.loading = false;
            }

          ).catch(err => {
            alert("错误：获取数据异常" + err);
          });
        }
      }
    }


    function loadMap(obj, regionIdSrc) {
      let regionId = "";
      if (typeof(regionIdSrc) == "undefined")
        regionId = document.getElementById("regionIdSelected").value;//区域id
      else
        regionId = regionIdSrc;

      let institution = document.getElementById("institutionInp").value;//机构查询条件

      let dataList = obj.riskWarnData;
      let lonLatInfo = [];
      for (let i=0; i<dataList.length; i++) {
        const item = {
          longitude: dataList[i].longitude,
          latitude: dataList[i].latitude,
          companyName: dataList[i].companyName,
          riskIndex: (dataList[i].riskWave==null?'':dataList[i].riskWave.riskIndex)
        };
        lonLatInfo.push(item);
      }

      let lon = 121.84431, lat = 29.89889;
      if (regionId == "海曙区")
        lon = 121.55084, lat = 29.85957;
      else if (regionId == "鄞州区")
        lon = 121.547, lat = 29.8172;
      else if (regionId == "江北区")
        lon = 121.55468, lat = 29.88615;
      else if (regionId == "北仑区")
        lon = 121.84431, lat = 29.89889;
      else if (regionId == "镇海区")
        lon = 121.71624, lat = 29.94899;
      else if (regionId == "奉化区")
        lon = 121.40686, lat = 29.65503;
      else if (regionId == "余姚市")
        lon = 121.15435, lat = 30.03711;
      else if (regionId == "慈溪市")
        lon = 121.26647, lat = 30.16964;
      else if (regionId == "宁海")
        lon = 121.420059, lat = 29.336821;
      else if (regionId == "象山")
        lon = 121.879829, lat = 29.472589;

      obj.$emit('sear-map',lonLatInfo, regionId, lon, lat);
    }

</script>

<style scoped>

  .lon-hidden {
    display: none;
  }
  .lat-hidden {
    display: none;
  }

</style>
