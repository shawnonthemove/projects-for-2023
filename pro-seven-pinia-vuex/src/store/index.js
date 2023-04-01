import {defineStore} from 'pinia'

export const useTestStore = defineStore('TEST', {
  state: () => {
    return {
      current: 123,
      name: 'shawn'
    }
  },
  // 类似于computed
  getters: {},
  // 类似于methods
  actions: {
    setName(value) {
      this.name = value
    }
  }
})

// 报错：SyntaxError: Octal literals are not allowed in strict mode. 
// 原因：JS严格模式禁止使用八进制字面量，初始值中id使用了000，老的八进制（0前缀）
export const useStore = defineStore('BASE', {
  state: () => {
    return {
      baseCurrent: 999,
      baseName: 'user'
    }
  },
  getters: {
    
  },
})
