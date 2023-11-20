<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">等级：</div>
            <ul>
                <li class="active">全部</li>
                <li>三级甲等</li>
                <li>三级甲等</li>
                <li>三级甲等</li>
                <li>三级甲等</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

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