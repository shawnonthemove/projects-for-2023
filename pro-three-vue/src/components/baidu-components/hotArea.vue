<template>
  <div>
    <div class="row-top">
      <div class="row-top-left">百度热搜 ></div>
      <div class="row-top-right">
        <LoadingOutlined /> 换一换
      </div>
    </div>
    <div class="outside">
      <div class="rows" v-for="(item, index) in arr">
        <ToTopOutlined :style="{ color: colors[index], fontSize: '18px', fontWeight: 'bolder' }" />
        <section>{{ item }}</section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ToTopOutlined, LoadingOutlined } from '@ant-design/icons-vue'

let arr = reactive(['无负时代 在新征程上奋勇前进', '中国国土绿化行动成绩单', '那些曾被315点过名的品牌怎么样了', '湖南、安徽、海南省委书记调整', '海鲜加工厂的狠活：硼砂泡出黄金鲍', '学而思大规模重启线下招生'])
let colors = reactive(['red', 'grey', 'green', 'grey', 'orange', 'grey']);
</script>

<style scoped lang="less">
.row-top {
  width: 650px;
  font-size: 16px;
  padding-left: 6px;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 60px;

  &-left {
    font-weight: bolder;
  }

  &-right {
    color: grey;
  }

  &-left:hover,
  &-right:hover {
    color: blue;
    cursor: pointer;
  }
}

.outside {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: 60px;
}

.rows {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  font-size: 16px;
  padding: 5px;

  section {
    margin-left: 15px;
  }

  section:hover {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>