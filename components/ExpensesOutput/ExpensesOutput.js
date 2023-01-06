import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
  let content = <Text style={styles.infoTextStyle}>{fallbackText}</Text>;
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses}></ExpensesList>;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={expenses}
        expensesPeriod={expensesPeriod}
      ></ExpensesSummary>
      {content}
    </View>
  );
};

export default ExpensesOutput;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
  infoTextStyle: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
