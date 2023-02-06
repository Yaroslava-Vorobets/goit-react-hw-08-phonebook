import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Box, Container, Flex, Divider } from '@chakra-ui/react'

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="header" >
      <Container maxW="container.lg" p= {6}>
        <Flex  align="center" justify="space-between">
          <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}  
        </Flex>
       < Divider/>
      </Container>
    </Box>
  );
};
