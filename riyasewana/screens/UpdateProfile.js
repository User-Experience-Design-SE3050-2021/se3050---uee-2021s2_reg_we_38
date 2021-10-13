<<<<<<< HEAD
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
=======
import React, {useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button, Image, Input} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';

const UpdateProfile = ({navigation}) => {
  const {colors} = useTheme();
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
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
          }}
          style={{width: 200, height: 200, borderRadius: 50}}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" color={colors.text} size={20} />
        <TextInput
          placeholder="Your Username"
          placeholderTextColor="#666666"
          style={[
            styles.textInput,
            {
              color: colors.text,
            },
          ]}
          autoCapitalize="none"
          onChangeText={val => textInputChange(val)}
          onEndEditing={e => handleValidUser(e.nativeEvent.text)}
        />
      </View>
      <View style={styles.inputContainer}>
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
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => {
            navigation.navigate('Update Profile');
          }}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#fff',
                },
              ]}>
              Update
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={{height: 100}} />
    </KeyboardAvoidingView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
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
});
>>>>>>> e8ca949c2909db7d226fe7fc5faa67ca912f4517
