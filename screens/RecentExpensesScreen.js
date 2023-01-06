import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-contetx";
import { getDateMinusDays } from "../util/date";

const MyRecentExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext);
  const today = new Date();
  const getDate7DaysAgo = getDateMinusDays(today, 7);

  const recentExpenses = expensesCtx.expenses.filter(
    (expense) => expense.date > getDate7DaysAgo
  );
  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={recentExpenses}
      fallbackText="No expenses in the last 7 days."
    />
  );
};
export default MyRecentExpensesScreen;
