import { View, Text, StyleSheet, TouchableOpacity ,ScrollView} from 'react-native'
import React, { useState } from 'react'
import AppDrawer from '../../components/Hamburger/Hamburger'
import { RadioButton } from 'react-native-paper';
import CustomInputs from '../../components/CustomInputs/CustomInputs';
import CustomButton from '../../components/CustomButton/CustomButton';



const ChangePassword = () => {
  const [value, setValue] = useState('first');
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handlePasswordChange = (inputName, value) => {
    setPasswords({ ...passwords, [inputName]: value });
  };

  function changePassword() {
    console.warn('Password Rest Link sent to Registered Email')
  }

  return (
    <>
      <AppDrawer />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Change Password</Text>
        </View>

        <ScrollView>
        <View style={styles.tableHeaderContainer}>
          <Text style={styles.headerContent}>Password type to change</Text>
          <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <View style={styles.radioButtonContainer}>

              <TouchableOpacity onPress={() => setValue('first')}>
                <View style={styles.radioButtonContainer}>
                  <RadioButton value="first" color='#3073FF' />
                  <Text selectable={true} style={styles.radioButtonText}>My Account</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setValue('second')}  >
                <View style={styles.radioButtonContainer}>
                  <RadioButton value="second" color='#3073FF' />
                  <Text selectable={true} style={styles.radioButtonText}>Internet Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tableHeaderContainer}>
          <Text style={styles.headerContent}>Current Password:</Text>
          <CustomInputs
            value={passwords.currentPassword}
            setValue={(value) => handlePasswordChange('currentPassword', value)}
            placeholder='Current Password'
            secureTextEntry
          />

          <Text style={styles.headerContent}>New Password:</Text>
          <CustomInputs
            value={passwords.newPassword}
            setValue={(value) => handlePasswordChange('newPassword', value)}
            placeholder='New Password'
            secureTextEntry
          />

          <Text style={styles.headerContent}>Confirm Password:</Text>
          <CustomInputs
            value={passwords.confirmPassword}
            setValue={(value) => handlePasswordChange('confirmPassword', value)}
            placeholder='Confirm Password'
            secureTextEntry
          />
          <CustomButton onPress={changePassword}
            text='Submit?'
            type="PRIMARY" />
        </View>
        </ScrollView>
      </View>

    </>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '98%',
    alignSelf: 'center',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    overflow: 'hidden',
    gap: 5,
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
   borderTopWidth:.5,
   borderLeftWidth:.5,
   borderRightWidth:.5,
  

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
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioButtonText: {
    fontSize: 18,
    fontFamily: 'Urbanist-Bold'
  }

})