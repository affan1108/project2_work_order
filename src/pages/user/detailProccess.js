import { View, Text, StatusBar, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DetailProccess = () => {
    const navigation = useNavigation();
    username:'';
  return (
    <View style={{backgroundColor:'#1976d2', flex:1}}>
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
                    <View><Text>Status</Text></View>
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
                </View>
                <View style={{flex:1,flexDirection:'column'}}>
                    <View style={{flex:1}}><Text>Affan</Text></View>
                    <View style={{flex:1}}><Text>IT</Text></View>
                    <View style={{flex:1}}><Text>Printer</Text></View>
                    <View style={{flex:1}}><Text>A123</Text></View>
                    <View style={{flex:1}}><Text>High</Text></View>
                    <View style={{flex:1}}><Text>Tinta habis</Text></View>
                    <View style={{flex:1}}><Text>Teknisi 1, Teknisi 2</Text></View>
                    <View style={{flex:1}}><Text>Proccess</Text></View>
                </View>
            </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default DetailProccess