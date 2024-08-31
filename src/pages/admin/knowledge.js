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
          <View style={{borderBottomWidth:2,borderBottomColor:'black',marginHorizontal:20,marginTop:30}}>
                <View style={{marginHorizontal:10, flexDirection:'row', justifyContent:'space-between',marginVertical:10}}>
                <View style={{flexDirection:'column'}}>
                    <View><Text>Equipment Name</Text></View>
                    <View><Text>Equipment Unit</Text></View>
                </View>
                <View style={{flexDirection:'column',marginHorizontal:10}}>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                </View>
                <View style={{flex:1,flexDirection:'column'}}>
                    <View style={{flex:1}}><Text>Printer</Text></View>
                    <View style={{flex:1}}><Text>A123</Text></View>
                </View>
            </View>
            </View>
            <View style={{flex:1,backgroundColor:'white',height:200,alignItems:'center',borderRadius:20,borderLeftColor:'#0d47a1',borderLeftWidth:10,elevation:3}}>
                <View style={{marginVertical:20}}>
                  <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Ganti Tinta</Text>
                  <View style={{marginTop:80,borderTopWidth:1,paddingVertical:10,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Icon name='clock' size={20}></Icon>
                    <Text style={{fontSize:15, marginLeft:10}}>30 September 2022</Text>
                  </View>
                </View>
              </View>
              <View style={{flex:1,backgroundColor:'white',height:200,alignItems:'center',borderRadius:20,borderLeftColor:'#0d47a1',borderLeftWidth:10,elevation:3}}>
                <View style={{marginVertical:20}}>
                  <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Ganti Tinta</Text>
                  <View style={{marginTop:80,borderTopWidth:1,paddingVertical:10,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Icon name='clock' size={20}></Icon>
                    <Text style={{fontSize:15, marginLeft:10}}>30 September 2022</Text>
                  </View>
                </View>
              </View>
        </View>
      </View>
    </View>
  )
}

export default Detail