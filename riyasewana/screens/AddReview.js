import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import StarRating from 'react-native-star-rating';
// import firebase from '../database/firebase';


export default function AddReview({navigation}) {
  const [starRate, setStarRate] = React.useState(0);
  const [name, setName] = useState('');
  const [des, setDes] = useState('');

  const onStarPress = rating => {
    setStarRate(rating);
  };

  // save rate
  const saveRate = () => {
    // if(name === '' || des === '' || starRate === 0){
    //   alert('Please fill form');
    // }
    // else{
      try{
        // await firebase.db.collection('review').add({
        //   name: name,
        //   description: des,
        //   rate: starRate,
        // });
        // alert('added');
        navigation.navigate("Review")
      } catch(error){
        console.log(error);
      }
    // }
  }

  return (
    // container start
    <View style={styles.AddReviewContainer}>
        <View style={styles.AddReviewPhoto}>
            <Image
                source={{ uri: "https://www.pngall.com/wp-content/uploads/5/Vehicle-PNG-File-Download-Free.png" }}
                style={{
                    width: 300,
                    height: 150
                }}
            />
        </View>

        <View style={styles.AddReviewTextInput}>

          <Text style={styles.vehicleTextTopic}>Vehicle Name</Text>

          <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="First Name"
                placeholderTextColor="#003f5c"
                  value={name}
                  onChangeText={(text) => setName(text)}
              />
          </View>

          <View style={styles.inputViewDescription}>
              <TextInput
                multiline
                style={styles.TextInputDescription}
                placeholder="Description"
                placeholderTextColor="#003f5c"
                numberOfLines={4}
                  value={des}
                  onChangeText={(text) => setDes(text)}
              />
          </View>

          <StarRating
              disabled={false}
              maxStars={5}
              rating={starRate}
              selectedStar={(rating) => onStarPress(rating)}
              fullStarColor='orange'
              emptyStarColor='orange'
              starSize={40}    
            />

          <TouchableOpacity
              style={styles.AddReviewBtn}
              // onPress={() => navigation.navigate("Review")}
              onPress={saveRate}
            >
              <Text style={styles.AddReviewText}>ADD REVIEW</Text>
          </TouchableOpacity>

        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
    AddReviewContainer: {
        flex: 1,
        height: '100%',
    },
    AddReviewPhoto: {
        height: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    AddReviewTextInput: {
        height: '70%',
        // backgroundColor: '#D3D3D3',
        backgroundColor: '#009387',
        display: 'flex',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    vehicleTextTopic: {
        fontSize: 20,
        marginBottom: 20,
        fontFamily: 'Montserrat-Bold',
        marginTop: 20,
        marginBottom: 40,
    },
    inputView: {
      backgroundColor: "#FFF",
      borderRadius: 20,
      width: "90%",
      height: 50,
      borderStyle: "solid",
      borderWidth: 1,
      marginBottom: 20,
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    inputViewDescription: {
      backgroundColor: "#FFF",
      borderRadius: 20,
      width: "90%",
      borderStyle: "solid",
      borderWidth: 1,
      marginBottom: 20,
    },
    TextInputDescription: {
      marginLeft: 30,
    },
    AddReviewBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "black",
      borderStyle: "solid",
      borderWidth: 2,
    },
    AddReviewText: {
      color: "white",
    },
});
