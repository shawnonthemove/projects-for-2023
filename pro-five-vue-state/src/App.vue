<template>
  <h1>Father Node: 控制自组件的显示与否，并且接收自组件的事件，可修改值。</h1>
  <button @click="() => isShow = !isShow">click</button>
  <div>{{ isShow }} -- {{ text }}</div>
  <hr>
  <A v-model:text.isBt="text" v-model.log="isShow"></A>
</template>

<script setup>
import { ref, reactive } from 'vue'
import A from './components/A.vue';

let isShow = ref(true);
let text = ref('hello');

</script>

<style scoped>
h1 {
  margin: 30px;
  font-style: italic;
  text-decoration: underline red;
}

button {
  aspect-ratio: 2/1;
  width: 100px;
  margin-left: 30px;
  background-color: aqua;
  font-size: 20px;
}

div {
  width: 150px;
  margin-left: 30px;
  border: dashed 2px green;
  padding: 10px;
  text-align: center;
}
</style>