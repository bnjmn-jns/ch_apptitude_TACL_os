const colorsObj = {
  dodgerBlue: '#00B4FF',
  riverBedGrey: '#424F60',
  ravenGrey: '#7A838F',
  gullGray: '#9CA8BA',
  mysticGrey: '#E5EAEF',
  snowGrey: '#FBFBFB',

  dodgerBlueDark: '#00A1E5',
  gullGrayDark: '#758192',
  mysticGreyDark: '#CDD2D6',

  shamrock: '#40C3A7',
  amber: '#FFBF00',
  carnation: '#F54B5E',

  shamrockDark: '#39AC94',
  amberDark: '#E5AB00',
  carnationDark: '#DC4354',
};

export const colors = {
  primary: colorsObj.riverBedGrey,
  secondary: colorsObj.dodgerBlue,
  secondaryDark: colorsObj.dodgerBlueDark,
  background: 'white',

  info: colorsObj.dodgerBlue,
  error: colorsObj.carnation,
  danger: colorsObj.carnation,
  warning: colorsObj.amber,
  success: colorsObj.shamrock,
  ...colorsObj,
};

export const metrics = {
  fontFamily: 'Lato',
  borderRadius: 100,
  borderRadiusSmall: 4,
  boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.1)',
  transitionAll: 'all 0.2s ease-in-out',
  focusStyle: `
    outline: none;
    border: 1px solid ${colors.secondary};
`,

  // font sizes
  title: 24,
  subTitle: 20,
  large: 18,
  medium: 13,
  small: 10,

  // Line-heights
  leading: {
    title: 29,
    subTitle: 24,
    large: 22,
    medium: 18,
    small: 12,
  },
};
