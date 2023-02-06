
import 'modern-normalize';
import ContactForm from '../components/FormFolder/Form';
import Filter from '../components/FilterFolder/Filter';
import {ContactList} from '../components/ContactListFolder/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Wrap } from 'Global.Styles'
import { useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { fetchContacts} from "redux/contacts/operations";
import { selectContact, selectError, selectIsLoading, } from "redux/contacts/selectors";
import { Spinner } from '../components/Spinner/Spinner.jsx';
import { Heading } from '@chakra-ui/react'


export default function App() {
 const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContact);


  useEffect(() => {     
    dispatch (fetchContacts())
},[dispatch])
   
    return (
        <>
        <Wrap>
          <Heading as='h1' size='xl' color ='#44337A' mb = '4'> Phonebook</Heading>           
            <Filter          
          />     
          <ContactForm        
          />     
          <Heading as='h2' size='lg' mb = '4' color ='#44337A'>
            Contacts
          </Heading> 
          {isLoading && !error && <Spinner />}
          {contacts.length > 0 &&  <ContactList         
          />}         
        </Wrap>
        <ToastContainer autoClose={2000} />   
        </>
      )   
    }




