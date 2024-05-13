import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import React from "react";
import IconAnt from "react-native-vector-icons/AntDesign"; // Use the appropriate icon set
import IconMat from "react-native-vector-icons/MaterialIcons";
import AppDrawer from "../../components/Hamburger/Hamburger";
import CarouselMain from "../../components/Carousel/CarouselMain";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import UserDetails from "../UserDetails/UserDetails";
import ViewBill from "../ViewBill/ViewBill";
import Feedback from "../Feedback/Feedback";
import BillSummary from "../ViewBill/BillSummary";

//DUMMY


const Stack = createNativeStackNavigator();

// SCREEN
export const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <AppDrawer  />

      <ScrollView >
        <CarouselMain />
        {/* NAME AND MENU LINES */}

        {/* CARD */}
        <View style={styles.cardContainer}>
          <View style={[styles.card, styles.card1]}>
            <View style={styles.cardContent}>
              <IconAnt name="user" size={30} color="#3073FF" />
              {/* <Text style={[styles.cardTitle, styles.cardTitle1]}>
                User Details
              </Text> */}
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.userData1}>DMP-SCLX</Text>
              <Text style={styles.userData2}>1000</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("UserDetails")}
                style={styles.ViewMore}
              >
                <IconMat name="keyboard-arrow-right" size={30} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.card, styles.card2]}>
            <View style={styles.cardContent}>
              <IconMat name="calendar-month" size={30} color="#3073FF" />
              {/* <Text style={[styles.cardTitle, styles.cardTitle1]}>
                Plan Details
              </Text> */}
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.userData1}>SymBios Starter</Text>
              <Text style={styles.userData2}>30 Mbps</Text>
            </View>
          </View>

          <View style={[styles.card, styles.card3]}>
            <View style={styles.cardContent}>
              <IconMat name="receipt" size={30} color="#3073FF" />
              {/* <Text style={[styles.cardTitle, styles.cardTitle1]}>
                Bill Details
              </Text> */}
            </View>

            <View style={[styles.dataContainer, styles.dataFlexContainer]}>
              <View>
                <Text style={styles.userData1}>Your Bill</Text>
                <Text style={styles.userData2}>₹1024.46</Text>
              </View>
              <View>
                <Text style={styles.userData1}>Due Date</Text>
                <Text
                  style={{
                    color: "#e63942",
                    fontSize: 28,
                    fontFamily: "Urbanist-ExtraBold",
                  }}
                >
                  15 Mar 24
                </Text>
              </View>
            </View>
            <View style={[styles.dataContainer, styles.dataFlexContainer]}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ViewBill")}
                style={styles.button1}
              >
                <Text
                  style={{
                    color: "#3073FF",
                    fontSize: 16,
                    fontFamily: "Urbanist-ExtraBold",
                  }}
                >
                  View Bill
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => console.warn("Pay now")}
                style={[styles.button1, styles.button2]}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontSize: 16,
                    fontFamily: "Urbanist-ExtraBold",
                  }}
                >
                  Pay now
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.card, styles.card4]}>
            <View style={styles.cardContent}>
              <IconMat name="payments" size={30} color="#FFF" />
              <Text style={[styles.cardTitle, styles.cardTitle2]}>
                Payments
              </Text>
            </View>
          </View>
        </View>

       
      </ScrollView>
      
    </>
  );
};

function CustomerHome() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
      <Stack.Screen name="BillSummary" component={BillSummary} />
      <Stack.Screen name="ViewBill" component={ViewBill} />
      <Stack.Screen name="Feedback" component={Feedback} />
    </Stack.Navigator>
  );
}

export default CustomerHome;

//?STYLES
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontFamily: "Urbanist-ExtraBold",
    color: "#1E232C",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    height: 150, // Set your desired height
    marginBottom: 10,
    borderRadius: 15, // Space between the cards
    padding: 15,
    elevation: 6,
  },
  cardContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card1: {
    width: "46%", // 50% of the device width
    backgroundColor: "#FFF", // Change color as needed'#DCEAAD'
    margin: "2%",
    elevation: 6,
  },
  card2: {
    width: "46%", // 50% of the device width
    backgroundColor: "#FFF", // Change color as needed'#EF6822'
    margin: "2%",
    elevation: 6,
  },
  card3: {
    width: "96%", // Occupies full width
    backgroundColor: "#FFF", // Change color as needed'#F9CE0A'
    height: "auto",
    margin: "2%",
    elevation: 8,
  },
  card4: {
    borderRadius: 15,
    width: "96%", // Occupies full width
    backgroundColor: "#3073FF", // Change color as needed
    margin: "2%",
    elevation: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "Urbanist-ExtraBold",
  },
  cardTitle1: {
    color: "#1E232C",
  },
  cardTitle2: {
    color: "#FFF",
  },

  dataContainer: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    position: "relative",
  },
  dataFlexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userData1: {
    color: "#6c757d",
    fontSize: 18,
    fontFamily: "Urbanist-ExtraBold",
    fontWeight: "500",
    marginBottom: 5,
  },
  userData2: {
    color: "#3073FF",
    fontSize: 28,
    fontWeight: "800",
    fontFamily: "Urbanist-ExtraBold",
  },
  ViewMore: {
    position: "absolute",
    width: 35,
    height: 35,
    borderRadius: 100,
    bottom: 10,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3073FF",
    elevation: 6,
  },

  button1: {
    width: 140,
    height: 50,
    borderRadius: 100,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid ",
    borderWidth: 1,
    borderColor: "#3073FF",
    backgroundColor: "#FFF",
    elevation: 1,
  },
  button2: {
    backgroundColor: "#3073FF",
    elevation: 1,
  },
});
