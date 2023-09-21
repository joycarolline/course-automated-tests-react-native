#!bin/sh

# Build the app
npm run detox:build:ios:release

# Move the app to the build folder
mkdir -p build/release-ios/
cp -R ios/build/Build/Products/Release-iphonesimulator/RNTLTraining.app build/release-ios/