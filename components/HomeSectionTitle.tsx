import { Text, Box } from '@chakra-ui/react';
import { FC } from 'react';

interface HomeSectionTitleProps {
  title: string;
}

export const HomeSectionTitle: FC<HomeSectionTitleProps> = ({ title }) => {
  return (
    <Box
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out">
    <Text
      as="h2"
      fontSize={{ base: '5xl', lg: '7xl' }}
      fontWeight="black"
      mb={16}
      textAlign="center"
    >
      {title}{' '}
    </Text>
    </Box>
  );
};
