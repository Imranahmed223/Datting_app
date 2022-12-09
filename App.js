import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from './src/Navigations/StackNavigator';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";
import { useCallback, useEffect, useState } from 'react';

// Custom fonts declaration
let customFonts = {
  "AzoSans-Regular": require("./assets/fonts/AzoSans-Regular.ttf"),
  "AzoSans-Medium": require("./assets/fonts/AzoSans-Medium.ttf")
};

export default function App() {
  //This state keeps track if the app has rendered
  const [ready, setReady] = useState();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const readyApp = async () => {
    try {
      // Keep the splash screen visible while we fetch resources
      console.log(
        "Trigger the Splash Screen visible till this try block resolves the promise"
      );
      await SplashScreen.preventAutoHideAsync();

      //Explicit delay to mock some loading time
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      console.log("Render the application screen");
      //Set ready to true to render the application
      setReady(true);
    }
  };

  // loading fonts when App.js renders
  const _loadFontsAsync = async () => {
    try {
      await Font.loadAsync(customFonts);
    } catch (e) {
      console.log("Fonts error", e);
    } finally {
      // fonts loaded successfully 
      setFontsLoaded(true);
    }
  };

  // Function called to hide the splash screen if ready is true
  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      console.log("Hide the splash screen immediately");
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  // this hook renders firstly when App.js loaded
  useEffect(() => {
    readyApp();
    _loadFontsAsync();
  }, []);

  if (!ready) {
    return null;
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
