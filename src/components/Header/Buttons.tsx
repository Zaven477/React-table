import type { ButtonsProps } from "./types";

export const Buttons = ({ tab, setTab, activeTab }: ButtonsProps) => {
  return (
    <button
      key={tab.id}
      className={`sidebar-btn ${activeTab === tab.id ? "active" : ""}`}
      onClick={() => setTab(tab.id)}
    >
      {tab.title}
    </button>
  );
};
