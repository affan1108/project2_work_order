import { View, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Dashboard = () => {
    const navigation = useNavigation();
  return (
    <LinearGradient colors={['#66bb6a','#2e7d32']} useAngle={true} angle={115} angleCenter={{x:0.5, y:0.5}} style={{flex:1}}>
      <StatusBar backgroundColor={'#2e7d32'} translucent></StatusBar>
      <View style={{justifyContent:'space-between', alignItems:'center', marginTop:80, flexDirection:'row', marginHorizontal:20}}>
        <View>
        <Text style={{fontSize:20, color:'white'}}>Hi, Supervisor!,</Text>
        <Text style={{color:'white'}}>Let's be productive today</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={{height:50,width:50,backgroundColor:'grey',borderRadius:100}}></View>
        </TouchableOpacity>
      </View>
      <View style={{flex:1, backgroundColor:'#fafafa', marginTop:50, borderTopRightRadius:20, borderTopLeftRadius:20}}>
        <View style={{margin:20, flexDirection:'row'}}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Tasks</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Add')}>
            <View style={{marginLeft:10,height:30, width:30, backgroundColor:'#388e3c',borderRadius:100,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginHorizontal:70}}>
          <TouchableOpacity onPress={() => navigation.navigate('Success')}>
          <LinearGradient colors={['#66bb6a','#2e7d32']} style={{height:100,width:100,borderRadius:20}} useAngle={true} angle={115} angleCenter={{x:0.5, y:0.5}}>
            <View style={{marginLeft:10,marginTop:10}}>
              <Text style={{color:'white'}}>Completed</Text>
              <Text style={{color:'white',marginTop:10,fontSize:20}}>10</Text>
            </View>
          </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Deadline')}>
          <LinearGradient colors={['#64b5f6','#1565c0']} style={{height:100,width:100,borderRadius:20}} useAngle={true} angle={115} angleCenter={{x:0.5, y:0.5}}>
            <View style={{marginLeft:10,marginTop:10}}>
              <Text style={{color:'white'}}>In Proccess</Text>
              <Text style={{color:'white',marginTop:10,fontSize:20}}>4</Text>
            </View>
          </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={{flex:1, backgroundColor:'#f5f5f5',borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:20}}>
          <View style={{margin:20}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={{fontWeight:'bold'}}>Recently Assigned</Text>
              <Text>All Task</Text>
            </View>
            <ScrollView style={{marginTop:10}}>
              <View style={{backgroundColor:'#0d47a1',height:30,width:100,justifyContent:'center',alignItems:'center',marginVertical:10,borderRadius:100}}>
                <Text style={{color:'white'}}>In Proccess</Text>
              </View>
              <View style={{flex:1,backgroundColor:'white',height:200,alignItems:'center',borderRadius:20,borderLeftColor:'#0d47a1',borderLeftWidth:10,elevation:3}}>
                <View style={{marginVertical:20}}>
                  <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Perbaikan Printer</Text>
                  <Text style={{marginTop:10}}>Tinta Printer Habis, Dibutuhkan Tinta Baru Segera</Text>
                  <View style={{marginTop:80,borderTopWidth:1,paddingVertical:10,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Icon name='clock' size={20}></Icon>
                    <Text style={{fontSize:15, marginLeft:10}}>30 September 2022</Text>
                  </View>
                  {/* <View style={{justifyContent:'flex-end',alignItems:'center',marginRight:20,flexDirection:'row'}}>
                    <Text style={{marginRight:10}}>Detail</Text>
                    <Icon name='arrow-right'></Icon>
                  </View> */}
                </View>
              </View>
              <View style={{backgroundColor:'#388e3c',height:30,width:100,justifyContent:'center',alignItems:'center',marginVertical:10,borderRadius:100}}>
                <Text style={{color:'white'}}>Completed</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <View style={{backgroundColor:'white',height:200,alignItems:'center',borderRadius:20,borderLeftColor:'#388e3c',borderLeftWidth:10,elevation:3}}>
                <View style={{marginVertical:20}}>
                  <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Perbaikan Printer</Text>
                  <Text style={{marginTop:10}}>Tinta Printer Habis, Dibutuhkan Tinta Baru Segera</Text>
                  <View style={{marginTop:80,borderTopWidth:1,paddingVertical:10,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Icon name='clock' size={20}></Icon>
                    <Text style={{fontSize:15, marginLeft:10}}>30 September 2022</Text>
                  </View>
                </View>
              </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default Dashboard