import { css } from '@emotion/react';

const kpiBox = (theme) => css`
  ${theme.mixins.basicShadow}
  ${theme.mixins.flexSpace}
  padding: ${theme.sizes.md} ${theme.sizes.lg};

  .kpi-text {
    margin-right: ${theme.sizes.lg};
    font-size: ${theme.fonts.md};
    text-transform: uppercase;
    color: ${theme.colors.gray500};
  }

  .kpi-value {
    margin-left: ${theme.sizes.lg};
    font-size: ${theme.fonts.subtitle};
    color: ${theme.colors.primary};
    font-weight: 600;
  }
`;

export default { kpiBox };
