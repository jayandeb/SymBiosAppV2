import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);


  //AUTHENTICATION
  const login = async (username, password) => {
    setIsLoading(true);

 
    const response = await axios
      .post(
        `${BASE_URL}/Auth/login`,
        {
          userid: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
     
        let userInfo = response.token;
        setUserToken(userInfo);
        AsyncStorage.setItem("userToken", userInfo);

        console.log(userInfo);
      })
      .catch((error) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            console.log('Error status code:', error.response.status);
            
            if (error.response.status === 401) {

                console.log('Invalid credentials');

            } else if (error.response.status === 404) {
              
                console.log('User not found');
               
            } 
            else if (error.response.status === 500) {
              
                console.log('Internal Server Error');
               
            } else {
              
                console.log('Other error:', error.response.data);
                
            }
        } else if (error.request) {
          
            console.log('No response received:', error.request);
         
        } else {
            console.log('Error:', error.message);
          
        }
      });

    setIsLoading(false);
  };




  //!ASYNC STORAGE
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };



  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
