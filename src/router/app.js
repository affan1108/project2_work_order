import React ,{useEffect}from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
// import Dashboard from '../pages/user/dashboard';
// import Success from '../pages/user/completed';
import { Proccess,Profile,Add,DetailCompleted,DetailProccess,Dashboard,Success, Apps, Login, } from '../pages/index';


const Router = (props) => {
const Stack = createNativeStackNavigator();
    return (
        // <AuthContext.Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={Login}>
                <Stack.Screen 
                        name="Login" 
                        component={Login} 
                        options={{
                            headerShown: false,
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                <Stack.Screen 
                        name="Apps" 
                        component={Apps} 
                        options={{
                            headerShown: false,
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                    <Stack.Screen 
                        name="Dashboard" 
                        component={Dashboard} 
                        options={{
                            headerShown: false,
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                        <Stack.Screen 
                        name="Success" 
                        component={Success} 
                        options={{
                            headerShown: true,
                            headerTitle:'Tasks Completed',
                            headerTitleStyle:{
                                color:'white'
                            },
                            headerStyle:{
                                backgroundColor: '#388e3c',
                            },
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                        <Stack.Screen 
                        name="Proccess" 
                        component={Proccess} 
                        options={{
                            headerShown: true,
                            headerTitle:'Tasks In Proccess',
                            headerTitleStyle:{
                                color:'white'
                            },
                            headerStyle:{
                                backgroundColor: '#1976d2',
                            },
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                        <Stack.Screen 
                        name="Profile" 
                        component={Profile} 
                        options={{
                            headerShown: false,
                            headerTitle:'Profile',
                            headerTitleStyle:{
                                color:'white'
                            },
                            headerStyle:{
                                backgroundColor: 'green',
                            },
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                        <Stack.Screen 
                        name="Add" 
                        component={Add} 
                        options={{
                            headerShown: true,
                            headerTitle:'Add Tasks',
                            headerTitleStyle:{
                                color:'white'
                            },
                            headerStyle:{
                                backgroundColor: '#388e3c',
                            },
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                        <Stack.Screen 
                        name="DetailCompleted" 
                        component={DetailCompleted} 
                        options={{
                            headerShown: true,
                            headerTitle:'Deatil Tasks Completed',
                            headerTitleStyle:{
                                color:'white'
                            },
                            headerStyle:{
                                backgroundColor: 'green',
                            },
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                        <Stack.Screen 
                        name="DetailProccess" 
                        component={DetailProccess} 
                        options={{
                            headerShown: true,
                            headerTitle:'Deatil Tasks In Proccess',
                            headerTitleStyle:{
                                color:'white'
                            },
                            headerStyle:{
                                backgroundColor: '#1976d2',
                            },
                            // statusBarStyle:'light'
                            statusBarTranslucent:true
                        }}/>
                </Stack.Navigator>
            </NavigationContainer>
        // </AuthContext.Provider>
        // bottom navigation?
   
    );
}
export default Router;
