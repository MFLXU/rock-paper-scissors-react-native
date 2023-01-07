import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChocie, setComputerChocie] = useState();
  const
  const playerChoiceHandler = (choice) => {
    setPlayerChoice(choice);
  };
  const computerChocieHandler = (playerChoice) => {
    const choices = ["rock", "paper", "scissors"];
    choices.forEach(choice => {
      if(choice === playerChoice){

      }
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainTitleContainer}>
        <Text style={styles.mainTitle}>Rock, Papers, Scissors</Text>
      </View>
      <View style={styles.gameContainer}>
        {/* Computer Choice*/}
        <View style={styles.computerChoiceCon}>
          <Text style={styles.playerChoice}>🏎️</Text>
        </View>
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
    backgroundColor: "#fefefe",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 999,
  },
  icons: {
    fontSize: 40,
  },
  playerChoiceCon: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  playerChoice: {
    fontSize: 100,
  },
  computerChoiceCon: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
