export type TCssProp =
  | "zIndex"
  | "borderBottom"
  | "borderRadius"
  | "borderRight"
  | "borderLeft";

export interface CustomTabProp {
  key: string;
  title: JSX.Element | string;
  content: JSX.Element | string;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export interface ComputeStyleProp {
  cssProp?: TCssProp;
  activeKey: string;
  tab: CustomTabProp;
  index?: number;
  tabProps?: CustomTabProp[];
}
