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

const Navigatetoquiz = props => {
  props.navigation.navigate('quiz');
}

const Navigatetoannounce = props => {
  props.navigation.navigate('announcement');
}


const Navigatetoassignment = props => {
  props.navigation.navigate('Assignment');
}





  



const course1 = props => {
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
            height:150,
            borderWidth:2,
            borderColor:"#AC0000",
            marginLeft:"4%",
            marginTop:"2%",
            flexDirection:"column",
        }}>
                               <View style={{marginLeft:"80%", flexDirection:"row",marginTop:8}}>
                               <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/Group (1).png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#000000" ,fontSize:16,fontWeight:"800"}}>Your Progress</Text>
                    </TouchableOpacity>
                                
                               </View>
                               <View style={{ flexDirection:"row",marginLeft:5}}>
                               <TouchableOpacity style={{flexDirection:"row",width:"100%"}} onPress={() => Navigatetoannounce(props)}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/Chat.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#000000" ,fontSize:16,fontWeight:"800"}}>Announcement</Text>
                    </TouchableOpacity>
                                
                               </View>
                               <View style={{ flexDirection:"row",marginLeft:5}}>
                               <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/event 1.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#000000" ,fontSize:16,fontWeight:"800"}}>Attendantce</Text>
                    <Checkbox 
                    style={{marginLeft:"80%"}}
                    value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#AC0000' : undefined}/>

                    </TouchableOpacity>
                                
                               </View>
                               <View style={{ flexDirection:"row",marginLeft:5}}>
                               <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/Group (2).png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#000000" ,fontSize:16,fontWeight:"800"}}>Book</Text>
                    <Checkbox 
                    style={{marginLeft:"87.2%"}}
                    value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#AC0000' : undefined}/>

                    </TouchableOpacity>
                                
                               </View>
                               <View style={{ flexDirection:"row",marginLeft:5}}>
                               <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/Group 24.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#000000" ,fontSize:16,fontWeight:"800"}}>Course Outline</Text>
                    <Checkbox 
                    style={{marginLeft:"77.1%"}}
                    value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#AC0000' : undefined}/>

                    </TouchableOpacity>
                                
                               </View>


        </View>
        <View style={{
            width:955,
            height:300,
            borderWidth:2,
            borderColor:"#AC0000",
            marginLeft:"4%",
            marginTop:"2%",
            flexDirection:"column",
        }}>
                               <View style={{ flexDirection:"row",marginTop:8}}>
                               <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#AC0000" ,fontSize:22,fontWeight:"bold"}}>Quiz</Text>
                    </TouchableOpacity>
                                
                               </View>
                               <View style={{ flexDirection:"row",marginLeft:5,marginTop:10}}>
                               <TouchableOpacity style={{flexDirection:"row",width:"100%"}} onPress={() => Navigatetoquiz(props)}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/quiz 1.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#000000" ,fontSize:16,fontWeight:"800"}}>Quiz 1</Text>
                    <Checkbox 
                    style={{marginLeft:"85%"}}
                    value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#AC0000' : undefined}/>
                    </TouchableOpacity>
                                
                               </View>
                               <View style={{marginTop:10, height:1,width:945,backgroundColor:"#928E8E",alignSelf:"center"}}>

                               </View>
                               <View style={{ flexDirection:"row",marginTop:8}}>
                               <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#AC0000" ,fontSize:22,fontWeight:"bold"}}>Assignment</Text>
                    </TouchableOpacity>
                                
                               </View>
                               <View style={{ flexDirection:"row",marginLeft:5,marginTop:10}}>
                               <TouchableOpacity style={{flexDirection:"row",width:"100%"}} onPress={() => Navigatetoassignment(props)}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/Group 25.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#000000" ,fontSize:16,fontWeight:"800"}}>Assignment</Text>
                    <Checkbox 
                    style={{marginLeft:"81%"}}
                    value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#AC0000' : undefined}/>
                    </TouchableOpacity>
                                
                               </View>
                               <View style={{marginTop:10, height:1,width:945,backgroundColor:"#928E8E",alignSelf:"center"}}>
                                
                               </View>
                               <View style={{ flexDirection:"row",marginTop:8}}>
                               <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#AC0000" ,fontSize:22,fontWeight:"bold"}}>Lectures</Text>
                    </TouchableOpacity>
                                
                               </View>
                               <View style={{ flexDirection:"row",marginLeft:5,marginTop:10}}>
                               <TouchableOpacity style={{flexDirection:"row",width:"100%"}}>
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/Group 26.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#000000" ,fontSize:16,fontWeight:"800"}}>Lecture 1- Intoduction</Text>
                    <Checkbox 
                    style={{marginLeft:"69%"}}
                    value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#AC0000' : undefined}/>
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

  export default course1;