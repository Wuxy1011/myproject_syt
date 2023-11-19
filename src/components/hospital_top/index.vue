
import { reduceEachLeadingCommentRange } from 'typescript';
<template>
    <div class="top">
        <div class="content"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.top {
    width: 100%;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: center;

    .content {
        background: red;
        width: 80%;
        height: 70px;
    }
}
</style>