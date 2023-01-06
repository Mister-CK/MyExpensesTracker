import { View, Text, StyleSheet } from "react-native";

const AllExpensesScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Hello AllExpensesScreen</Text>
    </View>
  );
};
export default AllExpensesScreen;
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
