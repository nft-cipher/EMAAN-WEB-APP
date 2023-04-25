import React from 'react';
import {  ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';



const NavigatetoRegistration = props => {
  props.navigation.navigate('Registration');
}
const Navigatetoperforma = props => {
    props.navigation.navigate('Performa');
}
  
const Navigatetoprofile = props => {
    props.navigation.navigate('Profile');
}

const Navigatetodashboard = props => {
    props.navigation.navigate('Dashboard');
}

const Navigatetofees = props => {
  props.navigation.navigate('Semesterfee');
}

const Navigatetocourse = props => {
  props.navigation.navigate('course1');
}

const NavigatetoViamycourses = props => {
  props.navigation.navigate('courses');
}






const Main = props => {
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
                    <TouchableOpacity style={{flexDirection:"row"}}
                    onPress={() => NavigatetoViamycourses(props)}
                    >
                    <ImageBackground style={{ width:24,height:24}}
            source={require('../images/education 1.png')}></ImageBackground>
                    <Text style={{marginLeft:10, fontFamily:"monospace",color:"#ffffff" ,fontSize:22,fontWeight:"800"}}>My Courses</Text>
                    </TouchableOpacity>

                </View>
                <View style={{width:"100%",height:1,backgroundColor:"#ffffff"}}></View><View style={{height:"10%", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{flexDirection:"row"}}
                    onPress={() => Navigatetocourse(props)}
                    >
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
                    <View style={{justifyContent:"center",alignItems:"center", borderRadius:4, marginLeft:80, width:94,height:94, flexDirection:"column", backgroundColor:"#831E1E"}}>
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
                    <View style={{marginLeft:44,justifyContent:"center",alignItems:"center", borderRadius:4, width:94,height:94, backgroundColor:"#6C6868"}}>
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
                <View style={{borderWidth:2,justifyContent:"center",alignSelf:"center", borderColor:"#AC0000",width:955,height:"79%",marginLeft:60}}>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between"
                    }}>
                        <Text style={{
                            fontFamily:"Roboto",
                            fontWeight:"bold",
                            fontSize:22,
                            paddingLeft:20
                        }}>Course Overview</Text>
                        <View style={{
                            width:124,
                            justifyContent:"center",
                            alignSelf:"center",
                            alignItems:"center",
                            height:44,
                            borderWidth:2,
                            shadowOffset:2,
                            marginRight:20
                        }}>
                            <TouchableOpacity>
                            <Text style={{
                            fontFamily:"Roboto",
                            fontWeight:"bold",
                            fontSize:22,


                        }}> 
                            Attendance
                            </Text>
                            </TouchableOpacity>
                            
                            </View>

                    </View>
                    <View style={{
                        width:924,
                        marginTop:10,
                        alignSelf:"center",
                        alignItems:"center",
                        height:84,
                        borderWidth:2,
                        shadowOffset:2,
                        flexDirection:"row"

                    }}>
                        <View style={{marginLeft:10, borderRadius:24,width:44,height:44,borderColor:"#890505"}}>
                <ImageBackground style={{borderRadius:24, width:44,height:44}}
            source={require('../images/Ellipse 2.png')}></ImageBackground></View>
                        <View style={{flexDirection:"column",
                    marginLeft:20
                    }}>
                            <Text style={{
                            fontFamily:"Roboto",
                            fontWeight:"bold",
                            paddingBottom:10,
                            fontSize:22}}>Applied Physics | Sec B Regular Session</Text>
                            <Progress.Bar progress={progress} width={200} />
                            <Text style={{marginTop:10}}>{`${Math.round(progress * 100)}% Completed`}</Text>

                        </View>
                        <View style={{
                            justifyContent:"center",
                            alignSelf:"center",
                            marginLeft:240,
                            marginTop:20
                        }}>
                        <Progress.Bar progress={progress} width={200} color="#289C15" />
                            <Text style={{marginTop:10}}>{`${Math.round(progress * 100)}% Attendnace`}</Text>
                        </View>

                    </View>
                    <View style={{
                        width:924,
                        marginTop:10,
                        alignSelf:"center",
                        alignItems:"center",
                        height:84,
                        borderWidth:2,
                        shadowOffset:2,
                        flexDirection:"row"

                    }}>
                        <View style={{marginLeft:10, borderRadius:24,width:44,height:44,borderColor:"#890505"}}>
                <ImageBackground style={{borderRadius:24, width:44,height:44}}
            source={require('../images/Ellipse 2.png')}></ImageBackground></View>
                        <View style={{flexDirection:"column",
                    marginLeft:20
                    }}>
                            <Text style={{
                            fontFamily:"Roboto",
                            fontWeight:"bold",
                            paddingBottom:10,
                            fontSize:22}}>Applied Physics | Sec B Regular Session</Text>
                            <Progress.Bar progress={progress} width={200} />
                            <Text style={{marginTop:10}}>{`${Math.round(progress * 100)}% Completed`}</Text>

                        </View>
                        <View style={{
                            justifyContent:"center",
                            alignSelf:"center",
                            marginLeft:240,
                            marginTop:20
                        }}>
                        <Progress.Bar progress={progress} width={200} color="#289C15" />
                            <Text style={{marginTop:10}}>{`${Math.round(progress * 100)}% Attendnace`}</Text>
                        </View>

                    </View>
                    <View style={{
                        width:924,
                        marginTop:10,
                        alignSelf:"center",
                        alignItems:"center",
                        height:84,
                        borderWidth:2,
                        shadowOffset:2,
                        flexDirection:"row"

                    }}>
                        <View style={{marginLeft:10, borderRadius:24,width:44,height:44,borderColor:"#890505"}}>
                <ImageBackground style={{borderRadius:24, width:44,height:44}}
            source={require('../images/Ellipse 2.png')}></ImageBackground></View>
                        <View style={{flexDirection:"column",
                    marginLeft:20
                    }}>
                            <Text style={{
                            fontFamily:"Roboto",
                            fontWeight:"bold",
                            paddingBottom:10,
                            fontSize:22}}>Applied Physics | Sec B Regular Session</Text>
                            <Progress.Bar progress={progress} width={200} />
                            <Text style={{marginTop:10}}>{`${Math.round(progress * 100)}% Completed`}</Text>

                        </View>
                        <View style={{
                            justifyContent:"center",
                            alignSelf:"center",
                            marginLeft:240,
                            marginTop:20
                        }}>
                        <Progress.Bar progress={progress} width={200} color="#289C15" />
                            <Text style={{marginTop:10}}>{`${Math.round(progress * 100)}% Attendnace`}</Text>
                        </View>

                    </View>
                    
                    <View style={{
                        width:924,
                        marginTop:10,
                        alignSelf:"center",
                        alignItems:"center",
                        height:84,
                        borderWidth:2,
                        shadowOffset:2,
                        flexDirection:"row"

                    }}>
                        <View style={{marginLeft:10, borderRadius:24,width:44,height:44,borderColor:"#890505"}}>
                <ImageBackground style={{borderRadius:24, width:44,height:44}}
            source={require('../images/Ellipse 2.png')}></ImageBackground></View>
                        <View style={{flexDirection:"column",
                    marginLeft:20
                    }}>
                            <Text style={{
                            fontFamily:"Roboto",
                            fontWeight:"bold",
                            paddingBottom:10,
                            fontSize:22}}>Applied Physics | Sec B Regular Session</Text>
                            <Progress.Bar progress={progress} width={200} />
                            <Text style={{marginTop:10}}>{`${Math.round(progress * 100)}% Completed`}</Text>

                        </View>
                        <View style={{
                            justifyContent:"center",
                            alignSelf:"center",
                            marginLeft:240,
                            marginTop:20
                        }}>
                        <Progress.Bar progress={progress} width={200} color="#289C15" />
                            <Text style={{marginTop:10}}>{`${Math.round(progress * 100)}% Attendnace`}</Text>
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

  export default Main;