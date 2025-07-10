import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType={"number-pad"}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <View style={styles.btnContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#e0d6f7ff",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
  },
});
