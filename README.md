# v-element-table-header

基于 vue 与 element-ui 的 v-element-table-header 指令

一个简单的指令便可随父级定位元素的滚动位置自动显示与隐藏表格头部

![img](https://github.com/ZhanYishu/v-element-table-header/raw/master/assets/demo.gif)
##### [在线实例地址](http://static.zhanzf.com/components-inline-demo/element-table-header.html)

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
main.js
```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vElementTableHeader from 'v-element-table-header'
import 'v-element-table-header/lib/main.css'
import '../../styles/index.scss'
import App from './app.vue'

Vue.use(ElementUI)
//1、 使用注册插件方式注册指令
Vue.use(vElementTableHeader)
//2、 或者使用注册指令方式
// Vue.directive(vElementTableHeader.name, vElementTableHeader.option)

new Vue({
  name: 'admin',
  render: createElement => createElement(App)
}).$mount('#app')
```
app.vue
```vue
<template>
  <div>
    <el-table
      v-for="key of tableKeys"
      :key="key"
      :data="tableData"
      border
      v-element-table-header
      style="minWidth: 100%; margin-bottom: 50px">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        minWidth="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        minWidth="100">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        minWidth="130">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        minWidth="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        minWidth="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        minWidth="180">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        minWidth="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'elementTableHeader',
    
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    
    data() {
      return {
        tableKeys: ['11', '22', '33', '44'],
        tableData: [
          { date: '2016-05-03',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333 },
          { date: '2016-05-03',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333 },
          { date: '2016-05-03',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333 },
          { date: '2016-05-03',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333 },
          { date: '2016-05-03',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333 },
          { date: '2016-05-03',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333 },
          { date: '2016-05-03',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333 },
          { date: '2016-05-03',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333 },
          { date: '2016-05-03',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333 },
          { date: '2016-05-03',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333 },
        ]
      }
    }
  }
</script>
```

### 局部注册指令
[实例demo](https://github.com/ZhanYishu/v-element-table-header/blob/master/demo/index.vue)

## 注意事项
使用时请确保table组件所在的父级滚动条是唯一的，不建议布局时采用双层滚动条布局

