<template>
  <div>
    <img src="/baidu.png" alt="baidu.png">
    <Search></Search>
    <HotArea></HotArea>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import HotArea from '../../components/baidu-components/hotArea.vue'
import Search from '../../components/baidu-components/search.vue'

</script>

<style scoped>
img {
  width: 280px;
}
</style>