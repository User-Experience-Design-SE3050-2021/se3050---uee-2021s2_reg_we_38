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
