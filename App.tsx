import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Button } from 'react-native';

export default function App() {
  const [isPressed, setIP] = useState(false);
  const showAlert = () => Alert.prompt('Exceed', 'Are you want to login?', text=>console.log(text))
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={showAlert} >Hello</Text>
      <Button title='press me' onPress={showAlert} />
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "red",
  }
});
