import { View, Text, StyleSheet, Button } from "react-native";
import { GlobalStyles } from "../../constants/styles";
const ErrorOverlay = ({ message, onConfirm }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.errorTextStyle, styles.title]}>
        Oh no! An Error...
      </Text>
      <Text style={styles.errorTextStyle}>{message}</Text>
      <Button title="Okay" onPress={onConfirm} />
    </View>
  );
};
export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  errorTextStyle: {
    textAlign: "center",
    marginBottom: 8,
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
