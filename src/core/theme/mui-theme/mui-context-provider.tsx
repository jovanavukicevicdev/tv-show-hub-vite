import { ColorModeContext } from './mui-context.ts';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getColor, getDarkerColor, getLighterColor } from '../colors/colors';
import { ReactNode, useMemo, useState } from 'react';
import { getVar } from '../ui-variables/ui-variables.ts';

interface ColorModeContextProviderProps {
  children: ReactNode;
}

export const ColorModeContextProvider = ({ children }: ColorModeContextProviderProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  const muiTheme = createTheme({
    palette: {
      mode,
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
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: {
            borderRadius: getVar('borderRadius'),
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            '&.genre-chip': {
              border: mode === 'dark' ? '1px solid #3c4043' : '1px solid #6a6a6a',
              backgroundColor: mode === 'dark' ? getColor('background') : '#6a6a6a',
              '& .MuiChip-label': {
                color: mode === 'dark' ? getColor('text') : getColor('background'),
                userSelect: 'none',
              },
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: mode === 'dark' ? '#303134' : '#4a4a4a',
            border: mode === 'dark' ? '1px solid #555' : '1px solid #4a4a4a',
            color: mode === 'dark' ? getColor('text') : getColor('background'),
            paddingTop: '6px',
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            '&.error-alert': {
              borderRadius: '6px',
              backgroundColor: mode === 'dark' ? '#303134' : '#eee',
              '& .MuiAlert-message': {
                color: mode === 'dark' ? '#bdc1c6' : getColor('backgroundContrast'),
                letterSpacing: '0.05em',
                '& .MuiAlertTitle-root': {
                  letterSpacing: 0,
                },
              },
              '& .MuiAlert-action': {
                '& .error-cta': {
                  padding: '4px 12px',
                  color: getColor('text'),
                  backgroundColor: 'transparent',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor:
                      mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    color: getColor('text'),
                  },
                },
              },
            },
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            '&.seasons-toggle': {
              flexWrap: 'wrap',
              gap: '2px',
              '& .MuiToggleButton-root': {
                borderRadius: '18px',
                border: 'none',
                padding: '6px 15px',
                '&.Mui-selected': {
                  backgroundColor: getColor('primary'),
                  color: getColor('primaryContrast'),
                  fontWeight: 600,
                },
                '&:hover': {
                  backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)',
                },
              },
            },
          },
        },
      },
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
