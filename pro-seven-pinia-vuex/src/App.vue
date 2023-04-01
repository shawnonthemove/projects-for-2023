<template>
  <h2>更新 pinia 状态库的五种方法</h2>
  <div>{{ Test.name }}</div>
  <button @click="change1">stateChange1---Test.name</button>
  <button @click="change2">stateChange2---Test.$patch({})</button>
  <button @click="change3">stateChange3---Test.$patch(()=>{})</button>
  <button @click="change4">stateChange4---Test.$state</button>
  <button @click="change5">stateChange5---Test.setName</button>
  <hr>
  <h2>实现一个 pinia 插件，解决其数据不持久化的问题，一刷新就会丢失，使用 localstorage 实现</h2>
  <input type="text" v-model="baseName">
  <div>{{ Test1 }} --- input的值与 pinia 中的状态保双向绑定并且不会因为刷新页面而丢失</div>
  <hr>
  <h2>实现一个简易版 vuex，其中包括 state，getters，mutations以及actions属性（图片来源codeSnap插件）</h2>
  <img width="1500" src="/code.png" alt="">
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useTestStore, useStore } from './store'
import { storeToRefs } from 'pinia'

const Test = useTestStore();
const Test1 = useStore();

// 解构会丢失值，因此使用toRef维持响应式
let { baseName } = storeToRefs(Test1);

// pinia 中修改 state 值的五种方式
const change1 = () => {
  Test.name = '---change1';
}
const change2 = () => {
  Test.$patch({
    current: 888,
    name: '---change2'
  })
}
const change3 = () => {
  Test.$patch((state) => {
    state.current = 666
    state.name = state.name + '---change3';
  })
}
const change4 = () => {
  Test.$state = { name: '---change4' }
}

const change5 = () => {
  Test.setName('---change5')
}

</script>

<style scoped>
h2 {
  text-decoration: underline green;
  margin: 20px;

}

button {
  padding: 5px;
  font-size: 15px;
  margin: 5px;
}

input {
  width: 300px;
  height: 30px;
  font-size: 16px;
  padding-left: 10px;
  font-style: italic;
  margin-bottom: 10px;
}
</style>