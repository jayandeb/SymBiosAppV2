import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import IconMat from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const BillSummary = ({visible}) => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#FFF", padding: 15 }}>
      <View style={styles.imgContainer}>
        <TouchableOpacity
          onPress={visible}
          style={{
            position: "absolute",
            left: "5%",
            top: "30%",
            backgroundColor: "#a7c957",
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
            elevation: 6,
          }}
        >
          <IconMat
            name="keyboard-arrow-left"
            size={30}
            color="#FFF"
            // 1E232C
          />
        </TouchableOpacity>
        <Image
          source={require("../../../assets/logo/logo.png")}
          style={styles.drawerImg}
        />
      </View>
      <ScrollView style={{ backgroundColor: "#FFF" }}>
        <View
          style={{
            backgroundColor: "#fafaff",
            padding: 15,
            borderRadius: 20,
            gap: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              fontFamily: "Urbanist-Bold",
              color: "#000",
            }}
          >
            Bill Summary
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontFamily: "Urbanist-Bold",
              color: "#8e9aaf",
            }}
          >
            Bill Date : 01 March 2024
          </Text>

          <View style={{ gap: 18, paddingBottom: "60%" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                User Id
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                DMP-SCLX1000
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                Bill Plan
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                Premium{" "}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                Cycle Charges
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹879
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                Other Charges(+)
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹42.37
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                Waiver(-)
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹0.00
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                Sub Total
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹921.37
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                Central GST @ 9%
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹82.92
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                State GST @ 9%
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹82.92
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                IGST @ 18%
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹82.92
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                Previous Balance(+)
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹0.00
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹1,087.22
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                Advance Payment
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹44.32
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                Net Payable
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹1,042.89
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                  width: "60%",
                }}
              >
                Amount Payable after Amount Payable after 15-Mar-24*
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹1,092.89
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                  width: "60%",
                }}
              >
                Amount Payable after 15-Mar-24* 20-Mar-24*
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹1,142.89
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BillSummary;

const styles = StyleSheet.create({
  imgContainer: {
    padding: 20,
    alignItems: "center",
    position: "relative",
  },
  drawerImg: {
    width: 80,
    height: 80,
  },
});
