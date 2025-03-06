import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home/HomeScreen';
import Login from '../screens/Login';
import Profile from '../screens/Profile/Profile.screen';
import Splash from '../screens/Splash';
import Transaction from '../screens/Transaction';
import HomeScreen from '../screens/Home/HomeScreen';
import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }: any) => {
            return <Icon name={'home-outline'} size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }: any) => {
            return <Icon name={'finger-print-sharp'} size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={Splash}
        />
           <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
          <Stack.Screen
          name="Dashboard"
          options={{ headerShown: false }}
          component={Dashboard}
        />
           <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
         <Stack.Screen
          name="Transaction"
          options={{ headerShown: false }}
          component={Transaction}
        />
       
        
      
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
