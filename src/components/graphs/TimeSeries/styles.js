import { css } from '@emotion/react';

const timeseries = (theme) => css`
  position: relative;
  ${theme.mixins.flexCenter}

  .rv-hint {
    background-color: ${theme.colors.secondary}99;
    color: ${theme.colors.white};
    padding: ${theme.sizes.md};
  }
`;

export default { timeseries };
