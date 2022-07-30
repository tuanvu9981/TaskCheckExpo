import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import React, { useState } from 'react';

import Task from './components/Task';

export default function App() {

  const [newTask, setNewTask] = useState('');

  const [taskList, setTaskList] = useState([]);

  const handleAddNewTask = () => {
    Keyboard.dismiss();
    setTaskList([newTask, ...taskList]);
    setNewTask('');
  }

  const completeTask = (index) => {
    let itemCopy = [...taskList];
    itemCopy.splice(index, 1); // remove taskList[i] (1 element)
    setTaskList(itemCopy);
  }


  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's Tasks </Text>
      </View>

      {/* Tasks List */}
      <View style={styles.items}>
        {taskList.map((singleTask, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={singleTask} />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Input Task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        {/* Input tag */}
        <TextInput
          style={styles.input}
          placeholder="Write a new task"
          onChangeText={text => setNewTask(text)}
          value={newTask}
        />

        {/* Button Trigger Event */}
        <TouchableOpacity onPress={handleAddNewTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
    paddingHorizontal: 10,
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  items: {
    marginTop: 30
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 280,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

  addText: {
    fontSize: 30
  },
});
