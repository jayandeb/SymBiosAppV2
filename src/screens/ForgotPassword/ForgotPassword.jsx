import { ScrollView, StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInputs from '../../components/CustomInputs/CustomInputs'

import DropdownPicker from '../../components/DropdownPicker/DropdownPicker'
import { useNavigation } from '@react-navigation/native'


const ForgotPassword = () => {


    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');


    //navigation
    const navigation=useNavigation()



    function onForgotPassword() {
        console.warn('Password Rest Link sent to Registered Email')
    }

    const [items, setItems] = useState([
        { label: 'Dimapur', value: 'DMP-SXLX' },
        { label: 'Kohima', value: 'KOH-SCLX' },
        { label: 'Mokokchung', value: 'MKG-SCLX' },
        { label: 'Karbi Anglong', value: 'LKB-SCLX' },
        { label: 'Tuensang', value: 'NLTSG' },
        { label: 'Tegnoupal', value: 'MNTNL' },
        { label: 'Kakching', value: 'MNKCG' },
        { label: 'Zunheboto', value: 'NLZTO' }
    ]);


    function onLoginPress(){
        navigation.navigate('SignInScreen')
    }

    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.title}>Forgot Password?</Text>
                    <Text style={styles.info}>No worries! Submit your registered details in the form to get the recovery link in your email.</Text>
                </View>
                {/* custom component */}
                <View style={styles.section}>
                    <DropdownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder="Select Location"
                        listMode="SCROLLVIEW"

                    // searchable={true}
                    />

                    <CustomInputs
                        value={username}
                        setValue={setUsername}
                        placeholder='Username' />

                    <CustomInputs
                        value={email}
                        setValue={setEmail}
                        placeholder='email' />

                    <CustomButton
                        onPress={onForgotPassword}
                        text='Send Recovery Link'
                    />
                </View>
                <View style={styles.section}>
                    <Text style={styles.forgotUsername}>Forgot Username?</Text>

                    <Text style={styles.infoBottom}>Please contact our Customer Care for further assistance.</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.infoBottom}>Remember Password?
                        <Text style={styles.loginBottom} onPress={onLoginPress}>Login</Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        padding: 20,

    },
    section: {
        marginVertical: 30,
        fontFamily: 'Urbanist-Medium',
    },
    title: {
        fontFamily: 'Urbanist-Bold',
        
        fontSize: 30,
        color: '#1E232C'
        
    },
    forgotUsername: {
        fontFamily: 'Urbanist-Medium',
        textAlign: 'center',
        fontSize: 18,
        color: '#1E232C',
        fontWeight: '500'

    },
    info: {
        fontFamily: 'Urbanist-Medium',
        color: '#8391A1',
        fontSize: 18,
        fontWeight: '500'
    },
    infoBottom: {
        fontFamily: 'Urbanist-Medium',
        textAlign: 'center',
        fontSize: 14,
        color: '#1E232C',
        fontWeight: '500'
    },
    loginBottom:{
        fontFamily: 'Urbanist-Medium',
        color:"#0675DC"
        
    }

})