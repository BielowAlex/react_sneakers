import React from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from "../components";

interface IProps{
    setOverlay:()=>void
}

const MainLayout:React.FC<IProps> = ({setOverlay}) => {

    return (
        <div>
            <Header setOverlay={setOverlay}/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
