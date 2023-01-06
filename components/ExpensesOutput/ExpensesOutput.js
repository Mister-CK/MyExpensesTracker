import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "dummyText1",
    amount: 59.99,
    date: new Date("2023-01-04"),
  },
  {
    id: "e2",
    description: "dummyText2",
    amount: 12.0,
    date: new Date("2023-01-03"),
  },
  {
    id: "e3",
    description: "dummyText3",
    amount: 159.99,
    date: new Date("2023-01-02"),
  },
  {
    id: "e4",
    description: "dummyText4",
    amount: 20,
    date: new Date("2023-01-02"),
  },
  {
    id: "e5",
    description: "dummyText5",
    amount: 99.99,
    date: new Date("2022-12-21"),
  },
  {
    id: "e6",
    description: "dummyText1",
    amount: 59.99,
    date: new Date("2023-01-04"),
  },
  {
    id: "e7",
    description: "dummyText2",
    amount: 12.0,
    date: new Date("2023-01-03"),
  },
  {
    id: "e8",
    description: "dummyText3",
    amount: 159.99,
    date: new Date("2023-01-02"),
  },
  {
    id: "e9",
    description: "dummyText4",
    amount: 20,
    date: new Date("2023-01-02"),
  },
  {
    id: "e10",
    description: "dummyText5",
    amount: 99.99,
    date: new Date("2022-12-21"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        expensesPeriod={expensesPeriod}
      ></ExpensesSummary>
      <ExpensesList expenses={DUMMY_EXPENSES}></ExpensesList>
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
});
