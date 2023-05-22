import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Drink Water App</Text>
      <TouchableOpacity onPress={incrementCount} style={styles.button}>
        <Text style={styles.buttonText}>Add 1 cup of water</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>You have drank {count} cup(s) of water today!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#008cff',
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 20,
    marginTop: 40,
  }
});