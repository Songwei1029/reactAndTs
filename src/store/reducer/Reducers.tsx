// 引入合并方法
import { combineReducers } from "redux";
// 引入需要合并的reducer
import counter from "./Count/Count";
// 合并
let reducers = combineReducers({
  counter
});
export default reducers;