import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header'
import {Route, Routes} from 'react-router-dom';
import TableUsers from './Pages/TableUsers';
import Form from './Pages/Form';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <div>
      <ChakraProvider>
        <Header />
      </ChakraProvider>

      <Routes>
      <Route path='/' element={<TableUsers />} />
      <Route path='form' element={<Form />} />
      <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}

export default App;
