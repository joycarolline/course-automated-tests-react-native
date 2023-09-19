---
position: 1
title: MacOS - Android Emulator
---

# MacOS
Add Custom DNS `8.8.8.8` to enable Android Emulator connect with internet

![mac-dns](/img/mac-dns.png)

Reference: https://support.apple.com/guide/mac-help/change-dns-settings-on-mac-mh14127/mac

---

# Android Environment Variables

Install JAVA: https://developer.android.com/build/jdks 

Edit shell configurations
```sh
vim ~/.zshrc
```

Add environment variables
```sh
export ANDROID_HOME=$HOME/Library/Android/sdk
export ANDROID_SDK_ROOT=$ANDROID_HOME
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools
alias emulator=$HOME/Library/Android/sdk/emulator/emulator
```
Reference: https://developer.android.com/tools/variables

---

# Create Android Emulator

<video width="520" height="360" controls>
  <source src={require('/create-emulator-android.webm').default} type="video/webm" />
</video>

---

# Gradlew

Clean Android Build
```sh
cd android && ./gradlew clean
```
Reference: https://docs.gradle.org/current/userguide/gradle_wrapper.html

---

# Keyboard Resize Window
Reference: https://developer.android.com/guide/topics/manifest/activity-element#wsoft