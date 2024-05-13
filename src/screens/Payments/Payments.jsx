import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import AppDrawer from '../../components/Hamburger/Hamburger'
import CustomPaymentsList from '../../components/CustomPaymentsList/CustomPaymentsList';



// interface BillDetails {
//   paymentDate: string;
//   recieptURL: string;
//   amount: number;
//   recieptId: string;
//   // Add any other properties as needed
// }

const Payments = () => {


  //change with api fetched data
  const userDetails = [
    {
      paymentDate: '2023-01-15',
      recieptURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 50.25,
      recieptId: 'BILL-001'
    },
    {
      paymentDate: '2023-02-05',
      recieptURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 75.00,
      recieptId: 'BILL-002'
    },
    {
      paymentDate: '2023-03-20',
      recieptURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 120.50,
      recieptId: 'BILL-003'
    },
    {
      paymentDate: '2023-04-10',
      recieptURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 90.80,
      recieptId: 'BILL-004'
    },
    {
      paymentDate: '2023-05-05',
      recieptURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 60.00,
      recieptId: 'BILL-005'
    },
    {
      paymentDate: '2023-06-18',
      recieptURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 200.00,
      recieptId: 'BILL-006'
    },
    {
      paymentDate: '2023-07-02',
      recieptURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 150.75,
      recieptId: 'BILL-007'
    },
    {
      paymentDate: '2023-08-25',
      recieptURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 85.20,
      recieptId: 'BILL-008'
    },
    {
      paymentDate: '2023-09-12',
      recieptURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 100.00,
      recieptId: 'BILL-009'
    },
    {
      paymentDate: '2023-10-30',
      recieptURL: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      amount: 45.50,
      recieptId: 'BILL-010'
    }
  ];


  const renderItem = ({ item }) => (
    <CustomPaymentsList item={item} />
  );



  return (
    <> 
    <AppDrawer />
    <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Payments (Last 24 Months)</Text>
        </View>
        <View style={styles.tableHeaderContainer}>
          <Text style={styles.tableHeader}>Payment Date</Text>
          <Text style={styles.tableHeader}>View Reciept</Text>
        </View>

        <FlatList
          data={userDetails}
          renderItem={renderItem}
        />
      </View>
    </>
  )
}

export default Payments


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