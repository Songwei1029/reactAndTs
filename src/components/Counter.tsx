import * as React from "react";
import { connect } from "react-redux";
import actions from "../store/actions/counter";
import { Store, Counter } from "../types";
import { Link } from "react-router-dom";

interface IProps{
  number:number,
  add:any,
  subtract:any,
  addAsync:any
}
class CounterComponent extends React.Component<IProps>{
  render(){
    let { number, add, subtract, addAsync } = this.props
    return(
      <div>
        <p>{number}</p><br/>
        <button onClick={add}>+</button><br/>
        <button onClick={subtract}>-</button><br/>
        <button onClick={addAsync}>异步加1</button>
        <Link to="/counter2">Counter2</Link>
      </div>
    )
  }
}

let mapStateToProps = function (state: Store): Counter {
  return state.counter;
}
export default connect(
  mapStateToProps,
  actions
)(CounterComponent);