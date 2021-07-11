import React from "react";
import { Route, Redirect } from "react-router-dom";

/*
 * - Если маршрут ограниченный (restricted = true), и пользователь залогинен, рендерит редирект ('/contacts')
 * - В противном случае рендерит компонент
 */
function PublicRoute({ component: Component, redirectTo, ...routeProps }) {
  // ! const isCreate = useSelector(createSelectors.getIsCreate);
  let isCreate = false;
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isCreate && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;
