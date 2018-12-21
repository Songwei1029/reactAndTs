import React, { Fragment, PureComponent } from 'react';
import { Link } from "react-router-dom";

export default class Login extends PureComponent {
  render() {
    return (
      <Fragment>
        <span style={{ color: 'red'}}>
          <Link to="/counter">Counter</Link>
        </span>
      </Fragment>
    )
  }
}