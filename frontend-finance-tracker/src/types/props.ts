export interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

export interface NavItem {
  icon: React.ReactNode;
  text: string;
  href: string;
  description: string;
}

export interface HeaderProps {
  isSidebarExpanded: boolean;
}
