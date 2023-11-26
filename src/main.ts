//vue3框架提供的方法createApp方法,可以用来创建应用实例方法
import { createApp } from 'vue'
//引入清除默认样式
import '@/style/reset.scss'
//引入根组件App
import App from '@/App.vue'
//引入全局组件--顶部、底部都是全局组件
import HospitalTop from '@/components/hospital_top/index.vue';
import HosiptalBottom from '@/components/hospital_bottom/index.vue';

//引入vue-router核心插件并安装
import router from '@/router';

// element-plus插件
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

// 引入国际化组件
// @ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs"

//利用createApp方法创建应用实例,且将应用实例挂载到挂载点上
const app = createApp(App);
app.component('HospitalTop', HospitalTop);
app.component('HosiptalBottom', HosiptalBottom);
//就诊人全局组件
//安装vue-router
app.use(router);
// 安装ElementPlus插件
app.use(ElementPlus,{locale:zhCn})
//挂载
app.mount('#app');
