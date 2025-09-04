import { ReactNode } from "react";

// Tab context types
export interface TabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface TabProviderProps {
  children: ReactNode;
}
