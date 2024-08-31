import { View, Text, StatusBar, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Detail = () => {
    const navigation = useNavigation();
    username:'';
  return (
    <View style={{backgroundColor:'#388e3c', flex:1}}>
      <StatusBar backgroundColor={'transparent'} translucent></StatusBar>
      <View style={{flex:1, backgroundColor:'#fafafa', borderTopRightRadius:20, borderTopLeftRadius:20}}>
        <View style={{flex:1, backgroundColor:'#fafafa',borderTopLeftRadius:20,borderTopRightRadius:20}}>
          <ScrollView style={{margin:20}}>
            <View style={{justifyContent:'center',alignItems:'center',marginVertical:30}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Perbaikan Printer</Text>
            </View>
            <View style={{borderBottomWidth:1,borderBottomColor:'black',borderTopColor:'black',borderTopWidth:1}}>
                <View style={{marginHorizontal:10, flexDirection:'row', justifyContent:'space-between',marginVertical:10}}>
                <View style={{flexDirection:'column'}}>
                    <View><Text>Request By</Text></View>
                    <View><Text>Department</Text></View>
                    <View><Text>Equipment Name</Text></View>
                    <View><Text>Equipment Unit</Text></View>
                    <View><Text>Priority</Text></View>
                    <View><Text>Request Work</Text></View>
                    <View><Text>Teknisi</Text></View>
                    <View><Text>Start Hour</Text></View>
                    <View><Text>Finish Hour</Text></View>
                    <View><Text>Job Description Work</Text></View>
                </View>
                <View style={{flexDirection:'column',marginHorizontal:10}}>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                </View>
                <View style={{flex:1,flexDirection:'column'}}>
                    <View style={{flex:1}}><Text>Affan</Text></View>
                    <View style={{flex:1}}><Text>IT</Text></View>
                    <View style={{flex:1}}><Text>Printer</Text></View>
                    <View style={{flex:1}}><Text>A123</Text></View>
                    <View style={{flex:1}}><Text>High</Text></View>
                    <View style={{flex:1}}><Text>Tinta habis</Text></View>
                    <View style={{flex:1}}><Text>Teknisi 1, Teknisi 2</Text></View>
                    <View style={{flex:1}}><Text>13:00</Text></View>
                    <View style={{flex:1}}><Text>15:00</Text></View>
                    <View style={{flex:1}}><Text>Tinta habis, sudah diisi</Text></View>
                </View>
            </View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginVertical:10}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Response</Text>
            </View>
            <View style={{marginHorizontal:10}}>
              <Text style={{color:'#127929',fontSize:20}}>Start Hour</Text>
              <TextInput 
                style={{borderWidth:1,borderRadius:10}}
              />
            </View>
            <View style={{marginHorizontal:10, marginTop:10}}>
              <Text style={{color:'#127929',fontSize:20}}>Finish Hour</Text>
              <TextInput 
                style={{borderWidth:1,borderRadius:10}}
              />
            </View>
            <View style={{marginHorizontal:10, marginTop:10}}>
              <Text style={{color:'#127929',fontSize:20}}>Job Description Repair</Text>
              <TextInput 
                style={{borderWidth:1,borderRadius:10}}
              />
            </View>
            <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginHorizontal:30,marginTop:40}}>
              <View style={{height:50,width:100,backgroundColor:'#1976d2',justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Text style={{color:'white'}}>On Progress</Text>
              </View>
              <View style={{height:50,width:100,backgroundColor:'#388e3c',justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Text style={{color:'white'}}>Close</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default Detail