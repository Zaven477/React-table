export const Tabs = {
  Sorting: "sorting",
  Filtration: "filtration",
  Pagination: "pagination",
} as const;

export type TabType = "sorting" | "filtration" | "pagination";

export type CurrentTabs = {
  id: TabType;
  title: string;
};

export type ButtonsProps = {
  tab: CurrentTabs;
  setTab: (id: TabType) => void;
  activeTab: TabType;
};

export type DisplayTablesProps = {
  activeTab: TabType;
};
