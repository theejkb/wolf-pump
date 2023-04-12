import { FC, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';
import { Logo } from './Logo';

export const HeaderMenu: FC<PropsWithChildren<PropsWithChildren>> = ({
  children,
}) => {
  return (
    <Box
      className='header-menu'
      display="flex"
      alignItems="center"
      zIndex={5}
      justifyContent="space-between"
      flexWrap="wrap"
      position='fixed'
      width='100%'
      padding={{base: '0 50px', xl: '0 5%'}}
      gap="2"
    >
      <Logo />
      {children}
    </Box>
  );
};
