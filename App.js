import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainTitleContainer}>
        <Text style={styles.mainTitle}>Rock, Papers, Scissors</Text>
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
});
