// Header component types
export interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  showHelpButton?: boolean;
  showProfileImage?: boolean;
}

// Profile component types
export interface ProfileProps {
  navigation?: any;
}

export interface ProfileContentProps {
  navigation?: any;
}

// Permissions component types
export interface PermissionsProps {
  navigation?: any;
}

export interface PermissionsContentProps {
  navigation?: any;
}

// TopTabNavigator component types
export interface TopTabNavigatorProps {
  initialTab?: string;
}
