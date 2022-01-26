import { css } from '@emotion/react';

const datepicker = (theme) => css`
  .react-datepicker__input-container {
    border: 1px solid ${theme.colors.gray300};
    input {
      border: 0;
      outline: none;
      height: ${theme.sizes.xl};
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
    .react-datepicker__day--selected,
    .react-datepicker__day--in-range {
      background-color: ${theme.colors.primaryLight};
    }
  }
`;

export default { datepicker };
