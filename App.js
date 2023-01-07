import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const playerChoiceHandler = (choice) => {
    setPlayerChoice(choice);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainTitleContainer}>
        <Text style={styles.mainTitle}>Rock, Papers, Scissors</Text>
      </View>
      <View style={styles.gameContainer}>
        {/* Player Choice*/}
        <View style={styles.playerChoiceCon}>
          <Text style={styles.playerChoice}>
            {playerChoice === null
              ? null
              : playerChoice === "rock"
              ? "🪨"
              : playerChoice === "paper"
              ? "📄"
              : playerChoice === "scissors"
              ? "✂"
              : null}
          </Text>
        </View>
        {/* Player Buttons*/}
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => {
              playerChoiceHandler("rock");
            }}
            style={styles.iconButton}
          >
            <Text style={styles.icons}>🪨</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              playerChoiceHandler("paper");
            }}
            style={styles.iconButton}
          >
            <Text style={styles.icons}>📄</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              playerChoiceHandler("scissors");
            }}
            style={styles.iconButton}
          >
            <Text style={styles.icons}>✂</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainTitleContainer: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  mainTitle: {
    fontSize: 20,
    color: "#fff",
  },
  gameContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    marginHorizontal: 5,
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 999,
  },
  icons: {
    fontSize: 40,
  },
  playerChoiceCon: {
    marginTop: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  playerChoice: {
    fontSize: 70,
  },
});
