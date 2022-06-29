import React from 'react';
import {CardButton} from "../CardButton/CardButton";

const SneakersCard = () => {
    return (
        <div className="sneakers_card">
            <div className="sneakers_card_top">
                <img width={133} height={112} src="/img/sneakers1.jpg" alt="sneakers photo"/>
                <h3>Men’s Sneakers Nike Blazer Mid Suede</h3>
            </div>
            <div className="sneakers_card_bottom">
                <div className="price">
                    <span className="subtext">Price:</span>
                    <span className="price_count">1650 UAH</span>
                </div>
                <CardButton>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z"
                            fill="#D3D3D3"/>
                    </svg>
                </CardButton>
            </div>
        </div>
    );
};

export {SneakersCard};
