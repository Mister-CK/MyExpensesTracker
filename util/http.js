import axios from "axios";
const dataBaseUrl =
  "https://myexpensesapp-575fa-default-rtdb.europe-west1.firebasedatabase.app/";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    dataBaseUrl + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}
export const fetchExpenses = async () => {
  let extension = "/expenses.json";
  const response = await axios.get(dataBaseUrl + extension);
  const expenses = [];
  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObject);
  }
  return expenses;
};
export const updateExpense = async (id, expenseData) => {
  let extension = `/expenses/${id}.json`;
  axios.put(dataBaseUrl + extension, expenseData);
};
export const deleteExpense = async (id) => {
  let extension = `/expenses/${id}.json`;
  axios.delete(dataBaseUrl + extension);
};
