<template>
  <div :class="[name == '登录' ? 'btn' : '']">{{ name }}</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
defineProps({
  name: String
})
</script>

<style scoped>
div {
  font-size: 13px;
  cursor: pointer;
  padding: 2px 8px;
  border-radius: 6px;
}

div:hover {
  color: blue;
}

.btn {
  background-color: blue;
  color: white;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.btn:hover {
  color: white;
  opacity: 1;
}
</style>