import { View, Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
const IconButton = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flatButton]}>
          <Text
            style={[
              styles.buttonText,
              mode === "flat" && styles.flatButtonText,
            ]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
export default IconButton;
const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flatButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatButtonText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.primary100,
    borderRadius: 4,
  },
});
