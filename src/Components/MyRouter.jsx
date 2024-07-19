import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Base
import Home from '../Pages/Home/Home.jsx'
import Web from '../Pages/Web/Web.jsx'
import Games from '../Pages/Games/Games.jsx'
import PixelArt from '../Pages/PixelArt.jsx'

// Web
import BookiProject from '../Pages/Web/Projects/Booki/Booki.jsx'
import KasaProject from '../Pages/Web/Projects/Kasa/Kasa.jsx'
import SevenEventsProject from '../Pages/Web/Projects/724Events/724Events.jsx'
import ArgentBankProject from '../Pages/Web/Projects/ArgentBank/ArgentBank.jsx'
import NinaCarducciProject from '../Pages/Web/Projects/NinaCarducci/NinaCarducci.jsx'
import SophieBluelProject from '../Pages/Web/Projects/SophieBluel/SophieBluel.jsx'
import OhMyFoodProject from '../Pages/Web/Projects/OhMyFood/OhMyFood.jsx'

// Games
import EtherProject from '../Pages/Games/Projects/EtherProject.jsx'
import ColorDamageProject from '../Pages/Games/Projects/ColorDamageProject.jsx'
import RiseFromHellProject from '../Pages/Games/Projects/RiseFromHellProject.jsx'
import EtherGenesisProject from '../Pages/Games/Projects/EtherGenesisProject.jsx'
import AotwProject from '../Pages/Games/Projects/AotwProject.jsx'
import LightyProject from '../Pages/Games/Projects/LightyProject.jsx'

export default function Router() {
  return (
    <Routes basename="/portfolio">
        <Route path="/portfolio" element={<Home/>}/>
        <Route path="/portfolio/web" element={<Web/>}>
            <Route path="/portfolio/web/BookiProject" element={<BookiProject/>}/>
            <Route path="/portfolio/web/KasaProject" element={<KasaProject/>}/>
            <Route path="/portfolio/web/SevenEventsProject" element={<SevenEventsProject/>}/>
            <Route path="/portfolio/web/ArgentBankProject" element={<ArgentBankProject/>}/>
            <Route path="/portfolio/web/NinaCarducciProject" element={<NinaCarducciProject/>}/>
            <Route path="/portfolio/web/SophieBluelProject" element={<SophieBluelProject/>}/>
            <Route path="/portfolio/web/OhMyFoodProject" element={<OhMyFoodProject/>}/>
        </Route>
        <Route path="/portfolio/games" element={<Games/>}>
            <Route path="/portfolio/games/EtherProject" element={<EtherProject/>}/>
            <Route path="/portfolio/games/ColorDamageProject" element={<ColorDamageProject/>}/>
            <Route path="/portfolio/games/RiseFromHellProject" element={<RiseFromHellProject/>}/>
            <Route path="/portfolio/games/EtherGenesisProject" element={<EtherGenesisProject/>}/>
            <Route path="/portfolio/games/AotwProject" element={<AotwProject/>}/>
            <Route path="/portfolio/games/LightyProject" element={<LightyProject/>}/>
        </Route>
        <Route path="/portfolio/pixelart" element={<PixelArt/>}/>
    </Routes>
    )
}