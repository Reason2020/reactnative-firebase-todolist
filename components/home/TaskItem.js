import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TaskItem = ({ task }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.titleText} >{task.taskTitle}</Text>
    </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: "#01baef",
        margin: 5,
    },
    titleText: {

    }
})