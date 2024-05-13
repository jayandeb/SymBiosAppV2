import { GestureResponderEvent, StyleSheet,TouchableWithoutFeedback} from 'react-native'
import React, { useRef,Dispatch,SetStateAction }  from 'react'
import DropDownPicker from 'react-native-dropdown-picker';


// interface DropDownPickerProps {
//     open:boolean;
//     value:string;
//     items:Array<{ label: string; value: string }>;
//     setOpen:Dispatch<SetStateAction<boolean>>;
//     setValue:Dispatch<SetStateAction<string>>;
//     setItems:Dispatch<SetStateAction<Array<{ label: string; value: string }>>>;
//     placeholder:string;
//     listMode:string;
// }

const DropdownPicker = ({open,value,items,setOpen,setValue,setItems,placeholder,listMode}) => {

  
    return (
   
    <DropDownPicker
    open={open}
    value={value}
    items={items}
    setOpen={setOpen}
    setValue={setValue}
    setItems={setItems}
    style={styles.dropdown}
    placeholder="Select Location"
    listMode="SCROLLVIEW"
    
  // searchable={true}
  />
 
  )
}

export default DropdownPicker

const styles = StyleSheet.create({
    dropdown:{
        marginVertical:10,
        borderColor:"#8391A1",
        backgroundColor:"#F7F8F9",
        borderWidth: .2,
        borderRadius: 5,
      }
})