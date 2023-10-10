import { ButtonClassKey, IconButtonClassKey } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { getVar } from '../../ui-variables/ui-variables';

export const CustomButton: Partial<OverridesStyleRules<ButtonClassKey>> | undefined = {
  root: {
    borderRadius: getVar('borderRadius'),
  },
};

export const CustomIconButton: Partial<OverridesStyleRules<IconButtonClassKey>> | undefined = {
  root: {
    backgroundColor: 'transparent',

    '&.clear-search-button': {
      color: '#9aa0a6',
      padding: 0,
    },

    '&.search-button': {
      color: '#8ab4f8',
      padding: 0,
    },
  },
};
