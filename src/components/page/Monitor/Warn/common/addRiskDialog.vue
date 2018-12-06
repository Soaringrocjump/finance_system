<!-- 添加风险点弹框 created by zp -->
<template>
  <div class="dialogBody">
    <el-dialog title="添加" :visible.sync="dialogVisible" width="40%" center :show-close="false" :modal-append-to-body="false" :close-on-click-modal="false">
      <dl >
          <dt class="display-flex align-items-center">选择风险点<span class="red">*</span></dt>
          <dd>
          <p>
              <el-select v-model="riskTitle" placeholder="请选择">
              <el-option
                  v-for="item in riskPoint"
                  :key="item.index"
                  :label="item"
                  :value="item">
              </el-option>
              </el-select>
          </p>
          </dd>
      </dl>
      <dl>
          <dt>风险详情备注</dt>
          <dd>
          <el-input v-model="description" type="textarea" :rows="4" placeholder="选填" style="margin-top:10px;"></el-input>
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
          <el-button class="confirm" type="primary" @click="addRiskPoint">添加</el-button>
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
      riskPoint: [ '大量投诉举报','法人频繁变更','注册地异常','用户量巨大','集体上访'],
      riskTitle: '',
      warningNo: '',
      description:'',
      addFileId: '',
    };
  },
  methods: {
    //弹出dialog
    showDialog(val){
      this.dialogVisible = true;
      console.log(val);
      this.warningNo = val;
    },
    //发送风险点
    addRiskPoint(){
      console.log(this.riskTitle);
      console.log(this.description);
      console.log(this.warningNo);
      this.$axios({
        method: "post",
        url: this.HOME +"warningRisk/add",
        headers: {
          "content-type": "application/json;charset=UTF-8"
        },
        data: {
          title: this.riskTitle,
          description: this.description,
          warningNo: this.warningNo,
          departmentId: 0
        }
      })
        .then(res => {
          console.log(res.data);
          if (res.data.resultCode == 200){
            this.$emit("reRequest");
            // console.log(this.warningNo);
          }
          this.dialogVisible = false;
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