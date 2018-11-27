<template>
  <div class="hj-left">
    <el-row :gutter="20" class="sear-bar">
      <el-col :span="6" id="regionSel">
        <div class="grid-content bg-purple">
          <el-select
            size="small"
            v-model="regionOption"
            v-on:change="changeRegion(regionOption)"
            clearable placeholder="全市">
            <el-option
              v-for="item in options"
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
            <i slot="suffix" ref="searchbtn" class="el-input__icon el-icon-search" v-on:click="loadMapByInstit"></i>
          </el-input>
        </div>
        <input type="hidden" id="institutionInp" v-model="instituInp"/>
      </el-col>
    </el-row>

    <el-tabs id="riskWarnSear" v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane label="高风险预警" name="first">
        <el-table
          :data="riskWarnDataFirst"
          @row-click="loadMapByOnePoint"
          style="width: 100%">
          <el-table-column
            prop="seq"
            label="序号"
            width="50">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.seq }}</span>
              <i class="lon-hidden">{{ scope.row.lon }}</i>
              <i class="lat-hidden">{{ scope.row.lat }}</i>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="机构名称"
            width="200">
          </el-table-column>
          <el-table-column
            prop="rIndex"
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
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="中风险预警" name="second">
        <el-table
          :data="riskWarnDataSecond"
          style="width: 100%">
          <el-table-column
            prop="seq"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="name"
            label="机构名称"
            width="200">
          </el-table-column>
          <el-table-column
            prop="rIndex"
            label="风险指数"
            width="100"
            class-name="rIndex-td-second">
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
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="低风险预警" name="third">
        <el-table
          :data="riskWarnDataThird"
          style="width: 100%">
          <el-table-column
            prop="seq"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="name"
            label="机构名称"
            width="200">
          </el-table-column>
          <el-table-column
            prop="rIndex"
            label="风险指数"
            width="100"
            class-name="rIndex-td-third">
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

    export default {
      name: "RiskQuery",
      data() {
        return {
          options: [{
            value: '1',
            label: '海曙区'
          }, {
            value: '2',
            label: '鄞州区'
          }, {
            value: '3',
            label: '江北区'
          }, {
            value: '4',
            label: '北仑区'
          }, {
            value: '5',
            label: '镇海区'
          }, {
            value: '6',
            label: '奉化区'
          }, {
            value: '7',
            label: '余姚市'
          }, {
            value: '8',
            label: '慈溪市'
          }, {
            value: '9',
            label: '宁海县'
          }, {
            value: '10',
            label: '象山县'
          }],
          regionOption: '',
          riskWarnDataFirst: [{
            seq: '1',
            name: 'AAA控股集团有限公司',
            rIndex: '96',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '2',
            name: 'BBB控股集团有限公司',
            rIndex: '96',
            lon: 121.547,
            lat: 29.8172
          },{
            seq: '3',
            name: 'CCC控股集团有限公司',
            rIndex: '96',
            lon: 121.55468,
            lat: 29.88615
          },{
            seq: '4',
            name: 'DDD控股集团有限公司',
            rIndex: '96',
            lon: 121.84431,
            lat: 29.89889
          },{
            seq: '5',
            name: 'EEE控股集团有限公司',
            rIndex: '96',
            lon: 121.71624,
            lat: 29.94899
          },{
            seq: '6',
            name: 'FFF控股集团有限公司',
            rIndex: '96',
            lon: 121.40686,
            lat: 29.65503
          },{
            seq: '7',
            name: 'GGG控股集团有限公司',
            rIndex: '96',
            lon: 121.15435,
            lat: 30.03711
          },{
            seq: '8',
            name: 'HHH控股集团有限公司',
            rIndex: '96',
            lon: 121.26647,
            lat: 30.16964
          }],
          riskWarnDataSecond: [{
            seq: '1',
            name: 'III控股集团有限公司',
            rIndex: '76',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '2',
            name: 'JJJ控股集团有限公司',
            rIndex: '76',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '3',
            name: 'KKK控股集团有限公司',
            rIndex: '76',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '4',
            name: 'LLL控股集团有限公司',
            rIndex: '76',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '5',
            name: 'MMM控股集团有限公司',
            rIndex: '76',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '6',
            name: 'NNN控股集团有限公司',
            rIndex: '76',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '7',
            name: 'PPP控股集团有限公司',
            rIndex: '76',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '8',
            name: 'QQQ控股集团有限公司',
            rIndex: '76',
            lon: 121.55084,
            lat: 29.85957
          }],
          riskWarnDataThird: [{
            seq: '1',
            name: 'RRR控股集团有限公司',
            rIndex: '36',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '2',
            name: 'SSS控股集团有限公司',
            rIndex: '36',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '3',
            name: 'TTT控股集团有限公司',
            rIndex: '36',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '4',
            name: 'UUU控股集团有限公司',
            rIndex: '36',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '5',
            name: 'VVV控股集团有限公司',
            rIndex: '36',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '6',
            name: 'WWW控股集团有限公司',
            rIndex: '36',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '7',
            name: 'XXX控股集团有限公司',
            rIndex: '36',
            lon: 121.55084,
            lat: 29.85957
          },{
            seq: '8',
            name: 'YYY控股集团有限公司',
            rIndex: '36',
            lon: 121.55084,
            lat: 29.85957
          }],
          activeTab: 'first',
          instituInp: ''
        }
      },
      methods: {
        changeRegion(regionOption){
          loadMap(this, regionOption);
        },
        loadMapByInstit: function(event) {
          loadMap(this);
        },
        loadMapByOnePoint (row){
          let lonLatArr = [[row.lon, row.lat, row.name, row.rIndex]];
          let lon = row.lon, lat = row.lat;
          let regionId = document.getElementById("regionIdSelected").value;//区域id
          this.$emit('sear-map',lonLatArr, regionId, lon, lat);
        },
        handleClick(tab, event) {
          console.log(tab, event);
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

      let lonLatArr = [[121.577873, 29.97303, 'AAA控股集团有限公司', 96],
        [121.536873, 29.97503, 'BBB控股集团有限公司', 96],
        [121.596073, 29.96303, 'CCC控股集团有限公司', 96],
        [121.619873, 29.99303, 'DDD控股集团有限公司', 96],
        [121.587873, 29.90303, 'EEE控股集团有限公司', 96],
        [121.637873, 29.99303, 'FFF控股集团有限公司', 96],
        [121.636003, 29.90503, 'GGG控股集团有限公司', 96],
        [121.656003, 29.91303, 'HHH控股集团有限公司', 96],
        [121.699873, 29.70303, 'III控股集团有限公司', 96],
        [121.667873, 29.80303, 'JJJ控股集团有限公司', 96]
      ];
      if (institution!="") {
        lonLatArr = [[121.577873, 29.97303, 'AAA控股集团有限公司', 96]];
      }

      let lon = 121.84431, lat = 29.89889;
      if (regionId == "1")
        lon = 121.55084, lat = 29.85957;
      else if (regionId == "2")
        lon = 121.547, lat = 29.8172;
      else if (regionId == "3")
        lon = 121.55468, lat = 29.88615;
      else if (regionId == "4")
        lon = 121.84431, lat = 29.89889;
      else if (regionId == "5")
        lon = 121.71624, lat = 29.94899;
      else if (regionId == "6")
        lon = 121.40686, lat = 29.65503;
      else if (regionId == "7")
        lon = 121.15435, lat = 30.03711;
      else if (regionId == "8")
        lon = 121.26647, lat = 30.16964;
      else if (regionId == "9")
        lon = 121.420059, lat = 29.336821;
      else if (regionId == "10")
        lon = 121.879829, lat = 29.472589;

      obj.$emit('sear-map',lonLatArr, regionId, lon, lat);
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
