import NextLink from 'next/link';
import {Box, Link} from '@chakra-ui/react';
import React, {FC} from 'react';
import {LoginModalButton} from './core/LoginModalButton';
import {FaBoxOpen} from "react-icons/fa";
import {GiUpgrade} from "react-icons/gi";

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = ({ enabled }) => {
  return (
    <Box
      display="flex"
      gap={5}
      alignItems="center"
      sx={{
        '@media screen and (max-width: 515px)': {
          flexDirection: 'column',
        },
      }}
    >
      {enabled.includes('about') && (
        <Link
          fontFamily='Gobold'
          color="elvenTools.white"
          mr={2}
          as={NextLink}
          _focus={{ outline: 'none' }}
          href="/about"
        >
          About
        </Link>
      )}

      {enabled.includes('evolve') && (
        <Box
          fontFamily='Gobold'
          borderColor="elvenTools.mvx"
          borderWidth={2}
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap='10px'
          bgColor="transparent"
          py={2}
          px={6}
          rounded="xl"
          color="elvenTools.white"
          userSelect="none"
          opacity={0.5}
          cursor='not-allowed'
          transition=".25s ease"
        >
          <GiUpgrade/> Evolve
        </Box>
      )}

      {enabled.includes('evolve') && (
        <Box
          borderColor="elvenTools.mvx"
          borderWidth={2}
          fontFamily='Gobold'
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap='10px'
          bgColor="transparent"
          py={2}
          px={6}
          rounded="xl"
          color="elvenTools.white"
          userSelect="none"
          opacity={0.5}
          cursor='not-allowed'
          transition=".25s ease"
        >
          <FaBoxOpen/> Reveal
        </Box>
      )}

      {enabled.includes('mint') && (
        <Link
          as={NextLink}
          href="/mint"
          borderColor="elvenTools.mvx"
          borderWidth={2}
          bgColor="transparent"
          py={2}
          px={6}
          rounded="xl"
          fontFamily='Quicksand'
          fontWeight="bold"
          cursor="pointer"
          color="elvenTools.white"
          userSelect="none"
          _hover={{ bg: 'elvenTools.mvx', color: 'black' }}
          transition=".25s ease"
        >
          Mint
        </Link>
      )}
      {enabled.includes('auth') && <LoginModalButton />}
    </Box>
  );
};
