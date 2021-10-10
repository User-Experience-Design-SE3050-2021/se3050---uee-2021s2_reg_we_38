import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import homeCard from '../assets/data/homeCard';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../assets/colors/colors';
import {Icon} from 'react-native-elements';
Feather.loadFont();
MaterialCommunityIcon.loadFont();
MaterialIcons.loadFont();

const categories = ['VEHICLES', 'BIKES', 'PARTS'];

const Home = ({navigation}) => {
  const [selectCategory, setSelectCategory] = useState(0);
  const [searchFilter, setSearchFilter] = useState(homeCard);

  const searchVehicle = (textToSearch) => {
    setSearchFilter(
      homeCard.filter((i) =>
        i.name.toLowerCase().includes(textToSearch)
      )
    );
  };

  console.log(selectCategory);

  return (
    <View style={styles.container}>
      {/* search bar */}
      <View style={styles.searchbar}>
        <View style={styles.searchContainer}>
          {/* can add icon here */}
          <Icon
            // style={tw`rounded-full p-4`}
            style={{padding: 10}}
            name="search"
            type="ionicon"
            color="black"
            size={18}
          />
          <TextInput
            placeholder="Search"
            size={25}
            style={styles.searchinput}
            onChange={(text) => searchVehicle(text)}
          />
        </View>

        {/* near the search button */}
        <View style={styles.sortBtn}>
          <Icon
            // style={tw`rounded-full p-4`}
            name="filter-outline"
            type="ionicon"
            color="black"
            size={18}
          />
        </View>
      </View>

      {/* category part */}
      <View style={styles.categoryContainer}>
        {/* {categories.map((category, index) => ( */}
          <TouchableOpacity>
            {/* // key={index}
            // onPress={() => setSelectCategory(index)}
            // activeOpacity={0.8}> */}
            <Text
              style={styles.selectCategoryStyle}>
             Vehicle
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>navigation.navigate("Bikes")}
          >
          
            {/* // key={index}
            // onPress={() => setSelectCategory(index)}
            // activeOpacity={0.8}> */}
            <Text
              style={{color:"black", fontSize:16}}>
             Parts
            </Text>
          </TouchableOpacity>
      </View>

      <ScrollView>
        {/* card views */}
        <View style={styles.homeWrapper}>
          {searchFilter.map(item => (
            <View
            key={item.id}
              style={[
                styles.homeCardWrapper,
                {marginTop: item.id == 1 ? 10 : 20},
              ]}>
              <View>
                <View>
                  {/* top name and icon */}
                  <View style={styles.homeTopWrapper}>
                    <MaterialCommunityIcon
                      name="car"
                      size={18}
                      color={colors.primary}
                    />
                    <Text style={styles.homeTopText}>{item.name}</Text>

                    <View style={styles.descHome}>
                      <Text style={styles.textDes}>{item.description}</Text>
                    </View>
                  </View>

                  <View style={styles.homeImageBody}>
                    <Image source={item.image} style={styles.homeImage} />

                    <View style={styles.homePriceSquare}>
                      <Text style={styles.priceStyle}>Rs. 100, 000</Text>
                    </View>
                  </View>
                </View>

                {/* review rating bottom part */}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeWrapper: {
    paddingHorizontal: 20,
  },
  homeCardWrapper: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingTop: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
  },
  homeTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 90,
    marginBottom: 20,
  },
  homeTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
  },
  homeDescription: {
    marginLeft: 80,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: colors.textLight,
  },
  homeImageBody: {
    marginLeft: -20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  homeImage: {
    width: 170,
    height: 100,
    borderBottomLeftRadius: 25,
  },
  homePriceSquare: {
    backgroundColor: colors.primary,
    marginLeft: 50,
    width: 150,
    height: 35,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceStyle: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
  },
  categoryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 30,
  },
  descHome: {
    marginLeft: 100,
    marginBottom: -30,
    width: 150,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDes: {
    color: 'gray',
    fontFamily: 'Montserrat-Bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-evenly',
  },
  categoryText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  selectCategoryStyle: {
    color: colors.primary,
    paddingBottom: 5,
    borderBottomWidth: 5,
    borderColor: colors.primary,
  },
  searchbar: {
    marginTop: 20,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchContainer: {
    height: 50,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchinput: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  sortBtn: {
    marginLeft: 10,
    marginTop: 7,
    height: 40,
    width: 40,
    color: '#0096FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#C0C0C0',
  },
});
