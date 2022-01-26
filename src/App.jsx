import { css, useTheme } from '@emotion/react';
import React from 'react';

import Navbar from 'components/Navbar';

import LandingPage from 'pages/Landing';

const appStyle = (theme) => css`
  width: 100%;
  min-height: calc(100vh - ${theme.sizes.topbarHeight});
  background: ${theme.colors.gray100};
  padding-top: ${theme.sizes.topbarHeight};

  @media screen and (max-width: ${theme.screen.sm}) {
    padding-top: ${theme.sizes.topbarHeightMobile};
  }

  .body {
    padding: ${theme.sizes.xl};
  }
`;

/**
 * In a normal project, here we should have the router
 */
const App = () => {
  const theme = useTheme();

  return (
    <div css={appStyle(theme)}>
      <div className="body">
        <LandingPage />
      </div>
      <Navbar />
    </div>
  );
};

export default App;
