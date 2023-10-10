import { ToggleButtonGroupClassKey } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { getColor } from '../../colors/colors';

export const CustomToggleButtonGroup:
  | Partial<OverridesStyleRules<ToggleButtonGroupClassKey>>
  | undefined = {
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
      },
    },
  },
};
