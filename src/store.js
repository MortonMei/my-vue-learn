import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
// 数据部分
const state = {
    count:1
}
// 对state进行操作
const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    }
}
// 提交告诉mutations进行操作
const actions = {
    increment:(context)=>{
        context.commit('increment')
    },
    decrement:({commit})=>{
        commit('decrement')
    }
}

export default new Vuex.Store({state,mutations,actions})