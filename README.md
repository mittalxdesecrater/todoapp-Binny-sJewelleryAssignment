# Task Manager Mobile App

## 📌 Project Overview
The Task Manager Mobile App is a simple task management application built using React Native and Redux. It allows users to:
- ✅ Create tasks with a title, description, and due date.
- ✅ View task details.
- ✅ Edit existing tasks, including changing the due date.
- ✅ Mark tasks as completed or incomplete.
- ✅ Delete tasks permanently.

## 📂 Features
- **State Management**: Uses Redux for managing task states.
- **Navigation**: Powered by Expo Router for smooth screen transitions.
- **Date Picker**: Allows users to select due dates using `@react-native-community/datetimepicker`.
- **Persistent Data**: Keeps tasks in memory for quick access.
- **User-Friendly UI**: Minimalistic and easy-to-use interface.

---

## 🚀 Setup & Installation

### 1️⃣ Prerequisites
Before running the project, ensure you have:
- Node.js installed (LTS version recommended).
- Expo CLI installed globally: `npm install -g expo-cli`
- Yarn (recommended) or npm for package management.

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/task-manager.git
cd task-manager
```

### 3️⃣ Install Dependencies
```sh
yarn install
# or
npm install
```

### 4️⃣ Run the App
For development:
```sh
npx expo start
```
This will launch the Expo Developer Tools in your browser. You can scan the QR code using Expo Go (on mobile) or run the app in an emulator/simulator.

---

## 🛠️ Usage Instructions
- Click on **Add Task** to create a new task.
- Tap a task to view or edit details.
- Use the **Edit** option to modify the task title or due date.
- Mark tasks as **Completed/Incompleted** with the toggle button.
- Delete a task if no longer needed.

---

## ❗ Known Issues & Notes
### ⚠️ Known Issues
- Some Android devices may require an additional setup for `@react-native-community/datetimepicker`.
- Redux state is not persistent across app reloads (consider using Redux Persist).
- App is currently optimized for mobile screens only.

### 🔹 Future Improvements
- Implement local storage to retain tasks after app reload.
- Add category/tagging feature for better organization.
- Improve UI/UX with animations and theming support.

---

## 🤝 Contributing
Feel free to submit issues or pull requests to enhance the app!

### 🔗 Useful Links
- **React Native Docs**: https://reactnative.dev/
- **Expo Docs**: https://docs.expo.dev/
- **Redux Toolkit Docs**: https://redux-toolkit.js.org/

📌 _Developed with ❤️ using Expo Router, React Native & Redux._

