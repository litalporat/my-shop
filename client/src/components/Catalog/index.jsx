import './Catalog.css'
import React from 'react';

const Catalog = () => {
    return (
        <>
            <div className="catalog">
                <div className="card large men">
                    <p className="c-title">
                        Men
                    </p>
                </div>
                <div className="card medium sport">
                    <p className="c-title">
                        Sports
                    </p>
                </div>
                <div className="card small shoes">
                    <p className="c-title">
                        Shoes
                    </p>
                </div>
                <div className="card large woman">
                    <p className="c-title">
                        Women
                    </p>
                </div>
            </div>
            
        </>
    );
};

export default Catalog;