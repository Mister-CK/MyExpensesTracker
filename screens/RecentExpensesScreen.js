import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-contetx";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay.js";
import ErrorOverlay from "../components/UI/ErrorOverlay.js";

const MyRecentExpensesScreen = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const expensesCtx = useContext(ExpensesContext);
  const date7DaysAgo = getDateMinusDays(new Date(), 7);
  useEffect(() => {
    getExpenses();
  }, []);
  const getExpenses = async () => {
    setIsFetching(true);
    try {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    } catch {
      setError("Could not fetch expenses");
    }
    setIsFetching(false);
  };
  if (isFetching === true) {
    return <LoadingOverlay />;
  }
  const errorHandler = () => {
    setError(null);
    //setTimeout is only added to show that the request is started again.
    setTimeout(() => {
      getExpenses();
    }, 500);
  };
  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }
  const recentExpenses = expensesCtx.expenses.filter(
    (expense) => expense.date >= date7DaysAgo && expense.date <= new Date()
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
