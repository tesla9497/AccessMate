# AccessMate

A React Native mobile application built with Expo for a developer assignment. AccessMate demonstrates permission management by displaying a comprehensive list of device permissions and allowing users to request them.

## Features

### Core Functionality

- **Permission Display**: Shows a list of all available device permissions
- **Permission Status**: Displays current permission status (granted/denied)
- **Permission Requests**: Allows users to request permissions directly from the app
- **Real-time Updates**: Updates permission status when user grants/denies permissions
- **Tab Navigation**: Organized interface with Profile, Permissions, and Email tabs

### Permission Management

The app demonstrates handling of various device permissions:

- **Camera**: For taking photos
- **Microphone**: For recording audio
- **Photos**: For accessing photo library
- **Contacts**: For accessing contact list
- **Location**: For location services
- **Notifications**: For push notifications
- **Calendar**: For calendar access

## Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router
- **UI Components**: Custom component library
- **State Management**: React Context API
- **TypeScript**: Full TypeScript support
- **Platforms**: iOS, Android, and Web

## Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd accessmate
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run the app on Android device/emulator
- `npm run ios` - Run the app on iOS device/simulator
- `npm run web` - Run the app in web browser
- `npm test` - Run the test suite

## Project Structure

```
src/
├── app/                    # App screens and routing
│   ├── _layout.tsx        # Root layout
│   ├── Home.tsx           # Home screen
│   └── ...
├── components/            # Reusable components
│   ├── ui/               # UI component library
│   ├── Header.tsx        # App header
│   ├── TopTabNavigator.tsx # Tab navigation
│   └── ...
├── constants/            # App constants
│   ├── Colors.ts         # Color scheme
│   └── Tabs.ts           # Tab configuration
├── contexts/             # React contexts
│   └── TabContext.tsx    # Tab state management
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── ...
```

## Configuration

### iOS Configuration

The app includes proper iOS permission descriptions in `app.json`:

- Camera usage for taking photos
- Microphone usage for recording audio
- Photo library access for accessing photos
- Location access for location services
- Contact access for accessing contacts
- Calendar access for calendar integration
- Notification access for push notifications

### Android Configuration

Android permissions are configured for:

- Camera and audio recording
- External storage access
- Location services
- Contact and calendar access
- Notification permissions

## Development

### Permission Handling

The app uses Expo's permission APIs to handle device permissions:

- `expo-camera` for camera access
- `expo-location` for location services
- `expo-media-library` for photo access
- `expo-contacts` for contact management
- `expo-calendar` for calendar integration
- `expo-notifications` for push notifications

## Thank You

Thank you for taking the time to review this developer assignment project. This app demonstrates React Native permission handling capabilities using Expo's comprehensive permission APIs.
