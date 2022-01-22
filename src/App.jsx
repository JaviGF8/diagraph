import { css, useTheme } from '@emotion/react';
import React from 'react';

import Navbar from 'components/Navbar';

const appStyle = (theme) => css`
  width: 100%;
  min-height: calc(100vh - ${theme.sizes.topbarHeight});
  background: ${theme.colors.gray100};
  padding-top: ${theme.sizes.topbarHeight};

  .body {
    padding: ${theme.sizes.xl};
  }
`;

const App = () => {
  const theme = useTheme();
  return (
    <div css={appStyle(theme)}>
      <Navbar />
      <div className="body">BODY</div>
    </div>
  );
};

export default App;
