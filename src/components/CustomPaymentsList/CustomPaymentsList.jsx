import { View, Text, TouchableOpacity, StyleSheet, Linking ,Alert} from 'react-native'
import React, { useState } from 'react'

import IconAnt from 'react-native-vector-icons/AntDesign';


// interface BillDetails {
//   paymentDate: string;
//   recieptURL: string;
//   amount: number;
//   recieptId: string;
// }

// interface CustomListProps {
//   item: BillDetails;
// }


const CustomPaymentsList= ({ item }) => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };



  return (
    <View style={styles.container}>
      <View style={styles.dropDown}>
        <View style={styles.innerView}>
          <TouchableOpacity onPress={toggleCollapse}>
            <IconAnt name="pluscircleo" size={25} color="#3073FF" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.paymentDate}</Text>
        </View>

        <TouchableOpacity onPress={() => openPDF(item.recieptURL)}>
          <IconAnt name="eyeo" size={30} color="#3073FF"  />
        </TouchableOpacity>

      </View>

      {!isCollapsed && (
        <View style={styles.collapsibleContainer}>
          <View style={styles.innerCollapsibleContainer}>
            <Text style={styles.text}>Amount (₹):</Text>
            <Text style={styles.text}>{item.amount}</Text>
          </View>
          <View style={styles.innerCollapsibleContainer}>
            <Text style={styles.text}>Bill Number:</Text>
            <Text style={styles.text}>{item.recieptId}</Text>
          </View>
        </View>
      )}
    </View>
  );
};


export default CustomPaymentsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#c0c0c0',
    borderTopWidth: 1,
    padding: 15,
    
  },
  titleContainer: {
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  dropDown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight:10,
  },
  innerView: {
    flexDirection: 'row',
    gap: 10,
  },
  collapsibleContainer: {
    flexDirection: 'column',
  },
  innerCollapsibleContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    padding:10
  },
  text:{
    fontFamily:'Urbanist-Bold',
    fontSize:18
  }
})