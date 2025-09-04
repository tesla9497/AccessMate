export const APP_TABS = [
  {
    id: "profile",
    label: "Profile",
    route: "/Profile",
  },
  {
    id: "permissions",
    label: "Permission",
    route: "/Permissions",
  },
  {
    id: "email",
    label: "Email",
    route: "/Email",
  },
] as const;

// Re-export type from types folder
export type { TabId } from "@/types";
