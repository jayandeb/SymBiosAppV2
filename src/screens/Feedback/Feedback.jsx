import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React from "react";
import AppDrawer from "../../components/Hamburger/Hamburger";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "../../components/CustomButton/CustomButton";

const Feedback = () => {
 
  return (
    <>
      <AppDrawer />
 
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Share your feedback</Text>
          </View>

          <View>
            <Text style={styles.h3}>Rate your experience</Text>
            <View style={styles.emojiContainer}>
              <TouchableOpacity style={styles.emojiButton}>
                <Text style={styles.emoji}>😍</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.emojiButton}>
                <Text style={styles.emoji}>😊</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.emojiButton}>
                <Text style={styles.emoji}>🙂</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.emojiButton}>
                <Text style={styles.emoji}>😕</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.emojiButton}>
                <Text style={styles.emoji}>😢</Text>
              </TouchableOpacity>
            </View>
          

          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={10}
            placeholder="Write your feedback here"
            textAlignVertical="top"
          />
          <View style={{elevation:6,backgroundColor:"#fff",borderRadius:30}}>
         <TouchableOpacity style={styles.send}><Text style={styles.sendText}>Send</Text></TouchableOpacity>

         </View>
        </View>
        </View>
    </>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  titleContainer: {
    flexDirection: "column",
  },
  title: {
    fontSize: 26,
    fontFamily: "Urbanist-SemiBold",
    color: "#000000",
    marginBottom: '5%',
  },
  h3: {
    fontSize: 18,
    fontFamily: "Urbanist-SemiBold",
    color: "#000000",
  },

  emojiContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical:  '5%',
  },

  emojiButton: {
    backgroundColor: "#edf2fb",
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  emoji: {
    fontSize: 30,
    color: "#000000",
  },
  textArea: {
    backgroundColor: "#edf2fb",
    borderRadius: 10,
    padding: 20,
    marginVertical: '10%'
  },
  send: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#3073FF",
  },
  sendText:{
    color:"#FFF",
    fontSize:18,
    fontFamily:"Urbanist-SemiBold"
  }
});
