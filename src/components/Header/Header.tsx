import { useEffect, useState } from "react";
import "./style.css";
import { Tabs, type CurrentTabs, type TabType } from "./types";
import { Buttons } from "./Buttons";
import { DisplayTables } from "../DisplayTables/DisplayTables";
import { FiMenu } from "react-icons/fi";

export const Header = () => {
  const tabs: CurrentTabs[] = [
    {
      id: "sorting",
      title: "Сортировка",
    },
    {
      id: "filtration",
      title: "Фильтрация",
    },
    {
      id: "pagination",
      title: "Пагинация",
    },
  ];

  const [activeTab, setActiveTab] = useState<TabType>(Tabs.Sorting);
  const [isOpen, setOpen] = useState(false);

  const setTab = (id: TabType) => {
    setActiveTab(id);
    setOpen(false);
  };

  const openSidebar = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const savedTab = localStorage.getItem("currentTab");
    if (savedTab) {
      setActiveTab(savedTab as TabType);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentTab", activeTab);
  }, [activeTab]);

  return (
    <>
      <header className="headerApp">
        <div className="menu-icon">
          <FiMenu color="white" size={30} onClick={openSidebar} />
        </div>
        <div className={`container-tabs ${isOpen ? "open" : ""}`}>
          {tabs.map((tab) => (
            <Buttons
              key={tab.id}
              tab={tab}
              setTab={setTab}
              activeTab={activeTab}
            />
          ))}
        </div>
      </header>
      <DisplayTables activeTab={activeTab} />
    </>
  );
};
