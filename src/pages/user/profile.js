import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#388e3c'} barStyle={'light-content'} translucent></StatusBar>
        <View style={{backgroundColor:'#388e3c', height:200, borderBottomLeftRadius: 70, borderBottomRightRadius: 80}}>
            <View style={{marginVertical:150,height: 430,width: 300,marginHorizontal:50, backgroundColor: 'white', borderRadius: 20, borderColor: 'black', elevation:2, borderBottomWidth:2, borderBottomColor:'grey'}}>
                <View style={{backgroundColor:'grey',height:100,width:100, justifyContent:'center',alignItems:'center',marginTop:-50,marginHorizontal:100,borderRadius:100}}></View>
                <View style={{justifyContent:'center',alignItems:'center',padding:20,marginHorizontal:20}}>
                    <Text style={{fontSize:25,color:'black',fontWeight:'bold'}}>(Nama Pengguna)</Text>
                </View>
                <View style={{marginHorizontal:10,marginTop:10}}>
                    <Text style={{fontSize:20,color:'black'}}>Email</Text>
                    <View style={{borderRadius:5,borderWidth:1,padding:10,marginVertical:10,borderColor:'grey'}}>
                        <Text>User@gmail.com</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{fontSize:20,color:'black'}}>Department</Text>
                        <View style={{borderRadius:5,borderWidth:1,padding:10,marginVertical:10,borderColor:'grey'}}>
                            <Text>Department IT</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor:'#fafafa',height:50}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:15,marginHorizontal:50}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}><Icon name='home' size={20}></Icon></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Success')}><Icon name='check-square' size={20}/></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Deadline')}><Icon name='clock' size={20}></Icon></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Icon name='user' size={20} /></TouchableOpacity>
                </View>
            </View>
        </View>
        
    </View>
  );
}

export default Profile;