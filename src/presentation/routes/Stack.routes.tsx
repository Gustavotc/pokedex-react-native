import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  MakePokemonsPage,
  MakePokemonDetailsPage,
} from '@/main/factories/pages';

export type StackRoutesParamsList = {
  PokemonsPage: undefined;
  PokemonDetailsPage: { pokemonName: string };
};

const Stack = createNativeStackNavigator<StackRoutesParamsList>();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PokemonsPage" component={MakePokemonsPage} />
      <Stack.Screen
        name="PokemonDetailsPage"
        component={MakePokemonDetailsPage}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
