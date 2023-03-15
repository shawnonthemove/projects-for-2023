<template>
  <div class="card">
    <img :src="data.src" alt="">
    <section class="name">{{ data.name }} --- {{ data.age }}</section>
    <section class="desc">{{ data.desc }}</section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from '../../utils/axios'

const data = await axios.get('./data.json');
</script>

<style scoped lang="less">
.card {
  width: 400px;
  height: 200px;
  background-color: rgba(175, 172, 172, 0.4);
  box-shadow: 3px 3px 1px grey;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  padding: 30px;
  position: relative;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fff;
  }

  .name {
    width: 120px;
    height: 30px;
    background-color: #fff;
    position: relative;
    top: 35px;
    left: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    font-weight: bolder;
  }

  .desc {
    width: 350px;
    height: 80px;
    background-color: #fff;
    padding: 3px;
    font-size: 12px;
    font-weight: bolder;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
}
</style>