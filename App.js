import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './assets/components/Login';
import Main from './assets/components/Main';
import Forgotpass from './assets/components/Forgotpass';
import Registration from './assets/components/Registration';
import Semesterfee from './assets/components/Semesterfee';
import Semesterfee1 from './assets/components/Semesterfee1';
import Performa from './assets/components/Performa';
import Profile from './assets/components/Profile';
import course1 from './assets/components/course1';
import courses from './assets/components/courses';
import allcourses from './assets/components/allcourses';
import quiz from './assets/components/quiz';
import announcement from './assets/components/announcement';
import quiz1 from './assets/components/quiz1';
import Assignment from './assets/components/Assignment';
import Assignment1 from './assets/components/Assignment1';
import submit from './assets/components/submit';
import submitted from './assets/components/submitted';
const Stack = createNativeStackNavigator();

export default function App() {
  return (<NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='Login' component={Login} options={{title:'Login Page', headerTitleAlign:"center",}}/>
      <Stack.Screen name='Forgotpass' component={Forgotpass} options={{title:'Forgotpass', headerTitleAlign:"center",}}/>
      <Stack.Screen name='Main' component={Main} options={{title:'Main Page', headerTitleAlign:"center",}}/>
      <Stack.Screen name='Registration' component={Registration} options={{title:'Registration', headerTitleAlign:"center",}}/>
      <Stack.Screen name='Semesterfee' component={Semesterfee} options={{title:'Semesterfee', headerTitleAlign:"center",}}/>
      <Stack.Screen name='Semesterfee1' component={Semesterfee1} options={{title:'Semesterfee1', headerTitleAlign:"center",}}/>
      <Stack.Screen name='Performa' component={Performa} options={{title:'Performa', headerTitleAlign:"center",}}/>
      <Stack.Screen name='Profile' component={Profile} options={{title:'Profile', headerTitleAlign:"center",}}/>
      <Stack.Screen name='course1' component={course1} options={{title:'course1', headerTitleAlign:"center",}}/>
      <Stack.Screen name='courses' component={courses} options={{title:'courses', headerTitleAlign:"center",}}/>
      <Stack.Screen name='allcourses' component={allcourses} options={{title:'allcourses', headerTitleAlign:"center",}}/>
      <Stack.Screen name='quiz' component={quiz} options={{title:'quiz', headerTitleAlign:"center",}}/>
      <Stack.Screen name='announcement' component={announcement} options={{title:'announcement', headerTitleAlign:"center",}}/>
      <Stack.Screen name='quiz1' component={quiz1} options={{title:'quiz1', headerTitleAlign:"center",}}/>
      <Stack.Screen name='Assignment' component={Assignment} options={{title:'Assignment', headerTitleAlign:"center",}}/>
      <Stack.Screen name='Assignment1' component={Assignment1} options={{title:'Assignment1', headerTitleAlign:"center",}}/>
      <Stack.Screen name='submit' component={submit} options={{title:'submit', headerTitleAlign:"center",}}/>
      <Stack.Screen name='submitted' component={submitted} options={{title:'submitted', headerTitleAlign:"center",}}/>








    </Stack.Navigator>





  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
