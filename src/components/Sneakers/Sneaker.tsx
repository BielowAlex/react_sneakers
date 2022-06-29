import React from 'react';
import {SneakersList} from "../SneakersList";

const Sneakers:React.FC = () => {
    return (
        <section className="sneakers">
            <div className="sneakers_top">
                <h2>All sneakers</h2>
                <div className="search">

                </div>
            </div>
            <SneakersList/>
        </section>
    );
};

export {Sneakers};
