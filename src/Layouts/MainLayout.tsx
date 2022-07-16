import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {Header} from "../components";

interface IProps{
    setOverlay:()=>void
}

const MainLayout:React.FC<IProps> = ({setOverlay}) => {
    const {pathname} = useLocation();

    return (
        <div>
            {pathname !=='/login' && pathname!=='/signup'
                ?<Header setOverlay={setOverlay}/>
                :null
            }
            <Outlet/>
        </div>
    );
};

export {MainLayout};
