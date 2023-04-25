import { StatusBar } from 'expo-status-bar';
import React, {Component}  from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState,useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Checkbox from 'expo-checkbox';







export default class Login extends Component {

  constructor(props){
    super(props)
      this.state={
        email:'',
        password:'',
        isChecked: false
      }
  }
  handleValueChange = (value) => {
    this.setState({ isChecked: value });
  }


  OnSendingData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "Email": this.state.email,
      "Password": this.state.password
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch("http://192.168.142.65:3000/api/users/login", requestOptions)
      .then(response => response.json())
      .then(result => {
    
        if (result.success) {
          this.props.navigation.navigate('Main');
        } else {

          alert('Wrong Email or Password');
        }
      })
      .catch(error => console.log('error', error));
  }
  

OnSendingDatato(){
   
  this.props.navigation.navigate('Main');

  }

  OnSendingDataforgot(){
    this.props.navigation.navigate('Forgotpass');

  }


  
  




render(){
    const { isChecked } = this.state;

    return (
      
      
      <View style={{flex:1,
        flexDirection:"row"
        }}>
            <View style={{
                width:"50%",
                height:"100%"
            }}>
                <ImageBackground source={require('../images/IMG-20230324-WA0055 1.png')}
                style={{
                    width:"100%",
                    height:"100%"
                }}
                resizeMode="cover"
                ></ImageBackground>


            </View>
            <View style={{
                height:"100%",
                width:"50%"
            }}>
                <ImageBackground style={{
        width:350,
        height:280,
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center"
      }}
      source={require('../images/img20230220wa0033-1removebgpreview-1.png')}
      resizeMode="contain">

                </ImageBackground>
                <ImageBackground source={require('../images/group-1.png')}
      style={{
        marginTop:4,
        width:427,
        height:68,
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center"
      }}>


                </ImageBackground>
                <View style={{
        flexDirection:"column"
      }}>
        <View style={{
          flexDirection:"row",
          justifyContent:"center",
          marginTop:15,
          alignContent:"center",
          alignItems:"center",
          alignSelf:"center"
        }}>
            <ImageBackground source={require('../images/Vectoar.png')}
        style={{
        marginTop:2,
        width:27,
        height:29,
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center"
      }}>
                </ImageBackground> 
                <TextInput style={{
                    height: 40,
                    margin: 12,
                    width:220,
                    padding: 10,
                    justifyContent:"center",
                    alignSelf:"center",
                    fontFamily:"Outfit_medium",
                    fontSize:31,
                    fontWeight:400,
                    
            
      }}
      placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => this.setState({email})}
      ></TextInput>
      

        </View>
        <View style={{
        height:3,
        width:448,
        backgroundColor:"#000000",
        justifyContent:"center",
        alignSelf:"center"
      }}>

        </View>

      </View>
      <View style={{
        flexDirection:"column"
      }}>
        <View style={{
          flexDirection:"row",
          justifyContent:"center",
          marginTop:15,
          alignContent:"center",
          alignItems:"center",
          alignSelf:"center"
        }}>
            <ImageBackground source={require('../images/Vector123.png')}
        style={{
        marginTop:2,
        width:27,
        height:29,
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center"
      }}>
                </ImageBackground> 
                <TextInput style={{
                    height: 40,
                    margin: 12,
                    width:220,
                    padding: 10,
                    justifyContent:"center",
                    alignSelf:"center",
                    fontFamily:"Outfit_medium",
                    fontSize:31,
                    fontWeight:400,
                    
            
      }}
      placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(password) => this.setState({password})}
      ></TextInput>
      

        </View>
        <View style={{
        height:3,
        width:448,
        backgroundColor:"#000000",
        justifyContent:"center",
        alignSelf:"center"
      }}></View>

      </View>

     
      <TouchableOpacity style={{
        backgroundColor:"#890505",
        height:54,
        width:448,
        borderRadius:8,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:20,
        alignSelf:"center"
      }}
      onPress={this.OnSendingDatato.bind(this)}
      >
        <Text style={{fontFamily:"monospace",color:"#ffffff",fontSize:22,fontWeight:"bold"}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        height:54,
        width:448,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:20,
        alignSelf:"center"
      }}
      onPress={this.OnSendingDataforgot.bind(this)}
      >
        <Text style={{fontFamily:"monospace",color:"#000000",fontSize:22,fontWeight:"bold"}}>Forgot Password?</Text>
      </TouchableOpacity>

      
      
      </View>
          


      </View>
    );
  }
}
 
  const styles = StyleSheet.create({
    inputView:{
      marginBottom:20,

      alignItems:"center",
      alignContent:"center",
      justifyContent:"space-evenly",
      backgroundColor: "#ffffff",
      borderRadius: 5,
      width: "80%",
      height: 55,
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 350,
    },
    button: {
      padding: 15,
      alignItems: 'center',
      justifyContent:'center',
      alignSelf:'center',
      borderRadius: 5,
      height:55,
      width:290,
      marginBottom:70,
    },
    TextInput:{
      alignContent:"center",
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"monospace",
      width:250,
      

    },
    imageview:{
      width: 150,
      height:180,
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center",
      marginTop:40
      

    }
  })