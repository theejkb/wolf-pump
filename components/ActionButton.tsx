// The component for triggering functions. For in-app navigation use Next Link component

import { Box, BoxProps } from '@chakra-ui/react';
import { FC, PropsWithChildren, useCallback } from 'react';

interface ActionButtonProps extends BoxProps {
  onClick: () => void;
  isFullWidth?: boolean;
  disabled?: boolean;
}

export const ActionButton: FC<PropsWithChildren<ActionButtonProps>> = ({
  children,
  onClick,
  isFullWidth = false,
  disabled = false,
  ...props
}) => {
  const handleClick = useCallback(() => {
    if (!disabled) {
      onClick();
    }
  }, [disabled, onClick]);

  return (
    <Box
      as="button"
      borderColor="elvenTools.mvx"
      borderWidth={2}
      bgColor="transparent"
      display='flex'
      alignItems='center'
      justifyContent='center'
      gap='10px'
      py={2}
      px={6}
      rounded="xl"
      fontFamily='Quicksand'
      fontWeight="bold"
      cursor={disabled ? 'not-allowed' : 'pointer'}
      color="elvenTools.white"
      userSelect="none"
      _hover={!disabled ? { bg: 'elvenTools.mvx', color: 'black' } : {}}
      transition=".25s"
      width={isFullWidth ? '100%' : 'auto'}
      onClick={handleClick}
      opacity={!disabled ? 1 : 0.5}
      {...props}
    >
      {children}
    </Box>
  );
};
