import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import StatsScreen from '../Screens/StatsScreen/StatsScreen';
import { BottomNavBar } from '../Components/Navigation/BottomNavBar';
import AddScreen from '../Screens/AddScreen/AddScreen';

const BottomNavController = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBar={props => <BottomNavBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Add" component={AddScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Stats" component={StatsScreen} options={{headerShown:false}}/>
    </Tab.Navigator>
  )
}

export default BottomNavController