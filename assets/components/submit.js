import React from 'react';
import {  ImageBackground, StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';





const Navigatetodashboard = props => {
    props.navigation.navigate('Main');
}

const Navigatetofees = props => {
  props.navigation.navigate('Semesterfee1');
}

const NavigatetoRegistration = props => {
  props.navigation.navigate('Registration');
}

const Navigatetoperforma = props => {
  props.navigation.navigate('Performa');
}

const Navigatetoprofile = props => {
  props.navigation.navigate('Profile');
}


const Navigatetoallcourses = props => {
  props.navigation.navigate('allcourses');
}

const Navigatetoquiz1 = props => {
  props.navigation.navigate('quiz1');
}

const Navigatetosubmit = props => {
  props.navigation.navigate('submit');
}


const Navigatetosubmitted = props => {
  props.navigation.navigate('submitted');
}


  



const submit = props => {

    const [saveas, setSaveAs] = useState('');
  const [submitby, setSubmitBy] = useState('');


  
    return (
      <View style={{flex:1,
      flexDirection:"column"
      }}>
        <View
        style={{
            flexDirection:"row",
            width:"100%",
            height:"10%",
            justifyContent:"space-evenly",
            alignContent:"space-between",
            alignItems:"center"
        }}
        
        >
            <ImageBackground style={{marginLeft:144, width:84,height:84,marginTop:5}}
            source={require('../images/img20230220wa0033-1removebgpreview-1.png')}
            resizeMode="contain"
            ></ImageBackground>
            <Text style={{fontFamily:"Roboto",fontSize:22,fontWeight:"bold"}}>EMAAN LEARNING MANAGEMENT SYSTEM</Text>
            <View style={{borderRadius:24,width:44,height:44,borderWidth:2,borderColor:"#890505",justifyContent:"center",alignItems:"center"}}>
                <ImageBackground style={{borderRadius:24, width:24,height:24}}
            source={require('../images/Vector123.png')}></ImageBackground>
            </View>
            <TouchableOpacity onPress={() => Navigatetodashboard(props)}>
            <ImageBackground style={{borderRadius:24, width:24,height:24}}
            source={require('../images/Vector.png')}></ImageBackground>
            </TouchableOpacity>

        </View>
        <View style={{width:"100%",height:2,backgroundColor:"#890505"}}></View>
        <View style={{
            flexDirection:"row",
            height:"84%",
            width:"100%"
        }}>
            <View style={{
                height:"100%",
                width:"25%",
                flexDirection:"column",
                backgroundColor:"#3C3C3C"
            }}>
                <View style={{height:"9.4%", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/dashboard 1.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#ffffff" ,fontSize:22,fontWeight:"800"}}>Dashboard</Text>
                    </TouchableOpacity>

                </View>
                <View style={{width:"100%",height:1,backgroundColor:"#ffffff"}}></View>

                <View style={{height:"9.4%", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/calendar 1.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#ffffff" ,fontSize:22,fontWeight:"800"}}>Academic Calender</Text>
                    </TouchableOpacity>

                </View>
                <View style={{width:"100%",height:1,backgroundColor:"#ffffff"}}></View>
                <View style={{height:"9.4%", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{flexDirection:"row"}}>

                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/document 1.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#ffffff" ,fontSize:22,fontWeight:"800"}}>Private Files</Text>
                    </TouchableOpacity>

                </View>
                <View style={{width:"100%",height:1,backgroundColor:"#ffffff"}}></View><View style={{height:"9.4%", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/education 1.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#ffffff" ,fontSize:22,fontWeight:"800"}}>My Courses</Text>
                    </TouchableOpacity>

                </View>
                <View style={{width:"100%",height:1,backgroundColor:"#ffffff"}}></View><View style={{height:"10%", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/learning 1.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#ffffff" ,fontSize:16,fontWeight:"800"}}>Phy121 | Applied Physics</Text>
                    </TouchableOpacity>

                </View>
                <View style={{width:"100%",height:1,backgroundColor:"#ffffff"}}></View><View style={{height:"10%", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/learning 1.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#ffffff" ,fontSize:16,fontWeight:"800"}}>CSC241 | Object Oriented Programming</Text>
                    </TouchableOpacity>

                </View>
                <View style={{width:"100%",height:1,backgroundColor:"#ffffff"}}></View><View style={{height:"10%", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/learning 1.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#ffffff" ,fontSize:16,fontWeight:"800"}}>CSC201 | Discrete Structures</Text>
                    </TouchableOpacity>

                </View>
                <View style={{width:"100%",height:1,backgroundColor:"#ffffff"}}></View><View style={{height:"10%", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/learning 1.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#ffffff" ,fontSize:16,fontWeight:"800"}}>CSC186 | Report Writing</Text>
                    </TouchableOpacity>

                </View>
                <View style={{width:"100%",height:1,backgroundColor:"#ffffff"}}></View><View style={{height:"10%", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/learning 1.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#ffffff" ,fontSize:16,fontWeight:"800"}}>CSC241 | Introduction to Business</Text>
                    </TouchableOpacity>

                </View>

            </View>
            <View style={{
                flexDirection:"column",
            }}>
                <View style={{
                    flexDirection:"row",
                    marginLeft:"45%",
                }}>
                <TouchableOpacity style={{
        backgroundColor:"#AC0000",
        height:44,
        width:158,
        borderRadius:8,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:20,
        marginLeft:24,
      }}
      onPress={() => Navigatetoassign1(props)}>
        <Text style={{fontFamily:"monospace",color:"#ffffff",fontSize:14,fontWeight:"bold",alignSelf:"center"}}>Upload file</Text>
      </TouchableOpacity><TouchableOpacity style={{
        backgroundColor:"#474242",
        height:44,
        width:158,
        borderRadius:8,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:20,
        marginLeft:24,
      }}
      onPress={() => Navigatetoassign1(props)}>
        <Text style={{fontFamily:"monospace",color:"#ffffff",fontSize:14,fontWeight:"bold",alignSelf:"center"}}>Recent files</Text>
      </TouchableOpacity><TouchableOpacity style={{
        backgroundColor:"#474242",
        height:44,
        width:158,
        borderRadius:8,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:20,
        marginLeft:24,
      }}
      onPress={() => Navigatetoassign1(props)}>
        <Text style={{fontFamily:"monospace",color:"#ffffff",fontSize:14,fontWeight:"bold",alignSelf:"center"}}>Cancel</Text>
      </TouchableOpacity>
                
                </View>

                <View style={{
                    flexDirection:"row"
                }}>
                  

                    

                </View>

                <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"bold",fontSize:28, marginLeft:20, paddingTop:20}}>Attachment</Text>
                <View style={{
                    flexDirection:"row"
                }}>
                <TouchableOpacity style={{
        backgroundColor:"#474242",
        height:44,
        width:128,
        borderRadius:8,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:20,
        marginLeft:24,
      }}
      onPress={() => Navigatetoassign1(props)}>
        <Text style={{fontFamily:"monospace",color:"#ffffff",fontSize:14,fontWeights:"bold",alignSelf:"center"}}>Choose File</Text>
      </TouchableOpacity>
      <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"400",fontSize:18,alignSelf:"center",paddingTop:20, paddingLeft:30}}>No files Choosen.</Text>

      
      </View>
      <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"bold",fontSize:24,paddingTop:20,paddingLeft:20}}>Save as</Text>
      <TextInput style={{
        marginLeft:20,
        borderWidth:2,
        borderRadius:14,
        height:44,
        width:628,
        fontFamily: 'Outfit_medium',
        fontSize: 16,
        fontWeight: 400,
        
      }}
      placeholder="document.pdf"
      placeholderTextColor="#003f5c"
      onChangeText={(text) => setSaveAs(text)}
      value={saveas}
      
      ></TextInput>
      <Text style={{marginLeft:20, color: '#000000', fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 28, paddingTop: 20 }}>Submitted by</Text>
     <TextInput style={{
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
        marginLeft:20,
        borderWidth:2,
        borderRadius:14,
        height:44,
        width:628,
        fontFamily: 'Outfit_medium',
        fontSize: 16,
        fontWeight: 400,
        
      }}
      placeholder="Shoaib Tariq"
      placeholderTextColor="#003f5c"
      onChangeText={(text) => setSubmitBy(text)}
      value={submitby}
     ></TextInput>
       <TouchableOpacity style={{
        backgroundColor:"#0761B4",
        height:44,
        width:188,
        borderRadius:8,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:150,
        alignSelf:"center",
        marginLeft:530
      }}
      onPress={() => Navigatetosubmitted(props)}>
        <Text style={{fontFamily:"monospace",color:"#ffffff",fontSize:14,fontWeight:"bold",alignSelf:"center"}}>Upload File</Text>
      </TouchableOpacity>

                </View>



        
        </View>
    
        <View style={{
            flexDirection:"row",
            backgroundColor:"#861C1C",
            width:"100%",
            height:"6%",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <ImageBackground style={{ width:444,height:444}}
            source={require('../images/© 2021 – All rights reserved. • Powered by Emaan Institute of Management & Science.png')}
            resizeMode="contain"
            ></ImageBackground>
            </View>   
                            



  

        </View>
    );
  }

  const styles= StyleSheet.create({
    imageview:{ width:150,
      height:180,
      marginBottom:20,
      alignContent:"center",
      alignItems:"center",
      justifyContent:"center"

    },
    button: {
      padding: 15,
      alignItems: 'center',
      justifyContent:'center',
      alignSelf:'center',
      borderRadius: 5,
      height:60,
      width:250,
      marginBottom:20,
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 350,
    },

  })

  export default submit;