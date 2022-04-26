import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function Main({ navigation }) {
    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => {
                    navigation.navigate("Previsoes");
                }}
            >
                <View style={styles.containerBotao}>
                    <Text style={styles.item}>Previsões</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => {
                    navigation.navigate("Sobre");
                }}
            >
                <View style={styles.containerBotao}>
                    <Text style={styles.item}>Sobre</Text>
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
