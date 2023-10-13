// import {Text} from '@chakra-ui/react'

import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
        <Helmet>
         {/* <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'       
          >
          Registration
          </Text> */}
      
        <title>Registration</title>
     </Helmet>
      <RegisterForm />
    </div>
  );
}
