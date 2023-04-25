import React from 'react';
import { Image, StyleSheet, View, Text, TextInput, Pressable,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize } from '../GlobalStyles';



const NavigatetoDashboard = props => {
  props.navigation.navigate('Dashboard1');
}

const LoginPage = () => {
  const navigation = useNavigation();
  const [username, onChangeuser] = React.useState('');
  const [password, onChangepassword] = React.useState('');

  return (
    <View style={{
      flexDirection:"row",
      flex:1
    }}> 
    <View style={{
      width:"50%",
      height:"100%"
    }}>
      <Image source={require('../assets/IMG-20230324-WA0055 1.png')}
      style={{
        width:"100%",
        height:"100%"
      }}
      resizeMode="cover"
      ></Image>


    </View>
    <View style={{
      width:"50%",
      height:"100%",
      justifyContent:"center"
    }}>
      <Image source={require('../assets/img20230220wa0033-1removebgpreview-1.png')}
      style={{
        width:450,
        height:380,
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center"
      }}
      resizeMode="contain"
      >

      </Image>
      <Image source={require('../assets/group-1.png')}
      style={{
        marginTop:4,
        width:427,
        height:68,
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center"
      }}
      >

      </Image>
      <View style={{
        flexDirection:"column"
      }}>
        <View style={{
          flexDirection:"row",
          justifyContent:"center",
          marginTop:10
        }}>
        <Image source={require('../assets/Vectoar.png')}
        style={{
        marginTop:4,
        width:27,
        height:29,
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center"
      }}
      >

      </Image>




      
      <TextInput style={{
            height: 40,
            margin: 12,
            width:220,
            padding: 10,
            justifyContent:"center",
            alignSelf:"center",
            fontFamily:"Outfit_medium",
            fontSize:31,
            fontWeight:400
      }}
        onChangeText={onChangeuser}
        value={username}
        placeholder="Username"
        placeholderTextColor="#474242"
        >

      </TextInput>
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
          marginTop:10
        }}>
        <Image source={require('../assets/Vector123.png')}
        style={{
        marginTop:4,
        width:27,
        height:29,
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center"
      }}
      >

      </Image>




      
      <TextInput style={{
            height: 40,
            margin: 12,
            width:220,
            padding: 10,
            justifyContent:"center",
            alignSelf:"center",
            fontFamily:"Outfit_medium",
            fontSize:31,
            fontWeight:400
      }}
        onChangeText={onChangepassword}
        value={password}
        placeholder="Password"
        placeholderTextColor="#474242"
        secureTextEntry={true}
        >

      </TextInput>
      </View>
      <View style={{
        flexDirection:"row",
      }}>
        
      </View>
      <View style={{
        height:3,
        width:448,
        backgroundColor:"#000000",
        justifyContent:"center",
        alignSelf:"center"
      }}>

      </View>
      <View style={{
        justifyContent:"center",
        alignSelf:"center",
        marginTop:35,
        marginRight:448
      }}>
      <Pressable
        style={{
          marginTop:20,
          height:50,
          borderRadius:8,
          width:448,
          position:"absolute",
          backgroundColor:"#890505",
          
        }}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={{alignSelf:"center", fontFamily:"Outfit_medium",fontSize:31,fontWeight:"400",color:"#ffffff"}}>Login</Text>
      </Pressable>
      </View>

      
      

      </View>
      

    </View>

    </View>
  );
};

const styles = StyleSheet.create({

});

export default LoginPage;
