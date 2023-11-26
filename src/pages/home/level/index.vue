<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">等级：</div>
            <ul>
                <li :class="{active:activeValue==''}" @click="changeLevel('')">全部</li>
                <li v-for="item in LevelArr" :key="item.value" @click="changeLevel(item.value)" :class="{active:activeValue==item.value}">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reqHospitalLevelAndRegion} from '@/api/home/index'
import {HospitalLevelAndRegionResponseData,HospitalLevelAndRegionArr} from '@/api/home/type'
import {onMounted,ref} from 'vue'

onMounted(() => {
    getLevel()
})
// 设置高亮
const activeValue=ref<string>('')
// 定义医院数组获取数据
const LevelArr=ref<HospitalLevelAndRegionArr>([])
const getLevel = async() => {
    const res:HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType')
    if(res.code==200){
        LevelArr.value=res.data
    }
}

// 高亮
const changeLevel = (level:string) => {
    activeValue.value=level
    $emit('getLevel',level)

}
const $emit = defineEmits(['getLevel'])

</script>

<style scoped lang="scss">
.level{
    color: #7f7f7f;
    h1{
       
        font-weight: 900;
        margin: 10px 0px;
    }
    .content{
        display: flex;
        ul{
            display: flex;
            li{
                margin-right: 10px;
                &.active{
                    color: #55a6fe;
                }
            }
            li:hover{
                color: #55a6fe;
                cursor: pointer;//鼠标有个小手
            }
        }
    }
}
</style>