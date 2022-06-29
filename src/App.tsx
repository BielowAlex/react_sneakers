import * as React from "react";
import {useState} from "react";
import {Routes,Route} from "react-router-dom";

import './styles/style.css'
import {Header} from "./components";
import {Cart, Home} from "./Pages";



const App: React.FC = () => {
    const [overlayShow, setOverlayShow] = useState(false);
    const setOverlay = () =>{
        setOverlayShow(!overlayShow);
    }

    return (
        <div className="wrapper">
            <Header setOverlay={setOverlay}/>
            <Routes>
                <Route path="/" element={<Home setOverlay={setOverlay} overlayShow={overlayShow}/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
    );
}

export {App}