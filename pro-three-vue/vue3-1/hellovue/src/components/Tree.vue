<template>
  <div v-for="item in props.data" class="tree">
    <input type="checkbox" v-model="item.checked">
    <section>{{ item.name }}</section>
    <Tree v-if="item['children']" :data="item['children']"></Tree>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
let props = defineProps({
  data: Array
})
</script>

<style scoped lang="less">
@border: #222;

.tree {
  border: 1px solid @border;
  padding: 20px;
  width: 50px;
  height: 30px;
  margin-left: 20px;
  margin-top: 10px;
}
</style>