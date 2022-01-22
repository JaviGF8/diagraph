const pxToRem = (pixels) => `${pixels / 16}rem`;

const sizes = {
  xs: pxToRem(2),
  sm: pxToRem(4),
  md: pxToRem(8),
  lg: pxToRem(16),
  xl: pxToRem(32),
  xxl: pxToRem(64),
  topbarHeight: pxToRem(80),
  pxToRem,
};

export default sizes;
