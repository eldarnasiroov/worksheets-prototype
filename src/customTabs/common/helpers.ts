import { background, colors } from "./constants";
import { ComputeStyleProp } from "./types";

export const computeStyle = ({
  activeKey,
  cssProp,
  tab,
  index,
  tabProps,
}: ComputeStyleProp) => {
  switch (cssProp) {
    case "zIndex":
      return activeKey !== tab.key
        ? tabProps.length - index
        : tabProps.length - (index + 1);

    case "borderRadius":
      return activeKey === tab.key
        ? "0px"
        : activeKey !== tabProps[tabProps.length - 1].key &&
          index === tabProps.length - 1
        ? "0 0 0 15px"
        : activeKey === (index && tabProps[index - 1].key)
        ? "0 0 15px 15px"
        : "0 0 15px 0";

    case "borderRight":
      return activeKey !== tab.key
        ? `3px solid ${colors.brown}`
        : activeKey === tabProps[tabProps.length - 1].key
        ? `3px solid ${background[tabProps[tabProps.length - 1].key]}`
        : "none";

    case "borderLeft":
      return activeKey === (index && tabProps[index - 1].key) ||
        (index === 0 && activeKey !== tab.key)
        ? `3px solid ${colors.brown}`
        : activeKey === tabProps[0].key && index === 0
        ? `3px solid ${background[tabProps[0].key]}`
        : "none";

    case "borderBottom":
      return activeKey !== tab.key ? `3px solid ${colors.brown}` : "none";
  }
};
