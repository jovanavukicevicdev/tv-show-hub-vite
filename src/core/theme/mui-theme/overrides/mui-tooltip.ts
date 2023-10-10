import { TooltipClassKey } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { getColor } from '../../colors/colors';

export const CustomTooltip: Partial<OverridesStyleRules<TooltipClassKey>> | undefined = {
  tooltip: {
    backgroundColor: '#303134',
    border: '1px solid #555',
    color: getColor('text'),
  },
};
