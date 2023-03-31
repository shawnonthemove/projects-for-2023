<template>
  <div>
    <h2>自定义指令的使用实例 v-a:aaa.isA="{ bg: 'green' }</h2>
    <A v-a:aaa.isA="{ bg: 'green' }"></A>
    <hr>
    <h2>使用自定义指令配合请求数据完成按钮鉴权: 根据当前用户名加上自定义指令的value进行拼接，判断其是否在permissions数组里</h2>
    <div class="btn">
      <button v-btn="'shop:edit'">edit</button>
      <button v-btn="'shop:create'">create</button>
      <button v-btn="'shop:delete'">delete</button>
    </div>
    <hr>
    <h2 style="margin-bottom: 100px;">自定义指令实现拖拽功能</h2>
    <div class="box" v-move>
      <div class="header">Header</div>
      <div></div>
    </div>
    <hr>
    <h2>自定义指令实现图片懒加载: 操作传入的控制元素el，然后使用IntersectionObserver类来实现位置监听</h2>
    <div class="pics">
      <img v-lazy="item" width="800" height="500" v-for="item in imgArr" alt="pic">
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import A from './components/A.vue'

// vite 提供的批量加载图片数据的方式，其中eager是直接加载，不配置是默认懒加载 () => import(...)
const imageList = import.meta.glob('./assets/pics/*.png', { eager: true });
let imgArr = Object.values(imageList).map(v => v.default)

const vLazy = async (el, dir) => {
  let loading = await import('/loading.jpg');
  el.src = loading.default;
  // 使用IntersectionObserver类来实现位置监听
  const observer = new IntersectionObserver((enr) => {
    if (enr[0].intersectionRatio > 0) {
      setTimeout(() => {
        el.src = dir.value;
      }, 1000);
      observer.unobserve(el);
    }
  });
  observer.observe(el);
}

const permissions = [
  'shawn:shop:edit',
  //'shawn:shop:create',
  'shawn:shop:delete'
];

const vBtn = (el, dir) => {
  if (!permissions.includes('shawn' + ':' + dir.value)) {
    el.disabled = true;
  }
}

const vMove = (el, dir) => {
  let moveElement = el.firstElementChild;
  // 该元素监听鼠标按下动作
  const mouseDown = (event) => {
    let x = event.clientX - el.offsetLeft;
    let y = event.clientY - el.offsetTop;
    const move = (event) => {
      // console.log(event);
      el.style.left = event.clientX - x + 'px';
      el.style.top = event.clientY - y + 'px';
    }
    // 按下按键之后监听鼠标移动事件，抬起之后清空这个事件
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move);
    })
  }
  moveElement.addEventListener('mousedown', mouseDown);
}

const vA = {
  created() {
    console.log('----created');
  },
  beforeMount() {
    console.log('----beforeMount');
  },
  mounted(el, dir, ...args) {
    // 定义在A组件上的参数arg，修饰符以及value就可以在这些方法中接收
    el.style.background = dir.value.bg;
    if (dir.modifiers) el.innerText = dir.arg + '***';
    else el.textValue = dir.arg

    console.log('----mounted');
  },
  beforeUpdate() {
    console.log('----beforeUpdate');
  },
  update() {
    console.log('----update');
  },
  beforeUnmount() {
    console.log('----beforeUnmount');
  },
  unmounted() {
    console.log('----unmounted');
  }
}
</script>

<style scoped>
h2 {
  margin: 10px;
  text-decoration: underline blue;
}

.btn>button {
  padding: 5px;
  font-size: 16px;
  margin: 10px;
}

.box {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  position: absolute;
  right: 0;
  top: 300px;
}

.box>.header {
  width: 100%;
  height: 30px;
  background-color: black;
  text-align: center;
  line-height: 30px;
  color: white;
  font-style: italic;
}
</style>