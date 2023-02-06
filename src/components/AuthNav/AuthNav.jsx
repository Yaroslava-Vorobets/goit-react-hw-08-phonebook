import { NavLink } from 'react-router-dom';
import {Box, Flex, Text} from "@chakra-ui/react"

export const AuthNav = () => {
  return (
      <Box
        w='20%' >
        <Flex align="center"  justifyContent="space-between">
          <NavLink to="/register">
             <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='6m'
                fontWeight='extrabold'       
              > Register</Text>
           
          </NavLink>
          <NavLink to="/login">
             <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='6m'
                fontWeight='extrabold'       
              > Log In</Text>          
          </NavLink>
        </Flex>          
    </Box>
  );
};