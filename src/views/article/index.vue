<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-09-06 10:48:56
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-02-28 11:44:50
-->
<template>
  <div>
    <el-row>
      <el-col :span="24">
        <!-- <el-input type="textarea" v-model="content" :autosize="{ minRows: 20, maxRows: 80}" placeholder="请输入内容"></el-input> -->
        <div class="markdown">
        <mavon-editor v-model="value" @change="change" :toolbars='toolbars'></mavon-editor>
        </div>
        
      </el-col>
      <!-- <el-col :span="24">
        <div id="show-content" v-highlight class="text-left"></div>
      </el-col> -->
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
// components: {MavonEditor},
data() {
    return {
        content: `Plan hash value: 2484965509 \n   \n ---------------------------------------------------------------------------------------------------- \n | Id  | Operation                        | Name            | Rows  | Bytes | Cost (%CPU)| Time     | \n| ---- | --------- | ---- | ---- | ----- | ----------- | ---- | \n |   0 | SELECT STATEMENT                 |                 |       |       |     2 (100)|          | \n |   0 | SELECT STATEMENT                 |                 |       |       |     2 (100)|          | \n |   0 | SELECT STATEMENT                 |                 |       |       |     2 (100)|          | \n |   0 | SELECT STATEMENT                 |                 |       |       |     2 (100)|          | \n |   0 | SELECT STATEMENT                 |                 |       |       |     2 (100)|          | \n |   0 | SELECT STATEMENT                 |                 |       |       |     2 (100)|          | \n` ,
        converter:null,
        value:'Plan hash value: 269241868 \n   \n -------------------------------------------------------------------------- \n | Id  | Operation                                          | Name        | \n -------------------------------------------------------------------------- \n |   0 | SELECT STATEMENT                                   |             | \n |   0 | SELECT STATEMENT                                   |             | \n |   1 |  MERGE JOIN                                        |             | \n |   1 |  MERGE JOIN                                        |             | \n |   2 |   SORT JOIN                                        |             | \n |   2 |   SORT JOIN                                        |             | \n |   3 |    MERGE JOIN                                      |             | \n |   3 |    MERGE JOIN                                      |             | \n |   4 |     SORT JOIN                                      |             | \n |   4 |     SORT JOIN                                      |             | \n |   5 |      MERGE JOIN                                    |             | \n |   5 |      MERGE JOIN                                    |             | \n |   6 |       MERGE JOIN                                   |             | \n |   6 |       MERGE JOIN                                   |             | \n |   7 |        SORT JOIN                                   |             | \n |   7 |        SORT JOIN                                   |             | \n |   8 |         MERGE JOIN                                 |             | \n |   8 |         MERGE JOIN                                 |             | \n |   9 |          SORT JOIN                                 |             | \n |   9 |          SORT JOIN                                 |             | \n |  10 |           MERGE JOIN                               |             | \n |  10 |           MERGE JOIN                               |             | \n ',
        toolbars: {
          fullscreen: true, // 全屏编辑
          preview: true, // 预览
        },

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
        // var html = this.converter.makeHtml(this.content)
      // console.log(this.converter,html)
      //   document.getElementById('show-content').innerHTML = html
    },
      //监听markdown变化
    change() {
      // console.log(value)
      // this.content = value
      this.contentChanged()
      // this.html = render;
      // this.blogInfo.blogMdContent = value;
      // this.blogInfo.blogContent = render;
    },
    //上传图片接口pos 表示第几个图片 
    handleEditorImgAdd(pos , $file){
      var formdata = new FormData();
      formdata.append('file' , $file);
      this.$axios
      .post("http://localhost:8000/blogs/image/upload/", formdata)
      .then(res => {
        var url = res.data.data;
        this.$refs.md.$img2Url(pos, url);  //这里就是引用ref = md 然后调用$img2Url方法即可替换地址
      });
    },
    handleEditorImgDel(){
      console.log('handleEditorImgDel');    //我这里没做什么操作，后续我要写上接口，从七牛云CDN删除相应的图片
    }
},
created() {
    this.converter = new showdown.Converter()
    this.converter.setOption('tables',true)
},
mounted() {

},
}
</script>
<style scoped>
#show-content {
  padding: 25px;
}
.markdown{
  width: 100%;
  height: 2000px;
}
</style>
