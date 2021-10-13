<<<<<<< HEAD
import React,{ useLayoutEffect } from "react";
import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import {Button, Image, Input} from 'react-native-elements';


const Profile = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Home',
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://pbs.twimg.com/profile_images/843440346302357504/yGLGaQgl.jpg',
        }}
        style={{width: 200, height: 200, borderRadius: 50}}
      />
      <Text style={styles.title}> Tharusha </Text>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Name</Text>
          <Text style={styles.inputText}> Tharusha </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Email</Text>
          <Text style={styles.inputText}> tharusha@gmail.com </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Contact</Text>
          <Text style={styles.inputText}> +94 776 85 0715 </Text>
        </View>
      </View>
      <Button containerStyle={styles.button} onPress ={()=> navigation.navigate("Update Profile")} title="Update" />
      <Button containerStyle={styles.button} type="outline" title="Delete" />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});
=======
import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {Button, Image, Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const Profile = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Home',
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
        source={{
          uri: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
        }}
        style={{width: 200, height: 200, borderRadius: 50}}
      />
      <Text style={styles.title}> Tharusha </Text>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Name</Text>
          <Text style={styles.inputText}> Tharusha </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Email</Text>
          <Text style={styles.inputText}> tharusha@gmail.com </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Contact</Text>
          <Text style={styles.inputText}> +94 776 85 0715 </Text>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => {navigation.navigate('Update Profile')
          }}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#fff',
                },
              ]}>
            Edit
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={[
            styles.signIn,
            {
              borderColor: '#009387',
              borderWidth: 1,
              marginTop: 15,
            },
          ]}>
          <Text
            style={[
              styles.textSign,
              {
                color: '#009387',
              },
            ]}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});
>>>>>>> e8ca949c2909db7d226fe7fc5faa67ca912f4517
