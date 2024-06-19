import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home.jsx'
import Web from '../Pages/Web.jsx'
import Games from '../Pages/Games/Games.jsx'
import PixelArt from '../Pages/PixelArt.jsx'

import EtherProject from '../Pages/Games/Projects/EtherProject.jsx'
import ColorDamageProject from '../Pages/Games/Projects/ColorDamageProject.jsx'
import RiseFromHellProject from '../Pages/Games/Projects/RiseFromHellProject.jsx'
import EtherGenesisProject from '../Pages/Games/Projects/EtherGenesisProject.jsx'
import AotwProject from '../Pages/Games/Projects/AotwProject.jsx'
import LightyProject from '../Pages/Games/Projects/LightyProject.jsx'


export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/web" element={<Web/>}/>
        <Route path="/games" element={<Games/>}>
            <Route path="/games/EtherProject" element={<EtherProject/>}/>
            <Route path="/games/ColorDamageProject" element={<ColorDamageProject/>}/>
            <Route path="/games/RiseFromHellProject" element={<RiseFromHellProject/>}/>
            <Route path="/games/EtherGenesisProject" element={<EtherGenesisProject/>}/>
            <Route path="/games/AotwProject" element={<AotwProject/>}/>
            <Route path="/games/LightyProject" element={<LightyProject/>}/>
        </Route>
        <Route path="/pixelart" element={<PixelArt/>}/>
    </Routes>
    )
}