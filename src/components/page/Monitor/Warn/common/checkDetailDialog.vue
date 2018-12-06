<!-- 详情弹框 created by zp -->
<template>
  <div class="dialogBody">
    <el-dialog title="风险点详情" :visible.sync="dialogVisible" width="40%" center :show-close="false" :modal-append-to-body="false" :close-on-click-modal="false">
      <dl >
        <dt class="display-flex align-items-center">风险点</dt>
        <dd>
            <p><span>{{riskTitle}}</span></p>
        </dd>
      </dl>
      <dl>
        <dt>风险详情</dt>
        <dd>
            <p>{{description}}</p>
        </dd>
      </dl>
      <dl>
        <dt>核查过程</dt>
        <dd>
            <div class="process">
              <div class="v-line"></div>
              <div class="row display-flex justify-content-start">
                <div class="date">{{warningRiskDowns.createTime | formatterDate}}</div>
                <div class="point"></div>
                <div class="detail">
                  <p>浙江省金融办</p>
                  <p><big>发起核查</big></p>
                  <p>主送：</p>
                  <p>抄送：</p>
                </div>
              </div>
              <div class="row display-flex justify-content-start">
                <div class="date">{{warningRiskDowns.createTime | formatterDate}}</div>
                <div class="point"></div>
                <div class="detail">
                  <p>浙江省金融办</p>
                  <p><big>发起核查</big></p>
                </div>
              </div>
            </div>
        </dd>
      </dl>
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
    departmentId: ''
  },
  data () {
    return {
      dialogVisible: false,
      riskTitle: '',
      description:'',
      warningRiskDowns: ''
    };
  },
  methods: {
    //弹出dialog
    showDialog(val){
      this.dialogVisible = true;
      console.log(val);
      this.riskTitle = val.title;
      this.description = val.description;
      //循环获取被下发部门信息  目前有问题
      // let RiskDowns = val.warningRiskDowns;
      // let departmentId = this.departmentId;
      // RiskDowns.forEach(e => {
      //   if(e.departmentId == departmentId){
      //     this.warningRiskDowns = e;
      //     console.log(this.warningRiskDowns)
      //   }
      // });
      
    },
    //确认
    confirmPost(){
      console.log(this.riskTitle);
      console.log(this.warningRiskId);
      console.log(this.radio);
      console.log(this.decsripent);
      console.log(this.addFileId);
      this.$axios({
        method: "post",
        url: this.HOME +"warningRisk/makeSure",
        headers: {
          "content-type": "application/json;charset=UTF-8"
        },
        data: {
          warningRiskId: this.warningRiskId,
          remark: this.decsripent,
          results: this.radio
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
    }
  }
}

</script>
<style lang='scss'>
    @import "@/assets/css/page/warn_org.scss";
    
</style>