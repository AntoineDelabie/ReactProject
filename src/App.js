import React from 'react';
import Recettes from './Components/Recettes';
import Blog from './Components/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';

const App = () => {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Recettes />} />
            <Route path='Blog' element={<Blog />} />
            <Route path='Recettes' element={<Recettes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;