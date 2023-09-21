#!bin/sh

# Build the app
npm run detox:build:android:release

# Move the apk to the build folder
mkdir -p build/release-android/
mkdir -p build/release-android/release/
cp -R android/app/build/outputs/apk/release/ build/release-android/release/

mkdir -p build/release-android/androidTest/release/
cp -R android/app/build/outputs/apk/androidTest/release/ build/release-android/androidTest/release/