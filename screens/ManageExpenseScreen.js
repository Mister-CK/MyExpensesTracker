import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import CustomButton from "../components/UI/CustomButton.js";
import { ExpensesContext } from "../store/expenses-contetx";
const ManageExpenseScreen = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const ExpensesCtx = useContext(ExpensesContext);

  const deleteExpenseHandler = () => {
    ExpensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEditing) {
      ExpensesCtx.updateExpense(editedExpenseId, {
        date: new Date(),
        description: "updatedExpense",
        amount: 11.5,
      });
    } else {
      ExpensesCtx.addExpense({
        date: new Date(),
        description: "generatedExpense",
        amount: 10,
      });
    }

    navigation.goBack();
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.buttonStyle}
          mode="flat"
          onPress={cancelHandler}
        >
          Cancel
        </CustomButton>
        <CustomButton style={styles.buttonStyle} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </CustomButton>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};
export default ManageExpenseScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  buttonStyle: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
