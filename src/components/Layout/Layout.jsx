import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from '../AppBar/AppBar';
 import { Suspense } from 'react';
 import { Spinner } from '../Spinner/Spinner.jsx'

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Spinner/>}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2000} />   
    </div>
  );
};
