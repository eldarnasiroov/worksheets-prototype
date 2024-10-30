import { useState } from "react";
import { map } from "lodash";
import "./App.scss";

function App() {
  const [activeKey, setActiveKey] = useState<string>("2");

  const colors = {
    orange: "#E19A4C",
    lightBlue: "#C3CAF5",
    lightViolet: "#DACBEF",
    lightGrey: "#E6E6E4",
    lightGreen: "#D7F3DA",
    grey: "#E0E1F6",
    brown: "#834D29",
  };

  const background = {
    1: colors.orange,
    2: colors.lightBlue,
    3: colors.lightViolet,
    4: colors.lightGrey,
    5: colors.lightGreen,
    6: colors.grey,
  };

  interface TabProp {
    key: string;
    title: JSX.Element | string;
    content: JSX.Element | string;
    onClick?: () => void;
    disabled?: boolean;
    style?: React.CSSProperties;
  }

  const tabProps: TabProp[] = [
    {
      key: "1",
      title: "Глаз",
      content: "Первый квадратик",
      disabled: true,
    },
    {
      key: "2",
      title: "Акт выпол. работ",
      content: "Второй квадратик",
    },
    {
      key: "3",
      title: "Счёт",
      content: "Третий квадратик",
    },
    {
      key: "4",
      title: "Наряд - заказ",
      content: "Четвертый квадратик",
    },
    {
      key: "5",
      title: "Лист осмотр",
      content: "Пятый квадратик",
    },
    {
      key: "6",
      title: "Админ. панель",
      content: "Шестый квадратик",
    },
  ];

  const DEFAULT_TAB_HEIGHT = "65px";

  const getTabs = (tabProps: TabProp[], activeKey: string) => {
    const tabsLength = tabProps.length;

    return map(tabProps, (tab: TabProp, index: number) => {
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

            zIndex:
              activeKey !== tab.key
                ? tabsLength - index
                : tabsLength - (index + 1),

            borderRadius:
              activeKey === tab.key
                ? "0px"
                : activeKey !== tabProps[tabsLength - 1].key &&
                  index === tabsLength - 1
                ? "0 0 0 15px"
                : activeKey === (index && tabProps[index - 1].key)
                ? "0 0 15px 15px"
                : "0 0 15px 0",

            borderRight:
              activeKey !== tab.key
                ? `3px solid ${colors.brown}`
                : activeKey === tabProps[tabsLength - 1].key
                ? `3px solid ${background[tabProps[tabsLength - 1].key]}`
                : "none",

            borderLeft:
              activeKey === (index && tabProps[index - 1].key) ||
              (index === 0 && activeKey !== tab.key)
                ? `3px solid ${colors.brown}`
                : activeKey === tabProps[0].key && index === 0
                ? `3px solid ${background[tabProps[0].key]}`
                : "none",

            borderBottom:
              activeKey !== tab.key ? `3px solid ${colors.brown}` : "none",

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
          {activeKey === tab.key && index !== tabsLength - 1 && (
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
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
          {getTabs(tabProps, activeKey)}
        </div>
        <div
          style={{
            width: "100%",
            height: "300px",
            backgroundColor: background[activeKey],
          }}
        >
          <h3 style={{ margin: 0, textAlign: "center", paddingTop: "25px" }}>
            Содержимое {activeKey} квадратика
          </h3>
        </div>
      </div>
    </>
  );
}

export default App;
