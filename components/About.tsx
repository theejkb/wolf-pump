import {Box, Heading, Highlight, Stack} from '@chakra-ui/react';
import {HomeSectionTitle} from "./HomeSectionTitle";
import React from "react";
import Link from "next/link";

export const About = () => {
  const query: string | string[] = ['adventures and challenges', 'their loyalty and intelligence', 'their skill and agility', 'proud of their heritage and history']
  return (
    <Box id='about-the-pack' pb={36} pt={36}>
      <HomeSectionTitle title="Discover their story"/>
      <Box className='stack' position='relative' padding='0 25px'>
        <Stack spacing={8} direction={{base: 'column', xl: 'row'}}>
          <Box data-aos-duration="1000" data-aos='fade-in' data-aos-delay="300">
            <Box className='item' p={5} shadow='md'
                 borderWidth='1px' borderRadius={4}>
              <Heading mb={4} fontSize='xl'>Guardians of the Blockchain Wildlands</Heading>
              <Highlight query={query}>The
                Doggos of MultiversX pack is more than just a group of wolfdogs. They are the guardians of the wild
                lands
                of the blockchain, traveling the different universes in search of adventures and challenges to
                overcome.</Highlight>
            </Box>
          </Box>
          <Box data-aos-duration="1000" data-aos='fade-in' data-aos-delay="600">
            <Box className='item' p={5} shadow='md'
                 borderWidth='1px' borderRadius={4}>
              <Heading mb={4} fontSize='xl'>A story of trust and solidarity</Heading>
              <Highlight query={query}>Their
                history goes back centuries, when humans had to deal with an ever-changing world. Wolfdogs were once
                feared and avoided, but some have come to be appreciated for their loyalty and intelligence. Over time,
                a
                relationship of trust was established between these animals and humans, who began to raise and train
                them
                to help them with their various tasks.</Highlight>
              <br/>
              <br/>
              <Highlight query={query}>Today,
                the Doggos of MultiversX have retained their strength and intelligence, while gaining a keen sense of
                camaraderie and togetherness. They meet regularly for hunts across the different universes, where they
                must demonstrate their skill and agility to achieve their goal.</Highlight>
            </Box>
          </Box>
          <Box data-aos-duration="1000" data-aos='fade-in' data-aos-delay="900">
            <Box className='item' p={5} shadow='md'
                 borderWidth='1px' borderRadius={4}>
              <Heading mb={4} fontSize='xl'>A community united around strong values</Heading>
              <Highlight query={query}>Beyond
                their role as guardians, the Doggos of MultiversX are also a united community, which shares values
                such
                as loyalty, brotherhood and courage. They are proud of their heritage and history, and continue to fight
                to protect blockchain wildlands, while offering help and support to other communities in
                need.</Highlight>
            </Box>
          </Box>
        </Stack>

      </Box>
      <Link href='#woof-map' className='btn-primary white'><Box className='icon-wolf white'></Box>WOOOF</Link>
      <Box className='background-moving'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Box>
    </Box>
  );
};
