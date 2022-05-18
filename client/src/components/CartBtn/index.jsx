import React, { useState } from 'react';
import './CartBtn.css'

// const CartPopup = () => {
//     return(
//         <>
//         <div> Hello World </div>
//         </>
//     )

// }

const Index = () => {
const [isOpen, setisOpen] = useState(false)

    return (
        <>
        <button className="cart"
        onClick={()=>setisOpen(!isOpen)}
        >
            hello
        </button>
        </>
    );
};

export default Index;