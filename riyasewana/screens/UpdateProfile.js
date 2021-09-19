import React, {useState,useLayoutEffect} from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import {Button, Image, Input} from 'react-native-elements';

const UpdateProfile = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Profile',
    });
  }, [navigation]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
          <Text style={styles.title}>Update Profile</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Username"
          value={email}
          autoFocus
          type="text"
          onChangeText={text => setemail(text)}
        />
        <Input
          placeholder="Email"
          value={email}
          type="email"
          onChangeText={text => setemail(text)}
        />
        <Input
          placeholder="Phone number"
          value={email}
          type="number"
          onChangeText={text => setemail(text)}
        />
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry
          type="password"
          onChangeText={text => setpassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} title="Update" />
      <View style={{height: 100}} />
    </KeyboardAvoidingView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    display : 'flex',
    flexDirection : 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  title :{
    fontSize: 30,
    fontWeight: 'bold',
}
});
