<template>
  <div class="container">
    <Header class="top"></Header>
    <Content class="mid"></Content>
    <Footer class="bottom"></Footer>
  </div>
</template>

<script setup>
//import { ref, reactive } from 'vue'
import Footer from './Footer/index.vue';
import Header from './Header/index.vue';
import Content from './Content/index.vue';


</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .top {
    width: 97%;
    height: 50px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
  }

  .mid {
    height: 83%;
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .bottom {
    width: 88%;
    height: 30px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
  }
}
</style>