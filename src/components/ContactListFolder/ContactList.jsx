import {useSelector}from 'react-redux';
import ContactElement from '../ContactElementFolder/ContactElement'
import { List } from './List.Styled';
import { selectVisibleContacts} from 'redux/contacts/selectors';


export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);  

  return (
     <List>
        {visibleContacts.map(({ id, name, number }) =>      
                <ContactElement key={id}                         
                      name={name}
                      id={id}
                      number={number} /> 
        )}                 
    </List>
  )
  
}
  


          