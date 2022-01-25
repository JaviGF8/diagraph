import { css } from '@emotion/react';

const tabs = (theme) => css`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;

  .tab {
    display: flex;
    flex-wrap: nowrap;
    margin: 0 ${theme.sizes.xs} -1px ${theme.sizes.xs};
    border: 1px solid transparent;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    transition: all 0.5s ease;

    button {
      outline: 0;
      border: 0;
      text-align: center;
      cursor: pointer;
      white-space: nowrap;
      color: ${theme.colors.primary};
      background-color: transparent;
      height: ${theme.sizes.pxToRem(50)};
    }

    button:not(.close-tab) {
      padding: ${theme.sizes.lg};
    }

    button.close-tab {
      padding: ${theme.sizes.lg};
      font-weight: 700;
      font-size: ${theme.sizes.lg};
      border-left: 1px solid ${theme.colors.primaryLight};
    }

    &.selected-tab,
    &:hover {
      background-color: ${theme.colors.primaryDark};
      border-color: ${theme.colors.primaryDark};
      button {
        color: ${theme.colors.white};
      }
    }

    &.new-tab {
      background-color: ${theme.colors.secondary};
      border-color: ${theme.colors.secondary};

      button {
        padding: ${theme.sizes.lg};
        color: ${theme.colors.white};
      }

      button.close-tab {
        display: none;
      }
    }
  }
`;

export default { tabs };
