<template>
  <div>
    <!-- 首页轮播图结构 -->
    <Carousel></Carousel>

    <!-- 首页搜索表单区域 -->
    <Search></Search>

    <!-- 底部展示医院结构 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 医院等级 -->
        <Lever></Lever>

        <!-- 地区 -->
        <Region></Region>

        <!-- 展示医院卡片的组件 -->
        <div class="hospital">
          <Card v-for=" (item,index) in hasHospital" :key="index" class="item" :hospitalInfo="item"></Card>

        </div>

        <!-- 展示分页器组件 -->
        <el-pagination 
          v-model:current-page="pageNo" 
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]" 
          :small="true" 
          :disabled="false" 
          :background="true"
          layout="total, sizes, prev, pager, next, jumper" 
          :total="total"
          @current-change="currentChange" 
          @size-change="sizeChange"
           />
      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template> 

<script setup lang="ts">
// 引入组合式函数
import {onMounted,ref} from 'vue'
// 引入医院请求
import {reqHospital} from '@/api/home'
// 引入轮播图组件
import Carousel from "../home/carousel/index.vue"
// 引入搜索组件
import Search from "../home/search/index.vue"
// 引入医院等级组件
import Lever from "../home/level/index.vue"
// 引入地区组件
import Region from "../home/region/index.vue"
// 引入医院卡片组件
import Card from "../home/card/index.vue"

// 分页器数据
let pageNo=ref<number>(1)
let pageSize=ref<number>(10)
// 存储已有的医院的数据
let hasHospital = ref([])
// 存储医院总个数
let total = ref(0)
// 组件挂载完毕发送一次请求
onMounted(() => {
  getHospitalInfo()
})
// 获取医院数据
const getHospitalInfo = async() => {
  let res:any= await reqHospital(pageNo.value,pageSize.value)
  if(res.code==200){
    hasHospital.value=res.data.content
  }
  console.log(hasHospital);
  total.value=res.data.totalElements
  console.log(total);
  
  
}

// 分页器页码回调
const currentChange = () => {
  getHospitalInfo()
}
// 分页器下拉菜单发生变化
const sizeChange = () => {
  getHospitalInfo()
}
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 48%;
    margin: 10px 0;
  }
}
</style>
