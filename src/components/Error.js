import React from 'react';
import PropTypes from 'prop-types';


const Error = ({message}) => {
    return ( 
    <p className="red lighten-0 text-center p-3 error">{message}</p>
     );
} 
 

Error.propTypes = {
    message: PropTypes.string.isRequired
}
export default Error;