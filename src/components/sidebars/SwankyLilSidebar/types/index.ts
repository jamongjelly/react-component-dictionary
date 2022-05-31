export interface SubMenuItem {
  label: string;
  path: string;
}

export interface MenuItem {
  label: string;
  icon: string;
  subMenu: SubMenuItem[];
}
