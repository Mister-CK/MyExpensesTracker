import { View, Text, StyleSheet } from "react-native";

const ManageExpensesScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Hello MangeExpensesScreen</Text>
    </View>
  );
};
export default ManageExpensesScreen;
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
