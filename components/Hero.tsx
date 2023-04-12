import {Box, Text} from '@chakra-ui/react';
import {useEffect, useState} from "react";

export const Hero = () => {
  const WOOF_LOCALSTORAGE_KEY = 'WoofTime';
  const isBrowser = () => typeof window !== 'undefined';

  const [cpt, setCpt] = useState<number>(0);
  const [isWoofed, setIsWoofed] = useState(false);


  const addWoof = () => {
    setIsWoofed(true);
    if (isBrowser()) {
      const woofNumbers: string | null = localStorage.getItem(WOOF_LOCALSTORAGE_KEY);
      if (woofNumbers) {
        setCpt(parseInt(woofNumbers, 10) + 1)
      }
    } else {
      if (cpt) {
        setCpt(cpt + 1)
      }
    }
    localStorage.setItem(WOOF_LOCALSTORAGE_KEY, cpt + '');
  }




  // Utilisation de useEffect pour sauvegarder la valeur dans le local storage
// à chaque fois que la valeur de "cpt" change
  useEffect(() => {
    if (isWoofed) {
      localStorage.setItem(WOOF_LOCALSTORAGE_KEY, cpt + '');
    }
    if (isBrowser()) {
      setCpt(parseInt(localStorage.getItem(WOOF_LOCALSTORAGE_KEY)!, 10));
    }
  }, [cpt, isWoofed]);

  return (
    <Box className='hero-container'>
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
        <Text
          as="h2"
          fontSize={{base: '30px', lg: '3vw'}}
          textAlign={'center'}
          lineHeight="shorter"
          mb={20}
          color={'elvenTools.mvx'}
        >
          Coming soon
        </Text>
      <Text className='woof-time'>Woofed {cpt} times</Text>
      <a onClick={addWoof} className='btn-primary'><Box className='icon-wolf green'></Box>WOOF</a>
    </Box>
  );
};
