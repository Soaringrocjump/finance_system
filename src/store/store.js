import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isCollapse: false,  //侧边栏展开状态
    userdepartmentId: ''
}

const mutations = {
    //改变侧边栏展开状态
    collapseChage(state){
        state.isCollapse = !state.isCollapse;
        // console.log(state.isCollapse);
    }
}

const actions = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions
})