import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Alert, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import stylesApp from '../../../../styles'


import firestore from '@react-native-firebase/firestore';


export function SignUpScreen({ navigation }) {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        errorMessage: null
    });
    useEffect(() => {
        console.log("SignUp Screen")
        console.log(checkUser());
        
    }, []);
    function checkUser (){
        return auth().currentUser
    }
    const handleSingUp = () => {
        const { email, password } = data
        if (checkConfirmPassword()) {
            if (email.trim() != "" && password.trim() != "") {
                auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() =>{
                        navigation.navigate('Home')
                    })
                    .catch((error) => setData({ ...data, errorMessage: error.message }));
            } else {
                Alert.alert(
                    'Warning',
                    'Enter email and password',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: true }
                )
            }
        }

    }
    // const handleFireStore = (email, password) => {
    //     console.log('handleFireStore');
    //     firestore()
    //         .collection('Users')
    //         .add({
    //             email: email,
    //             password: password,
    //         })
    //         .then(() => {
    //             console.log('User added!');
    //             // navigation.navigate('Home')
    //         })
    //         .catch((error) => setData({ ...data, errorMessage: error.message }));
    //     console.log('handleFireStore 2');
    // }
    const checkConfirmPassword = () => {
        if (data.confirm_password == data.password) return true
        else {
            alert('The confirm password is wrong, please enter again.')
            return false
        }

    }
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
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val,
            isValidPassword: true,
        });
    };
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    };
    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry,
        });
    };

    return (
        <View style={[stylesApp.stylesApp, styles.container]}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <Text style={[stylesApp.text_color, styles.text_header]}>Register Now!</Text>
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
                <Text style={[styles.text_footer, { marginTop: 35 }]}> Confirm Password</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Confirm Your Password"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                        {data.confirm_secureTextEntry ? (
                            <Feather name="eye-off" color="grey" size={20} />
                        ) : (
                                <Feather name="eye" color="grey" size={20} />
                            )}
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={handleSingUp}
                        style={[stylesApp.button_color, styles.signIn]}>
                        <Text style={[stylesApp.text_color, styles.textSign]}>
                            Sign Up
                            </Text>
                    </TouchableOpacity>
                    <Text style={[stylesApp.text_color, { fontSize: 15, marginTop: 15 }]}>Aready have an account? <Text onPress={() => navigation.navigate('SignInScreen')}>SIGN IN HERE</Text></Text>

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
        color: '#565E79',
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
        color: '#565E79',
    },

    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
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
