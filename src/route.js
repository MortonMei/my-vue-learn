import Vue from 'vue';
import VueRouter from 'vue-router'
import pageA from './pages/a'
import pageB from './pages/b'


Vue.use(VueRouter)
// 路由配置
const routes = [{
    path: '/',
    component:pageA
},
{
    path: '/pageb',
    component:pageB
}
]
// 路由实例化
const router = new VueRouter({
    routes
})

export default router