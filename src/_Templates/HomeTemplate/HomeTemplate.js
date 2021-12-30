import React from "react";

import { Route } from "react-router-dom";
import HomeFooter from "../../Components/homeFooter/HomeFooter";
import HomeHeader from "../../Components/homeHeader/HomeHeader";

export const HomeTemplate = (props) => {
  let { Component, path } = props;
  return (
    <Route
      path={path}
      render={(propsRoute) => {
        return (
          <div>
            <HomeHeader />
            <Component {...propsRoute} />
            <HomeFooter />
          </div>
        );
      }}
    />
  );
};
