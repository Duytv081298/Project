
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Animated, StatusBar } from 'react-native';
import stylesApp from '../../../styles'
import { requestPermission } from "../../constant/permissions";
import { getSongs, getAlbums, getSinger, getData } from "../../constant/LocalData"
import { getAlls } from "../../constant/DataLocal"
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';


export class SplashScreen extends Component {
    state = {
        LogoAnime: new Animated.Value(0),
        loadingSpinner: false,
    };
    componentDidMount() {
        const { LogoAnime } = this.state;
        Animated.parallel(
            Animated.spring(LogoAnime, {
                toValue: 1,
                tension: 10,
                friction: 2,
                duration: 2000,
                useNativeDriver: false
            }).start(() => {
                this.setState({
                    loadingSpinner: true,
                });
            })
        )
        this.getLocalData()
    }
    getLocalData = async () => {
        await requestPermission();
        await AsyncStorage.clear()
        let allTrack = await getSongs();
        let allAlbum = await getAlbums();
        let allArtists = await getSinger();
        let tracks = await getAlls();
        this.storeData('numTrack', allTrack.length)
        this.storeData('trackList', tracks)
        this.storeData('numAlbum', allAlbum.length)
        this.storeData('albumList', allAlbum.results)
        this.storeData('numArtists', allArtists.length)
        this.storeData('artistsList', allArtists.results)
        if (this.checkUser() == null) this.props.navigation.navigate('SignInScreen'); 
        else this.props.navigation.navigate('Home');
    }
    checkUser() {
        return auth().currentUser
    }
    storeData = async (key, value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
        }
    }
    render() {
        return (
            <View style={[stylesApp.container, styles.container]}>
                <StatusBar backgroundColor='#FBFAFF' barStyle="light-content" />
                <Animated.View
                    style={{
                        opacity: this.state.LogoAnime,
                        top: this.state.LogoAnime.interpolate({
                            inputRange: [0, 1],
                            outputRange: [120, 0],
                        }),
                    }}>
                    <Image source={require('../../image/logo1.png')} />
                </Animated.View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});