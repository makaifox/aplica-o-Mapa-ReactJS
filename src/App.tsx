import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapPage from './pages/MapPage';
import ImLucky from './Components/ImLucky';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container>
        <MapPage />
        <ImLucky />
      </Container>
    </>
  );
}

export default App;
