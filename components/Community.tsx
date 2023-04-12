import {Box} from '@chakra-ui/react';
import {HomeSectionTitle} from './HomeSectionTitle';
import {BsArrowUpRight} from "react-icons/bs";
import React from "react";

export const Community = () => {

  return (
    <Box pt={32} className='join-pack'>
      <HomeSectionTitle title="Join the Pack" />
      <Box className='socials' data-aos='fade-up' data-aos-delay='1000'>
        <a className='btn-social'>Twitter<BsArrowUpRight/></a>
        <a className='btn-social'>Discord<BsArrowUpRight/></a>
      </Box>
    </Box>
  );
};
