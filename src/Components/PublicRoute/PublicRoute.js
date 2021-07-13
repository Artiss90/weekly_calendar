import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import meetingSelectors from "redux/meetingRedux/meetingSelectors";

/*
 * - Если маршрут ограниченный (restricted = true), и страницу создания разрешено открыть(open = true), рендерит компонент ('/create-meeting')
 * - В противном случае редирект (на страницу с таблицей)
 */
function PublicRoute({ component: Component, redirectTo, ...routeProps }) {
  const open = useSelector(meetingSelectors.getOpenCreateView);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        open && routeProps.restricted ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
}

export default PublicRoute;
