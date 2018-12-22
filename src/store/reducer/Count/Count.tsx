import { Counter } from "../../types/types"
import { Action } from "../../actions/Count/Count"
import * as types from "../../actions/Count/Types/CountTypes"
let initState: Counter = { number:0 }
export default function (state: Counter=initState,action:Action) {
  switch (action.type) {
    case types.ADD:
        return { number:state.number + 1 }
      break;
    case types.SUBTRACT:
        return { number:state.number - 1 }
      break;
    default:
        return state
      break;
  }
}