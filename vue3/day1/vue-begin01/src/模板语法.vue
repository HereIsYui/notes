<script>
// 声明式渲染，可以提高开发效率
export default {
  data() {
    return {
      num: 0,
      uname: '张三',
      msg: "<h2>标题</h2>",
      id: 'd1',
      url: 'https://t7.baidu.com/it/u=234231168,3860178184&fm=167&app=3000&size=w560&n=0&f=JPEG&fmt=auto?sec=1659546000&t=9b92904899b0f809a4f9c349ee8e4189',
      attributeName:'id',
      mouseEvent:'click',
    }
  },
  methods: {
    // 给vue定义方法
    changeUname: function () {
      // this 指向vue实例
      this.uname = "李四"
    },
    changeColor: function () {
      this.id = "d2"
    }
  }
}
</script>

<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ uname }}</p>
    <!-- v-once当数据改变是，插值处的内容不会更新 -->
    <p v-once>{{ uname }}</p>
    <!-- v-html 让内容以html的形式显示 -->
    <p v-html="msg"></p>
    <button @click="changeUname">改变名字</button>
    <!-- v-bind:绑定属性的内容 -->
    <p v-bind:id="id">v-bind绑定</p>
    <p><img v-bind:src="url" alt=""/></p>
    <button @click="changeColor">改变颜色</button>
    <!-- 使用JavaScript表达式 -->
    <button @click="id = 'd1'">改变颜色(JavaScript)</button>
    <p>{{ num + 1 }}</p>
    <p>{{ uname.split("").reverse().join("") }}</p>
    <p v-bind:id="id + 1">v-bind绑定</p>
    <!-- 语法糖 ：-->
    <!-- v-on:用于监听 DOM 事件 -->
    <button v-on:click="changeColor">改变颜色</button>
    <!-- v-on语法糖： @ -->

    <!-- 动态参数 -->
    <!-- 动态属性 -->
    <p v-bind:[attributeName]="id">动态id</p>
    <button v-on:click="attributeName = 'class'">改变属性</button>
    <!-- 动态事件 -->
    <button v-on:[mouseEvent]="attributeName = 'class'">改变属性</button>
    <button @click="mouseEvent = 'mouseover'">改变事件</button>
  </div>
</template>

<style scoped>
#d1 {
  color: #faa;
}

#d2 {
  color: #afa;
}
.d1{
  font-size: 50px;
}
</style>
