<script>
// 声明式渲染，可以提高开发效率
export default {
  data() {
    return {
      message: 'hello world',
      age: 0,
    }
  },
  methods: {},
  watch: {
    // 监听数据变化
    // 每当message变化时，就会调用这个函数
    message: function (newValue, oldValue) {
      // 一个数据影响多个数据
      console.log(newValue);
      console.log(oldValue);
      // 执行异步操作，或者复杂代码逻辑
    }
  }
}
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="message = '你好'">改变message</button>
  </div>
</template>

<style scoped>

</style>
