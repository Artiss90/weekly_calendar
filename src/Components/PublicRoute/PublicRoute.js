import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import meetingSelectors from "redux/meetingRedux/meetingSelectors";

/*
 * - Если маршрут ограниченный (restricted = true), и пользователь залогинен, рендерит редирект ('/contacts')
 * - В противном случае рендерит компонент
 */
function PublicRoute({ component: Component, redirectTo, ...routeProps }) {
  const open = useSelector(meetingSelectors.getOpenCreateView);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        !open && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;
