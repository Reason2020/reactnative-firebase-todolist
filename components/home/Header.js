import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.appTitle}>TodoList App</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b4f6c'
    },
    appTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: "#fbfbff"
    }
})