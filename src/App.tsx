/* eslint-disable react/style-prop-object */
import React from 'react';
import { registerRootComponent } from 'expo';
import { RootSiblingParent } from 'react-native-root-siblings';
import { makePokemonsPage } from '@/main/factories/pages/PokemonsPageFactory';

const App: React.FC = () => {
  const Children = makePokemonsPage();
  return <RootSiblingParent>{Children}</RootSiblingParent>;
};

export default registerRootComponent(App);
