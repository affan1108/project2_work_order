import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Confirm = () => {
    const navigation = useNavigation();
  return (
    <View style={{backgroundColor:'#388e3c', flex:1}}>
      <StatusBar backgroundColor={'transparent'} translucent></StatusBar>
      <View style={{flex:1, backgroundColor:'#fafafa', borderTopRightRadius:20, borderTopLeftRadius:20}}>
        <View style={{flex:1, backgroundColor:'#fafafa',borderTopLeftRadius:20,borderTopRightRadius:20}}>
          <View style={{margin:20}}>
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
                </View>
                <View style={{flexDirection:'column',marginHorizontal:10}}>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                    <View><Text>:</Text></View>
                </View>
                <View style={{flex:1,flexDirection:'column'}}>
                    <View><Text>Affan</Text></View>
                    <View><Text>IT</Text></View>
                    <View><Text>Printer</Text></View>
                    <View><Text>A123</Text></View>
                    <View><Text>High</Text></View>
                    <View><Text>Tinta habis, dibutuhkan tinta baru segera</Text></View>
                </View>
            </View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={{height:65,width:150,backgroundColor:'green',marginTop:40,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'white'}}>Confirm</Text>
                    </View>
                </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Confirm