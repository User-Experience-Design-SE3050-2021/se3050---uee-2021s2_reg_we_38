import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../assets/colors/colors';

const SingleWishlist = ({ navigation }) => {
    return (
        <View style={styles.detailContainer}>

            {/* image view */}
            <View style={styles.imageContainer}>
                <Image style={{ flex: 1, resizeMode: 'contain' }} source={require('../assets/images/vehicle.jpg')} />
            </View>

            {/* details view side */}
            <View style={styles.showDetails}>
                <View style={styles.typeDetails}>

                    {/* line with brand */}
                    <View />
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'gray' }}>
                        Brand New
                    </Text>
                </View>

                {/* vehicle name */}
                <View style={styles.vehicleName}>
                    <Text style={styles.vehicleNameText}>
                        Land Rover
                    </Text>

                    {/* price  */}
                    {/* <View style={styles.vehiclePrice}>
                        <Text style={styles.vehiclePriceText}>
                            Rs.100 000
                        </Text>
                    </View> */}
                </View>

                <View style={styles.vehicleAboutDes}>
                    <Text style={styles.textAboout}>Type</Text>
                    <Text style={styles.textAboout}>SUV</Text>
                </View>
                <View style={styles.vehicleAboutDes}>
                    <Text style={styles.textAboout}>Brand</Text>
                    <Text style={styles.textAboout}>Land Rover</Text>
                </View>
                <View style={styles.vehicleAboutDes}>
                    <Text style={styles.textAboout}>Location</Text>
                    <Text style={styles.textAboout}>Colombo</Text>
                </View>
                <View style={styles.vehicleAboutDes}>
                    <Text style={styles.textAboout}>Year</Text>
                    <Text style={styles.textAboout}>2016</Text>
                </View>

                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.buttonText1}>Review</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("SingleWishlist")}>
                    <Text style={styles.buttonText2}>More</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}

export default SingleWishlist;

const styles = StyleSheet.create({
    detailContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },

    detailHeader: {
        paddingHorizontal: 20,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    imageContainer: {
        flex: 0.35,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    showDetails: {
        flex: 0.65,
        // backgroundColor: '#F1F1F1',
        backgroundColor: '#F6F6F6',
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30,
    },

    typeDetails: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },

    line: {
        width: 25,
        height: 2,
        backgroundColor: '#333',
        marginBottom: 5,
        marginRight: 3,
        fontWeight: 'bold',
    },

    vehicleName: {
        marginLeft: 20,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    vehicleNameText: {
        fontSize: 22,
        fontWeight: 'bold',
        color:'#009387'
    },

    vehiclePrice: {
        backgroundColor: colors.primary,
        width: 120,
        height: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: 'center',
    },

    vehiclePriceText: {
        marginLeft: 15,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    vehicleAboutText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    vehicleAboutDes: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textAboout: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
        color: '#05375a',
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    button1: {
        backgroundColor: '#009387',
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        // width: 300,
        // alignItems: 'center',
        // justifyContent: 'center'
        // borderColor: 'black',
        // borderWidth: 2,

    },
    buttonText1: {
        color: '#fff',
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
    },
    button2: {
        backgroundColor: '#fff',
        borderColor: '#F1F1F1',
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 25,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    buttonText2: {
        color: 'black',
        fontFamily: 'Montserrat-Bold',
        padding: 7,
        textAlign: 'center',
        fontSize: 20,
    },
})