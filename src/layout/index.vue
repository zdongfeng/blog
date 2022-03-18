<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-08-27 22:04:01
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2021-09-06 14:12:27
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
      <el-menu-item index="2">读书笔记</el-menu-item>
      <el-menu-item index="3">文章</el-menu-item>
      <el-menu-item index="4">ABOUT</el-menu-item>
      <div class="layout-right">
        <el-menu-item index="6">
          <el-button type="primary" round>LOGIN</el-button>
        </el-menu-item>
      </div>
      <div class="layout-right">
        <el-menu-item index="5">
          <el-button type="primary" round>创作</el-button>
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
    handleSelect(key) {
      switch(key){
        case '1' :
          this.$router.push('/home')
          break;
        case '2' :
          this.$router.push('/readingNotes')
          break;
        case '3' :
          this.$router.push('/article')
          break;
        case '4' :
          this.$router.push('/home')
          break;
        case '5' :
          this.$router.push('/create')
          break;
        case '6' :
          this.$router.push('/login')
          break;
        default:
          this.$router.push('/home')
      }
    }
  }
}
</script>

<style  scoped>
.layout-right {
  float: right;
}
::v-deep .is-round {
  width: 100px;
}
</style>
