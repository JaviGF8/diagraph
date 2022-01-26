import { css } from '@emotion/react';

const navbar = (theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${theme.sizes.topbarHeight};
  background-color: ${theme.colors.white};
  ${theme.mixins.flexCenter}
  ${theme.mixins.basicShadow}

  @media screen and (max-width: ${theme.screen.sm}) {
    height: ${theme.sizes.topbarHeightMobile};
  }

  > div {
    height: ${theme.sizes.topbarHeight};
    width: calc(100% - ${theme.sizes.xl});
    padding: 0 ${theme.sizes.lg};
    ${theme.mixins.flexSpace}

    h1 {
      margin: 0;
      padding: ${theme.sizes.md};

      img {
        max-height: ${theme.sizes.pxToRem(50)};
      }
    }

    @media screen and (max-width: ${theme.screen.sm}) {
      ${theme.mixins.flexColumn};
      justify-content: center;
      height: ${theme.sizes.topbarHeightMobile};

      h1 {
        padding: 0;
      }
    }
  }
`;

export default { navbar };
