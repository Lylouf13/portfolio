import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home.jsx'
import Games from '../Pages/Games/Games.jsx'
import PixelArt from '../Pages/PixelArt.jsx'

import EtherProject from '../Pages/Games/Projects/EtherProject.jsx'
import ColorDamageProject from '../Pages/Games/Projects/ColorDamageProject.jsx'
import RiseFromHellProject from '../Pages/Games/Projects/RiseFromHellProject.jsx'


export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/games" element={<Games/>}>
            <Route path="/games/EtherProject" element={<EtherProject/>}/>
            <Route path="/games/ColorDamageProject" element={<ColorDamageProject/>}/>
            <Route path="/games/RiseFromHellProject" element={<RiseFromHellProject/>}/>
        </Route>
        <Route path="/pixelart" element={<PixelArt/>}/>
    </Routes>
    )
}