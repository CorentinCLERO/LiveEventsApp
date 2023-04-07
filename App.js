import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Basics from './components/Basics';

function App() {
  return (
    <NavigationContainer>
      <Basics />
    </NavigationContainer>
  );
}

export default App;