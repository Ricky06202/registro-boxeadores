import { useTabsStateStore } from "@/modules/shared/store/tabsStateStore";
import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";

interface TabsProps {
  tabs: string[];
  currentTab: number;
  setCurrentTab: (tab: number) => void;
}

const TabsComponent: React.FC<TabsProps> = ({ tabs, currentTab, setCurrentTab }) => {

  return (
    <Tabs
      className="flex border-b border-gray-200 mb-4 "
      value={currentTab}
      onChange={(event, newValue) => setCurrentTab(newValue)}
      variant="scrollable"
      scrollButtons="auto"
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          className={`
            px-4 py-2 text-sm font-medium min-w-[100px] transition-all duration-200
            ${
              currentTab === index
                ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-b-2 border-transparent"
            }
          `}
          onClick={() => setCurrentTab(index)}
          value={index}
          label={tab}
        />
      ))}
    </Tabs>
  );
};

export default TabsComponent;
