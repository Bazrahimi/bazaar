import { Navigate } from 'react-router-dom';
import AuthService from './auth';

const PrivateRoute = ({ children }) => {
  return AuthService.loggedIn() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
