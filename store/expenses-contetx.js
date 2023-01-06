import { createContext, useReducer, useState } from "react";

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

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {
        ...updatableExpense,
        ...action.payload.expenseData,
      };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, expenseData: expenseData } });
  };
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
