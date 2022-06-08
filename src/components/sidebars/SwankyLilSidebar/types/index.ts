export interface SubMenuItem {
  label: string;
  path: string;
  element: () => JSX.Element;
}

export interface MenuItem {
  label: string;
  icon: string;
  subMenu: SubMenuItem[];
}
