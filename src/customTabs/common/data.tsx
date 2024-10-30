import { background, colors, DEFAULT_TAB_HEIGHT } from "./constants";
import { computeStyle } from "./helpers";
import { ComputeStyleProp, CustomTabProp } from "./types";
import { map } from "lodash";

export const getTabs = (
  tabProps: CustomTabProp[],
  activeKey: string,
  setActiveKey: (key: string) => void
) =>
  map(tabProps, (tab: CustomTabProp, index: number) => {
    const props: ComputeStyleProp = {
      activeKey,
      tab,
      index,
      tabProps,
    };

    return (
      <div
        key={tab.key}
        onClick={() => {
          tab.onClick && tab.onClick();

          !tab.disabled && setActiveKey(tab.key);
        }}
        style={{
          width: "100%",
          position: "relative",
          cursor: "pointer",

          height: DEFAULT_TAB_HEIGHT,
          backgroundColor: background[tab.key],
          borderTop: `3px solid ${colors.brown}`,

          zIndex: computeStyle({
            cssProp: "zIndex",
            ...props,
          }),

          borderRadius: computeStyle({
            cssProp: "borderRadius",
            ...props,
          }),

          borderRight: computeStyle({
            cssProp: "borderRight",
            ...props,
          }),

          borderLeft: computeStyle({
            cssProp: "borderLeft",
            ...props,
          }),

          borderBottom: computeStyle({
            cssProp: "borderBottom",
            ...props,
          }),

          ...tab.style,
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          {tab.title}
        </div>

        {activeKey !== (index && tabProps[index - 1].key) && index !== 0 && (
          <div
            style={{
              position: "absolute",
              bottom: "-2.6px",
              left: "-15px",
              width: "30px",
              height: "30px",

              backgroundColor: background[tab.key],
              borderBottom:
                activeKey !== tab.key ? `3px solid ${colors.brown}` : "none",
            }}
          ></div>
        )}
        {activeKey === tab.key && index !== tabProps.length - 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "-15px",
              width: "30px",
              height: "30px",

              backgroundColor: background[tab.key],
            }}
          ></div>
        )}
      </div>
    );
  });
