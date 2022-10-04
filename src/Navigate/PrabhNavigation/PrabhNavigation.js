import { StyleSheet, Text, View ,SafeAreaView, Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../../screens/HomeScreen/Homescreen/Homescreen';
import IletsCategories from '../../screens/Categories/IletsCategaries/IletsCategories';
import EventsCategories from '../../screens/Categories/EventsCategories/EventsCategories';
import MatrimonyCategories from '../../screens/Categories/MatrimonyCategories/MatrimonyCategories'
import PrCategories from '../../screens/Categories/PrCategories/PrCategories';
import MoreCategories from '../../screens/Categories/MoreCategories/MoreCategories';



const PrabhNavigation = ({navigation}) => {
    const Tab = createBottomTabNavigator();

    return (
        <>
            <SafeAreaView style={styles.topSafeArea} />
            <SafeAreaView style={styles.bottomSafeArea}>
                
                <Tab.Navigator screenOptions={{
                    tabBarActiveTintColor: '#fff',
                    tabBarItemStyle: { marginVertical: 25 },
                    tabBarHideOnKeyboard: true,
                    initialRouteName: "Home",
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        height: 60,
                        borderTopLeftRadius: 10,
                        position: 'absolute',
                        bottom: 0,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    },
                }}
                    // backBehavior={'history'}
                >
                       
                   
                    <Tab.Screen name=" " component={Homescreen} options={{
                         tabBarIcon: ({ color }) => 
                        <Image style={styles.tinyLogo} source={require('../../Navigate/PrabhNavigation/assets/NewHome.png')}/>,
                        headerShown: false,
                    }}
                    />
                    <Tab.Screen name="  " component={IletsCategories} options={{
                        tabBarIcon: ({ color }) =>
                         <Image style={styles.ilets} source={require('../PrabhNavigation/assets/IELTS.png')}  />
                         ,  
                        headerShown: false,
                    }} />
                      <Tab.Screen name="   " component={MatrimonyCategories} options={{
                         tabBarIcon: ({ color }) => 
                        <Image style={styles.tinyLogo} source={require('../../Navigate/PrabhNavigation/assets/Metrimony.png')}/>,
                        headerShown: false,
                    }}
                    />
                     <Tab.Screen name="    " component={EventsCategories} options={{
                         tabBarIcon: ({ color }) => 
                        <Image style={styles.tinyLogo} source={require('../../Navigate/PrabhNavigation/assets/event.png')}/>,
                        headerShown: false,
                    }}
                    />
                     <Tab.Screen name="      " component={PrCategories} options={{
                         tabBarIcon: ({ color }) => 
                        <Image style={styles.tinyLogo} source={require('../../Navigate/PrabhNavigation/assets/pr.png')}/>,
                        headerShown: false,
                    }}
                    />
                     <Tab.Screen name="          " component={MoreCategories} options={{
                         tabBarIcon: ({ color }) => 
                        <Image style={styles.tinyLogo} source={require('../../Navigate/PrabhNavigation/assets/more.png')}/>,
                        headerShown: false,
                    }}
                    />
                   
                     
                </Tab.Navigator>
            </SafeAreaView>
        </>
    );
};
const styles = StyleSheet.create({
    topSafeArea: {
        flex: 0,
        backgroundColor: '#fff'
    },
    bottomSafeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    tinyLogo:{
      height:40,
      width:40
    },
    ilets:{
        height:40,
        width:40
    },
});
export default PrabhNavigation