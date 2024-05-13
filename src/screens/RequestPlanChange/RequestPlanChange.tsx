import { View, Text, StyleSheet, TouchableOpacity, Modal ,ScrollView} from 'react-native'
import React, { useState } from 'react'
import AppDrawer from '../../components/Hamburger/Hamburger'
import DropDownPicker from 'react-native-dropdown-picker'
import { Calendar } from 'react-native-calendars';
import CustomButton from '../../components/CustomButton/CustomButton';

const RequestPlanChange = () => {


  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const [items, setItems] = useState<Array<{ label: string; value: string }>>([
  ]);




  const [isCalendarVisible, setCalendarVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const openCalendar = () => {
    setCalendarVisibility(true);
  };

  const closeCalendar = () => {
    setCalendarVisibility(false);
  };

  const onDaySelect = (day: any) => {

    setSelectedDate(day.dateString);
    closeCalendar(); // Close the calendar after a day is pressed
  };

  const onRequestPlanChangeHandler = () => {
    console.warn('Plan Changed');
  }

  return (
    <>
      <AppDrawer />

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Request For Bill Plan Change</Text>
        </View>
        <ScrollView>
        <View style={styles.tableHeaderContainer}>
          <Text style={styles.headerContent}>Current Bill Plan</Text>
          <Text style={styles.textContent}>Standard - 100 LAN/40 Wi-Fi Mbps Speed till 1 TB, 8 Mbps beyond - Rs. 769</Text>
        </View>


        <View style={styles.tableHeaderContainer}>
          <Text style={styles.headerContent}>New Bill Plan</Text>

          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select New Bill Plan"
            listMode="SCROLLVIEW"
          />
        </View>

        <View style={styles.tableHeaderContainer}>
          <Text style={styles.headerContent}>Request With Effect Date (yyyy-mm-dd)</Text>


          {/* //Calendar */}
          <View >
            <TouchableOpacity onPress={openCalendar} style={styles.dateSelector}>
              <Text style={styles.date}>{selectedDate || 'Select Date'}</Text>
            </TouchableOpacity>

            <Modal visible={isCalendarVisible}
              animationType="fade"
              onRequestClose={closeCalendar}>

              <View>
                {/* Here, the Calendar component will be displayed */}
                <Calendar onDayPress={onDaySelect} />
              </View>
            </Modal>
          </View>

          {/* <TouchableOpacity style={styles.primaryButton} onPress={onRequestPlanChangeHandler}>
            <Text style={styles.buttonText}>Request Plan Change</Text>
          </TouchableOpacity> */}
        <CustomButton
        onPress={onRequestPlanChangeHandler}
        text='Submit?'
        type="PRIMARY"/>
        </View>
       
        </ScrollView>
        
      </View>
    </>
  )
}

export default RequestPlanChange

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '98%',
    alignSelf: 'center',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    overflow: 'hidden',
    gap:20,
    backgroundColor:'#FFFFFF',
    borderColor:'black',
    borderWidth:.5
   
  },
  titleContainer: {
    flexDirection: 'column',
    paddingVertical: 25,
    paddingHorizontal: 15,
    rowGap: 10,
    backgroundColor: '#3073FF',

  },
  title: {
    fontSize: 22,
    fontFamily: 'Urbanist-SemiBold',
    color: '#FFF',
  },
  tableHeaderContainer: {
    padding: 15,
    gap: 15
  },
  headerContent: {
    fontSize: 20,
    fontFamily: 'Urbanist-SemiBold',
    color: '#1E232C'
  },
  textContent: {
    fontSize: 18,
    fontFamily: 'Urbanist-SemiBold',
    color: '#528A49'
  },
  primaryButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 200,
    borderRadius: 5,
    backgroundColor: '#3073FF',

  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 16
  },
  dateSelector: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 200,
    borderBottomWidth: .5,
    borderBottomColor: '#1E232C',
  },
  date: {
    fontSize: 18,
    fontFamily: 'Urbanist-SemiBold',
    color: '#1E232C'
  }
})