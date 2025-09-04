// Permission-related types
export interface Permission {
  id: string;
  title: string;
  description: string;
  icon: string;
  granted: boolean;
  requestPermission: () => Promise<boolean>;
}
