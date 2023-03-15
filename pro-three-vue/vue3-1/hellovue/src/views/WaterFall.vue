<template>
  <WaterFallItem :data="arr"></WaterFallItem>
</template>

<script setup>
import { ref, reactive } from 'vue'
import WaterFallItem from '../components/WaterFallItem.vue';
let arr = [];
for (let i = 0; i < 50; i++) {
  let obj = {
    height: Math.floor(Math.random() * 451 + 50),
    background: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  }
  arr.push(obj);
}
</script>

<style scoped></style>