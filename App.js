// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AddNewTaskScreen from './screens/AddNewTaskScreen';
import CompletedTasksScreen from './screens/CompletedTasksScreen';
import EditTaskScreen from './screens/EditTaskScreen';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function BottomTabs() {
  return (
    <View style={styles.bottomTabs}>
      <Entypo name="home" size={30} color="black" />
      <Ionicons name="add-circle-sharp" size={30} color="black" />
      <Ionicons name="checkmark-done-circle" size={30} color="black" />
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      <BottomTabs />
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingTop: 20
  },
  bottomTabs: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
