import {useState} from "react";
import {Alert, StyleSheet, Text, TextInput, View} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import Card from "../components/ui/Card";

export default function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState("");

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    };

    const resetInputHandler = () => {
        setEnteredNumber("");
    };

    const confirmInpuHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid Number",
                "Number has to be a number between 1 and 99",
                [{text: "Okey", style: "destructive", onPress: resetInputHandler}]
            );
            return;
        }

        onPickNumber(chosenNumber);
    };

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <Text style={styles.instructionText}> Enter a Number</Text>
                <TextInput
                    style={styles.input}
                    maxLength={2}
                    keyboardType={"number-pad"}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={resetInputHandler}> Reset</PrimaryButton>
                    <PrimaryButton onPress={confirmInpuHandler}>Confirm</PrimaryButton>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
    input: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        paddingVertical: 0,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    btnContainer: {
        flexDirection: "row",
    },
});
