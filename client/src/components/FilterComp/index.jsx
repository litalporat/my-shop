import React, { useState } from 'react';
import ArrowBtn from '../ArrowBtn';
import './FilterComp.css'
import { Slider } from '@mui/material';


const FilterComp = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState([100,900])

    const updateRange = (e,data) => {
      setValue(data)
      props.filterByPrice(value);
    }

    isOpen && document.addEventListener("click" ,(e) => {
        if(e.target.className == 'filter-box')
        setIsOpen(!isOpen)
    })

    const options = [
        {title: "Sizes" ,param: "size", values :["XS","S","M","L","XL","One-Size"]},
        {title: "Colors" ,param: "color" , values :["Blue","Red","Green","Black","Pink","White"]}
    ]

    const checkValue = e => {
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
                        <Slider
                        value={value}
                        onChange={updateRange}
                        valueLabelDisplay="auto"
                        max={1000}
                        step={10}
                        />
                        <tr/>
                        {
                            options.map(obj => (
                                <>
                                <h3> {obj.title} </h3>
                                {obj.values.map(val=>(
                                    <>
                                    <label className='check-cont'>
                                    <input type="checkbox" 
                                    onChange={checkValue}
                                    value={val}
                                    id={obj.param}
                                    />
                                    {val}
                                    <span className="checkmark"></span></label>
                                    </>
                                ))}
                                <tr/>
                                </>
                            ))
                        }
                    <center><ArrowBtn content={"submit"}/></center>
                    </div>
                    </div>
                )
            }
        </div>
    );
};

export default FilterComp;