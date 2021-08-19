<!--
 * @Descripttion: unTitle
 * @Author: yizheng.yuan
 * @Date: 2021-07-07 16:24:33
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2021-08-19 15:44:10
-->
<template>
	<div class="app-wrapper">
		<div class="main-container flexBox-c">
			<navbar style="height: 70px;"/>
			<app-main class="flex1"/>
		</div>
	</div>
</template>

<script>
import { Navbar, AppMain } from './components'
export default {
	name: 'Layout',
	components: {
		Navbar,
		AppMain
	}
}
</script>
<style lang="scss" scoped>
.main-container{
	background: #192b41;
	height: 100vh;
  overflow: hidden;
}
</style>

