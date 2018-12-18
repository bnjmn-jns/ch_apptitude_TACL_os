import { sizes } from './media';

const sizeNew = {};
Object.keys(sizes).forEach(size => {
  sizeNew[size] = `${sizes[size]}em`;
});

const base = {
  colors: {
    secondary: '#00B4FF',
    info: '#00B4FF',
    secondaryDark: '#00A1E5',
    background: '#fff',

    // greys
    primary: '#424F60',
    labelGrey: '#7A838F',
    borderGrey: '#CDD2D6',
    darkerGrey: '#758192',
    midGrey: '#9CA8BA',
    lightGrey: '#E5EAEF',
    offWhiteGrey: '#FBFBFB',

    // status
    error: '#F54B5E',
    warning: '#FFBF00',
    success: '#40C3A7',

    // status Hover
    errorDark: '#DC4354',
    warningDark: '#E5AB00',
    successDark: '#39AC94',
  },
  spacing: {
    padding: {
      sm: 8,
      md: 16,
      lg: 32,
    },
    height: 32,
  },
  borderRadius: {
    sm: 0,
    md: 4,
    mdLg: 10,
    lg: 100,
    xl: 100,
  },
  font: {
    family: 'Lato',
    size: {
      title: 24,
      subTitle: 20,
      lg: 18,
      md: 13,
      sm: 10,
      input: 11,
    },
    leading: {
      title: 2.9,
      subTitle: 2.4,
      lg: 2.2,
      md: 1.8,
      sm: 1.2,
    },
  },
};

export const getComponentTheme = themeConfig => ({
  inputStyles: {
    colors: {
      border: themeConfig.colors.borderGrey,
      inputText: themeConfig.colors.darkerGrey,
      placeholderText: themeConfig.colors.midGrey,
      labelText: themeConfig.colors.labelGrey,
      disabledText: themeConfig.colors.midGrey,
      error: themeConfig.colors.error,
      warning: themeConfig.colors.warning,
      success: themeConfig.colors.success,
      highlight: themeConfig.colors.secondary,
      background: themeConfig.colors.background,
      backgroundClear: 'transparent',
      backgroundDisabled: themeConfig.colors.lightGrey,
      iconInnactive: themeConfig.colors.lightGrey,
      icon: themeConfig.colors.midGrey,
      iconHover: themeConfig.colors.darkerGrey,
    },
    fontSize: {
      validationText: themeConfig.font.size.sm,
      inputText: themeConfig.font.size.input,
      labelText: themeConfig.font.size.md,
    },
    spacing: { ...themeConfig.spacing },
    metrics: {
      borderRadius: themeConfig.borderRadius.sm,
    },
  },
  buttonStyles: {
    colors: {
      primaryBackground: themeConfig.colors.secondary,
      primaryBackgroundHover: themeConfig.colors.secondaryDark,
      primaryText: themeConfig.colors.background,
      disabledBackground: themeConfig.colors.lightGrey,
      disabledText: themeConfig.colors.borderGrey,
      ghostBorder: themeConfig.colors.borderGrey,
      ghostBorderHover: themeConfig.colors.midGrey,
      ghostText: themeConfig.colors.borderGrey,
      ghostTextHover: themeConfig.colors.midGrey,
    },
    borderRadius: themeConfig.borderRadius.lg,
    boxShadow: 'none',
    activeState: null,
  },
  uiStyles: {
    colors: {
      text: {
        default: themeConfig.colors.primary,
        link: themeConfig.colors.secondary,
        linkHover: themeConfig.colors.secondaryDark,
        error: themeConfig.colors.error,
        danger: themeConfig.colors.error,
        warning: themeConfig.colors.warning,
        success: themeConfig.colors.success,
        info: themeConfig.colors.secondary,
      },
      border: themeConfig.colors.borderGrey,
      selection: {
        bg: themeConfig.colors.secondary,
        fg: themeConfig.colors.background,
      },
      loader: themeConfig.colors.secondary,
      status: {
        info: themeConfig.colors.background,
        error: themeConfig.colors.error,
        danger: themeConfig.colors.error,
        warning: themeConfig.colors.warning,
        success: themeConfig.colors.success,
      },
    },
    focusStyle: `
      outline: none;
      border: 1px solid ${themeConfig.colors.secondary} !important;
      `,
    boxShadow: '0px 1px 10px 0px rgba(0,0,0,0.1)',
    transitionAll: 'all 0.3s ease-in-out',
    transition: property => `${property} 0.2s ease-in-out`,
    iconStrokeWidth: 1.5,
  },
});

export default {
  base,
  rtf: false,
  ...getComponentTheme(base),
  Sizes: sizeNew,
};
