<template>
  <div style="display: flex">
    <div class="tabs" v-for="(item, index) in data">
      <div @click="switchevent(item, index)">{{ item.name }}</div>
    </div>
  </div>
  <component :is="comId"></component>
  <h1 style="margin-left: 30px">click the three btn to switch the dynamic component</h1>
</template>

<script setup>
import { ref, reactive, markRaw, shallowRef } from 'vue'
import A from '../components/expame/A.vue'
import B from '../components/expame/B.vue'
import C from '../components/expame/C.vue'
const comId = shallowRef(A);
const switchevent = (item, index) => {
  comId.value = item.com;
}
const data = reactive([
  {
    name: 'A',
    com: markRaw(A)
  },
  {
    name: 'B',
    com: markRaw(B)
  },
  {
    name: 'C',
    com: markRaw(C)
  }
])
</script>

<style scoped>
.tabs {
  width: 30px;
  height: 15px;
  padding: 5px;
  margin: 20px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>