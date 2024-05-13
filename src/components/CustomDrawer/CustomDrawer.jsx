
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native'
import { AuthContext } from '../../Context/AuthContext';




const CustomDrawer = (props) => {

const {logout}=useContext(AuthContext)

  return (

    <View style={styles.container}>
      <DrawerContentScrollView>
        <View style={styles.imgContainer}>
        <Image source={require('../../../assets/logo/logo.png')} style={styles.drawerImg}/>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>


      {/* SIGN OUT  */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={()=>{logout()}} style={styles.buttonSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  imgContainer:{
    padding:20,
    alignItems:'center'
  },
  drawerImg:{
    width:100,
    height:100,
   
  },
  container: {
    flex: 1,
   
  },
  bottomContainer:{
    padding:15,
  },
  buttonSignOut:{
    padding:15,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#bde0fe',
    borderRadius:50
  },
  buttonText:{
    color:'#3073FF',
    fontFamily:'Urbanist-medium',
    fontWeight:'bold'
  }
})
