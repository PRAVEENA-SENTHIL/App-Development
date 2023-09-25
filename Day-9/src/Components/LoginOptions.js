import React from 'react';
import { VStack, Box, Button, Stack } from '@chakra-ui/react';
import DoctorNav from './dummy';
function LoginOptions() {
  return (
    
    <div style={{alignContent:'center'}}>
      
      <VStack
        spacing={4}
        align='center' // Center the Stack horizontally
        justify='center' // Center the Stack vertically
        px={['2', '4', '6']} // Responsive padding
        alignContent={'center'}
        marginTop={160}

      >
        <Box
          h={['10px', '200px']} // Responsive height
          bg='burlywood'
          display='flex'
          justifyContent='center'
          alignItems='center'
          m={['50px', '100px']}
          ml={['50px', '100px']}
          w={['20px', '500px']}
          alignSelf={'center'}
          alignContent={'center'}
        >
          <Stack spacing={55} direction={'row'}>
            <Button colorScheme='whatsapp' size='lg'>
              <a href='/signin'>Patient</a>
            </Button>
            <Button colorScheme='whatsapp' size='lg'>
              <a href='/docsignin'>Doctor</a>
            </Button>
            <Button colorScheme='whatsapp' size='lg'>
              <a href='/adminLogin'>Admin</a>
            </Button>
          </Stack>
        </Box>
      </VStack>
    </div>
  );
}

export default LoginOptions;
