import axios from "axios";
import React from "react";
import { createContext, useState } from "react";
import { BASE_URL } from "../config";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ContextAPI = createContext();

export const APIProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    // const [storyData, setStoryData] = useState({});

    const register = (name, email, password, password_confirmation) => {
        setIsLoading(true)
        axios
            .post(`${BASE_URL}/api/register`, {
                name,
                email,
                password,
                password_confirmation
            })
            .then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
                Alert.alert("Registration Successful", "You can now go to back to login screen to login!")
                console.log(userInfo);
            })
            .catch(e => {
                console.log(`Registration error: ${e}`);
                Alert.alert("Registration Failed", "Please check your information again")
                setIsLoading(false);
            });
    };

    const login = (email, password) => {
        setIsLoading(true);

        axios.post(`${BASE_URL}/api/login`, {
            email, password
        }).then(res => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
        }).catch(e => {
            console.log(e);
            Alert.alert('Login failed', 'Check your credentials');
            setIsLoading(false);
        })
    }

    // const loadStories = () => {
    //     setIsLoading(true);

    //     axios
    //         .get(`${BASE_URL}/story`)
    //         .then(res => {
    //             let storyData = res.data;
    //             console.log(storyData);
    //             setStoryData(storyData);
    //             AsyncStorage.setItem('storyData', JSON.stringify(storyData));
    //             setIsLoading(false);
    //         })
    //         .catch(e => {
    //              console.log(e);
    //              setIsLoading(false);
    //         })
    // }


    return (
        <ContextAPI.Provider
            value={{
                isLoading,
                userInfo,
                register,
                login,
                storyData,
                // loadStories
                }}>
            {children}
        </ContextAPI.Provider>
    )

}