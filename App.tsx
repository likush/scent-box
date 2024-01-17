import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabStack} from './modules/headless/nav/stacks';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TabStack />
    </NavigationContainer>
  );
}

export default App;
