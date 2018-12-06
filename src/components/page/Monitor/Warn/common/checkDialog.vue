<!-- 核查弹框 created by zp -->
<template>
  <div class="dialogBody">
			<el-dialog title="核查" :visible.sync="dialogVisible" width="40%" center :show-close="false" :modal-append-to-body="false" :close-on-click-modal="false">
				<dl >
					<dt class="display-flex align-items-center">需要核查的风险点</dt>
					<dd>
						<p><span class="themeBlue">{{riskTitle}}</span></p>
					</dd>
				</dl>
				<dl>
					<dt>工作要求</dt>
					<dd>
						<p>截止日期<span class="red">*</span>
							<el-date-picker
								v-model="downTime"
								type="date"
								size="mini"
								:picker-options="range15days"
								placeholder="选择日期">
							</el-date-picker> 15天（默认）
						</p>
						<el-input v-model="requirement" type="textarea" :rows="4" placeholder="请输入工作要求（选填）" style="margin-top:10px;"></el-input>
					</dd>
				</dl>
				<dl>
					<dt>主送单位<span class="red">*</span></dt>
					<dd>
						<el-checkbox-group v-model="checkDepGroup1" @change="handleChecked" size="small">
							<el-checkbox-button v-for="item in units1" :label="item.code" :key="item.code">{{item.name}}</el-checkbox-button>
						</el-checkbox-group>
					</dd>
				</dl>
				<dl>
					<dt>抄送单位</dt>
					<dd>
						<el-checkbox-group v-model="checkDepGroup2" size="small">
							<!-- <el-checkbox-button v-for="item in units2" :label="item.code" :key="item.index">{{item.name}}</el-checkbox-button> -->
							<span v-for="item in units2" :key="item.code">
								<el-checkbox-button v-if="disableCode.includes(item.code)"  :label="item.code" disabled style="border-color:#ebeef5">{{item.name}}</el-checkbox-button>
								<el-checkbox-button v-else  :label="item.code" >{{item.name}}</el-checkbox-button>
							</span>
						</el-checkbox-group>
					</dd>
				</dl>
				<span slot="footer" class="dialog-footer">
					<el-button class="cancel" @click="dialogVisible = false">取消</el-button>
					<el-button class="confirm" type="primary" @click="launchCheck">发起核查</el-button>
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
			downTime: '',  //截止日期
			units1: '',  //主送列表
			units2: '',  //抄送
      riskTitle: '',  //标题
      warningRiskId: '',  //id
			checkDepGroup1: [],  //选中主送
			checkDepGroup2: [],  //选中抄送
			requirement: '',  //工作要求
			disableCode: [],  //禁选项
			range15days: {
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
      this.riskTitle = val.title;
			this.warningRiskId = val.id;
			this.getDepartment();
    },
    //发起核查
    launchCheck(){
      console.log(this.riskTitle);
      console.log(this.warningRiskId);
      console.log(this.downTime);
      console.log(this.checkDepGroup1.join());
      console.log(this.checkDepGroup2.join());
      console.log(this.requirement);
      this.$axios({
        method: "post",
        url: this.HOME +"warningRiskDown/add?T0departmentIds="+this.checkDepGroup1.join()+"&T1departmentIds="+this.checkDepGroup2.join(),
        headers: {
          "content-type": "application/json;charset=UTF-8"
        },
        data: {
					warningRiskId: this.warningRiskId,
					remark: this.requirement,
					downTime: this.downTime,
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