import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS from 'reactcss';

const Menu = ({children}) => {

    return (
        <div>
            {children}
        </div>
    )
}

Menu.propTypes = {
    children: propTypes.any,
};

const Item = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

Item.propTypes = {
    children: propTypes.any,
};

Menu.Item =  Item;
export default Menu;