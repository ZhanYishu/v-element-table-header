# v-element-table-header

基于 vue 与 element-ui 的 v-element-table-header 指令

一个简单的指令便可随父级定位元素的滚动位置自动显示与隐藏表格头部

## 安装
### yarn
```shell
yarn add v-element-table-header
```
### npm
```shell
npm install v-element-table-header --save
```

## 使用
### 全局注册指令
```shell
import Vue from 'vue'
import element-ui from 'element-ui'
import 'import 'element-ui/lib/theme-chalk/index.css'
import vElementTableHeader from 'v-element-table-header'
import 'v-element-table-header/lib/main.css'
Vue.use(vElementTableHeader)

// 然后可在组件中使用
<el-table :data="tableData" v-element-table-header>
  <el-table-column
    fixed
    prop="date"
    label="日期"
    minWidth="150"
  ></el-table-column>
  <el-table-column
    prop="name"
    label="姓名"
    minWidth="120"
  ></el-table-column>
</el-table>
```
### 局部注册指令
[实例demo](https://github.com/ZhanYishu/v-element-table-header/blob/master/demo/index.vue)
