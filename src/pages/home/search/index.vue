<template>
    <div class="search">
        <el-autocomplete clearable class="form" 
        placeholder="请输入医院名称" 
        v-model="hostname" 
        :fetch-suggestions="fetchData" 
        @select="goDetail"
        :trigger-on-focus="false"/>
        <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
// 引入icon图标
import { Search } from "@element-plus/icons-vue"
import { reqHospitalInfo } from "@/api/home/index"
import type { HospitalInfo } from "@/api/home/type";

import { ref } from "vue";
let hostname = ref<string>('')
//类似于防抖，当输入完毕后自动触发，里边有两个参数，传入的值和调用的函数，调用的函数就是最后显示的结果
// 逻辑：输入完毕调用，要显示数据就得获取数据，再发起请求将获取的数据赋值给value，传入一个数组，展示value
const fetchData = async(hostname: string,fun: any) => {
    let res:HospitalInfo =  await reqHospitalInfo(hostname)
    console.log(res.data,'aaa')
    
    let showData = res.data.map((item: any) => {
        return{
            value:item.hosname,
            hoscode:item.hoscode
        }
    })
    fun(showData)
}

// item为注入的点击项,值就是showData
const goDetail = (item: any) => {
console.log(item,'it');

}
</script>

<style scoped lang="scss">
.search {  
    margin: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    // 为了修改element身上的样式，要用到深度选择器==>1.原生  2.::v-deep(.xxx){}
    ::v-deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>