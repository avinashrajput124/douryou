import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WellComeScreen from '../../screens/LoginFlow/WellcomeScreen/WellComeScreen';
import Login from '../../screens/LoginFlow/Login/Login';
import VerifyCode from '../../screens/LoginFlow/VerifiyCode/VerifyCode';
import CreateProfie from '../../screens/LoginFlow/CreateProfile/CreateProfie';
import MyMatch from '../../screens/LoginFlow/MyMatch/MyMatch';
import SearchScreen from '../../screens/HomeScreen/Homescreen/SearchScreen/SearchScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen'
import Post from '../../screens/HomeScreen/Post/Post';
import RequirementForm from '../../screens/HomeScreen/Post/RequirementForm/RequirementForm';
import Passport from '../../screens/HomeScreen/Post/Passport/Passport';
import Educationloan from '../../screens/HomeScreen/Post/EducationLoan/EducationLoan';
import Travelinsurance from '../../screens/HomeScreen/Post/TravelInsurance/TravelInsurance';
import ApplyJob from '../../screens/HomeScreen/Post/ApplyJob/ApplyJob';
import ApplyFranchise from '../../screens/HomeScreen/Post/ApplyFranchise/ApplyFranchise';
import PostLuggage from '../../screens/HomeScreen/Post/PostLuggage/PostLuggage';
import Favourites from  '../../screens/HomeScreen/Favourites/Favourites';
import HomeActivities from '../../screens/HomeScreen/Homescreen/HomeActivities/HomeActivities';
import IletsCategories from '../../screens/Categories/IletsCategaries/IletsCategories';
import Homescreen from '../../screens/HomeScreen/Homescreen/Homescreen';
import PrabhNavigation from '../PrabhNavigation';
import IletsComming from '../../screens/Categories/IletsCategaries/IletsComming/IletsComming';
import MatrimonyComming from '../../screens/Categories/MatrimonyCategories/MatrimonyComming/MatrimonyComming';
import Bookmypass from '../../screens/Categories/EventsCategories/Bookmypass/Bookmypass';
import Passconfirm from '../../screens/Categories/EventsCategories/Passconfirm/Passconfirm';
import Consultant from '../../screens/Categories/PrCategories/Consultant/Consultant';
import Canada from '../../screens/Categories/PrCategories/Canada/Canada';
import Usa from '../../screens/Categories/PrCategories/USA/Usa';
import UK from '../../screens/Categories/PrCategories/UK/Uk';
import Australia from '../../screens/Categories/PrCategories/Australia/Australia';
import NewZealand from '../../screens/Categories/PrCategories/NewZealand/NewZealand';
import JobConsultant from '../../screens/Categories/MoreCategories/JobConsultant/JobConsultant';
import JobSeeker from '../../screens/Categories/MoreCategories/JobConsultant/JobSeeker/JobSeeker';
import JobOffer from '../../screens/Categories/MoreCategories/JobConsultant/JobOffer/JobOffer';
import Franchise from '../../screens/Categories/MoreCategories/Franchise/Franchise';
import FranchiseBuyer from '../../screens/Categories/MoreCategories/Franchise/FranchiseBuyer/FranchiseBuyer';
import FranchiseSeller from '../../screens/Categories/MoreCategories/Franchise/FranchiseSeller/FranchiseSeller';
import Luggage from '../../screens/Categories/MoreCategories/Luggage/Luggage';
import LuggageBuyer from '../../screens/Categories/MoreCategories/Luggage/LuggageBuyer/LuggageBuyer';
import LuggageSender from '../../screens/Categories/MoreCategories/Luggage/LuggageSender/LuggageSender';
import User from '../../screens/Categories/MoreCategories/User/User';
import AdsActivityPremium from '../../screens/HomeScreen/AdsActivityPremium/AdsActivityPremium';
import ProfileDetails from '../../screens/ProfileScreen/ProfileDetails/ProfileDetails';
import AdsActivityYoutube from '../../screens/HomeScreen/AdsActivityYoutube/AdsActivityYoutube';
import TopTabNavigation from '../TopTabNavigation/TopTabNavigation';
import EditPreferenceScreen from '../../screens/ProfileScreen/EditPreferenceScreen';
import HelpSupportScreen from '../../screens/ProfileScreen/HelpSupportScreen/HelpSupportScreen';
import CheckDemo from '../../CheckDemo/CheckDemo';


export default function NavigateLoginFlow({navigation}) {

    
    const Stack = createNativeStackNavigator();

    const [showWellcome , setShowWelcome] =useState(true);

    useEffect( () => {
      setTimeout( () =>{
        setShowWelcome(false)
      }, 1000);
    }, []);

  return (
 
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerShown:false,
    tabBarStyle: {
      backgroundColor: '#065987',
      height: 80,
      borderTopLeftRadius: 10,
      position: 'absolute',
      bottom: 0,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
  },
    }}>
    {showWellcome ?<Stack.Screen 
    name="WellComeScreen"  component={WellComeScreen} 
    
    />  
      :null
    }         
   <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="VerifyCode" component={VerifyCode} />
    <Stack.Screen name="CreateProfie" component={CreateProfie} />
    <Stack.Screen name="MyMatch" component={MyMatch} />
    
    <Stack.Screen name="PrabhNavigation" component={PrabhNavigation}/>


    <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
     <Stack.Screen name="Post" component={Post} />
    <Stack.Screen name="RequirementForm" component={RequirementForm} />
    <Stack.Screen name="Passport" component={Passport} />
    <Stack.Screen name="Educationloan" component={Educationloan} />
    <Stack.Screen name="TravelInsurance" component={Travelinsurance} />
    <Stack.Screen name="ApplyJob" component={ApplyJob} />
    <Stack.Screen name="ApplyFranchise" component={ApplyFranchise} />
    <Stack.Screen name="PostLuggage" component={PostLuggage} />
    
    <Stack.Screen name="Favourites" component={Favourites} />
    <Stack.Screen name="HomeActivities" component={HomeActivities} /> 
    <Stack.Screen name="IletsCategories" component={IletsCategories} /> 
    <Stack.Screen name="IletsComming" component={IletsComming} /> 
    <Stack.Screen name="MatrimonyComming" component={MatrimonyComming} /> 
    <Stack.Screen name="Bookmypass" component={Bookmypass} /> 
    <Stack.Screen name="Passconfirm" component={Passconfirm} /> 
    <Stack.Screen name="Consultant" component={Consultant} /> 
    <Stack.Screen name="Canada" component={Canada} /> 
    <Stack.Screen name="Usa" component={Usa} /> 
    <Stack.Screen name="UK" component={UK} /> 
    <Stack.Screen name="Australia" component={Australia} /> 
    <Stack.Screen name="NewZealand" component={NewZealand} /> 
    <Stack.Screen name="JobConsultant" component={JobConsultant} /> 
    <Stack.Screen name="JobSeeker" component={JobSeeker} /> 
    <Stack.Screen name="JobOffer" component={JobOffer} /> 
    <Stack.Screen name="Franchise" component={Franchise} /> 
    <Stack.Screen name="FranchiseBuyer" component={FranchiseBuyer} /> 
    <Stack.Screen name="FranchiseSeller" component={FranchiseSeller} /> 
    <Stack.Screen name="Luggage" component={Luggage} /> 
    <Stack.Screen name="LuggageBuyer" component={LuggageBuyer} /> 
    <Stack.Screen name="LuggageSender" component={LuggageSender} /> 
    <Stack.Screen name="User" component={User} /> 
    <Stack.Screen name="AdsActivityPremium" component={AdsActivityPremium} /> 
    <Stack.Screen name="ProfileDetails" component={ProfileDetails} /> 
    <Stack.Screen name="AdsActivityYoutube" component={AdsActivityYoutube} /> 
    <Stack.Screen name="TopTabNavigation" component={TopTabNavigation} /> 
    <Stack.Screen name="EditPreferenceScreen" component={EditPreferenceScreen} /> 
    <Stack.Screen name="HelpSupportScreen" component={HelpSupportScreen} /> 


    </Stack.Navigator>
 
</NavigationContainer>



  )
}

const styles = StyleSheet.create({})