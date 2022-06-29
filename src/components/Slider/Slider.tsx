import React from 'react';

const Slider:React.FC = () => {
    return (
        <div className="slider">
            <div className="slider_list">
                <div className="poster">
                    <img src="/img/slide.png" alt="slide"/>
                    {/*<button>Buy</button>*/}
                </div>
            </div>
        </div>
    );
};

export {Slider};
