<template>
    <div class="region">
        <div class="content">
            <div class="left">地区：</div>
            <ul>
                <li :class="{active:activeValue==''}" @click="changeRegion('')">全部</li>
                <li v-for="item in regionArr" :key="item.value" @click="changeRegion(item.value)" :class="{active:activeValue==item.value}">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import {HospitalLevelAndRegionResponseData,HospitalLevelAndRegionArr} from '@/api/home/type'
import {reqHospitalLevelAndRegion} from '@/api/home/index'
import {onMounted,ref} from 'vue'
onMounted(() => {
    getRegion()
})
// 定义高亮
const activeValue=ref<string>('')
// 定义地区数组
const regionArr=ref<HospitalLevelAndRegionArr>([])
const getRegion = async() => {
    const res:HospitalLevelAndRegionResponseData=await reqHospitalLevelAndRegion('Beijin')
    if(res.code==200){
        regionArr.value=res.data
    }
    console.log(regionArr.value,"@@@");
    
}
const changeRegion = (region:string) => {
    activeValue.value=region
    $emit("getRegion",activeValue.value)
}

const $emit = defineEmits(['getRegion'])
</script>

<style scoped lang="scss">
.region {
    color: #7f7f77;
    margin-top: 10px;

    .content {
        display: flex;

        ul {
            display: flex;
            flex-wrap: wrap; //默认换行

            li {
                margin-right: 10px;
                margin-bottom: 5px;

                &.active {//li标签有叫active的就会高亮
                    color: #55a6fe;
                }
            }
            li:hover {
                color: #55a6fe;
                cursor: pointer;
            }
        }
    }
}
</style>