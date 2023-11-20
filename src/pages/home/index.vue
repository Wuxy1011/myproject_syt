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
      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template> 

<script setup lang="ts">
// 引入轮播图组件
import Carousel from "../home/carousel/index.vue"
// 引入搜索组件
import Search from "../home/search/index.vue"
// 引入医院等级组件
import Lever from "../home/level/index.vue"
// 引入地区组件
import Region from "../home/region/index.vue"
</script>

<style scoped lang="scss">

</style>
