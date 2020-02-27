import React from 'react';
import PropTypes from 'prop-types';


    const Weather = ({result}) => {

        //****Extract values ****//

        const {name, main, weather} = result;

        if (!name) return null;

        //****Kelvin****/

        const kelvin = 273.15;

        return ( 

            <div className=" col-md-12">
                <div className="white-text">
                    <p className="weather-t">{name}</p>
                    <p className="weatherdescrip">{weather[0].description}</p>
                    <p className="weater-p">{parseFloat(main.temp - kelvin, 10).toFixed(2)}<span> &#x2103;</span></p>
                    <p> Max. Temperature:
                        {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}<span> &#x2103;</span>
                    </p>
                    <p> Min. Temperature:
                        {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}<span> &#x2103;</span>
                    </p>
                </div>
            </div>
        
            );
    }
 
Weather.propTypes = {
    result: PropTypes.object.isRequired
}
export default Weather;