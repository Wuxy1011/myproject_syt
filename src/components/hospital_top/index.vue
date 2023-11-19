
import { reduceEachLeadingCommentRange } from 'typescript';
<template>
    <div class="top">
        <div class="content">
			<div class="left">
				<img src="../../assets/images/logo.png" alt="">
				<p>尚医通 预约挂号统一平台</p>
			</div>
			<div class="right">
				<p class="help">帮助中心</p>
				<p class="login">登录/注册</p>
			</div>
		</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.top {
	position: fixed;
	z-index: 999;
    width: 100%;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: center;

    .content {
        background: white;
        width: 80%;
        height: 70px;
		display: flex;
		justify-content: space-between;
		
		.left{
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 16px;
			p{
				color: #55a6fe;
			}
			img{
			width: 60px;
			height: 60px;
			margin-right: 5px;
		}
		}
		.right{
			display: flex;
			justify-content: center;
			align-items: center;
			color:#bbb;
			.help{
				margin-right: 5px;
			}
		}
    }
}
</style>