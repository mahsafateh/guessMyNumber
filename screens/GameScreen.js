import {Alert, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title.js";
import generateRandomGuess from "../utils/generateRandomGuess.js";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer.js";
import PrimaryButton from "../components/ui/PrimaryButton.js";
import Card from "../components/ui/Card";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../utils/colors";

export default function GameScreen({userNumber, onGameOver}) {
    let minBoundary = 1;
    let maxBoundary = 100;
    const initialGuess = generateRandomGuess(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't miss lead me!", "You know that this is wrong ...", [
                {text: "Sorry!", style: "cancel"},
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
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>

                <Text style={styles.texts}>Higher or lower?</Text>

                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                        <Ionicons name="remove" size={24} color="white"/>
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                        <Ionicons name="add" size={24} color="white"/>
                    </PrimaryButton>
                </View>
            </Card>
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
        fontFamily: "open-sans",
        fontSize: 20,
        alignItems: "center",
        color: Colors.accent500
    },
    btnContainer: {
        marginTop: 50,
        justifyContent: "space-between",
        flexDirection: "row",
    },
});
