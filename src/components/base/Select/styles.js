import { css } from '@emotion/react';

const select = (theme) => css`
  display: flex;
  position: relative;

  > .custom-input {
    width: 100%;
    z-index: 2;

    svg {
      ${theme.mixins.defaultTransition}

      &.expanded {
        transform: rotate(180deg);
      }
    }
  }

  .select-options {
    z-index: 3;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    background-color: ${theme.colors.white};
    max-height: ${theme.sizes.pxToRem(200)};
    ${theme.mixins.defaultTransition}
    overflow: auto;

    > * {
      ${theme.mixins.defaultTransition}
      ${theme.mixins.flexStart}
      height: 0;
      padding: 0 ${theme.sizes.lg};
      overflow: hidden;
      width: 100%;
      border-radius: 0;
      white-space: nowrap;
      font-size: ${theme.fonts.md};

      &.selected {
        background-color: ${theme.colors.primary}33;
      }
    }

    &.expanded {
      ${theme.mixins.basicShadow}

      > * {
        height: ${theme.sizes.xl};

        &:hover,
        &.focused {
          background-color: ${theme.colors.gray300};
          &.selected {
            background-color: ${theme.colors.primary}66;
          }
        }
      }
    }
  }

  &.open-top {
    .select-options {
      top: unset;
      bottom: ${theme.sizes.xl};
    }
  }

  &.disabled {
    > .custom-input {
      > div {
        background-color: ${theme.colors.gray300};
      }
    }
  }
`;

export default { select };
