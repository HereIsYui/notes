<script>
// 声明式渲染，可以提高开发效率
export default {
  data() {
    return {
      message: '你好',
      age: 0,
      user: {
        name: '张三',
        age:18,
        sex:'男'
      }
    }
  },
  methods: {},
  watch: {
    // 监听数据变化
    // 每当message变化时，就会调用这个函数
    // message: function (newValue, oldValue) {
    //   // 一个数据影响多个数据
    //   console.log(newValue);
    //   console.log(oldValue);
    //   // 执行异步操作，或者复杂代码逻辑
    //   if(newValue.length<5 || newValue.length > 10){
    //     console.log("输入框的内容不能小于5或大于10")
    //   }
    // }
    message: {
      immediate: true, // 初始化的时候调用函数
      handler: function (newValue, oldValue) {
        // 一个数据影响多个数据
        console.log(newValue);
        // 执行异步操作，或者复杂代码逻辑
        if (newValue.length < 5 || newValue.length > 10) {
          console.log("输入框的内容不能小于5或大于10")
        }
      }
    },
    // 监听不到对象属性变化，需要使用深度监听
    // user: function (newValue) {
    //   console.log(newValue)
    // }
    // user:{
    //   handler: function(newValue){
    //     console.log(newValue);
    //   },
    //   deep:true // 表示是否深度监听，侦听器会一层一层的向下遍历，给对象每个属性都加上侦听器
    // }
    "user.name":{ // 使用字符串的形式进行优化，只会单独监听对象中对应的属性
      handler: function(newValue){
        console.log(newValue);
      }
    }
  }
}
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="message = '你好'">改变message</button>
    <!-- v-model:数据的双向绑定 -->
    <input type="text" v-model="message">
    <p>{{ user.name }}</p>
    <button @click="user.name = '李四'">改变名字</button>
  </div>
</template>

<style scoped>

</style>
