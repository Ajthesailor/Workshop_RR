import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Black from './Black';
import Orange from './Orange';
import White from './White';

function MainContainer() {
  return (
    <div id='main-section'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/black" element={<Black />} />
          <Route path="/orange" element={<Orange />} />
          <Route path="/white" element={<White />} />
          
        </Routes>
      </div>
  );
}

export default MainContainer;