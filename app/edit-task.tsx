import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../src/redux/tasksSlice";
import { RootState } from "../src/redux/store";
import DateTimePicker from "@react-native-community/datetimepicker";

const EditTaskScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const task = useSelector((state: RootState) => state.tasks.tasks.find((t) => t.id === id));
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [dueDate, setDueDate] = useState<Date>(task?.dueDate ? new Date(task.dueDate): new Date());
  const [showPicker, setShowPicker] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleUpdate = () => {
    if(title.trim()){
    dispatch(updateTask({ id, title, description, dueDate:dueDate.toDateString(), completed: task!.completed }));
    router.dismissAll();
    }else{
      alert("Title is required");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Task Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Task Description" value={description} onChangeText={setDescription} style={styles.input} multiline />

      <Pressable style={styles.input} onPress={() => setShowPicker(true)}>
        <Text>
          {dueDate.toDateString() ? dueDate.toDateString() : "Select Due Date"}
        </Text>
      </Pressable>
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

      <Button title="Save Changes" onPress={handleUpdate} />
    </View>
  );
};

export default EditTaskScreen;

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, borderColor: "#ddd", padding: 10, marginVertical: 10, borderRadius: 5 },
});
