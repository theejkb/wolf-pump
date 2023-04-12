import NextLink from 'next/link';
import {Box} from '@chakra-ui/react';
import React from "react";
import Image from 'next/image'


export const Logo = () => {

  return (
    <NextLink href="/">
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        position="relative"
        userSelect="none"
      >
        <Image alt='logo' src='/logo.png' width={100} height={100}></Image>

      </Box>
    </NextLink>
  );
};
