<template>
  <button @click="switchBtn">切换组件</button>
  <keep-alive>
    <A v-if="flag"></A>
    <B v-else></B>
  </keep-alive>
</template>

<script setup>
// keep-alive 有LRU机制
import { ref, reactive } from 'vue'
import A from '../components/keepAlive/A.vue'
import B from '../components/keepAlive/B.vue'

let flag = ref(true);
const switchBtn = () => {
  flag.value = !flag.value;
}
</script>

<style scoped>
button {
  font-size: large;
  height: 100px;
  margin-left: 50px;
  margin-right: 50px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>