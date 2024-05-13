import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Navigation
import SplashScreen from "react-native-splash-screen";

import { AuthProvider } from "./Context/AuthContext";
import AppNav from "./Navigation/AppNav";

function App() {
  useEffect(() => {
    const hideSplashScreen = setTimeout(() => {
      SplashScreen.hide();
    }, 1000); // 2000 milliseconds (2 seconds)

    return () => clearTimeout(hideSplashScreen);
  }, []);

  return (
    <AuthProvider>
      <SafeAreaView style={styles.root}>
        <AppNav />
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default App;
