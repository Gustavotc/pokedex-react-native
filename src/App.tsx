/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { StyleSheet, View, Text } from 'react-native';
import { makePokemonsPage } from '@/main/factories/pages/PokemonsPageFactory';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const App: React.FC = () => {
  return makePokemonsPage();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Alou</Text>
    </View>
  );
};

export default registerRootComponent(App);
