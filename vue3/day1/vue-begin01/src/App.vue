<script>
// 声明式渲染，可以提高开发效率
export default {
  data() {
    return {
      message: 'hello world',
      uname: '张三',
    }
  },
  computed: {
    // 计算属性 只要依赖值不变，那么不会重新计算，计算属性将基于它们的响应依赖关系缓存
    // 简写
    // reverseMsg: function () {
    //   console.log("computed");
    //   return this.message.split("").reverse().join("")
    // },
    // 每一个计算属性中都有一个getter和setter
    // 完整的写法
    reverseMsg: {
      get: function () {
        return this.message.split("").reverse().join("")
      },
      // 计算属性一般没有set方法，代表计算属性是只读属性
      set: function (newValue) {
        // 在设置或者更改计算属性的时候调用
        console.log(newValue);
        this.message = newValue;
      }
    }
  },
  methods: {
    reverseMessage: function () {
      console.log("methods");
      return this.message.split("").reverse().join("")
    }
  }
}
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <!-- 第一种 js表达式 总共会计算三次 -->
    <p>{{ message.split("").reverse().join("") }}</p>
    <!-- 第二种 计算属性 只会计算一次-->
    <p>{{ reverseMsg }}</p>
    <p>{{ reverseMsg }}</p>
    <p>{{ reverseMsg }}</p>
    <!-- 第三种 使用methods中的方法 -->
    <p>{{ reverseMessage() }}</p>
    <p>{{ reverseMessage() }}</p>
    <p>{{ reverseMessage() }}</p>
    <button @click="message = '你好'">改变message</button>
    <button @click="reverseMsg = '你好'">改变reverseMessage</button>
  </div>
</template>

<style scoped>

</style>
