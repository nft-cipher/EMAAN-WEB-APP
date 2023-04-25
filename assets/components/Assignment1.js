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

const Navigatetoquiz1 = props => {
  props.navigation.navigate('quiz1');
}

const Navigatetosubmit = props => {
  props.navigation.navigate('submit');
}


  



const Assignment1 = props => {
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
        <View style={{
            width:955,
            height:420,
            borderWidth:2,
            borderColor:"#AC0000",
            marginLeft:"4%",
            marginTop:"2%",
            flexDirection:"column",
        }}>
            <Text style={{color:"#B12A27",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:22,paddingTop:8}}>Assignment</Text>
            <View style={{flexDirection:"row",marginLeft:20,marginTop:20}}>
            <ImageBackground style={{ width:24,height:24}}
            source={require('../images/Group 24.png')}></ImageBackground>
                                                                              <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:18,paddingTop:7}}>Applied Physics Assignment</Text>
                                                                            
                                                                              <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:18,paddingTop:7,marginLeft:"50%"}}>6 March 2023, 10:53 AM</Text>
    
      
      
      </View>
      
      <Text style={{marginTop:10, color:"#B12A27",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:22,paddingTop:8}}>File Submission </Text>
     
      <View style={{
            width:854,
            height:174,
            borderWidth:2,
            borderColor:"#000000",
            marginTop:"2%",
            flexDirection:"column",
            alignSelf:"center"
        }}>
            <View style={{flexDirection:"row",height:34}}>
            <ImageBackground style={{ width:24,height:24,marginLeft:20,alignSelf:"center"}}
            source={require('../images/Complete.png')}></ImageBackground>
             <ImageBackground style={{ width:24,height:24,marginLeft:40,alignSelf:"center"}}
            source={require('../images/Complete (1).png')}
            resizeMode="contain"
            ></ImageBackground>
            <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"bold",paddingLeft:14,fontSize:18,paddingLeft:"10%",alignSelf:"center"}}>Files</Text>



            </View>
            <View style={{
                height:2,
                width:853,
                marginTop:5,
                backgroundColor:"#000000"
            }}></View>
            <TouchableOpacity onPress={() => Navigatetosubmit(props)}>
            <View style={{
                width:850,
                height:124,
                flexDirection:"column",
                backgroundColor:"#ECECEC",
                justifyContent:"center"

            }}>
                
                <ImageBackground style={{ width:44,height:44,marginLeft:20,alignSelf:"center"}}
            source={require('../images/Vector (2).png')}></ImageBackground>
                        <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"400",fontSize:18,alignSelf:"center",paddingTop:20}}>You can drag and drop files here to add them.</Text>
                        

            </View>
            </TouchableOpacity>


        </View> 
        <View style={{flexDirection:"row"}}>
            <View style={{flexDirection:"column"}}>
        <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"400",fontSize:14,alignSelf:"center",paddingTop:10}}>Accepted file types:</Text>
        <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"400",fontSize:12,alignSelf:"center"}}>Archive files .7z .bdoc .cdoc .ddoc .gtar .gz .gzip .hqx .rar .sit .tar .tgz .zip</Text>
        <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"400",fontSize:12,alignSelf:"center"}}>Document files .doc .docx .epub .gdoc .odt .oth .ott .pdf .rtf</Text>
        <Text style={{color:"#000000",fontFamily:"Roboto",fontWeight:"400",fontSize:12,alignSelf:"center"}}>Presentation files .gslides .odp .otp .potm .potx .ppam .pps .ppsm .ppsx .ppt .pptm .pptx .pub .sti .sxi</Text>
        </View>
        <TouchableOpacity style={{
        backgroundColor:"#0761B4",
        height:44,
        width:158,
        borderRadius:8,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:20,
        marginLeft:24,
        alignSelf:"center"
      }}
      onPress={() => Navigatetoassign1(props)}>
        <Text style={{fontFamily:"monospace",color:"#ffffff",fontSize:14,fontWeight:"bold",alignSelf:"center"}}>Save Changes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        backgroundColor:"#474242",
        height:44,
        width:158,
        borderRadius:8,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:20,
        marginLeft:24,
        alignSelf:"center"
      }}
      onPress={() => Navigatetoassign1(props)}>
        <Text style={{fontFamily:"monospace",color:"#ffffff",fontSize:14,fontWeight:"bold",alignSelf:"center"}}>Cancel</Text>
      </TouchableOpacity>

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

  export default Assignment1;