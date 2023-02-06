import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import {Text} from "@chakra-ui/react"

export default function Login() {
  return (
    <div>
      <Helmet>
         <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='6m'
            fontWeight='extrabold'       
          >Login</Text>       
      </Helmet>
      <LoginForm />
    </div>
  );
}
