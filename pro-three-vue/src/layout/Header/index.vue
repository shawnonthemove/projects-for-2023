<template>
  <div>
    <div class="container-left">
      <navItem v-for="item in ['新闻', 'hao123', '地图', '贴吧', '视频', '图片', '网盘', '更多']" :name="item"></navItem>
    </div>
    <div class="container-right">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <a href="">设置</a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">搜索设置</a>
              </a-menu-item>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">高级搜索</a>
              </a-menu-item>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">关闭预测</a>
              </a-menu-item>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">隐私设置</a>
              </a-menu-item>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">关闭热搜</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <navItem name='登录'></navItem>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import navItem from '../../components/baidu-components/navItem.vue'

</script>

<style scoped>
.container-left {
  width: 30vw;
  display: flex;
  justify-content: space-between;
}

.container-right {
  width: 8vw;
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 600px) {
  .container-left {
    display: none;
  }

  .container-right {
    width: 20vw;
  }
}

@media only screen and (min-width: 600px) and (max-width: 768px) {

  .container-left {
    width: 60vw;
  }

  .container-right {
    width: 16vw;
  }
}

/* 中型设备（平板电脑，768 像素及以上） */
@media only screen and (min-width: 768px) and (max-width: 992px) {

  .container-left {
    width: 50vw;
  }

  .container-right {
    width: 13vw;
  }
}

/* 大型设备（笔记本电脑/台式机，992 像素及以上） */
@media only screen and (min-width: 992px) and (max-width: 1200px) {

  .container-left {
    width: 40vw;
  }

  .container-right {
    width: 10vw;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1500px) {
  .container-left {
    width: 30vw;
  }

  .container-right {
    width: 8vw;
  }
}

@media only screen and (min-width: 1500px) {
  .container-left {
    width: 25vw;
  }

  .container-right {
    width: 6vw;
  }
}
</style>