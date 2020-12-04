import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Platform, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { IMAGES, PROFILE } from '../../../constant/Images'
import Icon from 'react-native-vector-icons/Fontisto';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get("window");
export function ListTrackHeader(props) {
    return (
        <View style={styles.bgHeader}>
            <View style={styles.left}>
                <IconMaterial
                    onPress={() => props.navigation.goBack()}
                    name='arrow-back-ios'
                    size={25} color="black"
                    style={{ alignSelf: "flex-start", marginLeft: 10 }} />
            </View>
            <View style= {styles.center}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                    <Image
                        style={styles.milaLogo}
                        source={IMAGES.LOGO_1}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={() => props.navigation.navigate("DetailProfileScreen")}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: PROFILE.AVATAR }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bgHeader: {
        flex:1,
        flexDirection: 'row',
        height: height / 15,
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        backgroundColor: 'white'
    },
    left: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
    },
    milaLogo: {
        height: height / 15 - 10,
        width: width / 3 - 10
    },
    center: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        width: width / 3,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    avatar: {
        width: height / 29,
        height: height / 29,
        borderRadius: 9999
    }
});
