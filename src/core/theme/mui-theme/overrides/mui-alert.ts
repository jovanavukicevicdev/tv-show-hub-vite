import { AlertClassKey } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { getColor } from '../../colors/colors';

export const CustomAlert: Partial<OverridesStyleRules<AlertClassKey>> | undefined = {
  root: {
    '&.error-alert': {
      borderRadius: '6px',
      backgroundColor: '#303134',

      '& .MuiAlert-message': {
        color: '#bdc1c6',
        letterSpacing: '0.05em',

        '& .MuiAlertTitle-root': {
          letterSpacing: 0,
        },
      },

      '& .MuiAlert-action': {
        '& .error-cta': {
          padding: '4px 12px',
          color: getColor('textSecondary'),
          backgroundColor: 'transparent',
          borderRadius: '4px',

          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: getColor('text'),
          },
        },
      },
    },
  },
};
