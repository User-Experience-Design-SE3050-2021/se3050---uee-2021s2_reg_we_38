import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "react-native-elements";

const Home = () => {
  // navigation
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "data:image/png;base64,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",
        }}
        style={{
          width: 200,
          height: 150,
        }}
      />

      <Image
        source={{
          uri: "https://thumbs.dreamstime.com/b/yellow-beetle-line-art-retro-car-classic-isolated-vector-sketch-drawing-140084794.jpg",
        }}
        style={{
          width: 370,
          height: 200,
        }}
      />

      <Text>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</Text>
      <Text style={{ color: '#009387', fontSize: 17, fontWeight: 'bold' }}>Welcome To Riyasewana</Text>
      <Text>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</Text>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("AddReview")}
      >
        <Text style={styles.loginTextLogin}>Get Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#009387",
    borderColor: 'black',
    borderWidth: 1,
  },
  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FFF",
    borderStyle: "solid",
    borderWidth: 2,
  },
  loginTextLogin: {
    color: "#fff",
  },
  loginTextRegister: {
    color: "black",
  },
});
