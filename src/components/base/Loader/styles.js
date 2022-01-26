import { css } from '@emotion/react';

const loader = (theme) => css`
  ${theme.mixins.flexColumnCenter}

  svg {
    color: ${theme.colors.primary};
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
    height: ${theme.sizes.xxl};
    width: ${theme.sizes.xxl};
    margin-bottom: ${theme.sizes.lg};
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    25% {
      color: ${theme.colors.secondary};
    }
    50% {
      color: ${theme.colors.accentYellow};
    }
    75% {
      color: ${theme.colors.accentOrange};
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default { loader };
