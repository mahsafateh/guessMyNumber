import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#BEB6CF", "#EEAECA", "#94BBE9"]}
      style={styles.container}
    >
      <ImageBackground 
      source={require("./assets/images/background.png")}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.backgroundImage}
      >
        <StatusBar style='auto' />
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.40,
  }
});
