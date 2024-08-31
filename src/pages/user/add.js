import { View, Text, StatusBar, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';

const Add = () => {
    const navigation = useNavigation();
    const name = '';
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Contoh1', value: 'contoh1'},
      {label: 'Contoh2', value: 'contoh2'},
      {label: 'Contoh3', value: 'contoh3'}
    ]);
    return (
      <View style={{backgroundColor:'green', flex:1}}>
        <StatusBar backgroundColor={'transparent'} translucent></StatusBar>
        <View style={{flex:1, backgroundColor:'#fafafa', borderTopRightRadius:20, borderTopLeftRadius:20, marginTop:20}}>
          <View style={{flex:1, backgroundColor:'#fafafa',borderTopLeftRadius:20,borderTopRightRadius:20}}>
            <ScrollView style={{margin:30}}>
                <Text style={{color:'green',fontSize:20}}>Subjek</Text>
                <TextInput style={{borderWidth:1,borderRadius:10,marginTop:10}}></TextInput>
                <Text style={{color:'green',fontSize:20, marginTop:10}}>Masukkan Nama</Text>
                <TextInput style={{borderWidth:1,borderRadius:10,marginTop:10}}></TextInput>
                <Text style={{color:'green',fontSize:20, marginTop:10}}>Department</Text>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
                <Text style={{color:'green',fontSize:20, marginTop:10}}>Equipment Nama</Text>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
                <Text style={{color:'green',fontSize:20, marginTop:10}}>Equipment Unit</Text>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
                <Text style={{color:'green',fontSize:20, marginTop:10}}>Request Work</Text>
                <TextInput style={{borderWidth:1,borderRadius:10,marginTop:10}}></TextInput>
                <Text style={{color:'green',fontSize:20, marginTop:10}}>Priority</Text>
                <TextInput style={{borderWidth:1,borderRadius:10,marginTop:10}}></TextInput>
                <View style={{justifyContent:'flex-end',alignItems:'flex-end',marginTop:20}}>
                    <View style={{height:50,width:100,backgroundColor:'green',justifyContent:'center',alignItems:'center',borderRadius:10}}>
                        <Text style={{color:'white'}}>Save</Text>
                    </View>
                </View>
            </ScrollView>
          </View>
        </View>
        {/* <View style={{backgroundColor:'#fafafa',height:50}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:15,marginHorizontal:50}}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}><Icon name='home' size={20}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Success')}><Icon name='check-square' size={20}/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Deadline')}><Icon name='clock' size={20}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Icon name='user' size={20} /></TouchableOpacity>
            </View>
        </View> */}
      </View>
    )
}

export default Add