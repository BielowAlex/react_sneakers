import React from 'react';
import {SneakersCard} from "../SneakersCard";
import {sneakersService} from "../../services";
import {ISneakers} from "../../interfaces/sneakers_interface";

const SneakersList:React.FC = () => {
    const [sneakers,setSneakers] = React.useState<ISneakers[]>([]);
    React.useEffect(()=>{
        sneakersService.getAll().then(({data})=>setSneakers(data));
    },[])
    console.log(sneakers);
    return (
        <div className="sneakers_list">

            {sneakers.length>0 && sneakers.map(sneakers=><SneakersCard sneakers={sneakers} key={sneakers.id}/> )}
        </div>
    );
};

export {SneakersList};
