import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const MyRecentExpensesScreen = () => {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
};
export default MyRecentExpensesScreen;
const styles = StyleSheet.create({});
