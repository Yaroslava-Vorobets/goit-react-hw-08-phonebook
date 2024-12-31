// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
// import {
//   Box,
//   Text,
//   Input,
//   FormHelperText,
//   Button,
// } from '@chakra-ui/react';

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     console.log(logIn);
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <Box mb={4}>
//         <Text fontSize={25} color='#805AD5'>Email</Text>
//         <Input
//           border='2px solid'
//           borderColor='#D53F8C'
//           type="email"
//           name="email"
//           placeholder='Email'
//           _hover={{ borderColor: '#FED7E2' }}
//           _focusVisible={{ borderColor: '#D53F8C' }} // Задайте стиль при фокусі
//         />
//         <FormHelperText>
//           Enter the email you'd like to receive the newsletter on.
//         </FormHelperText>
//       </Box>
//       <Box mb={4}>
//         <Text fontSize={25} color='#805AD5'>Password</Text>
//         <Input
//           border='2px solid'
//           borderColor='#D53F8C'
//           type="password"
//           name="password"
//           placeholder='Password'
//           _hover={{ borderColor: '#FED7E2' }}
//           _focusVisible={{ borderColor: '#D53F8C' }} // Задайте стиль при фокусі
//         />
//       </Box>
//       <Button mt={6} type="submit" colorScheme='pink'>Log In</Button>
//     </form>
//   );
// };

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';


import {
  Box, 
  Text, 
  Input, 
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
      <Box mb={4}>    
        <Text fontSize={25} color='#805AD5'>Username</Text>
        <Input
          border='2px solid'
          borderColor='#D53F8C'
          mb={4}
          type="text"
          name="name"
          placeholder='Username'
          _focusVisible={{ borderColor: '#D53F8C' }} />       
        <Text fontSize={25} color='#805AD5'>Email</Text>
        <Input
          border='2px solid'
          borderColor='#D53F8C'
          type="email" name="email"
          placeholder='Email'
          _hover={{ borderColor: '#FED7E2' }}
          _focusVisible={{ borderColor: '#D53F8C' }} />      
      <Text>
        Enter the email you'd like to receive the newsletter on.
      </Text>     
    </Box>
    <Box>
      <Text fontSize={25} color='#805AD5'> Password</Text>
      <Input
        border='2px solid'
        borderColor='#D53F8C'
        type="password"
        name="password"
        placeholder='Password must consist of seven characters'
        _hover={{ borderColor: '#FED7E2' }}
        _focusVisible={{ borderColor: '#D53F8C' }} />
      
      <Button mt={6} type="submit" colorScheme='pink'>Register</Button>
    </Box>
    </form>
  );
};


