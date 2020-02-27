import React from 'react';
import PropTypes from 'prop-types';
import imagen from '../img/img-000.png';


    const Header = ({title}) => {
        return ( 
            <nav className='nav-wrapper nav-t'>
                <img src={imagen} alt="logo" className="img-l"/>
                <h1 className='mt-4'>{title}</h1>
            </nav>
        );
    }
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;