import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import React from "react";
import IconMat from "react-native-vector-icons/MaterialIcons"; // Use the appropriate icon set
import {
  useNavigation,
  NavigationProp,
  DrawerActions,
} from "@react-navigation/native";

// export type RootStackParamList = {

// };

const AppDrawer = ({ title='Jayanta' }) => {
  const navigation = useNavigation();

  //MENU DRAWER FUNC
  function onMenuPress() {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.title1}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onMenuPress}  style={{
            elevation: 10,
            backgroundColor: "#3073FF",
            width: 50,
            height: 50,
            
            justifyContent:'center',
            alignItems: 'center',
            borderRadius: 30
          }}>
        <IconMat
          name="menu"
          size={30}
          color="#FFF"
          // 1E232C
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppDrawer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",

  },
  title: {
    fontSize: 16,
    fontFamily: "Urbanist-Medium",
    color: "#1E232C",
  },
  title1: {
    fontSize: 30,
    fontFamily: "Urbanist-Bold",
    color: "#1E232C",
  },
});
