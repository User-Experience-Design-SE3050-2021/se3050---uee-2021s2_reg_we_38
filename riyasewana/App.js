<<<<<<< HEAD
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import UpdateProfile from './screens/UpdateProfile';
import Profile from './screens/Profile';

import Review from './screens/Review';
import AddReviewScreen from './screens/AddReview';
import Navigation from './screens/Navigation';
// import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: '#009387'},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={globalScreenOptions}
        initialRouteName="Home">
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Update Profile" component={UpdateProfile} />
        <Stack.Screen name="Add Review" component={AddReviewScreen} />
        <Stack.Screen name="Review" component={Review} />
        {/* <Stack.Screen name="Navigation" component={Navigation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

=======
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import UpdateProfile from './screens/UpdateProfile';
import Profile from './screens/Profile';
import Register from './screens/Register';
import Wishlist from './screens/Wishlist';
import SinglePost from './screens/SinglePost';
import SingleWishlist from './screens/SingleWishlist';
import CallModel from './screens/CallModel';


const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: '#009387'},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={globalScreenOptions}
        initialRouteName="SinglePost">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Update Profile" component={UpdateProfile} />
        <Stack.Screen name="Wishlist" component={Wishlist}/>
        <Stack.Screen name="SinglePost" component={SinglePost}/>
        <Stack.Screen name="SingleWishlist" component={SingleWishlist}/>
        <Stack.Screen name="CallModel" component={CallModel}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
>>>>>>> e8ca949c2909db7d226fe7fc5faa67ca912f4517
