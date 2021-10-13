import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import SwiperScreen from "./SwiperScreen";
import StarRating from 'react-native-star-rating';
import { Icon } from "react-native-elements";

const ReviewDetails = () => {

    const [starRate, setStarRate] = React.useState(3);

    const onStarPress = rating => {
      setStarRate(rating);
    };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: "90%",
        }}
      >
        <View
          style={{
            width: "10%",
            paddingLeft: 20,
          }}
        >
          <TouchableOpacity
          // onPress={() => NavigationContainer.na}
          >
            {/* <Image
              source={require("../../assets/images/red.png")}
              style={{ marginVertical: 40 }}
            /> */}
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#FFF",
              height: 70,
              width: 70,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
              borderRadius: 10
            }}
          >
            {/* <Image
              source={require("../../assets/images/red.png")}
              style={{ width: 50, height: 50 }}
            /> */}
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>3</Text>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>Buyers</Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              height: 70,
              width: 70,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
              borderRadius: 10
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>75 %</Text>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>Rates</Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              height: 70,
              width: 70,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
              borderRadius: 10
            }}
          >
            {/* <Image
              source={require("../../assets/images/red.png")}
              style={{ width: 50, height: 50 }}
            /> */}
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                5
                <Icon
                    // style={tw`rounded-full p-4`}
                    style={{ marginLeft: 10 }}
                    name="star"
                    type="ionicon"
                    color="black"
                    size={18}
                />
            </Text>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>Seller</Text>
          </View>

          <View
            style={{
              backgroundColor: "#FFF",
              height: 70,
              width: 70,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
              borderRadius: 10
            }}
          >
            {/* <Image
              source={require("../../assets/images/red.png")}
              style={{ width: 50, height: 50 }}
            /> */}
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                <Icon
                    // style={tw`rounded-full p-4`}
                    name="happy"
                    type="ionicon"
                    color="black"
                    size={30}
                />
            </Text>
            {/* <Text style={{ fontSize: 20, fontWeight: '500' }}>Seller</Text> */}
          </View>
        </View>

        <View
          style={{
            width: "90%",
          }}
        >
          <SwiperScreen />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: -80,
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 28,
          }}
        >
          Land Rover
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#009387",
            paddingLeft: 170,
            fontSize: 20,
          }}
        >
          Rs. 500, 000
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={starRate}
          selectedStar={(rating) => onStarPress(rating)}
          fullStarColor="gold"
          starSize={25}
          emptyStarColor="gold"
        />
      </View>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({});
