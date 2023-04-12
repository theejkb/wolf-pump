import {Box, Text} from '@chakra-ui/react';
import Link from 'next/link';
import React from "react";


export const Hero = () => {
  return (
    <Box className='hero-container'>
      <Text
        as="h1"
        fontSize={{base: '100px', lg: '13vw'}}
        textAlign={'center'}
        lineHeight="shorter"
        mb={5}
        className='title-primary'
        color={'elvenTools.mvx'}
      >
        Doggos
      </Text>
      <Box className='subtitle'>
        <Text
          as="h1"
          fontSize={{base: '50px', lg: '6vw'}}
          textAlign={'center'}
          lineHeight="shorter"
          mb={5}
          color={'elvenTools.mvx'}
        >
          of
        </Text>
        <Text
          as="h1"
          fontSize={{base: '50px', lg: '6vw'}}
          textAlign={'center'}
          lineHeight="shorter"
          mb={5}
          color={'elvenTools.mvx'}
        >
          MultiversX
        </Text>
      </Box>
      <Link href='#about-the-pack' className='btn-primary'><Box className='icon-wolf green'></Box>WOOF</Link>
    </Box>
  );
};
