
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//component imports
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';


const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    )
}

export default AuthStack