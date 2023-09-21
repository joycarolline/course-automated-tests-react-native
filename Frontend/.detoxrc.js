/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Debug-iphonesimulator/RNTLTraining.app',
      build:
        'xcodebuild -workspace ios/RNTLTraining.xcworkspace -scheme RNTLTraining -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Release-iphonesimulator/RNTLTraining.app',
      build:
        'xcodebuild -workspace ios/RNTLTraining.xcworkspace -scheme RNTLTraining -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'ios.release.pipeline': {
      type: 'ios.app',
      binaryPath: 'build/release-ios/RNTLTraining.app',
      build:
        'xcodebuild -workspace ios/RNTLTraining.xcworkspace -scheme RNTLTraining -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      reversePorts: [8081],
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build:
        'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release',
    },
    'android.release.pipeline': {
      type: 'android.apk',
      binaryPath: 'build/release-android/release/app-release.apk',
      testBinaryPath:
        'build/release-android/androidTest/release/app-release-androidTest.apk',
      build:
        'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 12',
      },
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'test',
      },
    },
    pipeline: {
      type: 'android.emulator',
      device: {
        avdName: 'test',
      },
    },
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
    },
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release',
    },
    'ios.sim.release.pipeline': {
      device: 'simulator',
      app: 'ios.release.pipeline',
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.debug',
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.release',
    },
    'android.emu.release.pipeline': {
      device: 'pipeline',
      app: 'android.release.pipeline',
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
    },
  },
  artifacts: {
    plugins: {
      video: {
        simulator: {
          codec: 'h264',
        },
      },
    },
  },
};
