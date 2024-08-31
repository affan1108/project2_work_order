import React ,{useEffect}from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import { Dashboard, Success, Proccess, Profile, Add, Detail} from '../pages';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// const Stack = createNativeStackNavigator();

//     return (
//         // <AuthContext.Provider>
//             <NavigationContainer>
//                 <Stack.Navigator initialRouteName={Dashboard}>
//                 <Stack.Screen 
//                         name="Dashboard" 
//                         component={Dashboard} 
//                         options={{
//                             headerShown: false,
//                             // statusBarStyle:'light'
//                             statusBarTranslucent:true
//                         }}/>
//                         <Stack.Screen 
//                         name="Success" 
//                         component={Success} 
//                         options={{
//                             headerShown: true,
//                             headerTitle:'Tasks Completed',
//                             headerTitleStyle:{
//                                 color:'white'
//                             },
//                             headerStyle:{
//                                 backgroundColor: '#388e3c',
//                             },
//                             // statusBarStyle:'light'
//                             statusBarTranslucent:true
//                         }}/>
//                         <Stack.Screen 
//                         name="Proccess" 
//                         component={Proccess} 
//                         options={{
//                             headerShown: true,
//                             headerTitle:'Tasks In Proccess',
//                             headerTitleStyle:{
//                                 color:'white'
//                             },
//                             headerStyle:{
//                                 backgroundColor: '#1976d2',
//                             },
//                             // statusBarStyle:'light'
//                             statusBarTranslucent:true
//                         }}/>
//                         <Stack.Screen 
//                         name="Profile" 
//                         component={Profile} 
//                         options={{
//                             headerShown: false,
//                             headerTitle:'Profile',
//                             headerTitleStyle:{
//                                 color:'white'
//                             },
//                             headerStyle:{
//                                 backgroundColor: 'green',
//                             },
//                             // statusBarStyle:'light'
//                             statusBarTranslucent:true
//                         }}/>
//                         <Stack.Screen 
//                         name="Add" 
//                         component={Add} 
//                         options={{
//                             headerShown: true,
//                             headerTitle:'Add Tasks',
//                             headerTitleStyle:{
//                                 color:'white'
//                             },
//                             headerStyle:{
//                                 backgroundColor: 'green',
//                             },
//                             // statusBarStyle:'light'
//                             statusBarTranslucent:true
//                         }}/>
//                 </Stack.Navigator>
//             </NavigationContainer>
//         // </AuthContext.Provider>
//         // bottom navigation?
   
//     );
// }
// export default Router;

// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.


// const Router = (props) => {

// (...)

const Apps = (props) => {
  const Tab = createBottomTabNavigator();
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Success') {
              iconName = focused ? 'ios-checkbox' : 'ios-checkbox-outline';
            } else if (route.name === 'Proccess') {
                iconName = focused ? 'ios-time' : 'ios-time-outline';
            } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2e7d32',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown: false,statusBarTranslucent:true}}/>
        <Tab.Screen name="Success" component={Success} options={{headerShown: true, headerTitle:'Tasks Completed',headerTitleStyle:{color:'white'},headerStyle:{backgroundColor: '#388e3c'},statusBarTranslucent:true}}/>
        <Tab.Screen name="Proccess" component={Proccess} options={{headerShown: true, headerTitle:'Tasks In Proccess',headerTitleStyle:{color:'white'},headerStyle:{backgroundColor: '#1976d2'},statusBarTranslucent:true}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false, headerTitle:'Tasks Completed',headerTitleStyle:{color:'white'},headerStyle:{backgroundColor: '#388e3c'},statusBarTranslucent:true}}/>
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default Apps;