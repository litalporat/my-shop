import React, { useState } from 'react';
import ArrowBtn from '../ArrowBtn';
import './FilterComp.css'


const FilterComp = props => {
    const [isOpen, setIsOpen] = useState(false);

    isOpen && document.addEventListener("click" ,(e) => {
        if(e.target.className == 'filter-box')
        setIsOpen(!isOpen)
    })

    const options = {
        stock : ["XS","S","M","L","XL","One-Size"],
        colors: ["Blue","Red","Green","Black","Pink","White"]
    }
    function checkValue(e) {
        if(e.target.checked)
            props.filterFunc(e.target.id,e.target.value)
        else
            props.delFilterFunc(e.target.id,e.target.value)
    }


    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Filters</button>
            {
                isOpen && (
                    <div className="filter-box">
                    <div className='filter-container'>
                        <h3>Price</h3>
                        <label className='check-cont'>
                        <input type="checkbox" /> Price <span className="checkmark"></span></label>
                        <tr/>
                        <h3>Size</h3>
                        {options.stock.map(size => (
                            <label className='check-cont'>
                                <input type="checkbox" 
                                onChange={checkValue}
                                value={String(size)}
                                id={'stock'}
                                />
                                 {String(size)}
                                 <span className="checkmark"></span></label>
                            ))}
                        <tr/>
                        <h3>Color</h3>
                        {options.colors.map(color => (
                            <label className='check-cont'>
                                <input type="checkbox" 
                                onChange={checkValue}
                                value={String(color)}
                                id={'color'}
                                />
                                 {String(color)} <span className="checkmark"></span><span className="checkmark"></span></label>
                            ))}
                    <tr/>
                    <center><ArrowBtn content={"submit"}/></center>
                    </div>
                    </div>
                )
            }
        </div>
    );
};

export default FilterComp;