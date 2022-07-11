import * as React from "react";
import {Routes, Route} from "react-router-dom";

import './styles/style.css'
// import {Header} from "./components";
import {Cart, Home} from "./Pages";
import {MainLayout} from "./Layouts/MainLayout";


function Navigate(props: { to: string }) {
    return null;
}

const App: React.FC = () => {
    const [overlayShow, setOverlayShow] = React.useState(false);
    const setOverlay = () => {
        setOverlayShow(!overlayShow);
    }

    return (
        <Routes>
            <Route path="/" element={<MainLayout setOverlay={setOverlay}/>}>
                <Route index element={<Home setOverlay={setOverlay} overlayShow={overlayShow}/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Route>
        </Routes>
    );
}

export {App}