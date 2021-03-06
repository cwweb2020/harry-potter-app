import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes';
import CharProvider from './context';

import "./style.scss"

function App() {
  return (
    <>
      <CharProvider>
        <AppRoutes />
      </CharProvider>
   
    </>
  );
}

export default App;
