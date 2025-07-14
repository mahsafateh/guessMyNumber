import {StyleSheet, Text, View} from "react-native";
import Colors from "../../utils/colors";

export default function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100, // 👈 Fixed width
        height: 100,
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        borderRadius: 8,
        margin: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontFamily: "open-sans-bold",
    },
});
