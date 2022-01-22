import { css } from '@emotion/react';

const datepicker = (theme) => css`
  .react-datepicker-wrapper {
    .react-datepicker__input-container {
      input {
        outline: none;
        height: ${theme.sizes.xl};
      }
    }
  }

  .react-datepicker {
    border-radius: 0;

    .react-datepicker__header {
      border-radius: 0;
      background-color: ${theme.colors.primary};
      * {
        color: ${theme.colors.white};
      }
    }

    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--keyboard-selected,
    .react-datepicker__day--in-range {
      background-color: ${theme.colors.primaryLight};
    }
  }
`;

export default { datepicker };
