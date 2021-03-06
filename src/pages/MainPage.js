import React, { Component } from "react";
import { Helmet } from "react-helmet";

import s from "../scss/MainPage.module.scss";

class MainPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>뷰이, 리뷰를 보다</title>
        </Helmet>
        <div className={s.title}>나는 리뷰된다, 고로 존재한다.</div>
      </>
    );
  }
}

export default MainPage;
