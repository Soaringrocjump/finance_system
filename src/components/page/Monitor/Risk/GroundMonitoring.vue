<template>
    <div class="gm_body">
      <el-row>
        <el-col :span="24">
          <div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline form-search" >
              <el-form-item label="所属网格">
                <el-select
                  size="small"
                  class="grid-select"
                  style="width: 100px;"
                  v-model="formInline.county"
                  clearable placeholder="区/县">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-select
                  size="small"
                  class="grid-select"
                  style="width: 100px;"
                  v-model="formInline.street"
                  clearable placeholder="街道">
                  <el-option label="街道一" value="1"></el-option>
                  <el-option label="街道二" value="2"></el-option>
                </el-select>
                <el-select
                  size="small"
                  class="grid-select"
                  style="width: 100px;"
                  v-model="formInline.grid"
                  clearable placeholder="网格">
                  <el-option label="网格一" value="1"></el-option>
                  <el-option label="网格二" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="" style="float: right;">
                <el-input size="small" v-model="formInline.institution"
                          class="grid-select"
                          placeholder="可输入金融机构名称搜索">
                  <i slot="suffix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-form-item>
            </el-form>

          </div>

        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24" style="margin-top: -18px;">
          <el-table
            ref="multipleTable"
            :data="dataList"
            tooltip-effect="dark"
            header-cell-class-name="list-header"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column
              prop="seq"
              label="序号"
              width="50">
            </el-table-column>
            <el-table-column
              prop="name"
              label="机构名称"
              show-overflow-tooltip
            >
              <template slot-scope="scope">
                <a href="#" @click="handleClick(scope.row)" type="text" size="small" style="text-decoration: underline; color: #333;">{{scope.row.name}}</a>
              </template>
            </el-table-column>
            <el-table-column
              prop="registrationMark"
              label="统一社会信用代码/注册号"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="registeredAddress"
              label="注册地址"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="businessAddress"
              label="实际经营地址"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="businessType"
              label="业务类型"
              width="110"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="grid"
              label="所属网格"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <!--<div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
          </div>-->
        </el-col>
      </el-row>
      <el-row class="list-paging">
        <el-col :span="8" style="padding-left: 10px; font-size: 14px;">
          <a href="#" style="text-decoration: underline; color: #519efe;"  @click="toggleSelection(dataList)">全选</a>
          <span>已选中0家</span>
          <a href="#" style="text-decoration: underline;" @click="toggleSelection()">清除</a>
        </el-col>
        <el-col :span="16" style="text-align: right;">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </el-col>
      </el-row>
      <el-row class="list-paging">
          <el-col :span="24" style="text-align: center;">
            <el-button type="primary">打  印</el-button>
            <el-button type="primary">下  载</el-button>
          </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      name: "GroundMonitoring",
      data() {
        return {
          formInline: {
            county: '',
            street: '',
            greed: '',
            institution: ''
          },
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
          dataList: [{
            seq: '1',
            name: '宁波米利集团控股有限公司',
            registrationMark: '123456789012345678',
            registeredAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessType: '网络借贷',
            grid: '镇海|某某街道|某某网格',
          }, {
            seq: '2',
            name: '宁波米利集团控股有限公司',
            registrationMark: '123456789012345678',
            registeredAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessType: '网络借贷',
            grid: '镇海某某街道某某网格',
          }, {
            seq: '3',
            name: '宁波米利集团控股有限公司',
            registrationMark: '123456789012345678',
            registeredAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessType: '网络借贷',
            grid: '镇海某某街道某某网格',
          }, {
            seq: '4',
            name: '宁波米利集团控股有限公司',
            registrationMark: '123456789012345678',
            registeredAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessType: '网络借贷',
            grid: '镇海某某街道某某网格',
          }, {
            seq: '5',
            name: '宁波米利集团控股有限公司',
            registrationMark: '123456789012345678',
            registeredAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessType: '网络借贷',
            grid: '镇海某某街道某某网格',
          }, {
            seq: '6',
            name: '宁波米利集团控股有限公司',
            registrationMark: '123456789012345678',
            registeredAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessType: '网络借贷',
            grid: '镇海某某街道某某网格',
          }, {
            seq: '7',
            name: '宁波米利集团控股有限公司',
            registrationMark: '123456789012345678',
            registeredAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessType: '网络借贷',
            grid: '镇海某某街道某某网格',
          }, {
            seq: '8',
            name: '宁波米利集团控股有限公司',
            registrationMark: '123456789012345678',
            registeredAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessType: '网络借贷',
            grid: '镇海某某街道某某网格',
          }, {
            seq: '9',
            name: '宁波米利集团控股有限公司',
            registrationMark: '123456789012345678',
            registeredAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessType: '网络借贷',
            grid: '镇海某某街道某某网格',
          }, {
            seq: '10',
            name: '宁波米利集团控股有限公司',
            registrationMark: '123456789012345678',
            registeredAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessType: '网络借贷',
            grid: '镇海某某街道某某网格',
          }, {
            seq: '11',
            name: '宁波米利集团控股有限公司',
            registrationMark: '123456789012345678',
            registeredAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessType: '网络借贷',
            grid: '镇海某某街道某某网格',
          }, {
            seq: '12',
            name: '宁波米利集团控股有限公司',
            registrationMark: '123456789012345678',
            registeredAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessAddress: '浙江省宁波市镇海区骆驼街道祥业街88号9-3室',
            businessType: '网络借贷',
            grid: '镇海某某街道某某网格',
          }],
          multipleSelection: []
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        },
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        handleClick(index) {
          const uuid=index.uuid;
          this.$router.push({ path: '/groundMonitoringDetail', query: {id: uuid}});

        },
      }
    }
</script>

<style lang="scss" >
  @import "@/assets/css/page/groundMonitoring.scss";
</style>

<style scoped>

</style>
