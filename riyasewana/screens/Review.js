import * as React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReviewData from '../../assets/data/cardView';
import StarRating from 'react-native-star-rating';
import colors from '../../assets/colors/colors';
import { Icon } from "react-native-elements";
Feather.loadFont();
MaterialCommunityIcon.loadFont();
MaterialIcons.loadFont();

export default function Review({ navigation }) {
  const [starRate, setStarRate] = React.useState(3);

  const onStarPress = rating => {
    setStarRate(rating);
  };

  const searchTimeTable = (textToSearch) => {
    setSearchFilter(
      ReviewData.filter((i) =>
        i.vName.toLowerCase().includes(textToSearch.toLowerCase())
      )
    );
  };

  const [searchFilter, setSearchFilter] = useState(ReviewData);

  return (
    <View style={styles.container}>
      {/* titles */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleMain}>Vehicle</Text>
        <Text style={styles.titleSub}>Reviews</Text>
      </View>

      <View style={styles.searchbar}>
        <View style={styles.searchContainer}>
          {/* can add icon here */}
          <Icon
            // style={tw`rounded-full p-4`}
            style={{ padding: 5 }}
            name="search"
            type="ionicon"
            color="black"
            size={18}
          />
          <TextInput
            placeholder="Search"
            size={25}
            style={styles.searchinput}
            onChangeText={(text) => searchTimeTable(text)}
            // onChangeText={text => searchTimeTable(text)}
          />
        </View>
      </View>

      <ScrollView>
        {/* card views */}
        <View style={styles.reviewWrapper}>
          {searchFilter.map(item => (
            <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails")}>
            <View
              key={item.id}
              style={[
                styles.reviewCardWrapper,
                {marginTop: item.id == 1 ? 10 : 20},
              ]}>
              <View>
                <View>
                  {/* top name and icon */}
                  <View style={styles.reviewTopWrapper} onPress={() => navigation.navigate("SingleReview")}>
                    <MaterialCommunityIcon
                      name="crown"
                      size={18}
                      color={colors.primary}
                    />
                    <Text style={styles.reviewTopText}>{item.name}</Text>
                  </View>

                  {/* description */}
                  <View style={styles.reviewTitlesWrapper}>
                    <Text style={styles.reviewDescription}>
                      {item.description}
                    </Text>
                  </View>
                </View>

                {/* review rating bottom part */}
                <View style={styles.reviewCardBottom}>
                  <View style={styles.reviewRate}>
                    {/*star rate  */}
                    {/* <Feather name="search" size={15} color={colors.textDark} /> */}
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={starRate}
                      selectedStar={rating => onStarPress(rating)}
                      fullStarColor="gold"
                      starSize={18}
                      emptyStarColor="gold"
                    />
                  </View>

                  <View style={styles.reviewVehicleName}>
                    <MaterialCommunityIcon
                      name="star"
                      size={10}
                      color={colors.textDark}
                    />
                    <Text style={styles.vehicleName}>{item.vName}</Text>
                  </View>
                </View>
              </View>

              <View styles={styles.reviewImageRight}>
                <Image source={item.image} style={styles.reviewCardImage} />
              </View>
            </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  titleMain: {
    // fontFamily: 'Montserrat-Regular',
    fontWeight: '500',
    fontSize: 16,
    color: colors.primary,
  },
  titleSub: {
    // fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 32,
    color: colors.primary,
    marginTop: 4,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  textInputView: {
    color: colors.textLight,
  },
  reviewWrapper: {
    paddingHorizontal: 20,
    paddingVertical:10,
  },
  reviewCardWrapper: {
    backgroundColor: colors.background,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  reviewTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewTopText: {
    marginLeft: 10,
    // fontFamily: 'Montserrat-SemiBold',
    fontWeight: '500',
    fontSize: 15,
  },
  reviewTitlesWrapper: {
    marginTop: 15,
  },
  reviewDescription: {
    // fontFamily: 'Montserrat-SemiBold',
    fontWeight: '500',
    fontSize: 12,
    color: colors.textLight,
    marginRight: 200,
  },
  reviewCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  reviewRate: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  reviewVehicleName: {
    flexDirection: 'row',
    marginLeft: 30,
    alignItems: 'center',
  },
  vehicleName: {
    // fontFamily: 'Montserrat-Medium',
    fontWeight: '600',
    fontSize: 15,
    color: colors.textDark,
    marginLeft: 5,
  },
  reviewCardImage: {
    width: 140,
    height: 90,
    marginTop: -20,
    borderTopRightRadius: 25,
    marginLeft: -140,
  },
  searchbar: {
    marginTop: 30,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  searchContainer: {
    height: 45,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  searchinput: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
});