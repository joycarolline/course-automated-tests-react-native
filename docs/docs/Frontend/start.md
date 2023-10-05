---
sidebar_position: 1
title: Getting Started
---

# Getting Started

**Clone Repository**
```sh
git clone https://github.com/beadev-net/course-automated-tests-react-native.git
```

**Install node_modules dependencies**
```sh
cd Frontend && npm install
```

**Create .env file and change to correct Config Variables**
```sh
cp .env.example .env
```

---

# IOS Only*

**Install cocoapods dependencies**
```sh
cd ios && pod install
```

---

# Run React Native
**Android**
```sh
npm run android
```

**IOS**
```sh
npm run ios
```

---

# Run Unit Tests

```sh
npm run test
npm run test:coverage
```

---

# Run E2E Tests

:::caution

It is only work if you have installed the Android or IOS emulator correctly. [Reference](/docs/category/emulator)

:::

**Android**
```sh
npm run detox:build:android:debug
npm run detox:test:android:debug
```

**IOS**
```sh
npm run detox:build:ios:debug
npm run detox:test:ios:debug
```