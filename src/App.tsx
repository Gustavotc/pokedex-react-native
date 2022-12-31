/* eslint-disable react/style-prop-object */
import React from 'react';
import { registerRootComponent } from 'expo';
import { RootSiblingParent } from 'react-native-root-siblings';
import Routes from './presentation/routes/Routes';

const App: React.FC = () => {
  return (
    <RootSiblingParent>
      <Routes />
    </RootSiblingParent>
  );
};

export default registerRootComponent(App);
