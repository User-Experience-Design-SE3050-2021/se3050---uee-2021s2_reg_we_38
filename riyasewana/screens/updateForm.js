import React, {useState} from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import {Button,  Input} from 'react-native-elements';

const PostUpdateForm = ({route}) => {

    console.log(route.params);

  const [type, setType] = useState('');
  const [condition, setCondition] = useState('');
  const [manuFacYear, setManuFacYear] = useState('');
  const [fuelDetails, setFuelDetails] = useState('');
  const [EngineCC, setEngineCC] = useState('');
  const [price, setPrice] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text style={styles.title}>Update Your Post</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Type"
          value={type}
          onChangeText={text => setType(text)}
          placeholderStyle={styles.placeholderStylings}
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Condition"
          value={condition}
          onChangeText={text => setCondition(text)}
          placeholderStyle
          placeholderStyle={styles.placeholderStylings}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Manufacture Year"
          value={manuFacYear}
          onChangeText={text => setManuFacYear(text)}
          keyboardType="numeric"
          placeholderStyle={styles.placeholderStylings}
          // placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Fuel Details"
          value={fuelDetails}
          onChangeText={text => setFuelDetails(text)}
          placeholderStyle={styles.placeholderStylings}
        />
        </View>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Engine CC"
          value={EngineCC}
          onChangeText={text => setEngineCC(text)}
          placeholderStyle={styles.placeholderStylings}
        />
        </View>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Price"
          value={price}
          onChangeText={text => setPrice(text)}
          keyboardType="numeric"
          placeholderStyle={styles.placeholderStylings}
        />
      </View>
      <TouchableOpacity
              style={styles.AddReviewBtn}
              // onPress={() => navigation.navigate("Review")}
              // onPress={saveRate}
            >
              <Text style={styles.AddReviewText}>ADD POST</Text>
      </TouchableOpacity>
      <View style={{height: 100}} />
    </KeyboardAvoidingView>
  );
};

export default PostUpdateForm;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:70,
    alignItems: 'center',
    justifyContent: 'center',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    // padding: 10,
    // backgroundColor: 'white',
    
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'red',
    width: 300,
  },
  title :{
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom:30,
      // backgroundColor: 'white',
  },
  inputView: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    width: "90%",
    height: 50,
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 20,
    borderColor: 'white', 
    borderWidth: 1
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  AddReviewBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#009387",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#009387"
  },
  AddReviewText: {
    color: "white",
  },
  placeholderStylings: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
  }
});
