import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../src/redux/tasksSlice";
import { RootState } from "../src/redux/store";

const TaskDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find((task) => task.id === id)
  );
  const dispatch = useDispatch();
  const router = useRouter();

  if (!task) {
    return <Text>Task not found.</Text>;
  }

  const handleDelete = () => {
    dispatch(deleteTask(id));
    router.back();
  };

  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.detail}>Due Date: {task.dueDate}</Text>
      <Text style={styles.detail}>Description: {task.description}</Text>
      <Text style={styles.detail}>
        Status: {task.completed ? "Completed" : "Incomplete"}
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity style={styles.btn} onPress={handleToggleCompletion}>
          <Text style={{ fontSize: 14 }}>
            {task.completed
              ? "Mark as Incomplete  ❌"
              : "Mark as Completed  ✔️"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleDelete}>
          <Text style={{ fontSize: 14 }}>Delete Task ⛔</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:'center', marginTop:10}}>

      <TouchableOpacity style={styles.btn} onPress={() => router.push(`/edit-task?id=${task.id}`)}>
          <Text style={{ fontSize: 14 }}>Edit Task  ✍🏼</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskDetailScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    width: "150",
  },
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  detail: { fontSize: 16, marginBottom: 10 },
});
