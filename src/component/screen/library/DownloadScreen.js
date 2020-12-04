import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'

export function DownloadScreen() {
  useEffect(() => {
    console.log("Download Screen")
  }, []);
  return (
    <View>
      <Text>Download Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
