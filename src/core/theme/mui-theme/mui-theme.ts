import { createTheme } from '@mui/material/styles';
import { getColor, getDarkerColor, getLighterColor } from '../colors/colors';
import { CustomTextField } from './overrides/mui-text-field';
import { CustomButton, CustomIconButton } from './overrides/mui-button';
import { CustomChip } from './overrides/mui-chip';
import { CustomTooltip } from './overrides/mui-tooltip';
import { CustomAlert } from './overrides/mui-alert';
import { CustomToggleButtonGroup } from './overrides/mui-toggle-button';

export const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: getLighterColor('primary', 10),
      main: getColor('primary'),
      dark: getDarkerColor('primary', 10),
      contrastText: getColor('primaryContrast'),
    },
    secondary: {
      light: getLighterColor('secondary', 10),
      main: getColor('secondary'),
      dark: getDarkerColor('secondary', 10),
      contrastText: getColor('secondaryContrast'),
    },
    error: {
      light: getLighterColor('error', 10),
      main: getColor('error'),
      dark: getDarkerColor('error', 10),
      contrastText: getColor('errorContrast'),
    },
    success: {
      light: getLighterColor('success', 10),
      main: getColor('success'),
      dark: getDarkerColor('success', 10),
      contrastText: getColor('successContrast'),
    },
    warning: {
      light: getLighterColor('warning', 10),
      main: getColor('warning'),
      dark: getDarkerColor('warning', 10),
      contrastText: getColor('warningContrast'),
    },
    info: {
      light: getLighterColor('info', 10),
      main: getColor('info'),
      dark: getDarkerColor('info', 10),
      contrastText: getColor('infoContrast'),
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    htmlFontSize: 16,
  },
  spacing: 5,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: getColor('background'),
          color: getColor('backgroundContrast'),
          width: '100%',
          height: '100%',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: CustomButton,
    },
    MuiTextField: {
      defaultProps: {
        margin: 'dense',
      },
      styleOverrides: CustomTextField,
    },
    MuiIconButton: {
      styleOverrides: CustomIconButton,
    },
    MuiChip: {
      styleOverrides: CustomChip,
    },
    MuiTooltip: {
      styleOverrides: CustomTooltip,
    },
    MuiAlert: {
      styleOverrides: CustomAlert,
    },
    MuiToggleButtonGroup: {
      styleOverrides: CustomToggleButtonGroup,
    },
  },
});
