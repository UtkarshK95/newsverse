import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import NewsTabs from "./components/NewsTabs";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <NewsTabs />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
