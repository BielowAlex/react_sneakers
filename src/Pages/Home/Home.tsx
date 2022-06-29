import React from 'react';
import {Overlay} from "../../components/Overlay";
import {Slider, Sneakers} from "../../components";
import {OverlayHandler} from "../../interfaces/OverlayHandler";

const Home:React.FC<OverlayHandler> = ({setOverlay,overlayShow}) => {
    return (
        <>
            <Overlay setOverlay={setOverlay} overlayShow={overlayShow}/>
            <Slider/>
            <div className="content_section">
                <Sneakers/>
            </div>
        </>
    );
};

export {Home};
