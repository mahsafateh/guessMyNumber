import {useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import {ImageBackground, SafeAreaView, StyleSheet} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen/build/index";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);
    // Keep splash screen visible
    SplashScreen.preventAutoHideAsync();

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    useEffect(() => {
        async function prepare() {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null; // Let SplashScreen stay up
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    const gameOverHandler = () => {
        setGameIsOver(true);
    };

    const startNewGAmeHandler = () => {
        setUserNumber(null);
        setGuessRounds(0)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) {
        screen = (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
        );
    }

    if (gameIsOver && userNumber) {
        screen =
            <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGAmeHandler}/>;
    }

    return (
        <LinearGradient
            colors={["#BEB6CF", "#EEAECA", "#94BBE9"]}
            style={styles.container}
        >
            <ImageBackground
                source={require("./assets/images/background.png")}
                resizeMode='cover'
                style={styles.container}
                imageStyle={styles.backgroundImage}
            >
                <StatusBar style='auto'/>
                <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.4,
    },
});
