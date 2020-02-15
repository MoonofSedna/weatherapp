import React from 'react';
import "./Spinner.css"
import PropTypes from 'prop-types';

const Spinner = () => {
    return ( 
        <div className="spinner">
        <div className="double-bounce1"></div>
       <div className="double-bounce2"></div>
</div>
     );
}

Spinner.propTypes = {
    message: PropTypes.func.isRequired
}
export default Spinner;