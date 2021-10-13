import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const SwiperScreen = () => {
    return (
        <Swiper
            style={styles.wrapper}
            dotStyle={{
                marginTop: -200,
                width: 15,
                height: 5,
                borderRadius: 10,
                backgroundColor: '#FFF',
            }}
            activeDotColor='#333'
            activeDotStyle={{
                marginTop: -200,
                width: 50,
                height: 6,
                borderRadius: 10,
                backgroundColor: 'black',
                activeDotColor: 'black',
            }}
        >
        {/* </Swiper> */}


            <View style={styles.slide}>
                <Image
                    source={require('../../assets/images/vehicle.jpg')}
                    style={{
                        marginLeft: 30,
                        marginBottom: 300,
                        height: 300,
                        width: 250,
                        marginTop: 60,
                        resizeMode: 'stretch'
                    }}
                />
            </View>

            <View style={styles.slide}>
                <Image
                    source={require('../../assets/images/red.png')}
                    style={{
                        marginLeft: 30,
                        marginBottom: 300,
                        height: 300,
                        width: 250,
                        marginTop: 60,
                        resizeMode: 'stretch'
                    }}
                />
            </View>

            <View style={styles.slide}>
                <Image
                    source={require('../../assets/images/red.png')}
                    style={{
                        marginLeft: 30,
                        marginBottom: 300,
                        height: 300,
                        width: 250,
                        marginTop: 60,
                        resizeMode: 'stretch'
                    }}
                />
            </View>

        </Swiper>
    )
}

export default SwiperScreen

const styles = StyleSheet.create({
    wrapper: {
        height: 500,
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        marginLeft: 80,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    }
})
