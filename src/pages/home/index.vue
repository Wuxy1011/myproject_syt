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
        <Lever @getLevel="getLevel"></Lever>

        <!-- 地区 -->
        <Region @getRegion="getRegion"></Region>

        <!-- 展示医院卡片的组件 -->
        <div class="hospital" v-if="hasHospitalArr.length > 0">
          <Card v-for=" (item,index) in hasHospitalArr" :key="index" class="item" :hospitalInfo="item"></Card>
        </div>
        <el-empty v-else description = '没有信息' />
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
      <el-col :span="4"><Tip/></el-col>
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
// 引入右侧组件
import Tip from "../home/tip/inedx.vue"
// 引入医院类型
import { Content,HospitalResponseData } from '@/api/home/type'
// 分页器数据
let pageNo=ref<number>(1)
let pageSize=ref<number>(10)
// 存储已有的医院的数据
let hasHospitalArr = ref<Content>([])
// 存储医院总个数
let total = ref<number>(0)
//存储医院的等级相应数据
const hostype = ref<string>('')
// 存储地区数据
const districtCode = ref<string>('')
// 组件挂载完毕发送一次请求
onMounted(() => {
  getHospitalInfo()
})
// 获取医院数据
const getHospitalInfo = async() => {
  let res:HospitalResponseData= await reqHospital(pageNo.value,pageSize.value,hostype.value,districtCode.value)
  if(res.code==200){
    hasHospitalArr.value=res.data.content
  }
  console.log(hasHospitalArr);
  total.value=res.data.totalElements
}

// 分页器页码回调
const currentChange = () => {
  getHospitalInfo()
}
// 分页器下拉菜单发生变化
const sizeChange = () => {
  getHospitalInfo()
}

const getLevel = (level:string) => {
  hostype.value=level
  getHospitalInfo()
}

const getRegion = (region:string) => {
  districtCode.value = region
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
