<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-08-27 22:04:01
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2021-09-03 11:38:34
-->
<template>
  <div>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">LOGO</el-menu-item>
      <el-menu-item index="2">目录</el-menu-item>
      <el-menu-item index="3">文章</el-menu-item>
      <el-menu-item index="4">ABOUT</el-menu-item>
      <div class="layout-right">
        <el-menu-item index="3">
          <a>LOGIN</a>
        </el-menu-item>
      </div>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style  scoped>
.layout-right {
  float: right;
}
</style>
