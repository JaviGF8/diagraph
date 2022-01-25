import { css } from '@emotion/react';

const button = (theme) => css`
  ${theme.mixins.flexCenter}
  ${theme.mixins.defaultTransition}
  flex-wrap: nowrap;
  padding: ${theme.sizes.md} ${theme.sizes.lg};
  border: none;
  text-decoration: none;

  .button-prefix {
    margin-right: ${theme.sizes.md};
  }
  .button-suffix {
    margin-left: ${theme.sizes.md};
  }

  .button-text {
    width: max-content;
  }

  &:hover,
  &:focus {
    outline: none;
  }

  &.transparent {
    background-color: transparent;
    color: ${theme.colors.gray700};
  }

  &.primary {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};

    &:not(.disabled) {
      &:hover,
      &:focus {
        background-color: ${theme.colors.secondary};
        border-color: ${theme.colors.secondary};
        color: ${theme.colors.white};
      }
    }
  }

  &.secondary {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    &:hover,
    &:focus {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primaryLight};
      border-color: ${theme.colors.primaryLight};
    }
  }

  &.disabled,
  &.disabled:hover,
  &.disabled:focus {
    background-color: ${theme.colors.gray300};
    color: ${theme.colors.gray500};
    cursor: no-drop;
    border-color: ${theme.colors.gray300};
  }
`;

export default { button };
