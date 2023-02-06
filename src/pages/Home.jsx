import {Text,Box} from '@chakra-ui/react'

export default function Home() {
  return (
    <Box
        w='100%'
        h='700px'
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
      ]}
       display="flex" alignItems="center" justifyContent="center"
      >
     <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'       
      >
        Welcome to the PhoneBook
      </Text>
     
    </Box>
  );
}
