import {Box, Text} from '@chakra-ui/react';
import {useEffect, useState} from "react";

export const Hero = () => {
  const WOOFTIME = 'woof';
  const isBrowser = () => typeof window !== 'undefined';

  const [cpt, setCpt] = useState(0);
  const [isWoofed, setIsWoofed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);


  const addWoof = () => {
    setIsWoofed(true);
    const woofNumbers: string | null = localStorage.getItem(WOOFTIME);
    if (!isDisabled) {
      if (woofNumbers) {
        setCpt(parseInt(woofNumbers, 10) + 1)
      } else {
        setCpt(cpt + 1)
      }
      localStorage.setItem(WOOFTIME, cpt.toString());
      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false);
      }, 10000);
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
      localStorage.setItem(WOOFTIME, cpt + '');
    }
    if (isBrowser()) {
      const woofTime = localStorage.getItem(WOOFTIME)

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
      <Text as="a" href="https://kyberswap.com/partner-swap?chainId=43114&inputCurrency=0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7&outputCurrency=0x4f94b8aef08c92fefe416af073f1df1e284438ec&clientId=dexscreener&feeReceiver=0x0DA2a82ED2c387d1751ccbAf999A80b65bdb269E&enableTip=true&feeAmount=30&chargeFeeBy=currency_in">Buy now</Text>
      </Text>
      <Box className='wolf-box'>
      <Text className="btn-buy"></Text>
        <Text
          as="h1"
          fontSize={{base: '100px', lg: '13vw'}}
          textAlign={'center'}
          lineHeight="shorter"
          mb={5}
          className='title-primary'
          color={'elvenTools.mvx'}
        >
          Wolf
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
            on
          </Text>
          <Text
            as="h1"
            fontSize={{base: '50px', lg: '6vw'}}
            textAlign={'center'}
            lineHeight="shorter"
            mb={5}
            color={'elvenTools.mvx'}
          >
            Avax
          </Text>
          <Text
            as="h4"
            fontSize={{base: '50px', lg: '6vw'}}
            textAlign={'center'}
            lineHeight="shorter"
            mb={5}
            color={'elvenTools.mvx'}
          >
            Woof to pump the <a href="https://dexscreener.com/avalanche/0x08db8eafeea89476bfc51b07613f430748ff350a">$WOLF</a>
          </Text>
        </Box>
      </Box>
      {showWoofTimes()}
      <a onClick={addWoof} className={'btn-primary ' + btnDisabledClass()}><Box
        className='icon-wolf green'></Box>WOOF</a>
    </Box>
  );
};
