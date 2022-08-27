import React from 'react';
import './App.css';
import Table from './Table';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Table />
      </ChakraProvider>
    </div>
  );
}

export default App;
