import {Box, Text} from '@chakra-ui/react';
import {useEffect, useState} from "react";

export const Hero = () => {
  const WOOF_LOCALSTORAGE_KEY = 'WoofTime';
  const isBrowser = () => typeof window !== 'undefined';

  const [cpt, setCpt] = useState(0);
  const [isWoofed, setIsWoofed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);


  const addWoof = () => {
    setIsWoofed(true);
    const woofNumbers: string | null = localStorage.getItem(WOOF_LOCALSTORAGE_KEY);
    if (!isDisabled) {
      if (woofNumbers) {
        setCpt(parseInt(woofNumbers, 10) + 1)
      } else {
        setCpt(cpt + 1)
      }
      localStorage.setItem(WOOF_LOCALSTORAGE_KEY, cpt.toString());
      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false);
      }, 600);
    }
  }

  function showWoofTimes() {
    return (
      <Box className='woof-time' title={'You have Woofed ' + cpt + ' times! Woooooooof !'}><Box
        className='icon-wolf black'></Box>{cpt} WOOF</Box>
    )
  }

  function btnDisabledClass() {
    return isDisabled ? 'disabled' : '';
  }


  // Utilisation de useEffect pour sauvegarder la valeur dans le local storage
// à chaque fois que la valeur de "cpt" change
  useEffect(() => {
    if (isWoofed) {
      localStorage.setItem(WOOF_LOCALSTORAGE_KEY, cpt + '');
    }
    if (isBrowser()) {
      const woofTime = localStorage.getItem(WOOF_LOCALSTORAGE_KEY)
      if (woofTime) {
        setCpt(parseInt(woofTime, 10));
      } else {
        setCpt(cpt);
      }
    }
  }, [cpt, isWoofed]);

  return (
    <Box className='hero-container'>
      <Text
        as="h2"
        fontSize={{base: '30px', lg: '3vw'}}
        textAlign={'center'}
        lineHeight="shorter"
        color={'elvenTools.mvx'}
      >
        Coming soon
      </Text>
      <Box>
        <Text
          as="h1"
          fontSize={{base: '100px', lg: '13vw'}}
          textAlign={'center'}
          lineHeight="shorter"
          mb={5}
          className='title-primary'
          color={'elvenTools.mvx'}
        >
          Doggos
        </Text>
        <Box className='subtitle'>
          <Text
            as="h1"
            fontSize={{base: '50px', lg: '6vw'}}
            textAlign={'center'}
            lineHeight="shorter"
            mb={5}
            color={'elvenTools.mvx'}
          >
            of
          </Text>
          <Text
            as="h1"
            fontSize={{base: '50px', lg: '6vw'}}
            textAlign={'center'}
            lineHeight="shorter"
            mb={5}
            color={'elvenTools.mvx'}
          >
            MultiversX
          </Text>
        </Box>
      </Box>
      {showWoofTimes()}
      <a onClick={addWoof} className={'btn-primary ' + btnDisabledClass()}><Box
        className='icon-wolf green'></Box>WOOF</a>
    </Box>
  );
};
