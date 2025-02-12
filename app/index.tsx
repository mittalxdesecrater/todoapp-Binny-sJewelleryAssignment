import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../src/redux/store";
import { Task } from "../src/types";

const HomeScreen = () => {
  const router = useRouter();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
          alignItems: "flex-end",
        }}
      >
        <Text style={styles.title}>Task List</Text>
        {(completedTasks) ? (
          <Text style={styles.completed}>Completed: {completedTasks}</Text>
        ) : (null)}
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item: Task) => item.id}
        renderItem={({ item }) => (
          <>
            {/* <Text style={styles.taskItem} onPress={() => router.push(`/${item.id}`)}>
            {item.title} - {item.dueDate} {item.completed ? '✔️' : ''}
          </Text> */}
            <TouchableOpacity
            onPress={() => router.push(`/${item.id}`)}
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "flex-end",
                padding: 10,
                borderBottomWidth: 1,
                borderColor: "#ddd",
              }}
            >
              <View>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  {item.title}
                </Text>
                <Text>{item.description}</Text>
              </View>
              <Text>{item.dueDate}</Text>
            </TouchableOpacity>
          </>
        )}
      />
      <Button title="Add Task" onPress={() => router.push("/add-task")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  completed: {
    fontSize: 16,
    fontWeight: "500",
    color: "green",
    marginBottom: 10,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  taskItem: { padding: 10, borderBottomWidth: 1, borderColor: "#ddd" },
});
