import { useState } from "react";
import { getTabs } from "./common/data";
import { CustomTabProp } from "./common/types";
import { background } from "./common/constants";
import { find } from "lodash";
import "./customTabs.scss";

interface ICustomTabs {
  tabs: CustomTabProp[];
  defaultKey?: string;
}

export const CustomTabs: React.FC<ICustomTabs> = ({ tabs, defaultKey }) => {
  const [activeKey, setActiveKey] = useState<string>(defaultKey ?? "1");

  return (
    <div className="custom-tabs">
      <div className="tabs">{getTabs(tabs, activeKey, setActiveKey)}</div>
      <div
        className="content"
        style={{
          backgroundColor: background[activeKey],
        }}
      >
        <h3 style={{ margin: 0, textAlign: "center", paddingTop: "25px" }}>
          {find(tabs, (tab) => tab.key === activeKey)?.content}
        </h3>
      </div>
    </div>
  );
};
