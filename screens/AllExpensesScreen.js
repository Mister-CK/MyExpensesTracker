import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-contetx";

const AllExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expensesPeriod="Total"
      expenses={expensesCtx.expenses}
      fallbackText="No expenses yet."
    />
  );
};
export default AllExpensesScreen;
