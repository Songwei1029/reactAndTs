// 把Counter/Counter2组件汇总到一起
export interface Store {
    counter: Counter
  }
  // 分别对应Counter组件
  export interface Counter {
    number: number
  }
