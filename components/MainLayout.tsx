import { Container, Box } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { MetaHead, MetaHeadProps } from './MetaHead';
import { Footer } from './Footer';

export const MainLayout: FC<PropsWithChildren<MetaHeadProps>> = ({
  children,
  metaTitle,
  metaDescription,
  metaImage,
  metaUrl,
}) => {
  return (
    <>
      <MetaHead
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        metaImage={metaImage}
        metaUrl={metaUrl}
      />
      <Box minHeight="calc(100vh - 120px)">
        <Container width='100%' maxW='100%' margin={0} padding={0}>
          <Box>{children}</Box>
        </Container>
      </Box>
    </>
  );
};
