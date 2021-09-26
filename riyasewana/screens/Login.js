import React, {useState} from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import {Button,  Input} from 'react-native-elements';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
          <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          value={email}
          autoFocus
          type="email"
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
      <Button containerStyle={styles.button} title="Login" />
      <Button
        containerStyle={styles.button}
        type="outline"
        title="Register"
      />
      <View style={{height: 100}} />
    </KeyboardAvoidingView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
