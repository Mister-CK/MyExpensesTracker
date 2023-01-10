import { Platform, View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({ name, size, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
};
export default IconButton;
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 0,
    marginRight: Platform.OS === "android" ? 20 : 10,
    marginBottom: 0,
  },
  pressed: {
    opacity: 0.5,
  },
});
