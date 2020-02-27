import React, { useState } from 'react';
import Error from "./Error";
import PropTypes from 'prop-types';

    const Form = ({search, saveSearch, saveConsult, saveLoading}) => {


        const [error, saveError] = useState(false);

        //**** Extract values ****//

        const {city, country} = search;

        //****Function: place the elements in the state ****//

        const handleChange = e => {

            // Update state

            saveSearch({
                ...search,
                [e.target.name] : e.target.value
            });
        }

            //When the user submits

            const handleSubmit = e => {
                e.preventDefault();

            //Validate

            if (city.trim() === '' || country.trim() === ''){
                saveError(true);
                return;
            }

                saveError(false);
                saveLoading(true);

            setTimeout(() => {
                
                saveLoading(false);
                saveConsult(true);

            }, 2500);
        
        }

        return ( 
            
        <form onSubmit={handleSubmit}>
            {error ? <Error message= "All fields are required" /> : null}
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="city"
                    className="autocomplete"
                    id="city" 
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s12">
                <select
                    name ="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">---Select a country---</option> 
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Peru</option>
                    <option value="VE">Venezuela</option>
                </select>
                <label htmlFor="country">Country</label>
            </div>
            <div className="input-field col s12">
            <button
                className=" white-text waves-effect waves-light btn-small btn-block cyan"
                type="submit">
                Search
            </button>
            </div>
        </form> );
    }
 

Form.propTypes = {
    search: PropTypes.object.isRequired,
    saveSearch:PropTypes.func.isRequired,
    saveConsult:PropTypes.func.isRequired,
    saveLoading:PropTypes.func.isRequired
}
export default Form;