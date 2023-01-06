import { View, Text, StyleSheet } from "react-native";

const MyRecentExpensesScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Hello recentExpensesScreen</Text>
    </View>
  );
};
export default MyRecentExpensesScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
});
