import React from 'react'
import './Button.styles.scss'


const Button_Type_Classes = {
    google : 'google-sign-in',
    inverted: 'inverted',
}
export default function Button({ children, buttonType, ...otherProps }) {


    return (

        <button className={`button-container ${Button_Type_Classes[buttonType]}`}
            {...otherProps}>
            {children}
        </button>

    )
}


