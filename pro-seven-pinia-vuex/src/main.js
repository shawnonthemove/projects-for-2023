import { createApp, toRaw } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'

const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key) => {
  let res = localStorage.getItem(key);
  return res ? JSON.parse(res) : {}
}

const piniaPlugin = (user) => {
  return (context) => {
    const {store} = context;
    const data = getStorage(user.userId+store.$id);
    store.$subscribe(() => {
      setStorage(user.userId+store.$id, toRaw(store.$state))
    })
    return {
      ...data
    }
  }
}
const store = createPinia();
store.use(piniaPlugin({
  userId: 'unique'
}));

createApp(App).use(store).mount('#app')
