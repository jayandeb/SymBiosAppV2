import React, { useContext } from "react";

import AppStack from "./AppStack";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { AuthContext } from "../Context/AuthContext";

import { ActivityIndicator , View, StyleSheet} from "react-native";
function AppNav() {

  const { isLoading, userToken } = useContext(AuthContext);

  //!commented coz loader added in button
  // if (isLoading) {
  //   return(<View style={styles.loader}>
  //     <ActivityIndicator size={'large'}/>
  //   </View>)
  // }
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
      {/* <AppStack /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loader:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});

export default AppNav;
