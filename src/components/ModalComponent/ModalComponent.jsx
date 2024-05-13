import { StyleSheet, Text, View ,Button,TouchableOpacity} from 'react-native'
import React ,{useState} from 'react'
import Modal from "react-native-modal";
import { white } from 'react-native-paper/lib/typescript/styles/colors';


const ModalComponent = ({children}) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  return (
    <View style={{ flex:1,width:"100%",}}>
    <Button title="Show modal" onPress={toggleModal} />

    <Modal  propagateSwipe={true}  isVisible={isModalVisible}  onBackdropPress={() => setModalVisible(false)}>
        <TouchableOpacity style={{width:30,height:30,backgroundColor:"#000",borderRadius:20,justifyContent:'center',alignItems:'center'}} onPress={toggleModal}>
          <Text style={{color:"#fff"}}>X</Text>
        </TouchableOpacity>
    {children}

      
    </Modal>
  </View>
  )
}

export default ModalComponent

const styles = StyleSheet.create({})