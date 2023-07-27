import React from 'react'
import './Form-Input.styles.scss'

export default function FormInput({ label, ...otherProps }) {
    return (
        <div className='group'>
            {label && (
                <label className={`${otherProps.value.length ? 'shrink' : ''}form-input-lable`}>
                    {label}
                </label>
            )}
            <input className='form-input' {...otherProps} />
        </div>
    )
}
