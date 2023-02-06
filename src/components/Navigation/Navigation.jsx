import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Box,Text } from "@chakra-ui/react"

export const Navigation = () => {
const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box
        w='auto' >
      <NavLink to="/">
         <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='6m'
            fontWeight='extrabold'       
          >Home</Text>
      
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='6m'
            fontWeight='extrabold'       
          >Сontacts</Text>          
        </NavLink>
        )} 
      </Box>  
    </nav>
  );
};
