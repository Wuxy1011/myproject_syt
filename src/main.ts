// vue3提供的createApp方法，用于创建应用实例
import { createApp } from 'vue'
// 清除默认样式
import '@/style/reset.scss'
import App from '@/App.vue'

// 引入全局组件
import HospitalTop from "@/components/Hospital_top/index.vue"
// 创建app实例，且将应用实例挂载
const app=createApp(App)

// 注册全局组件
app.component("HospitalTop",HospitalTop)

app.mount('#app')
