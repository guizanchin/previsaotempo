import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native';

export default function DetalhePrevisao({ navigation, route }) {

    const [data, setData] = useState();
    const [cidade, setCidade] = useState();
    const [diaSemana, setDiaSemana] = useState();
    const codIbge = route.params?.codigoIbge;
    const periodos = [["manha", "Manhã"], ["tarde", "Tarde"], ["noite", "Noite"]];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        previsao();
    }, []);

    function previsao() {
        axios
            .get(
                `https://apiprevmet3.inmet.gov.br/previsao/${codIbge}`
            )
            .then(({ data }) => {

                const lista = periodos.map((item) => {

                    var prev = data[codIbge][new Date().toLocaleDateString()][item[0]];

                    const previsao = {};
                    previsao.periodo = item[1];
                    previsao.temp_max = prev.temp_max;
                    previsao.temp_min = prev.temp_min;
                    previsao.icone = prev.icone;

                    setCidade(prev.entidade + ' - ' + prev.uf);
                    setDiaSemana(new Date().toLocaleDateString() + ' ' + prev.dia_semana);

                    return previsao;
                });

                setData(lista);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={styles.carregar}>
                    <ActivityIndicator size="large" color="black" />
                </View>
            ) : (

                <View style={styles.previsoes}>
                    <Text style={styles.titulo}>{cidade}</Text>
                    <Text style={styles.dia}>{diaSemana}</Text>

                    <FlatList
                        data={data}
                        scrollEnabled={false}
                        horizontal={true}
                        keyExtractor={(id, index) => index.toString()}
                        renderItem={({ item }) =>
                            <View style={styles.previsao}>
                                <Text>{item.periodo}</Text>
                                <Text>Min. {item.temp_min}</Text>
                                <Text>Máx. {item.temp_max}</Text>
                                <Image
                                    style={styles.tinyLogo}
                                    source={{
                                        uri: item.icone,
                                    }}
                                />
                            </View>
                        }
                    />
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    carregar: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    previsoes: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 25,
        marginBottom: 50,
    },
    dia: {
        fontSize: 18,
        marginBottom: 20,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    previsao: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
    },
});
