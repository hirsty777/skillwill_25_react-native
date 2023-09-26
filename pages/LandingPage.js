import React from 'react'
import { Image, StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native'
import { useFonts } from 'expo-font';
const logoImg = require("../assets/fb.png")
const googleImg = require("../assets/google.jpg")
const microsoftImg = require("../assets/microsoft.jpg")


export default function LandingPage() {
  const [fontsLoaded] = useFonts({
    InstaFont: require('../assets/fonts/Instagram.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator style={{flex:1,backgroundColor:"#fafafa"}} color="#03992b" size="large"/>
  }
 
  return (
    <View style={styles.wrapper}>
      <View style={styles.logContainer}>
        <View style={styles.titleContainer}>
          <Text style={{fontFamily:'InstaFont',fontSize:25}}>Skillwillgram</Text>
        </View>
        <View style={styles.inputsContainer}>
            <TextInput style={styles.input} placeholder='Phone number, username, or email'/>
            <TextInput style={styles.input} placeholder='Password'/>
            <View style={styles.CustomButton}>
              <Text style={{alignSelf:"center",color:"#ffffff",fontWeight:"bold"}}>Log in</Text>
            </View>
        </View>
        <View style={styles.divider} >
            <Text style={styles.line}></Text>
            <Text>OR</Text>
            <Text style={styles.line}></Text>
        </View>
        <View style={styles.fbContainer}>
          <Image source={logoImg} style={{width:20,height:20}}/>
          <Text>Log in with Facebook</Text>
        </View>
        <Text>Forgot password?</Text>
      </View>
      <View style={styles.signContainer}>
        <Text>Don`t have an account?</Text>
        <Text style={{color:"rgb(0, 106, 255)"}}>Sign up</Text>
      </View>
      <Text>Get the app</Text>
      <View style={{flexDirection:"row",columnGap:5}}>
        <Image source={googleImg} style={{width:100,height:30,resizeMode:"contain"}}/>
        <Image source={microsoftImg} style={{width:100,height:30,resizeMode:"contain"}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
      flex:1,
      alignItems:"center",
      paddingTop:"20%",
      rowGap:10,
    },
    logContainer:{
      width:250,
      minHeight:350,
      alignItems:"center",
      justifyContent:"start",
      rowGap:10,
      borderWidth: 1,
      borderColor:"rgba(0, 0, 0, 0.44)",
    },
    titleContainer:{
      width:"70%",
      height:100,
      alignItems:"center",
      justifyContent:"center",
    },
    inputsContainer:{
      width:"70%",
      rowGap:10
    },
    input:{
      width:"100%",
      height:35,
      paddingLeft:10,
      borderWidth:1,
      borderColor:"rgba(0, 0, 0, 0.44)",
      backgroundColor:"#fafafa"
    },
    CustomButton:{
      padding:5,
      backgroundColor:"#4cb5f9",
      borderRadius:6,
    },
    divider:{
      flexDirection:"row",
      width:"70%",
      justifyContent:"space-between"
    },
    line:{
      width:"35%",
      height:"50%",
      borderBottomWidth:1,
      borderBottomColor:"rgba(0, 0, 0, 0.3)",
    },
    fbContainer:{
      flexDirection:"row",
      columnGap:10
    },
    signContainer:{
      width:250,
      minHeight:50,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      borderWidth:1,
      borderColor:"rgba(0, 0, 0, 0.44)"
    }
})