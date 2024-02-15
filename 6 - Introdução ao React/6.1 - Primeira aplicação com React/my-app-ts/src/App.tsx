import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Card } from './components/card';
import { Layout } from './components/Layout';


function App() {
  return (
    <Layout>
       <h1>Cards</h1>
      <Card 
        id={1}
        paragraph='Typescript'
        details='TS para frontend e backend'
      />
      <Card 
        id={2}
        paragraph='Javascript'
        details='JS para frontend'
      />
      <Card 
        id={3}
        paragraph='HTML'
        details='HTML para marcação de texto'
      />
      <Card 
        id={4}
        paragraph='CSS'
        details='CSS para estilos'
      />
    </Layout>
  );
}

export default App;
