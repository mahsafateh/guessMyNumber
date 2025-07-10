import { Pressable, Text, StyleSheet, View } from "react-native";

export default function PrimaryButton({ children, onPress }) {

  return (
    <View style={styles.viewContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.pressableContainer, styles.pressed]
            : styles.pressableContainer
        }
        android_ripple={{ color: "#BB9AB1" }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  pressableContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#BB8493",
    elevation: 2,
  },
  text: {
    textAlign: "center",
    fontWeight: "semibold",
    fontSize: 15,
    color: "#EEEEEE",
  },
  pressed: {
    opacity: 0.75,
  },
});
