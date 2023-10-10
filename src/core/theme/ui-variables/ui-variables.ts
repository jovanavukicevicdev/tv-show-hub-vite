// ******************************************************  TYPE  ****************************************************** //
export type UIVar = keyof typeof uiVariables;

// ******************************************************  FUNCTIONS  ****************************************************** //
export function getVar(v: UIVar) {
  return `var(${uiVariables[v]})`;
}

// ******************************************************  VARIABLES  ****************************************************** //
const uiVariables = {
  mainPadding: '--mainPadding',
  mobilePadding: '--mobilePadding',
  headerHeight: '--headerHeight',
  footerHeight: '--footerHeight',
  borderRadius: '--borderRadius',
  htmlFontSize: '--htmlFontSize',
};
