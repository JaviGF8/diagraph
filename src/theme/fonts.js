const pxToRem = (pixels) => `${pixels / 16}rem`;

const fonts = {
  xs: pxToRem(10),
  sm: pxToRem(12),
  md: pxToRem(14),
  lg: pxToRem(16),
  xl: pxToRem(20),
  xxl: pxToRem(24),
  subtitle: pxToRem(32),
  title: pxToRem(48),
};

export default fonts;
