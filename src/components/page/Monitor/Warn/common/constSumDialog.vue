<!-- 会商总结弹框 created by zp -->
<template>
  <div class="dialogBody">
    <el-dialog title="会商总结" :visible.sync="dialogVisible" width="40%" center :show-close="false" :modal-append-to-body="false" :close-on-click-modal="false">
      <dl >
      <dt class="display-flex align-items-center">会商对象</dt>
      <dd>
          <p><span class="themeBlue">{{companyName}}</span></p>
      </dd>
      </dl>
      <dl>
      <dt>状态修改<span class="red">*</span></dt>
      <dd>
          <p>
          <el-radio-group v-model="radio" @change="checkRadio">
            <el-radio  label="立案">立案</el-radio>
            <el-radio  label="失联">失联</el-radio>
            <el-radio  label="注销">注销</el-radio>
            <el-radio  label="在运营">在运营</el-radio>
            <el-radio  label="其他">其他</el-radio>
          </el-radio-group>
          </p>
          <el-input v-model="remark"  type="textarea" :rows="4" placeholder="请输入会商总结（必填）" style="margin-top:10px;"></el-input>
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
      <el-button class="confirm" type="primary" @click="consSumPost">提交</el-button>
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
    }
  },
  data () {
    return {
      dialogVisible: false,
      companyName: '',
      warningNo: '',
      radio: '属实',
      remark:'',
      addFileId: '',
    };
  },
  methods: {
    //弹出dialog
    showDialog(val){
      this.dialogVisible = true;
      console.log(val);
      this.companyName = val.companyName;
      this.warningNo = val.warningNo;
    },
    //会商总结提交
    consSumPost(){
      console.log(this.companyName);
      console.log(this.warningNo);
      console.log(this.radio);
      console.log(this.remark);
      // console.log(this.addFileId);
      this.$axios({
        method: "post",
        url: this.HOME +"warning/meetSum",
        headers: {
          "content-type": "application/json;charset=UTF-8"
        },
        data: {
          warningNo: this.warningNo,
          remark: this.remark,
          result: this.radio,
          type: '1'
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