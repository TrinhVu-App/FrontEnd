import axios from "axios";
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { BASE_URL } from "../config";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ContextAPI = createContext();

export const APIProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setUserInfo] = useState();
    const [storyOfInterest, setStoryOfIntrest] = useState(421);
    const [pageNumb, setPageNumb] = useState(false)
    // const [storyData, setStoryData] = useState({});


    // useEffect(() => {
    //     setIsLoading(true);
    //     AsyncStorage.getItem('userInfo').then(res => {
    //         setUserInfo(JSON.parse(res).data)
    //         setIsLoading(false);
    //     })

    // }, [])

    async function getUserInfo() {
        setIsLoading(true);
        await AsyncStorage.getItem('userInfo')
          .then(res => {
            setTimeout(()=> {
              setUserInfo(JSON.parse(res));
              setIsLoading(false);
            }, 1000)
            
          })
    
      }
      useEffect(() => {
        getUserInfo()
      }, [])

    const register = ( navigation, name, email, password, password_confirmation) => {
        setIsLoading(true)
        axios
            .post(`${BASE_URL}/api/register`, {
                name,
                email,
                password,
                password_confirmation
            })
            .then(res => {
                setIsLoading(false);
                navigation.navigate('login')
                Alert.alert("Registration Successful", "You can now login with your new account!")
            })
            .catch(e => {
                Alert.alert("Registration Failed",  e.response.data.message)
                setIsLoading(false);
            });
    };

    const login = (email, password) => {
        setIsLoading(true);

        axios.post(`${BASE_URL}/api/login`, {
            email, password
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
        }).catch(e => {
            console.log(e.response.data.message);
            Alert.alert('Login failed', e.response.data.message);
            setIsLoading(false);
        })
    }

    const storyDetailContext = (id) => {
        setStoryOfIntrest(id);
    }

    const updateTimerID = (timingID) => {
        setTimerID(timingID)
    }

    const logout = async (navigation) => {
        try {
            await AsyncStorage.removeItem('userInfo')
            setUserInfo()
            navigation.reset({
                index: 0,
                routes: [{ name: 'login' }],
              });
          } catch(e) {
            console.log(e.message);
          }
    }

    return (
        <ContextAPI.Provider
            value={{
                isLoading,
                register,
                login,
                storyOfInterest,
                storyDetailContext,
                pageNumb,
                setPageNumb,
                logout,
                userInfo,
                // setUserInfo
                // loadStories
            }}>
            {children}
        </ContextAPI.Provider>
    )

}