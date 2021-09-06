<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-09-06 10:48:56
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2021-09-06 11:41:16
-->
<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-input type="textarea" v-model="content" :autosize="{ minRows: 20, maxRows: 80}" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="12">
        <div id="show-content" v-highlight class="text-left"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import showdown from "showdown";
import highlight from "highlight.js"
import 'highlight.js/styles/default.css';
export default {
 // 定义自定义指令 v-highlight 代码高亮
directives: {
  highlight: {
    update(el) {
      let blocks = el.querySelectorAll("pre code");
      blocks.forEach((block) => {
          highlight.highlightBlock(block);
      })
    }
  }
},
components: {},
data() {
    return {
        'content':'',
        converter:null
    };
},
computed: {},
watch: { 
    content:{
     handler(neww) {
         console.log(neww)
        this.contentChanged()
      }
    }
},
methods: {
    init(){
        var showdown  = require('showdown');
        var converter = new showdown.Converter()
        this.converter = converter
        this.converter.setOption('tables', true);
    },
    contentChanged(){ 
        var html = this.converter.makeHtml(this.content)
        document.getElementById('show-content').innerHTML = html
    }
},
created() {
    this.content = "```javascript"+
    "db.'集合名'.find()"+
    "```"
    this.converter = new showdown.Converter()
},
mounted() {

},
}
</script>
<style scoped>
#show-content {
  padding: 25px;
}
</style>
