<template>
  <div style="position: relative; top: 15px">
    <a-input-search v-model:value="value" enter-button="百度一下" size="large" @search="onSearch"
      class="extra"></a-input-search>
    <AudioOutlined class="icon icon-first" />
    <CameraOutlined class="icon" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { AudioOutlined, CameraOutlined } from '@ant-design/icons-vue';

const value = ref('');
const onSearch = searchValue => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};
</script>

<style scoped>
.extra {
  width: 650px;
}

.icon {
  font-size: 20px;
  position: absolute;
  z-index: 9999;
  top: 50%;
  transform: translateY(-50%);
  right: 110px;
  opacity: 0.5;
}

.icon-first {
  right: 145px;
}

.icon:hover {
  color: blue;
  opacity: 1;
}
</style>