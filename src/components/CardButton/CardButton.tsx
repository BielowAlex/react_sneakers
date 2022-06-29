import React, {useState} from 'react';

const CardButton = ({children}:{children:React.ReactNode}) => {
    const [isAdded,setIsAdded] = useState<boolean>(false);

    return (
        <button className="card_btn" onClick={()=>setIsAdded(!isAdded)}>
            {isAdded?<img src="img/added.svg" alt="added"/>:children}
        </button>
    );
};

export {CardButton};
