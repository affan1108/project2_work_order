import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Deadline = () => {
    const navigation = useNavigation();
  return (
    <View style={{backgroundColor:'#1976d2', flex:1}}>
      <StatusBar backgroundColor={'transparent'} translucent></StatusBar>
      <View style={{flex:1, backgroundColor:'#fafafa', borderTopRightRadius:20, borderTopLeftRadius:20}}>
        <View style={{flex:1, backgroundColor:'#fafafa',borderTopLeftRadius:20,borderTopRightRadius:20}}>
          <View style={{margin:20}}>
            <ScrollView style={{marginTop:10}}>
              <View style={{backgroundColor:'#f5f5f5',height:200,alignItems:'center',borderRadius:20,borderLeftColor:'#1976d2',borderLeftWidth:10,elevation:3}}>
                <View style={{marginVertical:20}}>
                  <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Perbaikan Printer</Text>
                  <Text style={{marginTop:10}}>Tinta Printer Habis, Dibutuhkan Tinta Baru Segera</Text>
                  <View style={{marginTop:80,borderTopWidth:1,paddingVertical:10,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Icon name='clock' size={20}></Icon>
                    <Text style={{fontSize:15, marginLeft:10}}>30 September 2022</Text>
                  </View>
                </View>
              </View>
              <View style={{backgroundColor:'#f5f5f5',height:200,alignItems:'center',borderRadius:20,borderLeftColor:'#1976d2',borderLeftWidth:10,marginTop:20,elevation:3}}>
                <View style={{marginVertical:20}}>
                  <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Perbaikan Printer</Text>
                  <Text style={{marginTop:10}}>Tinta Printer Habis, Dibutuhkan Tinta Baru Segera</Text>
                  <View style={{marginTop:80,borderTopWidth:1,paddingVertical:10,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Icon name='clock' size={20}></Icon>
                    <Text style={{fontSize:15, marginLeft:10}}>30 September 2022</Text>
                  </View>
                </View>
              </View>
              <View style={{backgroundColor:'#f5f5f5',height:200,alignItems:'center',borderRadius:20,borderLeftColor:'#1976d2',borderLeftWidth:10,marginTop:20,elevation:3}}>
                <View style={{marginVertical:20}}>
                  <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Perbaikan Printer</Text>
                  <Text style={{marginTop:10}}>Tinta Printer Habis, Dibutuhkan Tinta Baru Segera</Text>
                  <View style={{marginTop:80,borderTopWidth:1,paddingVertical:10,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Icon name='clock' size={20}></Icon>
                    <Text style={{fontSize:15, marginLeft:10}}>30 September 2022</Text>
                  </View>
                </View>
              </View>
              <View style={{backgroundColor:'#f5f5f5',height:200,alignItems:'center',borderRadius:20,borderLeftColor:'#1976d2',borderLeftWidth:10,marginTop:20,elevation:3}}>
                <View style={{marginVertical:20}}>
                  <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Perbaikan Printer</Text>
                  <Text style={{marginTop:10}}>Tinta Printer Habis, Dibutuhkan Tinta Baru Segera</Text>
                  <View style={{marginTop:80,borderTopWidth:1,paddingVertical:10,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Icon name='clock' size={20}></Icon>
                    <Text style={{fontSize:15, marginLeft:10}}>30 September 2022</Text>
                  </View>
                </View>
              </View>
              <View style={{backgroundColor:'#f5f5f5',height:200,alignItems:'center',borderRadius:20,borderLeftColor:'#1976d2',borderLeftWidth:10,marginTop:20,elevation:3}}>
                <View style={{marginVertical:20}}>
                  <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Perbaikan Printer</Text>
                  <Text style={{marginTop:10}}>Tinta Printer Habis, Dibutuhkan Tinta Baru Segera</Text>
                  <View style={{marginTop:80,borderTopWidth:1,paddingVertical:10,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Icon name='clock' size={20}></Icon>
                    <Text style={{fontSize:15, marginLeft:10}}>30 September 2022</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Deadline