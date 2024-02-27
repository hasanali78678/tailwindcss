// tailwindcss p
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './UBISOFTGames/Home';
import Play from './UBISOFTGames/GamePlay/Play';
import Shop from './UBISOFTGames/GameShop/Shop';
const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Play' element={<Play />} />
        <Route path='/Shop' element={<Shop />} />
      </Routes>
    </React.Fragment>
  )
}

export default App;

