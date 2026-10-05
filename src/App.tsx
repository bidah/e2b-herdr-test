import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => setCount((c) => c + 1)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
  },
  count: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  button: {
    marginTop: 32,
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: '#10b981',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
