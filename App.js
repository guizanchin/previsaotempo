import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./src/Main";
import Sobre from "./src/Sobre";
import Previsoes from "./src/Previsoes";
import DetalhePrevisao from "./src/DetalhePrevisao";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Página Inicial",
            headerTitleAlign: "center",
            headerStyle: {
              elevation: 2,
            },
          }}
        />
        <Stack.Screen
          name="Previsoes"
          component={Previsoes}
          options={{
            title: "Previsões",
            headerTitleAlign: "center",
            headerStyle: {
              elevation: 2,
            },
          }}
        />
        <Stack.Screen
          name="DetalhePrevisao"
          component={DetalhePrevisao}
          options={{
            title: "Detalhe da Previsão",
            headerTitleAlign: "center",
            headerStyle: {
              elevation: 2,
            },
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: "Sobre",
            headerTitleAlign: "center",
            headerStyle: {
              elevation: 2,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
