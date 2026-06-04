# Message Directory App
### CS5450 Mobile Programming — Exercise 3
**Lakehead University | Dr. Sabah Mohammed**

---

## Overview

A React Native message directory app that displays 6 categorized directories (You, Home, Love, Family, Friends, School). Tapping any directory shows stored messages, and tapping a message opens the full detail view.

---

## Project Structure

```
MessageDirectory/
├── App.tsx                          # Root component with navigation setup
├── index.js                         # App entry point
├── app.json                         # App name config
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript config
├── babel.config.js                  # Babel config
├── metro.config.js                  # Metro bundler config
├── android/                         # Android native project
│   ├── gradlew                      # Gradle wrapper (Unix)
│   ├── gradlew.bat                  # Gradle wrapper (Windows)
│   ├── build.gradle                 # Root Gradle build file
│   ├── settings.gradle              # Gradle settings
│   ├── gradle.properties            # Gradle properties
│   ├── gradle/wrapper/
│   │   └── gradle-wrapper.properties
│   └── app/
│       ├── build.gradle             # App-level Gradle build
│       └── src/main/
│           ├── AndroidManifest.xml
│           ├── java/com/messagedirectory/
│           │   ├── MainActivity.kt
│           │   └── MainApplication.kt
│           └── res/values/
│               ├── strings.xml
│               └── styles.xml
└── src/
    ├── data/
    │   └── messages.ts              # Directory & message data + TypeScript types
    └── screens/
        ├── HomeScreen.tsx           # 2-column grid of 6 directory cards
        ├── MessagesScreen.tsx       # Message list for a selected directory
        └── MessageDetailScreen.tsx  # Full message detail view
```

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | >= 18.x |
| JDK | 17 |
| Android Studio | Latest |
| Android SDK | API Level 34 |
| React Native CLI | 0.73.x |

---

## Installation & Setup

**1. Install dependencies**
```bash
cd MessageDirectory
npm install
```

**2. Start Metro bundler**
```bash
npx react-native start
```

**3. Run on Android (new terminal)**
```bash
npx react-native run-android
```

---

## Building a Release APK

```bash
cd android
chmod +x gradlew
./gradlew assembleRelease
```

APK output path:
```
android/app/build/outputs/apk/release/app-release.apk
```

Install on connected device:
```bash
adb install android/app/build/outputs/apk/release/app-release.apk
```

---

## Features

| Feature | Description |
|---------|-------------|
| **Home Screen** | 2-column grid of 6 directories with colored icons and unread badge counts |
| **Messages Screen** | List of messages per directory with unread indicators |
| **Message Detail** | Full message view with sender, timestamp, body, Reply and Forward buttons |
| **Animations** | Spring and fade-in animations using React Native's Animated API |
| **TypeScript** | Full TypeScript with interface definitions for all data types |
| **Navigation** | React Navigation Stack with smooth slide transitions |

---

## Directories

| Directory | Icon | Messages |
|-----------|------|----------|
| You | 👤 | Personal notes and reminders |
| Home | 🏠 | Mom, Dad, Landlord |
| Love | ❤️ | Messages from partner (Alex) |
| Family | 👨‍👩‍👧‍👦 | Sister, Brother, Grandma |
| Friends | 👫 | Mike, Sarah, Group Chat |
| School | 🎓 | Professor, Study Group, University |

---

## Key Dependencies

```json
"@react-navigation/native": "^6.1.9"
"@react-navigation/stack": "^6.3.20"
"react-native": "0.73.4"
"react-native-gesture-handler": "^2.14.1"
"react-native-safe-area-context": "^4.8.2"
"react-native-screens": "^3.29.0"
"typescript": "5.0.4"
```

---

## Troubleshooting

**Permission denied on gradlew**
```bash
chmod +x android/gradlew
```

**Metro port already in use**
```bash
lsof -ti:8081 | xargs kill
npx react-native start
```

**node_modules missing**
```bash
npm install
```

**Android SDK not found**
```bash
# Add to ~/.zshrc or ~/.bashrc
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

---

*CS5450 Mobile Programming | Exercise 3 | Lakehead University*
