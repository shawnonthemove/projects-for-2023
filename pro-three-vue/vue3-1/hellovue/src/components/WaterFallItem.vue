<template>
  <div class="wraps">
    <div class="items" v-for="item in waterFall"
      :style="{ left: item.left + 'px', top: item.top + 'px', height: item.height + 'px', backgroundColor: item.background }">
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
const props = defineProps({
  data: Array
})
const waterFall = reactive([]);
const init = () => {
  let width = 130;
  let x = document.body.clientWidth;
  let oneColumn = Math.floor(x / width);
  let heightList = [];

  for (let i = 0; i < props.data.length; i++) {
    if (i < oneColumn) {
      props.data[i].left = i * width;
      props.data[i].top = 20;
      waterFall.push(props.data[i]);
      heightList.push(props.data[i].height + 20);
    } else {
      let index = 0, short = Infinity;
      for (let j = 0; j < heightList.length; j++) {
        if (heightList[j] < short) {
          short = heightList[j];
          index = j;
        }
      }
      heightList[index] = props.data[i].height + 10 + heightList[index];
      props.data[i].left = index * width;
      props.data[i].top = 10 + short;
      waterFall.push(props.data[i]);
    }
  }
}
onMounted(() => {
  init();
  alert('dom init finished!')
})

</script>

<style scoped lang="less">
.wraps {
  position: relative;

  .items {
    position: absolute;
    width: 120px;
  }
}
</style>