<template>
  <div class="wraps">
    <transition-group enter-active-class="animate__animated animate__zoomInLeft"
      leave-active-class="animate__animated animate__wobble">
      <section class="item" :key="index" v-for="(item, index) in list" :style="{ backgroundColor: bgc }">{{ item }}
      </section>
    </transition-group>
  </div>
  <div class="btn">
    <button @click="add">ADD</button>
    <button @click="minis">MINIS</button>
    <button @click="change">CHANGE COLOR</button>
  </div>
  <h1>Example 1: transition-group to define list</h1>
  <hr>
  <div class="location">
    <transition-group move-class="move">
      <section class="location-item" :key="item.id" v-for="item in data">{{ item.num }}</section>
    </transition-group>
  </div>
  <div class="btn">
    <button @click="shuffle">SHULLFE</button>
  </div>
  <h1>Example 2: transition-group to shuffle. key must bind a static value, not index, it's variable.</h1>
  <hr>
  <div class="time">
    <transition-group enter-active-class="animate__animated animate__zoomInLeft"
      leave-active-class="animate__animated animate__backOutRight" :duration="{ enter: 100, leave: 900 }">
      <section class="time-item" :key="index" v-for="(item, index) in time">{{ index < 2 ? item + ' :' : item }}</section>
    </transition-group>
  </div>
  <h1>Example 3: transition-group for time.</h1>
  <hr>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
const list = reactive([1, 2, 3, 4, 5, 6]);
let bgc = ref('#000');
const data = reactive(new Array(81).fill(0).map((_, index) => {
  return {
    id: index,
    num: index % 9 + 1
  }
}));
const time = reactive(['00', '00', '00']);
onMounted(() => {
  setInterval(() => {
    const now = new Date();
    let [a, b, c] = [time[0], time[1], time[2]];
    if (now.getHours() !== a) time.pop();
    if (now.getMinutes() !== b) time.pop();
    if (now.getSeconds() !== c) time.pop();
    setTimeout(() => {
      if (now.getHours() !== a) time.push(now.getHours());
      if (now.getMinutes() !== b) time.push(now.getMinutes());
      if (now.getSeconds() !== c) time.push(now.getSeconds());
    }, 500);
  }, 1000);
})

const add = () => {
  list.push(list.length + 1);
}
const minis = () => {
  list.pop();
}
const change = () => {
  bgc.value = randomColor();
}
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function shuffle() {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
}
</script>

<style scoped lang="less">
.wraps {
  display: flex;

  .item {
    border: 1px solid #222;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
}

.btn {
  display: flex;

  button {
    width: 80px;
    height: 50px;
    margin: 20px;
    cursor: pointer;
  }
}

h1 {
  font-style: italic;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin: 20px;
}

.location {
  display: flex;
  width: 380px;
  flex-wrap: wrap;
  padding: 50px;
  border: 2px solid red;
  margin: 20px;

  &-item {
    width: 30px;
    height: 30px;
    border: 1px solid #222;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .move {
    transition: all 1s;
  }
}

.time {
  border: 2px green dashed;
  margin: 20px;
  padding: 30px;
  display: flex;

  &-item {
    font-size: 50px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin: 20px;
    padding: 10px;
  }
}
</style>