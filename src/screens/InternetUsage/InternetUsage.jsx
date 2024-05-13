import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity ,StyleSheet,ScrollView} from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import AppDrawer from '../../components/Hamburger/Hamburger';


const InternetUsage = () => {


  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];


  //!state management sets default month and year based on local 
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const showPicker = useCallback(() => setShow(true), []);
  const hidePicker = useCallback(() => setShow(false), []);


  //! on picker change handler
  const onValueChange = useCallback((event, newDate) => {
    if (newDate) {
      applyDate(newDate);
    }
  }, []);

  // ! apply date function
  const applyDate = useCallback((selected) => {
    setDate(selected);
    hidePicker();
  }, [hidePicker]);


  //!useEffect() to hide display date picker 
  useEffect(() => {
    if (show) {
      hidePicker(); // This will instantly hide the picker when show becomes true
    }
  }, [show, hidePicker]);

  
  return (
    <>
      <AppDrawer />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Internet Usage for {monthNames[date.getMonth()]}, {date.getFullYear()}</Text>
        </View>
        <View style={styles.tableHeaderContainer}>
          <Text style={styles.tableHeader}>Select Month Year:</Text>

          {/*  //!Month Year Picker */}
          <TouchableOpacity onPress={showPicker} style={styles.monthYearContainer}>
            <Text style={styles.monthYear}>{monthNames[date.getMonth()]}, {date.getFullYear()}</Text>
          </TouchableOpacity>

          {show && (
            <MonthPicker
              onChange={onValueChange}
              value={date}
              minimumDate={new Date(2015, 12)}
              maximumDate={new Date(2030, 12)}
              locale="en"
            />
          )}
          {/* //!end of Month Year Picker */}
            <ScrollView>

            </ScrollView>

        </View>
      </View>
    </>
  );
};

export default InternetUsage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    overflow: 'hidden',
    backgroundColor:'#FFFFFF'
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
  },
  tableHeader: {
    fontSize: 18,
    fontFamily: 'Urbanist-SemiBold',
    color: '#1E232C'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  monthYearContainer:{
    paddingVertical:15,
    borderBottomWidth:.5,
    borderBottomColor:'#1E232C'
  },
  monthYear:{
    fontSize:18,
    fontFamily:'Urbanist-SemiBold',
  }

})