import { css } from '@emotion/react';

const input = (theme) => css`
  &:not(.checkbox):not(.radio) {
    ${theme.mixins.flexColumn}
    position: relative;
    padding-top: ${theme.sizes.lg};

    > label {
      position: absolute;
      color: ${theme.colors.gray900};
      font-size: ${theme.fonts.md};
      left: ${theme.sizes.md};
      transform: translateY(${theme.sizes.md});
      ${theme.mixins.defaultTransition}
      pointer-events: none;
      z-index: 1;
    }

    &:not(.filled):not(.focused):not(.prefixed) {
      &.hovered {
        > label {
          left: ${theme.sizes.md};
        }
      }
    }
    &.prefixed:not(.filled):not(.focused) {
      > label {
        left: calc(#{${theme.sizes.xl}} - #{${theme.sizes.sm}});
      }
      &.hovered {
        > label {
          left: ${theme.sizes.xl};
        }
      }
    }

    > div {
      ${theme.mixins.defaultTransition}
      width: 100%;
      border: ${theme.sizes.pxToRem(1)} solid ${theme.colors.gray300};
      background-color: ${theme.colors.white};
      position: relative;

      .input-container {
        display: flex;
        align-items: center;
        width: 100%;
        max-height: ${theme.sizes.xl};

        .hidden-input {
          display: none;
        }

        input {
          ${theme.mixins.defaultTransition}
          width: 100%;
          padding: ${theme.sizes.md};
          border: 0;
          outline: none;
          color: ${theme.colors.gray900};
          background-color: transparent;
        }

        .input-prefix,
        .input-suffix {
          ${theme.mixins.flexCenter}
          ${theme.mixins.defaultTransition}
          color: ${theme.colors.gray900};
          width: calc(#{${theme.sizes.xl}} - #{${theme.sizes.md}});
          padding: 0 ${theme.sizes.sm};
          margin-top: -1px;
        }

        .clear-button {
          ${theme.mixins.defaultTransition}
          padding: ${theme.sizes.sm};
          font-size: ${theme.fonts.lg};
          cursor: pointer;

          &:focus {
            color: ${theme.colors.primaryDark};
          }
        }
      }
    }
    &.disabled {
      > div {
        background-color: ${theme.colors.gray300};
        cursor: no-drop;
        > div {
          input {
            cursor: no-drop;
          }
        }
      }
    }
    &:not(.disabled) {
      &.hovered,
      &:hover,
      &:focus,
      &:active {
        > div {
          background-color: ${theme.colors.white};
        }
      }
    }
    &:not(.disabled):not(.error) {
      &.hovered,
      &:hover,
      &:focus,
      &:active {
        > div {
          border-color: ${theme.colors.secondary};
        }
      }
    }
    &.focused,
    &.filled {
      > label {
        font-size: ${theme.fonts.xs};
        left: 0;
        transform: translateY(-${theme.sizes.lg});
      }
    }

    span {
      color: ${theme.colors.error};
      font-size: ${theme.fonts.sm};
      ${theme.mixins.defaultTransition}

      &.hidden {
        font-size: 0;
      }
    }

    &.focused {
      > label {
        font-size: ${theme.fonts.xs};
        color: ${theme.colors.secondary};
      }
      > div {
        border-color: ${theme.colors.secondary};
        > div {
          .input-prefix,
          .input-suffix,
          .clear-button {
            color: ${theme.colors.secondary};
          }
        }
      }
    }

    &.error {
      > label {
        color: ${theme.colors.error};
      }
      > div {
        border-color: ${theme.colors.error};
        > div {
          .input-prefix,
          .input-suffix {
            color: ${theme.colors.error};
          }
        }
      }
    }
  }

  &.checkbox {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row-reverse;

    label {
      margin-left: ${theme.sizes.md};
      color: ${theme.colors.gray800};
    }

    > div {
      height: ${theme.sizes.pxToRem(20)};
      width: ${theme.sizes.pxToRem(20)};
      .input-container {
        display: block;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        height: ${theme.sizes.pxToRem(20)};
        width: ${theme.sizes.pxToRem(20)};

        > input {
          height: ${theme.sizes.pxToRem(20)};
          width: ${theme.sizes.pxToRem(20)};
          opacity: 0;
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 0;

          &:disabled {
            cursor: no-drop;
          }
        }

        .checkmark {
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 0;
          height: ${theme.sizes.pxToRem(20)};
          width: ${theme.sizes.pxToRem(20)};
          border: ${theme.sizes.pxToRem(1)} solid ${theme.colors.gray500};
          pointer-events: none;
          border-radius: ${theme.sizes.sm};
          ${theme.mixins.defaultTransition}

          &:disabled {
            cursor: no-drop;
          }

          &:after {
            ${theme.mixins.defaultTransition}
            content: '';
            position: absolute;
            display: none;
            left: ${theme.sizes.pxToRem(6.5)};
            top: ${theme.sizes.pxToRem(3)};
            width: ${theme.sizes.pxToRem(5)};
            height: ${theme.sizes.pxToRem(10)};
            border: solid ${theme.colors.white};
            border-width: 0 ${theme.sizes.xs} ${theme.sizes.xs} 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        }

        input:checked ~ .checkmark {
          background-color: ${theme.colors.primaryDark};
          &:after {
            display: block;
          }
        }

        input:checked:hover:not([disabled]) ~ .checkmark {
          background-color: ${theme.colors.primaryDark};
        }
        input:checked:focus:not([disabled]) ~ .checkmark {
          outline: max(2px, 1px) solid ${theme.colors.primaryDark};
          outline-offset: max(2px, 1px);
        }

        &:hover input ~ .checkmark,
        input:disabled ~ .checkmark {
          background-color: ${theme.colors.gray300};
        }
        input:focus ~ .checkmark {
          outline: max(2px, 1px) solid ${theme.colors.gray300};
          outline-offset: max(2px, 1px);
        }
        input:disabled ~ .checkmark {
          &:after {
            border-color: ${theme.colors.gray500};
          }
        }
      }
    }
  }

  &.radio {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row-reverse;

    label {
      margin-left: ${theme.sizes.md};
      color: ${theme.colors.gray800};
    }

    > div {
      height: ${theme.sizes.pxToRem(20)};
      width: ${theme.sizes.pxToRem(20)};
      border-radius: 50%;
      .input-container {
        display: block;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        height: ${theme.sizes.pxToRem(20)};
        width: ${theme.sizes.pxToRem(20)};

        > input {
          height: ${theme.sizes.pxToRem(20)};
          width: ${theme.sizes.pxToRem(20)};
          opacity: 0;
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 0;
        }

        .checkmark {
          ${theme.mixins.flexCenter}
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 0;
          height: ${theme.sizes.pxToRem(20)};
          width: ${theme.sizes.pxToRem(20)};
          border: ${theme.sizes.pxToRem(1)} solid ${theme.colors.gray500};
          pointer-events: none;
          border-radius: 50%;
          ${theme.mixins.defaultTransition}

          &:disabled {
            cursor: no-drop;
          }

          &:after {
            ${theme.mixins.defaultTransition}
            content: '';
            position: absolute;
            display: none;
            border: ${theme.sizes.pxToRem(1)} solid ${theme.colors.gray500};
            height: ${theme.sizes.pxToRem(12)};
            width: ${theme.sizes.pxToRem(12)};
            border-radius: 50%;
          }
        }

        input:checked ~ .checkmark {
          background-color: ${theme.colors.white};
          &:after {
            background-color: ${theme.colors.primary};
            display: block;
          }
        }

        input:checked:hover:not([disabled]) ~ .checkmark,
        input:checked:focus:not([disabled]) ~ .checkmark {
          &:after {
            background-color: ${theme.colors.primary};
          }
        }

        &:hover input ~ .checkmark,
        input:focus ~ .checkmark,
        input:disabled ~ .checkmark {
          background-color: ${theme.colors.gray300};
        }
        input:disabled ~ .checkmark {
          &:after {
            border-color: ${theme.colors.gray500};
          }
        }
      }
    }
  }
`;

export default { input };
