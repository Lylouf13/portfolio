import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Base
import Home from '../Pages/Home/Home.jsx'
import Web from '../Pages/Web.jsx'
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
    <Routes basename="/Portfolio">
        <Route path="/Portfolio" element={<Home/>}/>
        <Route path="/Portfolio/web" element={<Web/>}>
            <Route path="/Portfolio/web/BookiProject" element={<BookiProject/>}/>
            <Route path="/Portfolio/web/KasaProject" element={<KasaProject/>}/>
            <Route path="/Portfolio/web/SevenEventsProject" element={<SevenEventsProject/>}/>
            <Route path="/Portfolio/web/ArgentBankProject" element={<ArgentBankProject/>}/>
            <Route path="/Portfolio/web/NinaCarducciProject" element={<NinaCarducciProject/>}/>
            <Route path="/Portfolio/web/SophieBluelProject" element={<SophieBluelProject/>}/>
            <Route path="/Portfolio/web/OhMyFoodProject" element={<OhMyFoodProject/>}/>
        </Route>
        <Route path="/Portfolio/games" element={<Games/>}>
            <Route path="/Portfolio/games/EtherProject" element={<EtherProject/>}/>
            <Route path="/Portfolio/games/ColorDamageProject" element={<ColorDamageProject/>}/>
            <Route path="/Portfolio/games/RiseFromHellProject" element={<RiseFromHellProject/>}/>
            <Route path="/Portfolio/games/EtherGenesisProject" element={<EtherGenesisProject/>}/>
            <Route path="/Portfolio/games/AotwProject" element={<AotwProject/>}/>
            <Route path="/Portfolio/games/LightyProject" element={<LightyProject/>}/>
        </Route>
        <Route path="/Portfolio/pixelart" element={<PixelArt/>}/>
    </Routes>
    )
}