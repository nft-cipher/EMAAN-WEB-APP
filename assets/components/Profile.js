import React, { Profiler } from 'react';
import {  ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';




const Navigatetodashboard = props => {
    props.navigation.navigate('Main');
}

const Navigatetofees = props => {
  props.navigation.navigate('Semesterfee');
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



  



const Profile = props => {
    const progress = 0.3; // set the progress value here

  
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
            <View style={{
                flexDirection:"column"
            }}>
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    height:"20%",
                    alignItems:"center",
                    alignContent:"center",justifyContent:"center",alignSelf:"center"
                }}>
                    <TouchableOpacity onPress={() => Navigatetodashboard(props)}>
                    <View style={{justifyContent:"center",alignItems:"center", borderRadius:4, marginLeft:80, width:94,height:94, flexDirection:"column", backgroundColor:"#6C6868"}}>
                        <ImageBackground source={require('../images/dashboard 2.png')} style={{
                            width:44,height:44
                        }}
                        resizeMode="contain"
                        ></ImageBackground>
                        <Text style={{fontFamily:"Roboto",color:"#ffffff"}}>Dashboard</Text>
                    </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => Navigatetofees(props)}>
                    <View style={{borderRadius:4,alignItems:"center",justifyContent:"center", marginLeft:44, width:94,height:94, backgroundColor:"#6C6868"}}>
                    <ImageBackground source={require('../images/money 1.png')} style={{
                            width:44,height:44
                        }}
                        resizeMode="contain"
                        ></ImageBackground>
                        <Text style={{fontFamily:"Roboto",color:"#ffffff"}}>Fees</Text>
                   
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigatetoperforma(props)}>
                    <View style={{borderRadius:4,alignItems:"center",justifyContent:"center", marginLeft:44, width:94,height:94, backgroundColor:"#6C6868"}}>
                    <ImageBackground source={require('../images/report-card 1.png')} style={{
                            width:44,height:44
                        }}
                        resizeMode="contain"
                        ></ImageBackground>
                        <Text style={{fontFamily:"Roboto",color:"#ffffff"}}>Performa</Text>
                   
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigatetoprofile(props)}>
                    <View style={{marginLeft:44,justifyContent:"center",alignItems:"center", borderRadius:4, width:94,height:94, backgroundColor:"#841D1D"}}>
                    <ImageBackground source={require('../images/profile 1.png')} style={{
                            width:44,height:44
                        }}
                        resizeMode="contain"
                        ></ImageBackground>
                        <Text style={{fontFamily:"Roboto",color:"#ffffff"}}>Profile</Text>
                   
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavigatetoRegistration(props)}>
                    <View style={{justifyContent:"center",alignItems:"center", marginLeft:44, width:94,height:94,borderRadius:4, backgroundColor:"#6C6868"}}>
                    <ImageBackground source={require('../images/registration 1.png')} style={{
                            width:44,height:44,marginLeft:10
                        }}
                        resizeMode="contain"
                        ></ImageBackground>
                        <Text style={{textAlign:"center", alignSelf:"center",justifyContent:"center", fontFamily:"Roboto",color:"#ffffff"}}>Registration Card</Text>
                   
                    </View>
                    </TouchableOpacity>


                </View>
                    
                    <View style={{
                        width:924,
                        alignSelf:"center",
                        alignItems:"center",
                        height:34,
                        flexDirection:"row",
                        marginBottom:20,
                        marginTop:80,
                        justifyContent:"center",
                        marginLeft:"20%"

                    }}>
                       
                        <View style={{flexDirection:"row",
                    
                    }}>
                        <View style={{
                            borderRadius:24,
                            height:44,
                            width:44,
                            borderColor:"#890505",marginBottom:75

                        }}>
                               <ImageBackground source={require('../images/Ellipse 2 (1).png')} style={{
                            width:84,height:84,borderRadius:24,marginBottom:45
                        }}
                        resizeMode="contain"
                        ></ImageBackground>

                        </View>
                        <View style={{
                            flexDirection:"column",
                            marginTop:10
                        }}>


                            
                             <Text style={{
                            fontFamily:"Roboto",
                            fontWeight:"bold",
                            paddingLeft:50,
                            fontSize:26}}>Tariq Malik</Text>
                            
                            <Text style={{
                            fontFamily:"Roboto",
                            fontWeight:"bold",
                            paddingLeft:54,
                            color:"#890505",
                            fontSize:26}}>SE 2022</Text>
                            </View>
                            <TouchableOpacity>
                            <View style={{flexDirection:"column",marginLeft:590,marginTop:20}}>
                                <Text style={{color:"#08549A",fontFamily:"Roboto", fontSize:22}}>Edit Profile</Text>
                                <View style={{height:2,width:100,backgroundColor:"#08549A"}}></View>

                            </View>
                            </TouchableOpacity>
                        </View>
                       

                    </View>
                    <View style={{
                        width:924,
                        alignSelf:"center",
                        alignItems:"center",
                        height:2,
                        backgroundColor:"#000000",
                        marginLeft:"20%"


                    }}>


                    </View>
                    <View style={{
                        flexDirection:"row",
                        marginLeft:"10%"
                    }}>
                        <View style={{
                            width:462,
                            marginTop:20,
                            height:270,
                            borderWidth:2,
                            borderColor:"#6C6868",
                            flexDirection:"column"
                        }}>
                            <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:18,paddingTop:8}}>Student Details:</Text>
                            <Text style={{color:"#B12A27",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:16,paddingTop:8}}>Email Address:</Text>
                            <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"400",paddingLeft:14,fontSize:14,paddingTop:8}}>Xyz@gmail.com</Text>
                            <Text style={{color:"#B12A27",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:16,paddingTop:15}}>Examination Seat No:</Text>
                            <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"400",paddingLeft:14,fontSize:14,paddingTop:8}}>2123433</Text>
                            <Text style={{color:"#B12A27",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:16,paddingTop:15}}>Studying Batch No:</Text>
                            <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"400",paddingLeft:14,fontSize:14,paddingTop:8}}>2123</Text>
                            <Text style={{color:"#B12A27",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:16,paddingTop:15}}>Student ID:</Text>
                            <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"400",paddingLeft:14,fontSize:14,paddingTop:8}}>2023-14413</Text>









                        </View>
                        <View style={{
                            flexDirection:"column"
                        }}>
                            <View style={{
                            width:442,
                            marginLeft:20,
                            marginTop:20,
                            height:130,
                            borderWidth:2,
                            borderColor:"#6C6868",
                            flexDirection:"column"
                            }}>
                                  <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:18,paddingTop:7}}>Login Activity:</Text>
                            <Text style={{color:"#B12A27",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:16,paddingTop:8}}>First Access:</Text>
                            <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"400",paddingLeft:14,fontSize:14,paddingTop:8}}>Sunday March 2021 22:32</Text>
                            <Text style={{color:"#B12A27",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:16,paddingTop:8}}>Last Access:</Text>
                            <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"400",paddingLeft:14,fontSize:14,paddingTop:7}}>Sunday March 2021 22:32</Text>
                            </View>
                            <View style={{
                            width:442,
                            marginLeft:20,
                            marginTop:10,
                            height:130,
                            borderWidth:2,
                            borderColor:"#6C6868",flexDirection:"column"}}>
                                                                  <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:18,paddingTop:7}}>Privacy Policy</Text>
                                                                  <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:14,paddingTop:7}}>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Text>


                            </View>
                        </View>
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

  export default Profile;