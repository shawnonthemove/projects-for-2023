<template>
  <div v-if="visiable" class="container">
    <div class="content">
      <span>Content of the Dialog...</span>
      <button @click="close">close</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const props = defineProps({
  visiable: Boolean
})
const emit = defineEmits(['close']);
const close = () => {
  emit('close', false);
}
</script>

<style scoped lang="less">
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-items: center;
  align-items: center;

  .content {
    width: 300px;
    height: 300px;
    padding: 50px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    span {
      height: 200px;
      border: dashed 2px blue;
      display: flex;
      font-size: 20px;
      font-style: italic;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      margin-top: 10px;
      font-size: 18px;
      padding-top: 5px;
      padding-bottom: 5px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.5s ease;
    }

    button:hover {
      background-color: rgb(222, 220, 220);
    }
  }
}
</style>