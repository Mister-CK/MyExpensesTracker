import { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import InputItem from "./InputItem";
import CustomButton from "../../components/UI/CustomButton.js";
import { GlobalStyles } from "../../constants/styles";
const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultExpenseValues,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultExpenseValues ? defaultExpenseValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultExpenseValues
        ? defaultExpenseValues.date.toISOString().slice(0, 10)
        : "",
      isValid: true,
    },
    description: {
      value: defaultExpenseValues ? defaultExpenseValues.description : "",
      isValid: true,
    },
  });
  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputs((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };
  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((currentInputValues) => {
        return {
          amount: {
            value: currentInputValues.amount.value,
            isValid: amountIsValid,
          },
          date: {
            value: currentInputValues.date.value,
            isValid: dateIsValid,
          },
          description: {
            value: currentInputValues.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  };
  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}> Your Expense </Text>
      <View style={styles.inputsRow}>
        <InputItem
          label="Amount"
          isValid={inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            value: inputs.amount.value,
            onChangeText: inputChangedHandler.bind(this, "amount"),
          }}
          style={styles.rowInput}
        />
        <InputItem
          label="Date"
          isValid={inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputs.date.value,
            onChangeText: inputChangedHandler.bind(this, "date"),
          }}
          style={styles.rowInput}
        />
      </View>
      <InputItem
        label="Description"
        isValid={inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          value: inputs.description.value,
          onChangeText: inputChangedHandler.bind(this, "description"),
          autoCorrect: false,
        }}
      />
      {formIsInvalid && <Text style={styles.errorText}>Form is invalid.</Text>}
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
  errorText: {
    color: GlobalStyles.colors.error500,
    textAlign: "center",
    margin: 8,
    fontWeight: "bold",
    fontSize: 18,
  },
});
