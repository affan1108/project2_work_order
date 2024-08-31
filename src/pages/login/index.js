import { View, Text, ScrollView, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, XMLHttpRequest } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { useState } from 'react'

// const request = new XMLHttpRequest();
// request.onreadystatechange = e => {
//   if (request.readyState !== 4) {
//     return;
//   }

//   if (request.status === 200) {
//     console.log('success', request.responseText);
//   } else {
//     console.warn('error');
//   }
// };

// request.open('GET', 'http://127.0.0.1:8000/api/merk');
// request.send();

// const signin = () => {
//   const request = XMLHttpRequest();
//   request.onreadystatechange = e => {
//     if (request.readyState !== 4) {
//       return;
//     }

//     if (request.status === 200) {
//       console.log('success', request.responseText);
//     } else {
//       console.warn('error');
//     }
//   };

//   request.open('GET', 'http://127.0.0.1:8000/api/merk');
//   request.send();
// }

// const navigation = useNavigation();

const signin = (a, b) => {
  const data = {
    email: a,
    password: b
  }
  axios.post("http://127.0.0.1:8000/api/merk", data)
  .then((response) => {
    console.log(response.data)
    // navigation.navigate()
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
    console.log(data)
  })
  // axios.get("http://172.20.10.2:8000/api/merk")
  // .then((response) => {
  //   console.log(response.data)
  // })
  // .catch((error) => {
  //   console.log(error)
  //   console.log("eror")
  // })
}
const Login = () => {
    // const navigation = useNavigation();
    // const email = '';
    // const pass = '';
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    // axios.get("http://localhost:8000")
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  return (
    <ScrollView>
    <LinearGradient colors={['#66bb6a','#2e7d32']} useAngle={true} angle={115} angleCenter={{x:0.5, y:0.5}} style={{flex:1}}>
      <StatusBar backgroundColor={'#388e3c'} translucent></StatusBar>
      <View style={{justifyContent:'center', alignItems:'center', marginTop:10, flexDirection:'row', marginHorizontal:20}}>
        <Image
            source={require('./../../assets/logo.png')} 
        />
      </View>
      <View style={{flex:1, backgroundColor:'#eeeeee', borderTopRightRadius:30, borderTopLeftRadius:30}}>
        <View style={{margin:20, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:20, fontWeight:'bold',color:'black'}}>Login to Your Account</Text>
        </View>
        <View style={{flex:1, backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30}}>
            <View style={{marginHorizontal:40,marginTop:50}}>
                <Text style={{color:'green',fontSize:20}}>Email</Text>
                <TextInput onChangeText={text => setEmail(text)} value={email} style={{borderWidth:1,borderRadius:5,marginTop:10,borderColor:'green'}}></TextInput>
                <Text style={{color:'green',fontSize:20, marginTop:10}}>Password</Text>
                <TextInput onChangeText={text => setPass(text)} value={pass} style={{borderWidth:1,borderRadius:5,marginTop:10,borderColor:'green'}}></TextInput>
                <View style={{alignItems:'flex-end',marginTop:10}}>
                    <Text>Forgot Password</Text>
                </View>
            </View>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}> */}
            <TouchableOpacity onPress={() => signin(email, pass)}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={{height:65,width:150,backgroundColor:'green',marginTop:40,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'white'}}>Login</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
    </ScrollView>
  )
}

export default Login