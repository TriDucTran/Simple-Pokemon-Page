import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import HomePage from './components/HomePage.js';
import PokemonPage from './components/PokemonPage.js';
import BerryPage from './components/BerryPage.js';
import PokemonPageAdmin from './components/PokemonPageAdmin.js'
import BerryPageAdmin from './components/BerryPageAdmin.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/pokemon" element={<PokemonPage />}></Route>
          <Route path="/berry" element={<BerryPage />}></Route>
          <Route path="/admin"></Route>
          <Route path="/admin/pokemon-admin" element={<PokemonPageAdmin />}>
          </Route>
          <Route path="/admin/berry-admin" element={<BerryPageAdmin />}>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
