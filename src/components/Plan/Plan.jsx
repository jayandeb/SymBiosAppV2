import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";

import IconAnt from "react-native-vector-icons/AntDesign";

const Plan = ({ packageName, mRate }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={{ borderBottomColor: "#edf2fb", borderBottomWidth: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
      >
        <Text
          style={{ fontSize: 25, fontFamily: "Urbanist-Bold", color: "#000" }}
        >
          {packageName}
        </Text>
        {!isCollapsed ? (
          <TouchableOpacity onPress={toggleCollapse}>
            <IconAnt name="minus" size={30} color="#3073FF" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={toggleCollapse}>
            <IconAnt name="plus" size={30} color="#3073FF" />
          </TouchableOpacity>
        )}
      </View>

      {!isCollapsed && (
        <View
          style={{
            width: "98%",
            padding: 15,
            backgroundColor: "#edf2fb",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomColor: "#000",
              borderBottomWidth: 0.5,
              marginBottom: "5%",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                }}
              >
                ₹{mRate}
              </Text>
              <Text style={{ fontFamily: "Urbanist-Bold",}}>+GST</Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  color: "#3073FF",
                  fontFamily: "Urbanist-Medium",
                }}
              >
                View Details
              </Text>
            </TouchableOpacity>
          </View>




          <View
            style={{ flexDirection: "row", justifyContent: "space-between" ,marginVertical:15}}
          >
            <View style={{gap:5}}>
              <Text style={{ fontFamily: "Urbanist-Bold", color: "#000" }}>
                DATA
              </Text>
              <Text style={{ fontFamily: "Urbanist-Medium", color: "#000" }}>
                Unlimited @100 Mbps
              </Text>
            </View>

            <View style={{gap:5}}>
              <Text style={{ fontFamily: "Urbanist-Bold", color: "#000" }}>
                SUBSCRIPTIONS
              </Text>
              <View style={{ flexDirection: "row" ,alignItems:'center'}}>
                <Image style={{width:30,height:30,borderRadius:100}} src="https://assets.designhill.com/design-blog/wp-content/uploads/2023/12/5.jpg" resizeMode="contain" />
                <Image style={{width:30,height:30,borderRadius:100}} src="https://download.logo.wine/logo/Amazon_Prime/Amazon_Prime-Logo.wine.png" resizeMode="contain" />
              
                <Text style={{ fontFamily: "Urbanist-Bold", color: "#000" }}>+6</Text>
              </View>
            </View>

          </View>



          <View>
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
                backgroundColor: "#3073FF",
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 18,
                  fontFamily: "Urbanist-SemiBold",
                }}
              >
                Recharge
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Plan;

const styles = StyleSheet.create({});
