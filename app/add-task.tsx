import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../src/redux/tasksSlice";
import { useRouter } from "expo-router";
import uuid from "react-native-uuid";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddTaskScreen = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSave = () => {
    if (title.trim()) {
      dispatch(
        addTask({
          id: uuid.v4() as string,
          title,
          description,
          dueDate: dueDate.toDateString(),
          completed: false,
        })
      );
      router.back();
    } else {
      alert("Title is required!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task Title:</Text>
      <TextInput
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput placeholder="Task Description" value={description} onChangeText={setDescription} style={styles.input} multiline />
      <Text style={styles.label}>Due Date:</Text>
      <Pressable style={styles.input} onPress={() => setShowPicker(true)}>
        <Text>
          {dueDate.toDateString() ? dueDate.toDateString() : "Select Due Date"}
        </Text>
      </Pressable>
      {/* <Button title="Select Due Date" onPress={() => setShowPicker(true)} /> */}
      {showPicker && (
        <DateTimePicker
          value={dueDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPicker(false);
            if (selectedDate) setDueDate(selectedDate);
          }}
        />
      )}
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.btn} onPress={handleSave}>
          <Text style={{ fontSize: 14 }}>Save Task ✅</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, fontWeight: "bold", marginVertical: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  dateText: { marginTop: 10, fontSize: 16 },
  btn: {
    backgroundColor: "#DFF7AC",
    padding: 10,
    alignItems: "center",
    width: "150",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2DA506",
  },
});
