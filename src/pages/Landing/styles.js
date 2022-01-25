import { css } from '@emotion/react';

const landing = (theme) => css`
  ${theme.mixins.flexColumn}

  .tab {
    ${theme.mixins.basicShadow}
  }

  .tab-content {
    ${theme.mixins.basicShadow}
    background-color: ${theme.colors.white};
    padding: ${theme.sizes.lg};
    border-top: 0;
  }
`;

export default { landing };
