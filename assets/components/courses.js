import React from 'react';
import {  ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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


  



const courses = props => {
    const progress = 0.3; // set the progress value here
    const [isChecked, setChecked] = useState(false);


  
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
            <TouchableOpacity onPress={() => NavigatetoViatext(props)}>
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
            <View style={{flexDirection:"column"}}>
            <View style={{
            width:955,
            height:90,
            borderWidth:2,
            borderColor:"#AC0000",
            marginLeft:"4%",
            marginTop:"2%",
            flexDirection:"column",
            justifyContent:"center"
        }}>
                                                                              <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:18,paddingTop:7}}>Applied Physics | Regular Session 2023 | SEC B</Text>
                                                                              <View style={{flexDirection:"row"}}>
                                                                              <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:18,paddingTop:7}}>My Courses </Text>
                                                                              <Text style={{color:"#AC0000",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:18,paddingTop:7}}>/ Phy121 | Regular Session </Text>


                                                                              </View>


        </View>
        <View style={{flexDirection:"row",marginLeft:"5%",marginTop:20}}>
            <TouchableOpacity >
        <Text style={{marginLeft:10, fontFamily:"monospace",color:"#AC0000" ,fontSize:20,fontWeight:"bold"}}>This Course</Text>
        </TouchableOpacity>
        <View style={{width:2,height:30,backgroundColor:"#000000",marginLeft:5}}></View>
        <TouchableOpacity onPress={() => Navigatetoallcourses(props)}>
        <Text style={{marginLeft:10, fontFamily:"monospace",color:"#00000" ,fontSize:20,fontWeight:"bold"}}>All Courses</Text>
        </TouchableOpacity>



        </View>
        <View style={{height:2,width:955,backgroundColor:"#000000",marginTop:5,marginLeft:40}}></View>
        <View style={{marginLeft:40,}}>
        <View style={{
                        width:955,
                        marginTop:10,
                        alignSelf:"center",
                        alignItems:"center",
                        height:34,
                        flexDirection:"row",
                        justifyContent:"space-between"


                    }}>
                        <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#AC0000"}}>Date</Text>
                        <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#AC0000"}}>Description</Text>
                        <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#AC0000"}}>Status</Text>
                        <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#AC0000"}}>Points</Text>
       
                    </View>
                    <View style={{
                        width:955,
                        alignSelf:"center",
                        alignItems:"center",
                        height:34,
                        flexDirection:"row",
                        justifyContent:"space-between",
                        backgroundColor:"#D9D9D9"

                    }}>
                        <View style={{flexDirection:"column"}}>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Thu 16 Feb 2023</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>10AM - 11AM</Text>
                                                </View>
                                                <View style={{flexDirection:"column",marginRight:65}}>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Regular Class</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Session</Text>
                                                </View>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000",paddingRight:100}}>Present</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>1/1</Text>
                                              
                    </View>
                    <View style={{
                        width:955,
                        alignSelf:"center",
                        alignItems:"center",
                        height:34,
                        flexDirection:"row",
                        justifyContent:"space-between",
                        marginTop:5

                    }}>
                            <View style={{flexDirection:"column"}}>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Thu 16 Feb 2023</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>10AM - 11AM</Text>
                                                </View>
                                                <View style={{flexDirection:"column",marginRight:65}}>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Regular Class</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Session</Text>
                                                </View>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000",paddingRight:100}}>Present</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>1/1</Text>
                         
                    </View>
                    <View style={{
                        width:955,
                        alignSelf:"center",
                        alignItems:"center",
                        height:34,
                        flexDirection:"row",
                        justifyContent:"space-between",
                        marginTop:5,backgroundColor:"#D9D9D9"

                    }}>
                            <View style={{flexDirection:"column"}}>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Thu 16 Feb 2023</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>10AM - 11AM</Text>
                                                </View>
                                                <View style={{flexDirection:"column",marginRight:65}}>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Regular Class</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Session</Text>
                                                </View>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000",paddingRight:100}}>Present</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>1/1</Text>
                         
                    </View>
                    <View style={{
                        width:955,
                        alignSelf:"center",
                        alignItems:"center",
                        height:34,
                        flexDirection:"row",
                        justifyContent:"space-between",
                        marginTop:5

                    }}>
                            <View style={{flexDirection:"column"}}>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Thu 16 Feb 2023</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>10AM - 11AM</Text>
                                                </View>
                                                <View style={{flexDirection:"column",marginRight:65}}>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Regular Class</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Session</Text>
                                                </View>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000",paddingRight:100}}>Present</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>1/1</Text>
                         
                    </View>
                    <View style={{
                        width:955,
                        alignSelf:"center",
                        alignItems:"center",
                        height:34,
                        flexDirection:"row",
                        justifyContent:"space-between",
                        marginTop:5,
                        backgroundColor:"#D9D9D9"

                    }}>
                            <View style={{flexDirection:"column"}}>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Thu 16 Feb 2023</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>10AM - 11AM</Text>
                                                </View>
                                                <View style={{flexDirection:"column",marginRight:65}}>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Regular Class</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Session</Text>
                                                </View>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000",paddingRight:100}}>Present</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>1/1</Text>
                         
                    </View>
                    <View style={{
                        width:955,
                        alignSelf:"center",
                        alignItems:"center",
                        height:34,
                        flexDirection:"row",
                        justifyContent:"space-between",
                        marginTop:5,


                    }}>
                            <View style={{flexDirection:"column"}}>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Thu 16 Feb 2023</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>10AM - 11AM</Text>
                                                </View>
                                                <View style={{flexDirection:"column",marginRight:65}}>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Regular Class</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>Session</Text>
                                                </View>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000",paddingRight:100}}>Present</Text>
                                                <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000"}}>1/1</Text>
                         
                    </View>
                    <View style={{height:2,width:955,backgroundColor:"#000000",marginTop:5}}></View>
                    <View style={{
                        flexDirection:"column",
                        
                    }}></View>
                    <Text style={{fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000",paddingRight:100}}>Total Sessions : 24</Text>
                    <Text style={{paddingTop:5, fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000",paddingRight:100}}>Taken Sessions : 4</Text>
                    <Text style={{paddingTop:5, fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000",paddingRight:100}}>Points over taken sessions: 4/ 5</Text>
                    <Text style={{paddingTop:5, fontFamily:"Roboto",fontSize:18,fontWeight:"bold",color:"#000000",paddingRight:100}}>Percentage over taken sessions: 80%</Text>


                    </View>
        

      

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

  export default courses;