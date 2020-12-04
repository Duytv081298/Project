import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import stylesApp from '../../../../styles'
import auth from '@react-native-firebase/auth';

export function SignInScreen({ navigation }) {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        errorMessage: null
    });
    useEffect(() => {
        console.log("SignIn Screen")
        console.log(checkUser());

    }, []);
    function checkUser() {
        return auth().currentUser
    }

    const handleLogin = () => {
        const { email, password } = data;
        if (email.trim() != '' && password.trim() != '') {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    navigation.navigate('Home')
                })
                .catch((error) => setData({ ...data, errorMessage: error.message }));
        } else {
            alert(
                'Enter email and password'
            );
        }
    };
    // const handleLogin = () => {
    //     navigation.navigate('Home')
    // };
    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
            });
        }
    };
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
            isValidPassword: true,
        });
    };
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    };

    // const handleLogOut = () => {
    //     console.log('handleLogOut')
    //     auth()
    //         .signOut()
    //         .then(() => {
    //             console.log('User signed out!')
    //             navigation.navigate('SplashScreen')
    //         });
    // }
    const gotoSignUp = () => {
        navigation.navigate('SignUpScreen')
    }
    return (
        <View style={[stylesApp.container, styles.container]}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <Text style={[stylesApp.text_color, styles.text_header]}>Welcome!</Text>
            </View>

            <Animatable.View animation="fadeInUpBig" style={[stylesApp.view_shadow, styles.footer]}>
                {data.errorMessage && (
                    <Text style={{ color: 'red' }}>{data.errorMessage}</Text>
                )}
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ? (
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" color="green" size={20} />
                        </Animatable.View>
                    ) : null}
                </View>
                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? (
                            <Feather name="eye-off" color="grey" size={20} />
                        ) : (
                                <Feather name="eye" color="grey" size={20} />
                            )}
                    </TouchableOpacity>
                </View>
                <Text style={[stylesApp.text_color, { marginTop: 15 }]}
                    onPress={() => navigation.navigate('ResetPasswordScreen')}
                >
                    Forgot password?
                </Text>

                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.signIn}
                        style={[stylesApp.button_color, styles.signIn]}>
                        <Text style={[stylesApp.text_color, styles.textSign]}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={gotoSignUp}
                        style={[styles.signIn,
                        {
                            borderColor: '#B6A9EA',
                            borderWidth: 1,
                            marginTop: 15,
                        }]}>
                        <Text
                            style={[stylesApp.text_color, styles.textSign]}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {

        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },

    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
