import React, { Fragment, PureComponent } from 'react';
import { Link } from "react-router-dom";

export default class Login extends PureComponent {
  render() {
    return (
      <Fragment>
        <span style={{ color: 'red'}}>
          <Link to="/counter">前往计数器</Link>
        </span>
      </Fragment>
    )
  }
}