import * as types from "./Types/CountTypes";
// 定义两个接口，分别约束add和subtract的type类型
export interface Add{
  type:typeof types.ADD
}
export interface Subtract{
  type:typeof types.SUBTRACT
}
// 再导出一个type
// type是用来给类型起别名的
// 这个actions里是一个对象，会有很多函数，每个函数都会返回一个action
// 而reducers中的action会是下面某一个函数的返回值

export type Action = Add | Subtract

// 把上面定义好的接口作用于下面
// 约束返回值的类型
export default {
  add():Add{
    // 需要返回一个action对象
    // type为动作的类型
    return { type: types.ADD}
  },
  subtract():Subtract{
    // 需要返回一个action对象
    // type为动作的类型
    return { type: types.SUBTRACT}
  },
  // 一秒后才执行这个行为
  addAsync():any{
    return function (dispatch:any,getState:any) {
      setTimeout(function(){
        // 当1秒过后，会执行dispatch，派发出去，然后改变仓库的状态
        dispatch({type:types.ADD})
      }, 1000);
    }
  }
}