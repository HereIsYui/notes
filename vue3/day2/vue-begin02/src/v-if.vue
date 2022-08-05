<script>
// 声明式渲染，可以提高开发效率
export default {
  data() {
    return {
      age: 16,
      sex: 'man',
      isShow:true
    }
  },
  methods: {},
}
</script>

<template>
  <div>
    <!-- v-if -->
    <p v-if="age > 18">我是成年人了</p>
    <p v-else-if="age == 18">我18了</p>
    <p v-else>我还是个小朋友</p>
    <button @click="age++">年龄+</button>
    <button @click="age--">年龄-</button>
    <!-- 在template 元素上使用 v-if 条件渲染分组 -->
    <template v-if="age>=18">
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
      <p>你好</p>
    </template>
    <!-- v-show -->
    <p v-show="sex == 'man' ">男生</p>
    <p v-show="sex == 'woman'">女生</p>
    <!-- v-show只是简单地切换元素的 display CSS property -->
    <h2 v-if="isShow">标题内容1 v-if</h2>
    <h2 v-if="!isShow">标题内容1 v-show</h2>
    <button @click="isShow = !isShow">改变isShow</button>
  </div>
</template>

<style scoped>

</style>
