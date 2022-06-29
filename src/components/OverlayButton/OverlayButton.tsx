import React from 'react';

const OverlayButton = ({children}:{children:React.ReactNode}) => {
    return (
        <button className="overlay_btn">
            {children}
        </button>
    );
};

export {OverlayButton};
