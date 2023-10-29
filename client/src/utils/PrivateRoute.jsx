import { useNavigate, useLocation } from 'react-router-dom';
import AuthService from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!AuthService.loggedIn()) {
    navigate('/login', { state: { from: location } });
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
