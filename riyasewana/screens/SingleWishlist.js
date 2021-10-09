import React from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import vehicle from '../assets/images/vehicle.jpg';

const SingleWishlist = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                {/* <Text style={styles.text_header}>Register Now!</Text> */}
                <Image source={vehicle} style={{ height: 200, width: 300, marginLeft: 10, marginRight: 10 }} />
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>
                    <Text style={styles.vehicleNameText}>
                        Land Rover
                    </Text>
                    <Text style={styles.text_footer}>Fixed Amount: Rs.5,000,000</Text>

                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Seller's Note</Text>

                    {/* <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            By signing up you agree to our
                        </Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                        <Text style={styles.color_textPrivate}>{" "}and</Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                    </View> */}
                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            The vehicle is brand new condition. Only used during delivery and therefore we wish to 
                            change our vehicle.
                        </Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={() => { }}
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Contact Seller</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#009387'
                            }]}>Add To Wishlist</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default SingleWishlist;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 3,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#F6F6F6',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    vehicleNameText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#009387',
        marginBottom: 10
    },
});
