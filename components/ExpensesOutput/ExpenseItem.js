import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
//import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";
const ExpenseItem = ({ expenseProps }) => {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate("ManageExpenseScreen", { expenseId: expenseProps.id });
  };
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {expenseProps.description}
          </Text>
          <Text style={styles.textBase}>
            {expenseProps.date.toDateString()}
          </Text>
        </View>
        <View style={styles.AmountContainer}>
          <Text style={styles.amountText}>
            {expenseProps.amount.toFixed(2)}€
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
export default ExpenseItem;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 4, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  AmountContainer: {
    paddingHorizontal: 12,
    paddingHorizontal: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amountText: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
