<template>
  <div class="container">
    <DialogItem :visiable="visiable" @close="closeDialog"></DialogItem>
    <h1>Touch the button to create a Dialog.</h1>
    <button @click="() => visiable = true">创建Dialog</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import DialogItem from '../components/DialogItem.vue'
let visiable = ref(false);
const closeDialog = () => {
  visiable.value = false;
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: cursive;
    font-size: 40px;
    font-style: italic;
    margin-bottom: 30px;
  }

  button {
    background-color: rgb(5, 5, 198);
    color: white;
    padding: 30px;
    font-size: 30px;
    border-radius: 20px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
  }

  button:hover {
    opacity: 1;
  }
}
</style>