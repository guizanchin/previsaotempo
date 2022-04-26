import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Informações do Desenvolvedor</Text>
      <Text style={styles.escrita}>Nome: Guilherme Zanchin</Text>
      <Text style={styles.escrita}>Telefone: (54) 9 9966-4952</Text>
      <Text style={styles.escrita}>E-mail: 1119377@edu.imed.br</Text>
      <Text style={styles.escrita}>RA: 1119377</Text>
      <Text style={styles.escrita}></Text>
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
  titulo: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: "bold",
  },
  escrita: {
    fontSize: 20,
    marginBottom: 10,
  },
});
