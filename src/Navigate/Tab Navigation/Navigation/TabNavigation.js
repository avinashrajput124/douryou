import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../../../screens/HomeScreen/Homescreen/Homescreen';
import IletsCategories from '../../../screens/Categories/IletsCategaries/IletsCategories';
import MatrimonyCategories from '../../../screens/Categories/MatrimonyCategories/MatrimonyCategories';
import EventsCategories from '../../../screens/Categories/EventsCategories/EventsCategories';
import PrCategories from '../../../screens/Categories/PrCategories/PrCategories';
import MoreCategories from '../../../screens/Categories/MoreCategories/MoreCategories';

const Tab = createBottomTabNavigator();

const TabNavigation = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
    <Tab.Screen name="..." component={Homescreen} />
    <Tab.Screen name=".." component={IletsCategories} />
    <Tab.Screen name="." component={MatrimonyCategories} />
    <Tab.Screen name="....." component={EventsCategories} />
    <Tab.Screen name="*" component={PrCategories} />
    <Tab.Screen name="-" component={MoreCategories} />
  </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})