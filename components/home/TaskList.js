import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import tasks from '../../constants/data'
import TaskItem from './TaskItem'

const TaskList = () => {
  return (
    <View>
      <Text style={styles.mainText} >Today's TaskList</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {tasks.map((task, index) => <TaskItem task={{...task}} key={index} />)}
        </ScrollView>
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
    mainText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#040f16'
    },
    scrollViewContent: {
        paddingBottom: 20
    }
})