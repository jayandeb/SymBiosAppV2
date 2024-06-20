import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

// interface CustomInputsProps {
//   value: string;
//   setValue: (value: string) => void;
//   placeholder: string;
//   secureTextEntry?: boolean;
// }


//? NOTES: for use of type script
// Using React.FC<CustomInputsProps> is a common convention in React TypeScript
// projects because it explicitly indicates that the component is a functional 
// component (FC stands for functional component) and specifies the expected props 
// with the generic type parameter <CustomInputsProps>.

//! On the other hand, using ({ value, setValue, placeholder, secureTextEntry }: CustomInputsProps) 
//! is perfectly valid and accomplishes the same thing in terms of defining the props for your
//! functional component. However, there are some differences:


const CustomInputs= ({ value, setValue, placeholder,secureTextEntry})=> {
  return ( 
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#1E232C"
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8F9",
    width: '100%',
    borderColor: "#8391A1",
    borderRadius: 7,
    fontFamily: 'Urbanist-Medium',
    borderWidth: .2,
    paddingHorizontal: 10,
    marginVertical: 10,

  },
  input: {

    fontFamily: 'Urbanist-Medium',
    color:'#1E232C'
  }
})

export default CustomInputs;