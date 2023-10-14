// ******************************************************  TYPE  ****************************************************** //
export type UIVar = keyof typeof uiVariables;

// ******************************************************  FUNCTIONS  ****************************************************** //
export function getVar(v: UIVar) {
  return `var(${uiVariables[v]})`;
}

// ******************************************************  VARIABLES  ****************************************************** //
const uiVariables = {
  desktopPadding: '--desktopPadding',
  mobilePadding: '--mobilePadding',
  headerHeight: '--headerHeight',
  footerHeight: '--footerHeight',
  borderRadius: '--borderRadius',
  htmlFontSize: '--htmlFontSize',
  contentMaxWidth: '--contentMaxWidth',
};
