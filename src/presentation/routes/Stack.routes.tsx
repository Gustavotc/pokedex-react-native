import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MakePokemonsPage } from '@/main/factories/pages/PokemonsPageFactory';
import PokemonDetailsPage from '../pages/pokemonDetailsPage/PokemonDetailsPage';

export type StackRoutesParamsList = {
  PokemonsPage: undefined;
  PokemonDetailsPage: { id: number | string };
};

const Stack = createNativeStackNavigator<StackRoutesParamsList>();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PokemonsPage" component={MakePokemonsPage} />
      <Stack.Screen name="PokemonDetailsPage" component={PokemonDetailsPage} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
