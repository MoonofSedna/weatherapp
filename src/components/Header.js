import React from 'react';
import PropTypes from 'prop-types';
const Header = ({title}) => {
    return ( 
        <nav className='nav-wrapper nav-t'>
            <h1 className='mt-4'>{title}</h1>
        </nav>
     );
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;