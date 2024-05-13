import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React,{useState} from "react";
import { ScrollView } from "react-native-gesture-handler";
import IconMat from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import BottomModal from "../../components/BottomModal/BottomModal";

import BillSummary from './BillSummary';

const ViewBill = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
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
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Urbanist-Bold",
                color: "#000",
                marginTop: 10,
              }}
            >
              Bill Details
            </Text>
          </View>

          <View style={styles.imgContainer1}>
            <View
              style={{ borderBottomColor: "#8d99ae", borderBottomWidth: 0.5 }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Urbanist-Bold",
                  color: "#8d99ae",
                  marginTop: 10,
                  textAlign: "center",
                }}
              >
                Amount
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                  marginVertical: 10,
                  textAlign: "center",
                }}
              >
                ₹ 1024.46
              </Text>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Urbanist-Bold",
                  color: "#8d99ae",
                  marginTop: 10,
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
              </View>

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
            <View style={{ marginVertical: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Urbanist-Bold",
                  color: "#8d99ae",
                  marginTop: 10,
                }}
              >
                Bill Plan
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Urbanist-Bold",
                  color: "#000",
                  marginVertical: 10,
                }}
              >
                Premium - 100 LAN/50 Wi-Fi Mbps Speed till 1.5 TB, 8 Mbps beyond
                - Rs. 879
              </Text>
            </View>
            <TouchableOpacity
               onPress={openModal}
              style={{ alignItems: "center" }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Urbanist-Bold",
                  color: "#3073FF",
                  marginVertical: 10,
                }}
              >
                View Bill Summary
              </Text>
            </TouchableOpacity>
            <BottomModal
                  visible={modalVisible}
                  onClose={closeModal}
                  content={<BillSummary visible={closeModal}/>} 
                />
          </View>
          <View style={styles.imgContainer1}>
            <View>
              <View
                style={{
                  elevation: 6,
                  backgroundColor: "#fff",
                  borderRadius: 30,
                }}
              >
                <TouchableOpacity style={styles.pay}>
                  <Text style={styles.payText}>Pay</Text>
                </TouchableOpacity>
              
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ViewBill;

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
  },
  payText: {
    color: "#FFF",
    fontSize: 22,
    fontFamily: "Urbanist-SemiBold",
  },
});
