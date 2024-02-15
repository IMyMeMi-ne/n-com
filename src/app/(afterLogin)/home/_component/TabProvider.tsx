"use client";

import { createContext, useState } from "react";

type TabContextProps = {
  tab: "rec" | "fol";
  setTab: (value: "rec" | "fol") => void;
};
export const TabContext = createContext<TabContextProps>({
  tab: "rec",
  setTab: (value: "rec" | "fol") => {},
});

type TabProviderProps = {
  children: React.ReactNode;
};
export default function TabProvider({ children }: TabProviderProps) {
  const [tab, setTab] = useState<"rec" | "fol">("rec");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
