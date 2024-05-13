import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import AppDrawer from "../../components/Hamburger/Hamburger";
import Plan from "../../components/Plan/Plan";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import { TouchableOpacity } from "react-native-gesture-handler";

const Plans = () => {
  const planDetails = [
    { packageName: "Standard", mRate: 769 },
    { packageName: "Premium", mRate: 879 },
    { packageName: "Super Premium", mRate: 1099 },
    { packageName: "Essential", mRate: 1209 },
    { packageName: "Incredible", mRate: 1979 },
    { packageName: "Ultimate", mRate: 2529 },
  ];

  return (
    <>
      <AppDrawer />

      <ScrollView style={{ backgroundColor: "#fff", padding: 15 }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            
          }}
        >
          <View style={{ gap: 30 ,marginBottom: 70,}}>
            <Text style={{ fontFamily: "Urbanist-SemiBold", fontSize: 25 }}>
              Upgrade your plan
            </Text>

            {planDetails.map((item, index) => (
              <Plan
                key={index}
                packageName={item.packageName}
                mRate={item.mRate}
              />
            ))}
          </View>
          <TouchableOpacity>
            <Text style={{ color: "#3073FF" ,textAlign:'center',fontFamily:"Urbanist-Bold"}}> Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Plans;

const styles = StyleSheet.create({});
