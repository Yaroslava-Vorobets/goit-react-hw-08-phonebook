import { ChakraProvider, theme } from '@chakra-ui/react'
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {Layout} from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute/Privaterout';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));



export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

 

  return  isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ChakraProvider theme= {theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={< RestrictedRoute component={RegisterPage} redirectTo ='/Contacts' />} />       
          <Route path="/login" element={< RestrictedRoute component={LoginPage} redirectTo = '/Contacts'/>} />     
          <Route path="/Contacts" element={< PrivateRoute component = {ContactsPage} redirectTo='/login' />} />      
        </Route>    
        </Routes>
    </ChakraProvider>    
  );
};
