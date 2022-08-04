<script>
// 声明式渲染，可以提高开发效率
export default {
  data() {
    return {
      activeColor: 'red',
      fontSize: '50px',
      bgColor: 'pink',
      styleObg: {
        color: 'red',
        fontSize: '50px',
        backgroundColor: 'pink'
      }

    }
  },
  methods: {},
}
</script>

<template>
  <div>
    <!-- 第一种，放置字符串-->
    <p style="color: #ffaaaa">hello</p>
    <!-- 第二种，放置对象 -->
    <p :style="{color:activeColor,fontSize:fontSize,'background-color':bgColor}">hello1</p>
    <p :style="styleObg">hello1</p>
  <!-- 第三种，数组语法 -->
    <p :style="[styleObg,{border:'5px solid blue'}]">hello2</p>
  </div>
</template>

<style scoped>

</style>
