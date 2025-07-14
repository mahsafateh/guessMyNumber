import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title.js";
import generateRandomGuess from "../utils/generateRandomGuess.js";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer.js";
import PrimaryButton from "../components/ui/PrimaryButton.js";

export default function GameScreen({ userNumber, onGameOver }) {
  let minBoundary = 1;
  let maxBoundary = 100;
  const initialGuess = generateRandomGuess(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  console.log(userNumber);
  console.log(currentGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      console.log("current guess and user input is equel");
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't misslead me!", "You know that this is wrong ...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomGuess(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.rootScreen}>
      <Title>Opponent's Guess</Title>
      <View style={styles.screen}>
        <NumberContainer>{currentGuess}</NumberContainer>

        <View>
          <Text style={styles.texts}>Higher or lower?</Text>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  screen: {
    flex: 1,
    padding: 1,
    maxWidth: "80%",
    alignItems: "center",
  },
  texts: {
    fontSize: 20,
    alignItems: "center",
  },
  btnContainer: {
    marginTop: 50,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
