import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function Previsoes({ navigation }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          navigation.navigate("DetalhePrevisao", {
            codigoIbge: "4314100",
          });
        }}
      >
        <View style={styles.containerBotao}>
          <Text style={styles.item}>Passo Fundo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          navigation.navigate("DetalhePrevisao", {
            codigoIbge: "4311809",
          });
        }}
      >
        <View style={styles.containerBotao}>
          <Text style={styles.item}>Marau</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          navigation.navigate("DetalhePrevisao", {
            codigoIbge: "4304705",
          });
        }}
      >
        <View style={styles.containerBotao}>
          <Text style={styles.item}>Carazinho</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          navigation.navigate("DetalhePrevisao", {
            codigoIbge: "4320800",
          });
        }}
      >
        <View style={styles.containerBotao}>
          <Text style={styles.item}>Soledade</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          navigation.navigate("DetalhePrevisao", {
            codigoIbge: "4307005",
          });
        }}
      >
        <View style={styles.containerBotao}>
          <Text style={styles.item}>Erechim</Text>
        </View>
      </TouchableOpacity>

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
  botao: {
    marginBottom: 10,
  },
  item: {
    fontSize: 20,
    marginBottom: 10,
    color: "#222",
    fontWeight: "bold",
  },
  containerBotao: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    backgroundColor: "#ffd545",
    padding: 10,
    borderWidth: 1,
  },
  titulo: {
    fontSize: 25,
    marginBottom: 10,
  },
});
