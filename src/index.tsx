import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from './store/store/Count/Count'
// 引入路由
// 路由的容器:HashRouter as Router
// 路由的规格:Route
// Link组件
// import { BrowserRouter as Router,Route,Link } from "react-router-dom"
import { HashRouter as Router,Route,Link } from "react-router-dom";
import CounterComponent from "./components/Count/Counter";
import Login from "./pages/login/Login";

ReactDom.render((
  <Provider store={store}>
    {/* 路由组件 */}
    <Router>
      {/*  放两个路由规则需要在外层套个React.Fragment */}
      <React.Fragment>
        {/* 增加导航 */}
        {/* <ul>
          <li><Link to="/">login</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/counter2">Counter2</Link></li>
        </ul> */}
        {/* 当路径为 / 时是home组件 */}
        {/* 为了避免home组件一直渲染，我们可以添加属性exact */}
        <Route exact path="/" component={Login}/>
        <Route path="/counter" component={CounterComponent}/>
      </React.Fragment>
    </Router>
  </Provider>
),document.getElementById("app"))