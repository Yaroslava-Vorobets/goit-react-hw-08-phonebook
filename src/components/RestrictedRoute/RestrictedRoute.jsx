import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import {Container} from '@chakra-ui/react'
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Container maxW="container.lg" p={6}>
    <Component />
    </Container>;
};
