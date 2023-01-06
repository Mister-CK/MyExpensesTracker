import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpensesScreen from "./screens/ManageExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import MyRecentExpensesScreen from "./screens/RecentExpensesScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#071070" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#212fc2" },
        }}
      >
        <Stack.Screen
          name="ManageExpensesScreen"
          component={ManageExpensesScreen}
          options={{
            title: "Manage Expenses",
          }}
        />
        <Stack.Screen
          name="AllExpensesScreen"
          component={AllExpensesScreen}
          options={{
            title: "All ExpensesScreen",
          }}
        />
        <Stack.Screen
          name="RecentExpensesScreen"
          component={MyRecentExpensesScreen}
          options={{
            title: "Recent ExpensesScreen",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
