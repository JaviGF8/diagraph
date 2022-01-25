import { css } from '@emotion/react';

const modal = (theme) => css`
  ${theme.mixins.flexCenter}
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1010;
  background-color: ${theme.colors.gray900}66;

  .modal-dialog {
    ${theme.mixins.flexColumn}
    ${theme.mixins.basicShadow}
    pointer-events: all;
    max-height: 94vh;
    max-width: ${theme.sizes.pxToRem(1000)};
    min-width: ${theme.sizes.pxToRem(250)};
    height: fit-content;
    z-index: 1011;
    background-color: ${theme.colors.white};

    .modal-header {
      ${theme.mixins.flexSpace}
      border: 0;
      padding: ${theme.sizes.md} ${theme.sizes.lg};
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};

      h4 {
        margin: 0;
      }

      button {
        padding: 0;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.xl};
      }
    }

    .modal-body {
      padding: ${theme.sizes.md} ${theme.sizes.lg};
      // overflow: auto;
    }

    .modal-footer {
      display: flex;
      justify-content: flex-start;
      border: 0;
      padding: ${theme.sizes.md} ${theme.sizes.lg};

      > * {
        &:not(:last-child) {
          margin-right: ${theme.sizes.md};
        }
      }
    }
  }
`;

export default { modal };
