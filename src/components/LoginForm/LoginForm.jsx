import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Box,
  Text,
  Input,
  Button,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log(logIn);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box mb={4}>
        <Text fontSize={25} color='#805AD5'>Email</Text>
        <Input
          border='2px solid'
          borderColor='#D53F8C'
          type="email"
          name="email"
          placeholder='Email'
          _hover={{ borderColor: '#FED7E2' }}
          _focusVisible={{ borderColor: '#D53F8C' }} // Задайте стиль при фокусі
        />
        <Text>
          Enter the email you'd like to receive the newsletter on.
        </Text>
      </Box>
      <Box mb={4}>
        <Text fontSize={25} color='#805AD5'>Password</Text>
        <Input
          border='2px solid'
          borderColor='#D53F8C'
          type="password"
          name="password"
          placeholder='Password'
          _hover={{ borderColor: '#FED7E2' }}
          _focusVisible={{ borderColor: '#D53F8C' }} // Задайте стиль при фокусі
        />
      </Box>
      <Button mt={6} type="submit" colorScheme='pink'>Log In</Button>
    </form>
  );
};
// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
// import {
//   FormControl,
//   FormLabel, 
//   Input,
//   FormHelperText,
//   Button
// } from '@chakra-ui/react'

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
//     console.log(logIn)
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//        <FormControl>
//         <FormLabel fontSize={25} color='#805AD5'>Email</FormLabel>
//         <Input border= '2px solid' borderColor = '#D53F8C' type="email" name="email" placeholder='Email'  _hover={{ borderColor: '#FED7E2' }}  _focusVisible = 'none'
       
//    />      
//       <FormHelperText>
//         Enter the email you'd like to receive the newsletter on.
//       </FormHelperText>    
//       </FormControl>  
//        <FormControl >
//         <FormLabel fontSize={25} color='#805AD5'> Password</FormLabel>
//         <Input  border= '2px solid' borderColor = '#D53F8C' type="password" name="password" placeholder=' Password'  _hover={{ borderColor: '#FED7E2' }} _focusVisible = 'none'/>
//       </FormControl> 
//       <Button  mt = {6} type="submit" colorScheme='pink'>Log In</Button>
//     </form>
//   );
// };
