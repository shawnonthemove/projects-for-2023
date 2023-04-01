// vuex 的几个特征：
// *.Vue.use表明，vuex 肯定有install方法
// *.new Vuex.Store表明，vuex 导出对象里，有个Store的类
// *.每个组件内部都可以this.$store表明，需要注入$store

let Vue;
class Store {
  constructor(options) {
    this.options = options;
    
    // state 数据是被劫持的，是响应式的，这里借助 vue 的特性来实现
    this.state = new Vue({ data: options.state });

    // 使用 Object.defineProperty 实现数据劫持，绑定在 store 实例的 getters 属性上
    if (options.getters) {
      this.getters = {};
      Object.keys(options.getters).forEach(key => {
        Object.defineProperty(this.getters, key, {
          get: () => {
            return options.getters[key](this.state);
          }
        });
      });
    }
    // 将函数记录，当调用 commit 方法时执行
    if (options.mutations) {
      this.mutations = {};
      Object.keys(options.mutations).forEach(mutationName => {
        this.mutations[mutationName] = (...payload) => {
          options.mutations[mutationName](...payload);
        };
      });
    }
    // 将函数记录，当调用 dispatch 方法时执行
    if (options.actions) {
      this.actions = {};
      Object.keys(options.actions).forEach(actionName => {
        this.actions[actionName] = (...payload) => {
          options.actions[actionName](...payload);
        };
      });
    }
  }
  commit = (mutationName, ...payload) => {
    this.mutations[mutationName](this.state, ...payload);
  };
  dispatch = (actionName, ...payload) => {
    this.actions[actionName](this, ...payload);
  };
}
export default {
  install(_Vue) {
    Vue = _Vue;
    // 借助Vue.mixins的beforeCreate钩子拿到当前的 Vue 实例，从而拿到实例的$options
    Vue.mixin({
      beforeCreate() {
        // 这里的this是vue的实例，其参数store就是store实例，将 $store 和 store 实例进行绑定，注意：不要轻易在原型上面添加属性，应该只在根实例有 store 的时候才设置 $store，子实例会拿到根实例的 $store
        const hasStore = this.$options.store;
        // 根实例的store
        hasStore
          ? (this.$store = this.$options.store)
          : this.$parent && (this.$store = this.$parent.$store);
      }
    });
  },
  Store
};