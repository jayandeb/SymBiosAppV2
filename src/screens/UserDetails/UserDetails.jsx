import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import IconMat from "react-native-vector-icons/MaterialIcons";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconMatCI from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";





const UserDetails = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={{ padding: 15, gap: 10 }}>
          <View style={styles.imgContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
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

          <View style={styles.imgContainer1}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                style={{ width: 80, height: 80 }}
                src="https://media.licdn.com/dms/image/D4D03AQGX5bquK74JEA/profile-displayphoto-shrink_800_800/0/1703577269120?e=1715817600&v=beta&t=8mJk9k-d5vaFjtnXktTCoKfYIHCKw6FjVuMfJkjN7R4"
              />

              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Urbanist-Bold",
                    color: "#000",
                    marginTop: 10,
                  }}
                >
                  Jayanta Debnath
                </Text>

                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Urbanist-Bold",
                    color: "#000",
                    marginTop: 10,
                  }}
                >
                  +91 9862257437
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Urbanist-Bold",
                    color: "#000",
                    marginTop: 10,
                  }}
                >
                  jayanta.debnath@symbios.in
                </Text>
              </View>
            </View>
            {/* USER DETAILS */}
            <View style={{ marginVertical: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Urbanist-Bold",
                  color: "#8d99ae",
                  marginVertical: 15,
                }}
              >
                User Details
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <IconAnt name="idcard" size={30} color="#a7c957" />
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Urbanist-Bold",
                    color: "#000",
                    marginTop: 10,
                  }}
                >
                  DMP-SCLX1000
                </Text>
              </View>
            </View>
            <View style={{ marginVertical: 10 }}>
              
              <View style={{flexDirection:'row',alignItems:'center',gap:5,justifyContent:'space-between'}}>
                <IconMat name="location-history" size={30} color="#a7c957" />
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Urbanist-Bold",
                    color: "#000",
                    marginVertical: 10,
                    width:"50%",
                    textAlign:"right",
                  }}
                >
                  209 Lhomithi Village Block-2 Dimapur Nagaland{" "}
                </Text>
              </View>

              <View style={{flexDirection:'row',alignItems:'center',gap:5,justifyContent:'space-between'}}>
                <IconMatCI name="connection" size={30} color="#a7c957" />
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "Urbanist-Bold",
                    color: "#000",
                    marginVertical: 10,
                  }}
                >
                  01 April 2021{" "}
                </Text>
              </View>
            </View>

          </View>


          {/* <View style={styles.imgContainer1}>
            <View>
              <View
                style={{
                  elevation: 6,
                  backgroundColor: "#fff",
                  borderRadius: 30,
                }}
              >
                <TouchableOpacity style={styles.pay}>
                  <Text style={styles.payText}>Share</Text>
                  <IconAnt name="sharealt" size={25} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  imgContainer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  imgContainer1: {
    padding: 20,

    backgroundColor: "#fff",
    borderRadius: 20,
  },
  drawerImg: {
    width: 80,
    height: 80,
  },

  pay: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#a7c957",
    flexDirection:'row',
    gap:5
  },
  payText: {
    color: "#FFF",
    fontSize: 22,
    fontFamily: "Urbanist-SemiBold",
  },
});
