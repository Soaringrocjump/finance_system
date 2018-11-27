<!-- 顶部导航 -->
<template>
    <div class="header clearfix" >
        <div v-if="headerType == 'normalHeader'" :class="headerType">
            <div class="header-left">
                <div class="logoImg"><img src="../../assets/img/logo.png" alt=""></div>
                <div class="logoName">宁波市金融风险“天罗地网”监测防控系统</div>
            </div>
            <div class="header-right">
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- <div class="searchBox">
                    <input type="text">
                    <i class="el-icon-search"></i>
                </div> -->
                <ul class="head-nav">
                    <li><router-link to="/">主页</router-link></li>
                    <li>日常工作</li>
                    <li>后台管理</li>
                    <li class="active">监测管理</li>
                    <li>通知</li>
                    <li @click="exitLogin">退出</li>
                </ul>
            </div>
        </div>
        <div v-if="headerType == 'indexHeader'" :class="headerType">
            <div class="header-left">
                <div class="logoImg"><img src="../../assets/img/logo.png" alt=""></div>
                <div class="logoName">宁波市金融风险“天罗地网”监测防控系统</div>
            </div>
            <div class="header-right">
                <div class="control"><i class="iconfont icon-icon--"></i> 消息中心</div>
                <div class="control" ><i class="iconfont icon-shezhi2"></i> 后台管理</div>
                <div class="control" @click="exitLogin"><i class="iconfont icon-shezhi2"></i> 退出登录</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["headerType"],
    data(){
        return {
            fullscreen: false
        }
    },
    methods: {
        //全屏事件
        handleFullScreen(){
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen
        },
      // 退出登陆
      exitLogin() {
        //退出 清除token 跳转到login
        sessionStorage.removeItem("authorization");
        this.$router.push("/login");

      },
    }

}
</script>
<style scoped>

</style>

