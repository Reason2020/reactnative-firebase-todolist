import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import TaskList from '../components/home/TaskList'


const HomeScreen = () => {
  return (
    <View>
        <Header />
        <TaskList />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})