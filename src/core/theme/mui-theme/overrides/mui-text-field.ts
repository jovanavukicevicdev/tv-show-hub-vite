import { TextFieldClassKey } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { getColor } from '../../colors/colors';

export const CustomTextField: Partial<OverridesStyleRules<TextFieldClassKey>> | undefined = {
  root: {
    '&.search-input': {
      width: '100%',
      marginTop: 0,
      marginBottom: 0,

      '@media (min-width: 580px)': {
        maxWidth: '480px',
      },

      '& .MuiInput-root': {
        paddingRight: 0,
        color: getColor('text'),
        borderRadius: '24px',
        padding: '5px 12px 5px 16px',
        backgroundColor: '#303134',
        border: '1px solid transparent',
        boxShadow: '0 1px 3px rgba(23, 23, 23, 0.24)',
      },
    },
  },
};
