<template>
  <div class="container">
    <h1>使用内置组件 Suspense 加载异步组件</h1>
    <hr style="width: 500px; margin-bottom: 30px">
    <Suspense>
      <template #default>
        <SyncReal></SyncReal>
      </template>
      <template #fallback>
        <Skeleton></Skeleton>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { ref, reactive, defineAsyncComponent } from 'vue'
import Real from '../components/async/Real.vue'
import Skeleton from '../components/async/Skeleton.vue';
const SyncReal = defineAsyncComponent(() => import('../components/async/Real.vue'));
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>