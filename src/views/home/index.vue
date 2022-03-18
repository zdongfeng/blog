<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-08-27 22:03:06
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-03-16 17:09:38
-->
<template>
<div>
  <div>这是首页</div>
  <h4>图片</h4>
  <img src="../../assets/logo.png"  alt="" />
  <h4>背景图</h4>
  <div class="a"  style="width:200px;height:200px;"></div>
</div>
</template>

<script>
export default {
  name:'home',
  created(){
    // this.$axios({
    //   url:'http://localhost:8888/api/admin/signUp',
    //   method: 'POST'})
    //   .then(res =>{
    //   console.log(res)
    // })
  }
}
</script>
<style scoped>
.a{
background-image:url('../../assets/logo.png');
}
</style>
