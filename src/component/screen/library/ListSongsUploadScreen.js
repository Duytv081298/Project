import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'

export function ListSongsUploadScreen() {
  useEffect(() => {
    console.log("List Songs Upload Screen")
  }, []);
  return (
    <View>
      <Text>List Songs Upload Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
