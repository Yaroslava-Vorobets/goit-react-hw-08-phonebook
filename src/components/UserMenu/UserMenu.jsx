import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import {Box, Flex, Text, Button} from "@chakra-ui/react"


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  
  const heandleLogOut = ()=> dispatch(logOut())

  return (
     <Box
        w='auto' >
    <Flex flexDir = "column">
       <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='6m'
          fontWeight='extrabold'       
        >Welcome, {user.name}
      </Text>
  
      <Button type="button" onClick={heandleLogOut} colorScheme='blue' variant='ghost'>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='6m'
          fontWeight='extrabold'       
        > Logout
      </Text>      
      </Button>
    </Flex>  
   </Box>  
  );
};
