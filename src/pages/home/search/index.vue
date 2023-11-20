<template>
    <div class="search">
        <el-autocomplete clearable class="form" placeholder="请输入医院名称" />
        <el-button type="primary" size="default" @click="search()" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
// 引入icon图标
import { Search } from "@element-plus/icons-vue"
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