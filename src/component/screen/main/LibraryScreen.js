import React, { useEffect, useState } from 'react';
import { Card, CardItem, Icon, Right } from 'native-base';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { PROFILE } from '../../../constant/Images';
const { width, height } = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


function CustomCard(props) {
    return (
        <TouchableOpacity style={styles.item}
            onPress={() => props.navigation.navigate(props.goToScreen)}>
            <Card >
                <CardItem>
                    <IconMaterial active name={props.nameIcon} size={26} />
                    <View style={styles.contentText}>
                        <Text style={styles.itemName}>{props.itemName}</Text>
                        <Text style={styles.itemAmount}>{props.itemAmount}</Text>
                    </View>
                    <Right style={{ flex: 20, alignItems: 'flex-end' }}>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
}
function GotoProfile(props) {
    return (
        <TouchableOpacity style={{ height: height / 13, flexDirection: "row", paddingBottom: 10, marginHorizontal: 10, borderBottomWidth: 0.5, borderColor: "#CCCCCC" }}
            onPress={() => props.navigation.navigate(props.goToScreen)}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image
                    style={styles.miniAvatar}
                    source={{ uri: PROFILE.AVATAR }}
                    resizeMode="contain"
                />
            </View>
            <View style={{ flex: 8, justifyContent: "center", paddingLeft: 10 }}>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }} >Nguyễn Thị Anh Anh</Text>
                    <Text style={{ fontSize: 12, color: '#AAAAAA' }}>See your profile</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export function LibraryScreen(props) {
    const [numTrack, setNumTrack] = useState(0)
    const [numAlbum, setNumAlbum] = useState(0)
    const [numArtists, setNumArtists] = useState(0)

    useEffect(() => {
        console.log("Library Screen")
        getData()
    }, []);

    const getData = async () => {

        const numTrack = await AsyncStorage.getItem('numTrack')
        const numAlbum = await AsyncStorage.getItem('numAlbum')
        const numArtists = await AsyncStorage.getItem('numArtists')
        setNumTrack(numTrack)
        setNumAlbum(numAlbum)
        setNumArtists(numArtists)
        console.log(numArtists, ' , ', numAlbum, ' , ', numTrack);

    }


    // const handleAddTracks = (track) =>{
    //     firestore()
    //         .collection('Posts')
    //         .add(track)
    //         .then((docRef) => {
    //             console.log('User added!');
    //             console.log("Document written with ID: ", docRef.id);
    //         });
    // }
    // const addData = ()=>{
        // var user = auth().currentUser;
        // console.log(user)

        // user.updateProfile({
        //     displayName: "Ju Jingyi",
        //     photoURL: "https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fuser%2Favatars%2F0e323c1daaa7c4f980c27bda3adb8088.jpg?alt=media&token=0381fdaf-54f9-4020-a4a7-5656bcc0ee47",
        //     coverImage: "https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fuser%2FcoverImages%2F52684425_762234710836343_8290759092989853696_o.jpg?alt=media&token=09830f38-0773-496c-bb14-2070c2564e94",
        //     poster: true,
        //     followers: [
        //         "mJfC0RmMJXbB13nmAKebLLLY6Q53"
        //     ],
        //     following: [
        //         "mJfC0RmMJXbB13nmAKebLLLY6Q53"
        //     ],
        //     phoneNumber:"0369549798",
        //     listSong: ["WgJ21I6C03Z7AwzRzx6T",
        //         "2ppSTDUTBZ0NHElgyk1X",
        //         "C3OPyYWqTPvX4z89nHuX",
        //         "TBuoXwTWWaoT85FLTVy2",
        //         "t89hwJkRpqDHd1EikMuV",
        //         "8rtIaEtXu3JMNgnhfsth",
        //         "4DnmLDqXXOZvwLFozsog",
        //         "eGhxdmaFO8WCSHGqVII0",
        //         "pnFLCW9L0ZWaaBqAvmVb",
        //         "rX8RbrF1U85EHXXOKIP3"]

        // }).then(function () {
        //     console.log("Update successful.");
        // }).catch(function (error) {
        //     console.log("An error happened.", error);
        // });
    //     firestore()
    //         .collection('Users')
    //         .add(user)
    //         .then((docRef) => {
    //             console.log('User added!');
    //             console.log("Document written with ID: ", docRef.id);
    //         });
    // }
    // const user = {
    //     uid: "4Wyz04X99NfZNImBMmbaqIVZVE93",
    //     name: "Ju Jingyi",
    //     avatar: "https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fuser%2Favatars%2F0e323c1daaa7c4f980c27bda3adb8088.jpg?alt=media&token=0381fdaf-54f9-4020-a4a7-5656bcc0ee47",
    //     coverImage: "https://firebasestorage.googleapis.com/v0/b/mila-ff1b4.appspot.com/o/images%2Fuser%2FcoverImages%2F52684425_762234710836343_8290759092989853696_o.jpg?alt=media&token=09830f38-0773-496c-bb14-2070c2564e94",
    //     poster: true,
    //     followers: [
    //         "mJfC0RmMJXbB13nmAKebLLLY6Q53"
    //     ],
    //     following: [
    //         "mJfC0RmMJXbB13nmAKebLLLY6Q53"
    //     ],
    //     phone: "0369549798",
    //     listSong: ["WgJ21I6C03Z7AwzRzx6T",
    //         "2ppSTDUTBZ0NHElgyk1X",
    //         "C3OPyYWqTPvX4z89nHuX",
    //         "TBuoXwTWWaoT85FLTVy2",
    //         "t89hwJkRpqDHd1EikMuV",
    //         "8rtIaEtXu3JMNgnhfsth",
    //         "4DnmLDqXXOZvwLFozsog",
    //         "eGhxdmaFO8WCSHGqVII0",
    //         "pnFLCW9L0ZWaaBqAvmVb",
    //         "rX8RbrF1U85EHXXOKIP3"]
    // }
    const handleLogOut = () => {
        auth()
            .signOut()
            .then(() => {
                console.log('User signed out!')
                props.navigation.navigate('SignInScreen')});
    }


    return (
        <View style={styles.container}>
            <View style={{ height: height / 30, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, marginVertical: 10, marginBottom: 15 }}>
                <Text style={{ fontWeight: "bold", fontSize: 24 }} >Menu</Text>
                <TouchableOpacity style={styles.search} onPress={() => props.navigation.navigate('SearchScreen')} >
                    <FontAwesome name='search' size={20} />
                </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 30 }}>
                <GotoProfile navigation={props.navigation} goToScreen="ProfileNavigator" />
            </View>
            <CustomCard nameIcon='music' itemName='Songs' itemAmount={numTrack} navigation={props.navigation} goToScreen="ListSongsScreen" />
            <CustomCard nameIcon='playlist-music-outline' itemName='Artists' itemAmount={numArtists} navigation={props.navigation} goToScreen="ArtistsScreen" />
            <CustomCard nameIcon='account' itemName='Album' itemAmount={numAlbum} navigation={props.navigation} goToScreen="AlbumScreen" />
            <CustomCard nameIcon='file-upload' itemName='Upload' itemAmount="36" navigation={props.navigation} goToScreen="ListSongsUploadScreen" />
            <TouchableOpacity style={{
                height: height / 13, paddingTop: 10,
                marginHorizontal: 10, borderTopWidth: 0.5, borderColor: "#CCCCCC",
                marginTop: 20, flexDirection: "row",
                alignItems: "center",
            }}
                onPress={ handleLogOut}>
                <Entypo name='log-out' size={26} style={{ marginHorizontal: 15 }} />
                <Text style={{ fontWeight: "bold", fontSize: 19 }} >Log Out</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    item: {
        height: height / 13,
    },
    contentText: {
        marginLeft: 20,
        justifyContent: "space-around"

    },
    itemName: {
        fontSize: 16,
        marginBottom: 2,
    },
    itemAmount: {
        fontSize: 13,
        color: "#CCCCCC"
    },

    space: {
        flex: 1,
        backgroundColor: "#BBBBBB"
    },
    miniAvatar: {
        width: height / 23,
        height: height / 23,
        borderRadius: 9999
    },
    search: {
        width: 35,
        height: 35,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999
    },
});

