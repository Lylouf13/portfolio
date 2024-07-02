import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Base
import Home from '../Pages/Home/Home.jsx'
import Web from '../Pages/Web.jsx'
import Games from '../Pages/Games/Games.jsx'
import PixelArt from '../Pages/PixelArt.jsx'

// Games
import EtherProject from '../Pages/Games/Projects/EtherProject.jsx'
import ColorDamageProject from '../Pages/Games/Projects/ColorDamageProject.jsx'
import RiseFromHellProject from '../Pages/Games/Projects/RiseFromHellProject.jsx'
import EtherGenesisProject from '../Pages/Games/Projects/EtherGenesisProject.jsx'
import AotwProject from '../Pages/Games/Projects/AotwProject.jsx'
import LightyProject from '../Pages/Games/Projects/LightyProject.jsx'

// Web
import BookiProject from '../Pages/Web/Projects/Booki/Booki.jsx'
import KasaProject from '../Pages/Web/Projects/Kasa/Kasa.jsx'
import SevenEventsProject from '../Pages/Web/Projects/724Events/724Events.jsx'
import ArgentBankProject from '../Pages/Web/Projects/ArgentBank/ArgentBank.jsx'
import NinaCarducciProject from '../Pages/Web/Projects/NinaCarducci/NinaCarducci.jsx'
import SophieBluelProject from '../Pages/Web/Projects/SophieBluel/SophieBluel.jsx'
import OhMyFoodProject from '../Pages/Web/Projects/OhMyFood/OhMyFood.jsx'

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/web" element={<Web/>}>
            <Route path="/web/BookiProject" element={<BookiProject/>}/>
            <Route path="/web/KasaProject" element={<KasaProject/>}/>
            <Route path="/web/SevenEventsProject" element={<SevenEventsProject/>}/>
            <Route path="/web/ArgentBankProject" element={<ArgentBankProject/>}/>
            <Route path="/web/NinaCarducciProject" element={<NinaCarducciProject/>}/>
            <Route path="/web/SophieBluelProject" element={<SophieBluelProject/>}/>
            <Route path="/web/OhMyFoodProject" element={<OhMyFoodProject/>}/>
        </Route>
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