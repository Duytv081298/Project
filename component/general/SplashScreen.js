
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Animated, StatusBar } from 'react-native';
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
                setTimeout(
                    () =>{this.props.navigation.navigate('SignInScreen')},
                    2000,
                );
            })
        )
    }
    render() {
        return (
            <View style={styles.container}>
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
        flex: 1,
        backgroundColor: '#FBFAFF',
        justifyContent: 'center',
        alignItems: 'center',
    }
});