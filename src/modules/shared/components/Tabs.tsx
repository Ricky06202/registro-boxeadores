import { useFormStateStore } from "@shared/store/formStateStore";
import React, { useState } from "react";

interface TabsProps {
  tabs: string[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const currentTab = useFormStateStore((state) => state.currentTab);
  const setCurrentTab = useFormStateStore((state) => state.setCurrentTab);

  return (
    <div className="flex border-b border-gray-200 mb-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          type="button"
          className={`
            px-4 py-2 text-sm font-medium min-w-[100px] transition-all duration-200
            ${
              currentTab === index
                ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-b-2 border-transparent"
            }
          `}
          onClick={() => setCurrentTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
