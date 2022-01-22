import { css } from '@emotion/react';

const navbar = (theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${theme.sizes.topbarHeight};
  background-color: ${theme.colors.primary};
  ${theme.mixins.flexCenter}

  > div {
    height: ${theme.sizes.topbarHeight};
    width: calc(100% - ${theme.sizes.xl});
    padding: 0 ${theme.sizes.lg};
    max-width: ${theme.screen.xl};
    ${theme.mixins.flexSpace}

    h1 {
      margin: 0;
      padding: ${theme.sizes.md};

      img {
        max-height: ${theme.sizes.pxToRem(50)};
      }
    }
  }
`;

export default { navbar };
