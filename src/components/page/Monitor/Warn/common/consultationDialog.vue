<!-- 会商弹框 created by zp -->
<template>
  <div class="dialogBody">
			<el-dialog title="会商" :visible.sync="dialogVisible" width="40%" center :show-close="false" :modal-append-to-body="false" :close-on-click-modal="false">
				<dl >
					<dt class="display-flex align-items-center">会商对象</dt>
					<dd>
						<p><span class="themeBlue">{{companyName}}</span></p>
					</dd>
				</dl>
				<dl>
					<dt>会商详情</dt>
					<dd>
						<p>截止日期<span class="red">*</span>
							<el-date-picker
								v-model="upTime"
								type="date"
								size="mini"
								:picker-options="range15days"
								placeholder="选择日期">
							</el-date-picker> 15天（默认）
						</p>
						<el-input v-model="remark" type="textarea" :rows="4" placeholder="请输入会商详情（必填）" style="margin-top:10px;"></el-input>
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
					</dd>
				</dl>
				<dl>
					<dt>主送单位<span class="red">*</span></dt>
					<dd>
						<el-checkbox-group v-model="checkDepGroup1" @change="handleChecked" size="mini">
							<el-checkbox-button v-for="item in units1" :label="item.code" :key="item.code">{{item.name}}</el-checkbox-button>
						</el-checkbox-group>
					</dd>
				</dl>
				<dl>
					<dt>抄送单位</dt>
					<dd>
						<el-checkbox-group v-model="checkDepGroup2" size="mini">
							<span v-for="item in units2" :key="item.code">
								<el-checkbox-button v-if="disableCode.includes(item.code)"  :label="item.code" disabled style="border-color:#ebeef5">{{item.name}}</el-checkbox-button>
								<el-checkbox-button v-else  :label="item.code" >{{item.name}}</el-checkbox-button>
							</span>
						</el-checkbox-group>
					</dd>
				</dl>
				<span slot="footer" class="dialog-footer">
					<el-button class="cancel" @click="dialogVisible = false">取消</el-button>
					<el-button class="confirm" type="primary" @click="launchCheck">发起会商</el-button>
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
      upTime: '',  //默认截止日期 
      // upTime: new Date().setDate(new Date().getDate()+15),  //默认截止日期 
			units1: '',  //主送列表
			units2: '',  //抄送
      checkDepGroup1: [],  //选中主送
      checkDepGroup2: [],  //选中抄送
      remark: '',  //会商详情
      disableCode: [],  //禁选项
      range15days: {  //将来15日内
          disabledDate(time) {
              let curDate = (new Date()).getTime();
              let fifteen = 15*24*3600*1000;
              let endTime = curDate + fifteen;
              return time.getTime() < Date.now()-8.64e7 || time.getTime() > endTime;
          }
      }
    };
  },
  methods: {
    //弹出dialog
    showDialog(val){
      this.dialogVisible = true;
      console.log(val);
      this.companyName = val.companyName;
      this.warningNo = val.warningNo;
			this.getDepartment();
    },
    //发起核查
    launchCheck(){
      console.log(this.warningNo);
      console.log(this.upTime);
      console.log(this.remark);
      console.log(this.checkDepGroup1.join());
      console.log(this.checkDepGroup2.join());
      this.$axios({
        method: "post",
        url: this.HOME +"warning/meet?mainDeptIds="+this.checkDepGroup1.join()+"&duplicateDeptIds="+this.checkDepGroup2.join(),
        headers: {
          "content-type": "application/json;charset=UTF-8"
        },
        data: {
					warningNo: this.warningNo,
					remark: this.remark,
          upTime: this.upTime,
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
		//获取单位列表
		getDepartment(){
			this.$axios({
        method: "get",
        url: this.HOME +"dic/getDepartment",
        headers: {
          token: sessionStorage.getItem("authorization"),
          "content-type": "application/json;charset=UTF-8"
        }
      })
        .then(res => {
          // console.log(res.data);
          if (res.data.resultCode == 200){
						this.units1 = res.data.data.values.slice(27,30);
            this.units2 = res.data.data.values.slice(0,10);
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
		//单位选中事件
		handleChecked(val){
			this.disableCode = val;
			console.log(this.disableCode);
		},
	},
	activated(){
	}
}

</script>
<style lang='scss'>
    @import "@/assets/css/page/warn_org.scss";
    
</style>