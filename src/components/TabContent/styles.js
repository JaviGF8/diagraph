import { css } from '@emotion/react';

const metrics = (theme) => css`
  width: 100%;

  h3 {
    color: ${theme.colors.primary};
    margin: 0;
    padding: ${theme.sizes.md} 0;
    text-align: center;
  }

  .tab-graphics {
    display: flex;

    > * {
      flex: 0 50%;
    }

    @media screen and (max-width: ${theme.screen.lg}) {
      ${theme.mixins.flexColumn}

      > * {
        flex: 0 100%;
        margin: ${theme.sizes.md} 0;
      }
    }
  }

  .tab-kpi {
    ${theme.mixins.flexCenter}

    > * {
      margin: 0 ${theme.sizes.lg};
    }

    @media screen and (max-width: ${theme.screen.md}) {
      ${theme.mixins.flexColumn}

      > * {
        flex: 0 100%;
        width: calc(100% - ${theme.sizes.xxl});
        margin: ${theme.sizes.md} 0;
      }
    }
  }

  .error {
    font-size: ${theme.fonts.xl};
    color: ${theme.colors.error};
  }
`;

export default { metrics };
