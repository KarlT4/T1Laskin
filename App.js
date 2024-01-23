import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [tulos, setTulos] = useState(null);

  const Plus = () => {
      const summa = Number(numero1) + Number(numero2);
      setTulos(`Summa: ${summa}`);
  };

  const Miinus = () => {
      const erotus = Number(numero1) - Number(numero2);
      setTulos(`Erotus: ${erotus}`); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Syötä ensimmäinen numero"
        keyboardType="numeric"
        value={numero1}
        onChangeText={(text) => setNumero1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Syötä toinen numero"
        keyboardType="numeric"
        value={numero2}
        onChangeText={(text) => setNumero2(text)}
      />
      <Button title="+" onPress={Plus} />
      <Button title="-" onPress={Miinus} />
      <Text>{tulos}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: 300,
    margin: 20,
    padding: 20,
  },
  tulos: {
    fontSize: 18,
    margin: 20,
  },

});
