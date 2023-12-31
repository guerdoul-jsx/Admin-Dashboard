import { HTMLAttributes } from "react";

export type RoutesTypes = {
  name: string;
  layout: string;
  path: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  component: JSX.Element;
};

export interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SidebarLinksProps {
  routes: RoutesTypes[];
}

export interface ProfileDropDownProps {
  name: string;
  role: string;
  imgProfile: string;
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: string;
  extra?: string;
  children: React.ReactNode;
}

export type statsSalesProps = {
  name: string;
  price?: number;
  count?: number;
  percentage: number;
  icon: React.ReactNode;
};

export interface WidgetsProps {
  statsSales: statsSalesProps[];
}

export interface ChartTitleProps {
  name: string;
}
