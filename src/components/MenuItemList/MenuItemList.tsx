import React from 'react';
import {Menuitem} from "../MenuItem/MenuItem";
import {useAppSelector} from "../../hook/redux";

const MenuItemList = () => {
    const {cartList} = useAppSelector(state => state.sneakersReducer);

    return (
        <div className="menu_item_list">
            {cartList && cartList.map((sneakers,id)=><Menuitem key={id} sneakers={sneakers} index={id}/>)}
        </div>
    );
};

export {MenuItemList};
