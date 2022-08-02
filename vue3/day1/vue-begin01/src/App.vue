<script>
// 声明式渲染，可以提高开发效率
export default {
  data() {
    return {
      num: 0,
      uname: '张三',
      msg: "<h2>标题</h2>"
    }
  },
  methods: {
    // 给vue定义方法
    changeUname: function () {
      // this 指向vue实例
      this.uname = "李四"
    },
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
  </div>
</template>

<style scoped>

</style>
