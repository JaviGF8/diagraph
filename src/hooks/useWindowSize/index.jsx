import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext({});

const SCREEN_SM = 576;
const SCREEN_MD = 768;
const SCREEN_LG = 992;
const SCREEN_XL = 1200;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    smOrSmaller: false,
    smOrBigger: false,
    mdOrSmaller: false,
    mdOrBigger: false,
    lgOrSmaller: false,
    lgOrBigger: false,
    xlOrSmaller: false,
    xlOrBigger: false,
  });

  const handleResize = () => {
    const setSizes = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        smOrSmaller: window.innerWidth <= SCREEN_SM,
        smOrBigger: window.innerWidth >= SCREEN_SM,
        mdOrSmaller: window.innerWidth <= SCREEN_MD,
        mdOrBigger: window.innerWidth >= SCREEN_MD,
        lgOrSmaller: window.innerWidth <= SCREEN_LG,
        lgOrBigger: window.innerWidth >= SCREEN_LG,
        xlOrSmaller: window.innerWidth <= SCREEN_XL,
        xlOrBigger: window.innerWidth >= SCREEN_XL,
      });
    };
    setSizes();

    setTimeout(() => {
      if (window.innerWidth !== windowSize.width) {
        setSizes();
      }
    }, 200);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
