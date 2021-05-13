import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectUser } from '../state/user/selector';

export function PrivateRoute(props) {
  const { children, ...routeProps } = props;
  const user = useSelector(selectUser);
  return (
    <Route {...routeProps}>
      {user ? children : <Redirect to="/"></Redirect>}
    </Route>
  );
}
