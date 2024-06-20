import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

//APP SCREENS
import CustomerHome from "../screens/CustomerHome/CustomerHome";
import MyBills from "../screens/MyBills/MyBills";
import Payments from "../screens/Payments/Payments";
import InternetUsage from "../screens/InternetUsage/InternetUsage";
import RequestPlanChange from "../screens/RequestPlanChange/RequestPlanChange";
import ChangePassword from "../screens/ChangePassword/ChangePassword";

//!to send the drawer as props to the customDrawer
import CustomDrawer from "../components/CustomDrawer/CustomDrawer";

import IconAnt from "react-native-vector-icons/AntDesign"; // Use the appropriate icon set
import IconMat from "react-native-vector-icons/MaterialIcons";



import Feedback from "../screens/Feedback/Feedback";
import Plans from "../screens/Plans/Plans";

const Drawer = createDrawerNavigator();

function AppStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: "Urbanist-Bold",
          fontSize: 16,
          color: "#1E232C",
        },
      }}
      backBehavior="none"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={CustomerHome}
        options={{
          drawerIcon: () => <IconMat name="space-dashboard" size={24} color={"#1E232C"} />,
        }}
      />

      <Drawer.Screen
        name="My Bills"
        component={MyBills}
        options={{
          drawerIcon: () => <IconMat name="receipt-long" size={24} color={"#1E232C"}/>,
        }}
      />

      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{
          drawerIcon: () => <IconMat name="payment" size={24} color={"#1E232C"}/>,
        }}
      />

      <Drawer.Screen
        name="Internet Usage"
        component={InternetUsage}
        options={{
          drawerIcon: () => <IconMat name="data-usage" size={24} color={"#1E232C"}/>,
        }}
      />
      <Drawer.Screen
        name="Plans"
        component={Plans}
        options={{
          drawerIcon: () => <IconMat name="data-exploration" size={24} color={"#1E232C"}/>,
        }}
      />

      <Drawer.Screen
        name="Request Plan Change"
        component={RequestPlanChange}
        options={{
          drawerIcon: () => <IconMat name="change-circle" size={24} color={"#1E232C"}/>,
        }}
      />

      <Drawer.Screen
        name="Change Password"
        component={ChangePassword}
        options={{
          drawerIcon: () => <IconMat name="password" size={24} color={"#1E232C"}/>,
        }}
      />
      <Drawer.Screen
        name="Feedback"
        component={Feedback}
        options={{
          drawerIcon: () => <IconMat name="feedback" size={24} color={"#1E232C"}/>,
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppStack;
