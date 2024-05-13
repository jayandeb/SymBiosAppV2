import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import AppDrawer from '../../components/Hamburger/Hamburger'

import CustomBillsList from '../../components/CustomBillsList/CustomBillsList';


// interface BillDetails {
//   billDate: string;
//   billURL: string;
//   amount: number;
//   dueDate: string;
//   billNumber: string;
//   // Add any other properties as needed
// }

const MyBills = () => {

  //change with api fetched data
  const userDetails = [
    {
      billDate: '2023-01-15',
      billURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 50.25,
      dueDate: '2023-02-15',
      billNumber: 'BILL-001'
    },
    {
      billDate: '2023-02-05',
      billURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 75.00,
      dueDate: '2023-03-05',
      billNumber: 'BILL-002'
    },
    {
      billDate: '2023-03-20',
      billURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 120.50,
      dueDate: '2023-04-20',
      billNumber: 'BILL-003'
    },
    {
      billDate: '2023-04-10',
      billURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 90.80,
      dueDate: '2023-05-10',
      billNumber: 'BILL-004'
    },
    {
      billDate: '2023-05-05',
      billURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 60.00,
      dueDate: '2023-06-05',
      billNumber: 'BILL-005'
    },
    {
      billDate: '2023-06-18',
      billURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 200.00,
      dueDate: '2023-07-18',
      billNumber: 'BILL-006'
    },
    {
      billDate: '2023-07-02',
      billURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 150.75,
      dueDate: '2023-08-02',
      billNumber: 'BILL-007'
    },
    {
      billDate: '2023-08-25',
      billURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 85.20,
      dueDate: '2023-09-25',
      billNumber: 'BILL-008'
    },
    {
      billDate: '2023-09-12',
      billURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 100.00,
      dueDate: '2023-10-12',
      billNumber: 'BILL-009'
    },
    {
      billDate: '2023-10-30',
      billURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 45.50,
      dueDate: '2023-11-30',
      billNumber: 'BILL-010'
    }
  ];


  const renderItem = ({ item }) => (
    <CustomBillsList item={item} />
  );

  return (
    <>
      <AppDrawer />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Bills (Last 12 Months)</Text>
        </View>
        <View style={styles.tableHeaderContainer}>
          <Text style={styles.tableHeader}>Bill Date</Text>
          <Text style={styles.tableHeader}>View Bill</Text>
        </View>

        <FlatList
          data={userDetails}
          renderItem={renderItem}
        />
      </View>
    </>
  )
}

export default MyBills

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '98%',
    alignSelf: 'center',
   borderTopRightRadius:5,
   borderTopLeftRadius:5,
   overflow:'hidden',
   backgroundColor:'#FFFFFF',
   borderColor:'black',
   borderWidth:.5
  },
  titleContainer: {
    flexDirection: 'column',
    paddingVertical: 25,
    paddingHorizontal: 15,
    rowGap: 10,
    backgroundColor:'#3073FF', 
   
  },
  title: {
    fontSize: 22,
    fontFamily: 'Urbanist-SemiBold',
    color: '#FFF',
  },
  tableHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  tableHeader: {
    fontSize: 18,
    fontFamily: 'Urbanist-SemiBold',
    color:'#1E232C'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})