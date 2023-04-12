import {Box, SimpleGrid} from '@chakra-ui/react';
import {RoadmapItem} from './RoadmapItem';
import {roadmap} from '../config/dappUi';
import {HomeSectionTitle} from './HomeSectionTitle';
import Link from "next/link";
import React from "react";

export const Roadmap = () => {
  if (!Array.isArray(roadmap)) return null;

  return (
    <Box className='woof-map' id='woof-map' pt={32}>
      <HomeSectionTitle title="Woof Map"/>
      <Box className='woofmap-img'>
        <img src='/woofmap.png' alt='Doggos Roadmap'/>
      </Box>
      <Link href='#about-the-pack' className='btn-primary white'><Box className='icon-wolf white'></Box>WOOOOF</Link>
    </Box>
  );
};
