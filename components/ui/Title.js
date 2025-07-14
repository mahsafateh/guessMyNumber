import {StyleSheet, Text} from "react-native"

export default function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
};

const styles = StyleSheet.create({
    title: {
        marginTop: 50,
        fontSize: 24,
        fontFamily: "open-sans-bold",
        color: "#90695f",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#90695f",
        padding: 12,
    },
});