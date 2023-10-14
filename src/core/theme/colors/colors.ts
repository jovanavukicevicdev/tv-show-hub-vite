// ******************************************************  TYPE  ****************************************************** //
import { darkTheme, lightTheme } from './color-variables';

// This helps with autocomplete and typechecking in components
export type Color = keyof typeof colors;

// Set 'colors' to default theme -- in this case 'darkTheme'
let colors = darkTheme;

// ******************************  COLOR FUNCTIONS  ******************************** //
// Returns 'color' with or without opacity , 'transparent' or 'inherit'
export function getColor(color: Color, alpha: number = 1) {
  // Get value from 'colors'
  const c = colors[color];

  // If color is 'transparent' or 'inherit' return 'transparent'
  if (c === 'transparent' || c === 'inherit') {
    return c;
  }

  // If 'c' is a real color
  // If 'alpha' is not in range [0-1] set it to '1'
  if (alpha > 1 || alpha < 0) {
    console.warn(
      `Alpha value '${alpha}' is not in range [0-1]. Falling back to 1. Please fix this in the code.`
    );
    alpha = 1;
  }

  return `hsla(var(--${color}-hue), calc(var(--${color}-saturation) * 1%), calc(var(--${color}-luminosity) * 1%), ${alpha})`;
}

// Returns darker shade of 'color' with or without opacity , 'transparent' or 'inherit'
export function getDarkerColor(color: Color, howMuchDarker: number, alpha: number = 1) {
  // Get value from 'colors'
  const c = colors[color];

  // If color is 'transparent' or 'inherit' return 'transparent'
  if (c === 'transparent' || c === 'inherit') {
    return c;
  }

  // If 'c' is a real color
  // If 'alpha' is not in range [0-1] set it to '1'
  if (alpha > 1 || alpha < 0) {
    console.warn(
      `Alpha value '${alpha}' is not in range [0-1]. Falling back to 1. Please fix this in the code.`
    );
    alpha = 1;
  }

  // If 'howMuchDarker' is not in range [0-100] set it to '0'
  if (howMuchDarker > 100 || howMuchDarker < 0) {
    console.warn(
      `Alpha value '${howMuchDarker}' is not in range [0-100]. Falling back to 0. Please fix this in the code.`
    );
    howMuchDarker = 0;
  }

  return `hsla(var(--${color}-hue), calc(var(--${color}-saturation) * 1%), calc((var(--${color}-luminosity) - ${howMuchDarker}) * 1%), ${alpha})`;
}

// Returns lighter shade of 'color' with or without opacity , 'transparent' or 'inherit'
export function getLighterColor(color: Color, howMuchLighter: number, alpha: number = 1) {
  // Get value from 'colors'
  const c = colors[color];

  // If color is 'transparent' or 'inherit' return 'transparent'
  if (c === 'transparent' || c === 'inherit') {
    return c;
  }

  // If 'c' is a real color
  // If 'alpha' is not in range [0-1] set it to '1'
  if (alpha > 1 || alpha < 0) {
    console.warn(
      `Alpha value '${alpha}' is not in range [0-1]. Falling back to 1. Please fix this in the code.`
    );
    alpha = 1;
  }

  // If 'howMuchLighter' is not in range [0-100] set it to '0'
  if (howMuchLighter > 100 || howMuchLighter < 0) {
    console.warn(
      `Alpha value '${howMuchLighter}' is not in range [0-100]. Falling back to 0. Please fix this in the code.`
    );
    howMuchLighter = 0;
  }

  return `hsla(var(--${color}-hue), calc(var(--${color}-saturation) * 1%), calc((var(--${color}-luminosity) + ${howMuchLighter}) * 1%), ${alpha})`;
}

// *******************************  THEME FUNCTIONS  *************************************** //
export function setThemeColor(variation: 'light' | 'dark') {
  if (variation === 'light') {
    colors = lightTheme;
  } else {
    colors = darkTheme;
  }

  for (const [key, value] of Object.entries(colors)) {
    if (!(key in colors)) continue;

    makeCSSVariables(value, key);
  }
}

export function switchThemeColor() {
  colors === lightTheme ? (colors = darkTheme) : (colors = lightTheme);

  for (const [key, value] of Object.entries(colors)) {
    if (!(key in colors)) continue;

    makeCSSVariables(value, key);
  }
}

// Setting color variables for mui theme
function makeCSSVariables(color: string, colorName: string) {
  const hsl = hexToHSL(color);

  const root = document.documentElement;

  // Not necessary for theming to work
  // Helps testers know which colors we are using in the app
  root.style.setProperty(`--${colorName}`, `${color}`);

  root.style.setProperty(`--${colorName}-hue`, `${hsl.hue}`);
  root.style.setProperty(`--${colorName}-saturation`, `${hsl.saturation}`);
  root.style.setProperty(`--${colorName}-luminosity`, `${hsl.luminosity}`);
}

// Converts HEX value to HSL value
function hexToHSL(hex: string) {
  // Convert hex to RGB first
  const RGB: {
    red: string | number;
    green: string | number;
    blue: string | number;
  } = hexToRGB(hex, true);

  // Then to HSL
  const red = Number(RGB.red) / 255;
  const green = Number(RGB.green) / 255;
  const blue = Number(RGB.blue) / 255;

  const cmin = Math.min(red, green, blue);

  const cmax = Math.max(red, green, blue);

  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0) {
    h = 0;
  } else if (cmax === red) {
    h = ((green - blue) / delta) % 6;
  } else if (cmax === green) {
    h = (blue - red) / delta + 2;
  } else {
    h = (red - green) / delta + 4;
  }

  h = Math.round(h * 60);

  if (h < 0) {
    h += 360;
  }

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { hue: h, saturation: s, luminosity: l };
}

// Converts HEX value to RGB value
function hexToRGB(hex: string, usedByHSL?: boolean) {
  let r;
  let g;
  let b;

  // 3 digits -- (#f00 = red)
  if (hex.length === 4) {
    r = '0x' + hex[1] + hex[1];
    g = '0x' + hex[2] + hex[2];
    b = '0x' + hex[3] + hex[3];

    // 6 digits -- (#ff0000 = red)
  } else {
    r = '0x' + hex[1] + hex[2];
    g = '0x' + hex[3] + hex[4];
    b = '0x' + hex[5] + hex[6];
  }

  return {
    red: usedByHSL ? r : +r,
    green: usedByHSL ? g : +g,
    blue: usedByHSL ? b : +b,
  };
}
