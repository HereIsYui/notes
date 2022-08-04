<script>
// 声明式渲染，可以提高开发效率
export default {
  data() {
    return {
      message: 'helloWorld',
      isActive: true,
      error: {},
      classObj: {
        active: true,
        helloWorld: true
      },
      activeClass: "active"
    }
  },
  methods: {},
  computed: {
    classObjCom: function () {
      return {
        active: this.isActive && !this.error,
        helloWorld: this.error
      }
    }
  }
}
</script>

<template>
  <div>
    <!-- 第一种，放置字符串 -->
    <p class="active">hello</p>
    <!-- 第二种，放置对象(常用) -->
    <p :class="{active:isActive}">hello1</p>

    <p :class="{active:isActive,helloWorld:isActive}">hello1</p>
    <button @click="isActive = !isActive">改变active</button>
    <!-- 和普通的类同时存在，不会冲突 -->
    <p :class="{active:isActive}" class="helloWorld">hello1</p>
    <p :class="classObj" class="helloWorld">hello1</p>
    <!-- 使用computed -->
    <p :class="classObjCom" class="helloWorld">hello1</p>
    <!-- 数组语法(不常用) -->
    <p :class="[message,activeClass]">hello2</p>
    <!-- 数组和对象结合 -->
    <p :class="[message,{active:isActive}]">hello3</p>
  </div>
</template>

<style scoped>
.active {
  font-size: 50px;
  color: #535bf2;
}

.helloWorld {
  background-color: #ffaaaa;
}
</style>
