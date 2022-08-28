import React from 'react';
import './App.css';
import Header from './Header';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
      </ChakraProvider>
        
    </div>
  );
}

export default App;
