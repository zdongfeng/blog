/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-08-27 21:34:14
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2021-09-03 11:10:29
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", {
      "modules": false
    }]
  ],
  "plugins": [
    // [ //按需引入 elemennt
    //   "component",
    //   {
    //     "libraryName": "element-ui",
    //     "styleLibraryName": "theme-chalk"
    //   }
    // ]
  ]
}
