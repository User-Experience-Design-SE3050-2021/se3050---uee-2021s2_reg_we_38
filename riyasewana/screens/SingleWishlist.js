import React, { useState } from 'react';
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
import Modal from "react-native-modal";

const SingleWishlist = ({ navigation }) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
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
                    <Text style={[styles.text_footer, { marginTop: 5 }]}>Amount</Text>
                    <Text style={[styles.textPrivate, { marginTop: 5 }]}>Rs.5,000,000</Text>
                    <Text style={[styles.text_footer, { marginTop: 10 }]}>Condition</Text>
                    <Text style={[styles.textPrivate, { marginTop: 5 }]}>Brand New</Text>

                    <Text style={[styles.text_footer, {
                        marginTop: 10
                    }]}>Seller's Message</Text>

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
                            onPress={toggleModal}
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
                            onPress={() => navigation.navigate("Wishlist")}
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


            <View >
                <Modal isVisible={isModalVisible}>
                    <View style={styles.callModel}>
                        <Text>Hello!</Text>
                        <Image style={{ height: 20, width: 30, marginLeft: 10, marginRight: 10 }}
                            source={{ uri: 'https://img.icons8.com/fluency/48/000000/phone-disconnected.png', }} />

                        <Image style={{ height: 20, width: 30, marginLeft: 10, marginRight: 10 }}
                            source={{ uri: 'https://img.icons8.com/fluency/48/000000/chat-message.png', }} />
                        <Button title="CLOSE" onPress={toggleModal} />
                    </View>
                </Modal>
            </View>
        </View>
    );
};

export default SingleWishlist;

const styles = StyleSheet.create({
    callModel: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#F6F6F6',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
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
        marginTop: 10
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
        marginTop: 5
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
