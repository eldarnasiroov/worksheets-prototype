import { useState } from "react";
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

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "darkolivegreen",
        padding: "10px",
      }}
    >
      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        <div
          onClick={() => {}}
          style={{
            height: "65px",
            backgroundColor: colors.orange,
            width: "100%",
            borderRadius: "0 0 15px 0",
            position: "relative",
            zIndex: 6,
            cursor: "pointer",
            border: `3px solid ${colors.brown}`,
          }}
        >
          Первый квадатик (глаз)
        </div>

        <div
          onClick={() => setActiveKey("2")}
          style={{
            height: "65px",
            backgroundColor: colors.lightBlue,
            width: "100%",
            borderRadius: activeKey === "2" ? "0px" : "0 0 15px 0",
            position: "relative",
            zIndex: activeKey !== "2" ? 5 : 4,
            cursor: "pointer",
            borderTop: `3px solid ${colors.brown}`,
            borderRight:
              activeKey !== "2" ? `3px solid ${colors.brown}` : "none",
            borderBottom:
              activeKey !== "2" ? `3px solid ${colors.brown}` : "none",
          }}
        >
          Второй квадратик
          <div
            style={{
              position: "absolute",
              bottom: "-3px",
              left: "-15px",
              backgroundColor: colors.lightBlue,
              width: "30px",
              height: "30px",
              borderBottom:
                activeKey !== "2" ? `3px solid ${colors.brown}` : "none",
            }}
          ></div>
          {activeKey === "2" && (
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "-15px",
                backgroundColor: colors.lightBlue,
                width: "30px",
                height: "30px",
              }}
            ></div>
          )}
        </div>

        <div
          onClick={() => setActiveKey("3")}
          style={{
            height: "65px",
            backgroundColor: colors.lightViolet,
            width: "100%",
            borderRadius: activeKey !== "2" ? "0 0 15px 0" : "0 0 15px 15px",
            position: "relative",
            zIndex: activeKey !== "3" ? 4 : 3,
            cursor: "pointer",
            borderTop: `3px solid ${colors.brown}`,
            borderRight:
              activeKey !== "3" ? `3px solid ${colors.brown}` : "none",
            borderBottom:
              activeKey !== "3" ? `3px solid ${colors.brown}` : "none",
            borderLeft:
              activeKey === "2" ? `3px solid ${colors.brown}` : "none",
          }}
        >
          Третий квадратик
          {activeKey !== "2" && (
            <div
              style={{
                position: "absolute",
                bottom: "-3px",
                left: "-15px",
                backgroundColor: colors.lightViolet,
                width: "30px",
                height: "30px",
                borderBottom:
                  activeKey !== "3" ? `3px solid ${colors.brown}` : "none",
              }}
            ></div>
          )}
          {activeKey === "3" && (
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "-15px",
                backgroundColor: colors.lightViolet,
                width: "30px",
                height: "30px",
              }}
            ></div>
          )}
        </div>

        <div
          onClick={() => setActiveKey("4")}
          style={{
            height: "65px",
            backgroundColor: colors.lightGrey,
            width: "100%",
            borderRadius: activeKey !== "3" ? "0 0 15px 0" : "0 0 15px 15px",
            position: "relative",
            zIndex: activeKey !== "4" ? 3 : 2,
            cursor: "pointer",
            borderTop: `3px solid ${colors.brown}`,
            borderRight:
              activeKey !== "4" ? `3px solid ${colors.brown}` : "none",
            borderBottom:
              activeKey !== "4" ? `3px solid ${colors.brown}` : "none",
            borderLeft:
              activeKey === "3" ? `3px solid ${colors.brown}` : "none",
          }}
        >
          Четвертый квадратик
          {activeKey !== "3" && (
            <div
              style={{
                position: "absolute",
                bottom: "-3px",
                left: "-15px",
                backgroundColor: colors.lightGrey,
                width: "30px",
                height: "30px",
                borderBottom:
                  activeKey !== "4" ? `3px solid ${colors.brown}` : "none",
              }}
            ></div>
          )}
          {activeKey === "4" && (
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "-15px",
                backgroundColor: colors.lightGrey,
                width: "30px",
                height: "30px",
              }}
            ></div>
          )}
        </div>

        <div
          onClick={() => setActiveKey("5")}
          style={{
            height: "65px",
            backgroundColor: colors.lightGreen,
            width: "100%",
            borderRadius: activeKey !== "4" ? "0 0 15px 0" : "0 0 15px 15px",
            position: "relative",
            zIndex: activeKey !== "5" ? 2 : 1,
            cursor: "pointer",
            borderTop: `3px solid ${colors.brown}`,
            borderRight:
              activeKey !== "5" ? `3px solid ${colors.brown}` : "none",
            borderBottom:
              activeKey !== "5" ? `3px solid ${colors.brown}` : "none",
            borderLeft:
              activeKey === "4" ? `3px solid ${colors.brown}` : "none",
          }}
        >
          Пятый квадратик
          {activeKey !== "4" && (
            <div
              style={{
                position: "absolute",
                bottom: "-3px",
                left: "-15px",
                backgroundColor: colors.lightGreen,
                width: "30px",
                height: "30px",
                borderBottom:
                  activeKey !== "5" ? `3px solid ${colors.brown}` : "none",
              }}
            ></div>
          )}
          {activeKey === "5" && (
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "-15px",
                backgroundColor: colors.lightGreen,
                width: "30px",
                height: "30px",
              }}
            ></div>
          )}
        </div>

        <div
          onClick={() => setActiveKey("6")}
          style={{
            height: "65px",
            backgroundColor: colors.grey,
            width: "100%",
            borderRadius: activeKey === "5" ? "0 0 0 15px" : "0",
            position: "relative",
            zIndex: 1,
            cursor: "pointer",
            border: `3px solid ${colors.brown}`,
            borderTop: `3px solid ${colors.brown}`,
            borderRight:
              activeKey !== "6" ? `3px solid ${colors.brown}` : `3px solid ${colors.grey}`,
            borderBottom:
              activeKey !== "6" ? `3px solid ${colors.brown}` : "none",
            borderLeft:
              activeKey === "5" ? `3px solid ${colors.brown}` : "none",
          }}
        >
          Шестой квадратик
          {activeKey !== "5" && (
            <div
              style={{
                position: "absolute",
                bottom: "-3px",
                left: "-15px",
                backgroundColor: colors.grey,
                width: "30px",
                height: "30px",
                borderBottom:
                  activeKey !== "6" ? `3px solid ${colors.brown}` : "none",
              }}
            ></div>
          )}
          {activeKey === "6" && (
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "-15px",
                backgroundColor: colors.grey,
                width: "30px",
                height: "30px",
              }}
            ></div>
          )}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: background[activeKey],
        }}
      >
        <h3 style={{margin: 0, textAlign: "center", paddingTop: "25px"}}>
          Содержимое {activeKey} квадратика
        </h3>
      </div>
    </div>
  );
}

export default App;
