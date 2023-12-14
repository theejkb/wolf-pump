import { Container, Box, Text, Stack } from '@chakra-ui/react';
import packageJson from '../package.json';

export const Footer = () => {
  return (
    <Box
      height="120px"
      bgColor="elvenTools.dark.darker"
      color="elvenTools.white"
      display="flex"
      alignItems="center"
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box>Landwolf Community Website (v{`${packageJson.version}`})</Box>
        <Box fontSize="xs" fontWeight="hairline">
          All for free. Please support the project. Give it credit and tell the
          world about it. Attribution is not required but welcomed in the form
          of a backlink.
        </Box>
        <Stack
          fontSize="xs"
          fontWeight="bold"
          direction="row"
          justifyContent="center"
        >
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.landwolfavax.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Land Wolf 🐺
          </Text>
          <Text fontWeight="hairline"> | </Text>
        
          <Text fontWeight="hairline"> | </Text>
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://github.com/theejkb/wolf-pump"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'Contribute'}
          </Text>
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://snowtrace.io/address/0x14BFca92B3E4aAA873652bdc41c3b1484c93C56d"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'Donation'}
          </Text>
          <Text fontWeight="hairline"> | </Text>
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.landwolfavax.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {'Avax SZN Begins'}
          </Text>
          <Text fontWeight="hairline"> | </Text>
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://twitter.com/stevennaaq"
            target="_blank"
            rel="noopener noreferrer"
          >
            stevennaaq
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
