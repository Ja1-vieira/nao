import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
       <Text>expo build’s Final Year
The Classic Build service will support up to SDK 46 (June 2022) and will run until 2023.

This blog post covers the why and how of the end-of-life for the Classic Build Service. If you’d like to skip ahead tomigrating to EAS Build, refer this guide.

Over five years ago, the Expo team launched expo build, a way to take an Expo project in development and turn it into a standalone app to submit to the app stores. Since then, developers have used expo build for millions of successful builds across 32 SDK releases, and we open-sourced its local version called Turtle CLI, a way to run builds on your own hardware.

At the same time, we’ve been working to support custom native code in Expo apps. Several feature requests for the general Expo workflow stemmed from one fundamental limitation: the need for custom native code. This project was a broad undertaking across the workflow that we shared in a two-part blog post (part 1, part 2), and we’re really happy Expo now supports custom native code. Another benefit of modern Expo apps is that they sometimes are 10x smaller than ones built with expo build.

However, when we wrote expo build five years ago, we designed it for how Expo apps worked back then: each app included all of the native modules in the Expo SDK and there was no way to fully customize the app’s native code. We needed a new build service to support building modern Expo apps with custom native code in the cloud. This service became EAS Build, a big part of Expo Application Services (EAS), which we fully released earlier this month. Developers have already created over 100,000 successful builds with EAS Build since it was available in preview.

EAS Build is more capable than expo build, which we also now call the Classic Build service. With a small team working on our build services, we plan to spend most of our time on EAS Build going forward, and expo build/Classic Builds are entering maintenance mode until 2023.

Maintenance mode for Classic Builds
Classic Builds and Turtle CLI will be updated through SDK 46, which is slated for June 2022. This means projects that use future SDKs 44, 45, and 46 will be able to use expo build or Turtle CLI to create standalone apps.

Projects that use SDK 47 and later will need to migrate from Classic Builds and Turtle CLI. There are several mutually compatible options that are already available today.

One option is to “prebuild” Android Studio and Xcode projects and compile them locally. Developers can run expo prebuild to generate android and ios folders that can be built with Android Studio and Xcode like any other Android or iOS app using your own hardware.
The second option is to use EAS Build (migration guide), which is a cloud service and the option most similar to expo build. It also manages all your app-signing credentials and works with EAS Submit to automatically submit your apps to the stores. Like Classic Builds, EAS Build has a free tier as well as subscription plans that offer higher-priority builds and higher time limits aimed at teams and professionals.
The third option is to use EAS Build’s local runner (eas build --local), which uses your own hardware to build your apps locally and EAS to manage your app-signing credentials.
Notably, options 1 and 3 run on your own hardware and are otherwise free without limits and option 2 runs in the EAS cloud. You can mix-and-match the above options depending on your tasks at hand and what’s important to you.

The end of the road
Classic Builds will continue to run after SDK 46’s release through all of 2022. The planned last date expo build will work is January 4, 2023.

After this date, running expo build with Expo CLI will no longer work. These other commands related to expo build will also no longer work and have replacements:

expo client:ios: this command was already deprecated. Instead, create development builds of your apps with expo-dev-client, which can include the same custom native code as your production builds. You can compile development builds directly with Android Studio and Xcode after running expo prebuild. With EAS, you can use EAS Build with a development profile (eas build --profile development).
expo credentials:*, expo fetch:*, and expo push:*: these commands configure your app-signing and push notification credentials used with expo build. You can manually manage your credentials the way you would with any other Android or iOS app if you’re building directly with Android Studio or Xcode. If you’re using EAS, you can automatically set up and view your credentials with eas credentials and also can view them on expo.dev.
expo webhooks:*: this command lets you set up a webhook that the Classic Build service notifies when a build finishes. With EAS, the new command is eas webhook:create.
Turtle CLI will continue to work for the SDK versions it supports, namely, SDK 46 and earlier.

Timeline
The most important dates that affect developers who use Classic Builds are September 2022 and January 4, 2023.

Seven months from now: we plan to release SDK 47 sometime in September next year. This will be the first SDK version that won’t work with expo build. Another important event next September is the expected release of iOS 16. In practice, this means you will need to migrate from Classic Builds to build apps with Xcode 14 and the iOS 16 SDK.

Thirteen months from now: we’re planning for the expo build service to stop. All projects will need to have migrated from expo build, regardless of SDK version. </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  knightText: {
    fontSize: 35,
    marginTop: 38,
    paddingLeft: 84,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  hornetText: {
    fontSize: 35,
    marginTop: 38,
    paddingLeft: 84,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#794149'
  },
  hollowKnightText: {
    fontSize: 35,
    marginTop: 35,
    paddingLeft: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#e68758'
  },
  hornetCard: {
    backgroundColor: '#292d27',
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 60,
    borderRadius: 30,
    borderColor: '#794149',
    borderWidth: 7,
  },
  knightCard: {
    backgroundColor: '#292d27',
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 100,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 7
  },
  hollowKnightCard: {
    backgroundColor: '#292d27',
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 60,
    borderRadius: 30,
    borderColor: '#e68758',
    borderWidth: 7
  },
  saberMais: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
  iconImage: {
    position: 'absolute',
    width: 200,
    height: 200,
    resizeMode: 'contain',
    right: 20,
    top: -80,
  },
});