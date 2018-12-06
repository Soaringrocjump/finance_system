<!-- 核查下发机构确认弹框 created by zp -->
<template>
  <div class="dialogBody">
    <el-dialog title="确认" :visible.sync="dialogVisible" width="40%" center :show-close="false" :modal-append-to-body="false" :close-on-click-modal="false">
      <dl >
      <dt class="display-flex align-items-center">正在确认的风险点</dt>
      <dd>
          <p><span class="themeBlue">{{riskTitle}}</span></p>
      </dd>
      </dl>
      <dl>
      <dt>核查结果<span class="red">*</span></dt>
      <dd>
          <p>
          <el-radio-group v-model="radio" @change="checkRadio">
            <el-radio  label="属实">属实</el-radio>
            <el-radio  label="不属实">不属实</el-radio>
            <el-radio  label="退回">退回</el-radio>
          </el-radio-group>
          </p>
          <el-input v-model="remark" class="placeholder_n" type="textarea" :rows="4" :placeholder="placeholder_n" style="margin-top:10px;"></el-input>
      </dd>
      </dl>
      <el-upload
      class="upload-demo"
      style="padding-left:0"
      action="http://47.99.185.0:8765/file/upload"
      multiple
      :limit="1"
      :on-exceed="handleExceed"
      :on-success="getFileId">
      <div class="addBtn clearfix">
          <div class="blueBg">
          <i class="el-icon-plus"></i>
          </div>
          <span>添加图片/附件</span>
      </div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
      <el-button class="cancel" @click="dialogVisible = false">取消</el-button>
      <el-button class="confirm" type="primary" @click="confirmPost">确认</el-button>
      </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'confirmDialog',
  props: {
    msg: {
      type: Object
    },
    departmentId:''
  },
  data () {
    return {
      dialogVisible: false,
      riskTitle: '',
      warningRiskId: '',
      radio: '属实',
      remark:'',
      addFileId: '',
      placeholder_n: '请输入核查结果详情\n情况属实时选填\n情况不属实时必填',
      RiskDownsDpt: ''
    };
  },
  methods: {
    //弹出dialog
    showDialog(val){
      this.dialogVisible = true;
      console.log(val);
      console.log(this.departmentId);
      this.riskTitle = val.title;
      this.warningRiskId = val.id;
      let RiskDowns = val.warningRiskDowns;
      RiskDowns.forEach(e => {
        if(e.departmentId == 61){
          this.RiskDownsDpt = e;
          // console.log(e);
        }
      });
    },
    //核查确认
    confirmPost(){
      console.log(this.warningRiskId);
      console.log(this.radio);
      console.log(this.remark);
      console.log(this.RiskDownsDpt.id);
      // console.log(this.addFileId);
      this.$axios({
        method: "post",
        url: this.HOME +"warningRiskDown/makeSureOfDown",
        headers: {
          "content-type": "application/json;charset=UTF-8"
        },
        data: {
          warningRiskId: this.warningRiskId,
          remark: this.remark,
          results: this.radio,
          warningRiskDownId: this.RiskDownsDpt.id
          // fileId: this.addFileId
        }
      })
        .then(res => {
          console.log(res.data);
          if (res.data.resultCode == 200){
            this.$emit("reRequest");
            this.dialogVisible = false;
          }
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    //文件超出个数限制时的钩子
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    //上传文件到服务器获取返回data
    getFileId(response, file, fileList){
      console.log(response.data);
      this.addFileId = response.data
    },
    //获取radio值
    checkRadio(val){
      this.radio = val;
    }
  }
}

</script>
<style lang='scss'>
    @import "@/assets/css/page/warn_org.scss";
    
</style>