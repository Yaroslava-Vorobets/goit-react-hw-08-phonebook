
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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={< RestrictedRoute component={RegisterPage} redirectTo ='/Contacts' />} />       
        <Route path="/login" element={< RestrictedRoute component={LoginPage} redirectTo = '/Contacts'/>} />     
        <Route path="/Contacts" element={< PrivateRoute component = {ContactsPage} redirectTo='/login' />} />      
      </Route>    
    </Routes>
  );
};


// import 'modern-normalize';
// import ContactForm from './FormFolder/Form';
// import Filter from './FilterFolder/Filter';
// import ContactList from './ContactListFolder/ContactList';
// import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.min.css';
// import { Wrap } from 'Global.Styles'
// import { useEffect } from 'react';
// import { useSelector,useDispatch } from "react-redux";
// import { fetchContacts} from "redux/contacts/operations";
// import { selectContact, selectError, selectIsLoading, } from "redux/contacts/selectors";
// import { Spinner } from './Spinner/Spinner.jsx';


// export default function App() {
//  const dispatch = useDispatch();
//   const error = useSelector(selectError);
//   const isLoading = useSelector(selectIsLoading);
//   const contacts = useSelector(selectContact);


//   useEffect(() => {     
//     dispatch (fetchContacts())
// },[dispatch])

 

   
//     return (
//         <>
//         <Wrap>
//           <h1>
//             Phonebook
//           </h1>
//             <Filter          
//           />     
//           <ContactForm        
//           />     
//           <h2>
//             Contacts
//           </h2> 
//           {isLoading && !error && <Spinner />}
//           {contacts.length > 0 &&  <ContactList         
//           />}        
//         </Wrap>
//         <ToastContainer autoClose={2000} />   
//         </>
//       )   
//     }

