import { ChipClassKey } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { getColor } from '../../colors/colors';

export const CustomChip: Partial<OverridesStyleRules<ChipClassKey>> | undefined = {
  root: {
    '&.genre-chip': {
      border: '1px solid #3c4043',

      '& .MuiChip-label': {
        color: getColor('text'),
        userSelect: 'none',
      },
    },
  },
};
