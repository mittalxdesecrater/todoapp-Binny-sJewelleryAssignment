import { store } from "@/src/redux/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack >
        <Stack.Screen name="index" options={{title:"Task Manager Mobile App"}} />
        <Stack.Screen name="add-task" options={{title:"Add Task"}}/>
        <Stack.Screen name="edit-task" options={{title:"Edit your task"}}/>
        <Stack.Screen name="[id]" options={{title:"List of All Your Tasks"}}/>

      </Stack>
    </Provider>
  );
}
