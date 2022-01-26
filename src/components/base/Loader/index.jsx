import { useTheme } from '@emotion/react';
import React from 'react';
import { Loader } from 'react-feather';

import styles from './styles';

const LoaderComp = () => {
  const theme = useTheme();
  return (
    <div css={styles.loader(theme)}>
      <Loader />
      LOADING...
    </div>
  );
};

export default LoaderComp;
