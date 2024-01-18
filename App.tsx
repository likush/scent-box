import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabStack} from './modules/headless/nav/stacks';
import {Provider} from 'react-redux';
import {store} from './modules/headless/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
