import React from 'react'

export function Checkbox({ children }) {
    const onChange = (e) => {
        // console.log(`checked = ${e.target.checked}`);
    };
    return (
        <label className='checkboxComponent'>
            {children}
            <input type='checkbox' onChange={onChange} />
            <span></span>
        </label>
    )
}
