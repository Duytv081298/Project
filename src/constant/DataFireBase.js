
import firestore from '@react-native-firebase/firestore';

export const getAlbums = async () => {
    let arr = []
    const trackCollection = firestore().collection('Albums');
    await trackCollection.orderBy("title", "desc")
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                arr.push(doc.data())
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    return arr
}
