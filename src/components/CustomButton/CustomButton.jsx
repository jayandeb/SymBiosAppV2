import { Pressable, StyleSheet,ActivityIndicator, Text } from 'react-native'
import React,{useContext, useState} from 'react'


// interface CustomButtonProps {
//   text: string;
//   onPress: () => void; //typescripting for incase a props accepts a function
//   type?: 'PRIMARY' | 'TERTIARY' ;
// }

const CustomButton= ({ onPress, text, type = 'PRIMARY',isLoading=false }) => {

 const [Loading,setLoading] = useState(isLoading)
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
        {isLoading ? <ActivityIndicator  size="small" color="#ffffff" /> : <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>}
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  container: {

    width: "100%",
    padding: 20,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 7,
  },
  container_PRIMARY: {
    backgroundColor: "#0675DC",
    
  },
  container_TERTIARY: {

  }
  ,
  text: {
    
    fontFamily: 'Urbanist-Bold',
    color: "#FFFFFF"
  }
  ,
  text_PRIMARY: {
   
    color: "#FFFFFF",
    fontFamily: 'Urbanist-Bold',
  }
  ,
  text_TERTIARY: {
   
    fontFamily: 'Urbanist-Bold',
    color: "#0675DC"
  }
})