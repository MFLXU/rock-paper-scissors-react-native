import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import { useRef, useState } from "react";

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChocie, setComputerChocie] = useState();
  const [result, setResult] = useState("Start");

  const playerChoiceHandler = (choice) => {
    setPlayerChoice(choice);
  };
  const computerChocieHandler = () => {
    const choices = ["rock", "paper", "scissors"];
    let comChoice = Math.floor(Math.random() * 3);
    setComputerChocie(choices[comChoice]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gameContainer}>
        {/* Computer Choice*/}
        <View style={styles.computerChoiceCon}>
          <Text style={styles.side}>Phone</Text>
          <Text style={styles.compChoice}>
            {computerChocie === null ? null : computerChocie === "rock" ? (
              <Image
                style={styles.compChoice}
                source={require("./assets/rock.png")}
              ></Image>
            ) : computerChocie === "paper" ? (
              <Image
                style={styles.compChoice}
                source={require("./assets/paper.png")}
              ></Image>
            ) : computerChocie === "scissors" ? (
              <Image
                style={styles.compChoice}
                source={require("./assets/scissors.png")}
              ></Image>
            ) : null}
          </Text>
        </View>
        {/* Result */}
        <View style={styles.reslutsCon}>
          <Text style={styles.results}>
            {playerChoice === computerChocie
              ? "Draw"
              : playerChoice === "rock" && computerChocie === "paper"
              ? "Loss"
              : playerChoice === "rock" && computerChocie === "scissors"
              ? "Win"
              : playerChoice === "paper" && computerChocie === "scissors"
              ? "Loss"
              : playerChoice === "scissors" && computerChocie === "paper"
              ? "Win"
              : playerChoice === "paper" && computerChocie === "rock"
              ? "Win"
              : playerChoice === "scissors" && computerChocie === "rock"
              ? "Loss"
              : "Start"}
          </Text>
        </View>
        {/* Player Choice*/}
        <View style={styles.playerChoiceCon}>
          {playerChoice === null ? null : playerChoice === "rock" ? (
            <Image
              style={styles.playerChoice}
              source={require("./assets/rock.png")}
            ></Image>
          ) : playerChoice === "paper" ? (
            <Image
              style={styles.playerChoice}
              source={require("./assets/paper.png")}
            ></Image>
          ) : playerChoice === "scissors" ? (
            <Image
              style={styles.playerChoice}
              source={require("./assets/scissors.png")}
            ></Image>
          ) : null}
          <Text style={styles.side}>Player</Text>
        </View>

        {/* Player Buttons*/}
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => {
              playerChoiceHandler("rock");
              computerChocieHandler();
            }}
          >
            <Image
              style={styles.icons}
              source={require("./assets/rock.png")}
            ></Image>
          </Pressable>
          <Pressable
            onPress={() => {
              playerChoiceHandler("paper");
              computerChocieHandler();
            }}
          >
            <Image
              style={styles.icons}
              source={require("./assets/paper.png")}
            ></Image>
          </Pressable>
          <Pressable
            onPress={() => {
              playerChoiceHandler("scissors");
              computerChocieHandler();
            }}
          >
            <Image
              style={styles.icons}
              source={require("./assets/scissors.png")}
            ></Image>
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
    backgroundColor: "#ffea00",
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
    marginBottom: 80,
    marginTop: 10,
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
    marginHorizontal: 5,

    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 999,
    width: 100,
    height: 100,
  },
  playerChoiceCon: {
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  playerChoice: {
    width: 150,
    height: 150,
  },
  compChoice: {
    width: 150,
    height: 150,
  },
  computerChoiceCon: {
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  reslutsCon: {
    justifyContent: "center",
    alignItems: "center",
  },
  results: {
    width: 200,
    textAlign: "center",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  side: {
    width: 50,
    marginVertical: 10,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 14,
  },
});
