import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";

import CustomInputs from "../../components/CustomInputs/CustomInputs";
import CustomButton from "../../components/CustomButton/CustomButton";
import DropdownPicker from "../../components/DropdownPicker/DropdownPicker";
import { useNavigation, StackActions } from "@react-navigation/native";
import { AuthContext } from "../../Context/AuthContext";

//Assets require
const Logo = require("../../../assets/logo/logo.png");

const SignInScreen = () => {
  //STATES AND FUNCTIONALITY

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //useContext

  const { login,isLoading } = useContext(AuthContext);

  //Height for logo image
  const { height } = useWindowDimensions();
  //NAVIGATION
  const navigation = useNavigation();

  function onForgotPassword() {
    //request/respond
    navigation.navigate("ForgotPassword");
  }

  //FOR DROP DOWN *NOTE ON USING MULTIPLE dropdown
  // need to use open and onOpen state to avoid multle dropdown being opened at the same time
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const [items, setItems] = useState([
    { label: "Dimapur", value: "DMP-SXLX" },
    { label: "Kohima", value: "KOH-SCLX" },
    { label: "Mokokchung", value: "MKG-SCLX" },
    { label: "Karbi Anglong", value: "LKB-SCLX" },
    { label: "Tuensang", value: "NLTSG" },
    { label: "Tegnoupal", value: "MNTNL" },
    { label: "Kakching", value: "MNKCG" },
    { label: "Zunheboto", value: "NLZTO" },
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        {/* custom component */}
        <DropdownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select Location"
          listMode="SCROLLVIEW"

          // searchable={true}
        />

        <CustomInputs
          value={username}
          setValue={setUsername}
          placeholder="Username"
        />

        <CustomInputs
          value={password}
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry
        />

        <CustomButton
        isLoading={isLoading}
          onPress={() => {
            login(username, password)
          }}
          text="Sign In"
        />

        <CustomButton
          onPress={()=>navigation.navigate("ForgotPassword")}
          text="Forgot Password?"
          type="TERTIARY"
        />
      </View>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    fontFamily: "Urbanist-Regular",
  },

  logo: {
    width: "60%",
    margin: "15%",
    maxHeight: 300,
    maxWidth: 300,
  },
});

export default SignInScreen;
