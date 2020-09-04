import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//导入组件 懒加载方式
const Home = () => import('views/home/Home')
const Classify = () => import('views/classify/Classify')
const ShopCart = () => import('views/shopcart/ShopCart')
const ProFile = () => import ('views/profile/ProFile')

//消除路由点击重复连接报错问题
//push 
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

//定义路由指向配置
const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/classify',
  component: Classify 
}, {
  path: '/shopcart',
  component: ShopCart
}, {
  path: '/profile',
  component: ProFile
}]

//定义路由实例
const router = new VueRouter({
  routes,
  mode: 'history'//消除连接数的#
})

export default router