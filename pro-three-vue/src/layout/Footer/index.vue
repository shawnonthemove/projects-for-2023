<template>
  <div class="footer">
    <template
      v-for="(item, index) in ['关于百度', 'About Baidu', '使用百度前必读', '帮助中心', '企业推广', '京公网安备11000002000001号', '京ICP证030173号', '信息网络传播视听节目许可证 0110516', '互联网宗教信息服务许可证编号：京（2022）0000043', '药品医疗器械网络信息服务备案（京）网药械信息备字（2021）第00159号']">
      <section class="footer-item" :id="index">
        {{ item }}
      </section>
    </template>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

</script>

<style scoped lang="less">
.footer {
  font-size: 12px;
  color: rgba(181, 181, 181, 0.9);
  padding: 5px;
  display: flex;
  justify-content: space-around;

  &-item {
    cursor: pointer;
  }

  &-item:hover {
    color: black;
  }
}

@media only screen and (max-width: 600px) {

  section[id="9"],
  section[id="8"],
  section[id="7"],
  section[id="6"],
  section[id="5"] {
    display: none;
  }
}

/* 小设备 (平板电脑和大型手机，600 像素及以上) */
@media only screen and (min-width: 600px) and (max-width: 768px) {

  section[id="9"],
  section[id="8"],
  section[id="7"],
  section[id="6"] {
    display: none;
  }
}

/* 中型设备（平板电脑，768 像素及以上） */
@media only screen and (min-width: 768px) and (max-width: 992px) {

  section[id="9"],
  section[id="8"],
  section[id="7"] {
    display: none;
  }
}

/* 大型设备（笔记本电脑/台式机，992 像素及以上） */
@media only screen and (min-width: 992px) and (max-width: 1200px) {

  section[id="9"],
  section[id="8"] {
    display: none;
  }
}

/* 超大型设备（大型笔记本电脑和台式机，1200 像素及以上） */
@media only screen and (min-width: 1200px) and (max-width: 1500px) {
  section[id="9"] {
    display: none;
  }
}
</style>