import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';


import {
  FormControl,
  FormLabel, 
  Input,
  FormHelperText,
  Button
} from '@chakra-ui/react'


export const RegisterForm = () => {
  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,        
        email: form.elements.email.value,
        password: form.elements.password.value,        
      })
      
    );
  
    form.reset();
  };

  return (

    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl>
        <FormLabel fontSize={25} color='#805AD5'>Username</FormLabel>
        <Input border= '2px solid' borderColor = '#D53F8C'  mb={4} type="text" name="name" placeholder='Username'  _focusVisible={"none"} />      
      </FormControl> 
       <FormControl>
        <FormLabel fontSize={25} color='#805AD5'>Email</FormLabel>
        <Input border= '2px solid' borderColor = '#D53F8C' type="email" name="email" placeholder='Email'  _hover={{ borderColor: '#FED7E2' }}  _focusVisible={"none"} />      
      <FormHelperText>
        Enter the email you'd like to receive the newsletter on.
      </FormHelperText>    
      </FormControl>   
      <FormControl >
        <FormLabel fontSize={25} color='#805AD5'> Password</FormLabel>
        <Input  border= '2px solid' borderColor = '#D53F8C' type="password" name="password" placeholder='Password must consist of seven characters'  _hover={{ borderColor: '#FED7E2' }}  _focusVisible={"none"}/>
      </FormControl>  
      <Button  mt = {6} type="submit" colorScheme='pink'>Register</Button>
    </form>
  );
};


