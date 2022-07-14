import React from 'react';
import {Overlay} from "../../components";
import {Slider, Sneakers} from "../../components";

interface IProps{
    setOverlay:()=>void,
    overlayShow?:boolean
}

const Home:React.FC<IProps> = ({setOverlay,overlayShow}) => {
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
