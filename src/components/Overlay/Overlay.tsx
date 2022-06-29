import React from 'react';
import {OverlayHandler} from "../../interfaces/OverlayHandler";
import {MenuItemList} from "../MenuItemList";
import {OverlayButton} from "../OverlayButton/OverlayButton";
import {Link} from "react-router-dom";

const Overlay:React.FC<OverlayHandler> = ({setOverlay,overlayShow}) => {
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
