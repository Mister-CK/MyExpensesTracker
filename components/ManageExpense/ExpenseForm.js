import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import InputItem from "./InputItem";
import CustomButton from "../../components/UI/CustomButton.js";
const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultExpenseValues,
}) => {
  const [inputValues, setinputValues] = useState({
    amount: defaultExpenseValues ? defaultExpenseValues.amount.toString() : "",
    date: defaultExpenseValues
      ? defaultExpenseValues.date.toISOString().slice(0, 10)
      : "",
    description: defaultExpenseValues ? defaultExpenseValues.description : "",
  });
  const inputChangedHandler = (inputIdentifier, enteredText) => {
    setinputValues((currentInputValues) => {
      return { ...currentInputValues, [inputIdentifier]: enteredText };
    });
  };
  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(expenseData);
  };
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}> Your Expense </Text>
      <View style={styles.inputsRow}>
        <InputItem
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            value: inputValues.amount,
            onChangeText: inputChangedHandler.bind(this, "amount"),
          }}
          style={styles.rowInput}
        />
        <InputItem
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputValues.date,
            onChangeText: inputChangedHandler.bind(this, "date"),
          }}
          style={styles.rowInput}
        />
      </View>
      <InputItem
        label="Description"
        textInputConfig={{
          multiline: true,
          value: inputValues.description,
          onChangeText: inputChangedHandler.bind(this, "description"),
          autoCorrect: false,
        }}
      />
      <View style={styles.buttonContainer}>
        <CustomButton style={styles.buttonStyle} mode="flat" onPress={onCancel}>
          Cancel
        </CustomButton>
        <CustomButton style={styles.buttonStyle} onPress={submitHandler}>
          {submitButtonLabel}
        </CustomButton>
      </View>
    </View>
  );
};
export default ExpenseForm;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 40,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 24,
    textAlign: "center",
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
