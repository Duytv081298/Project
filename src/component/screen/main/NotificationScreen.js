import React, { useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { HeaderMain } from '../../general/header'

import Ionicons from 'react-native-vector-icons/Ionicons';

export function NotificationScreen(props) {
    useEffect(() => {
        console.log("Notification Screen")
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor='#CCCCCC' barStyle="light-content" />
            <HeaderMain navigation={props.navigation} />
            <View style={{ flex: 1, alignItems: "center" }}>
                <Ionicons name="notifications" size={170} color="#BBBBBBBB" style={{ marginHorizontal: 5, marginTop: 100, marginBottom: 50 }} />
                <Text style={{ fontSize: 22, fontWeight: "bold", marginVertical: 10 }}>Your notifications live here.</Text>
                <Text style={{ textAlign: 'center', marginHorizontal: 30, fontSize: 15 }}>Subscribe to your favorite channels to get notified about their latest songs.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
