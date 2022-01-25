import colors from './colors';
import sizes from './sizes';

const mixins = {
  flexCenter: `display: flex;
    align-items: center;
    justify-content: center;`,
  flexStart: `display: flex;
    align-items: center;
    justify-content: flex-start;`,
  flexSpace: `display: flex;
    align-items: center;
    justify-content: space-between;`,
  flexColumn: `display: flex;
    flex-direction: column;`,
  defaultTransition: `transition: all 0.2s ease-in-out;`,
  basicShadow: `-webkit-box-shadow: 0 0 ${sizes.xs} ${sizes.xs} ${colors.gray500}33;
  box-shadow: 0 0 ${sizes.xs} ${sizes.xs} ${colors.gray500}33;`,
};

export default mixins;
