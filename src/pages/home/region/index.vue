<template>
    <div class="region">
        <div class="content">
            <div class="left">地区：</div>
            <ul>
                <li class="active">全部</li>
                <li>四川</li>
                <li>四川</li>
                <li>四川</li>
                <li>四川</li>
                <li>四川</li>
                <li>四川</li>
                <li>四川</li>
                <li>四川</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

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