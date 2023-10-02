import { Heading, VStack } from 'native-base';
import React from 'react';


const SingIn: React.FC = () => {
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
        <Heading color="gray.100"  fontFamily="heading" fontWeight="400">
            Acessar Conta
        </Heading>
    </VStack>
  );
}

export default SingIn;