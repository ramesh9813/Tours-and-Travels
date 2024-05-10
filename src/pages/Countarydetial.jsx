import React, { useState, useEffect } from 'react';
import '../style/countrydetial.css'

const CountryDetail = (props) => {
    const [data, setData] = useState(null); 


    useEffect(() => {
        const storedData = localStorage.getItem('myData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setData(parsedData);
            console.log(parsedData);
        } else {
            console.log('No data found in local storage');
        }
    }, []);  

    const handleAdd=()=>{
        
    }
    return (
        <>
            {data ? (  
                <div className="country-detail">
                    <div className="left">
                        <img src={data.img} alt="" />
                    </div>
                    <div className="right">
                        <h2 className="name-country">{data.location}</h2>
                        <p className="description">{data.description}</p>
                        <h2 className="cost">{data.cost}</h2>
                        <p>Number of days: {data.number_of_days}</p>
                        <button className="add" onClick={handleAdd} >ADD</button>
                    </div>
                </div>
            ) : (
                <h2>Loading...</h2>  
            )}
        </>
    );
}

export default CountryDetail;
