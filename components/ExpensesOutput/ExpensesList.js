import { StyleSheet, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  const renderExpenses = ({ item }) => {
    const expenseProps = {
      id: item.id,
      description: item.description,
      amount: item.amount,
      date: item.date,
    };
    return <ExpenseItem expenseProps={expenseProps} />;
  };
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenses}
    />
  );
};

export default ExpensesList;
const styles = StyleSheet.create({});
