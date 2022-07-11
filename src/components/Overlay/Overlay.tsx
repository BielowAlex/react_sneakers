import React from 'react';
import {MenuItemList} from "../MenuItemList";
import {OverlayButton} from "../OverlayButton/OverlayButton";
import {Link} from "react-router-dom";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../redux";

interface IProps{
    setOverlay:()=>void,
    overlayShow?:boolean
}

const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;

const Overlay:React.FC<IProps> = ({setOverlay,overlayShow}) => {

    const {cartList} = useAppSelector(state => state.sneakersReducer);

    return (
        <div className={`overlay ${overlayShow?'_active':''}`}>
            <div
                className={`back ${overlayShow?'_active':''}`}
                onClick={setOverlay}/>

            <div className={`cart_menu ${overlayShow?'_active':''}`}>
                <h2>Cart</h2>
                <div className="menu_content">
                    <MenuItemList/>
                </div>
                <div className="checkout">
                    <ul className="order_desc">
                        <li>
                            <span>Order:</span>
                            <div/>
                            <span className="sum">1400 UAH;</span>
                        </li>
                        <li>
                            <span>Commission 5%:</span>
                            <div/>
                            <span className="sum">70 UAH;</span>
                        </li>
                    </ul>
                    <Link to="/cart">
                        <OverlayButton>
                            Checkout
                        </OverlayButton>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export {Overlay};
