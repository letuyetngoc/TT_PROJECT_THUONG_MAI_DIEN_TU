import React from 'react'
import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

export function Input(props) {
    const { children, placeholder, type, value, name, onChange } = props
    return (
        <input
            className='inputComponent'
            type={type || 'text'}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
        >
            {children}
        </input>
    )
}

export function GroupItem({ children }) {
    return <div style={{ marginBottom: '20px' }}>
        {children}
    </div>
}

export function InputPassword(props) {
    const { children, placeholder, value, name, onChange } = props
    const [typePassword, setTypePassword] = useState('password')

    return (
        <div className='inputPasswordComponent'>
            <input
                type={typePassword}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                name={name}
            >
                {children}
            </input>

            <div className='icon' onClick={() => {
                setTypePassword(typePassword == 'password' ? 'text' : 'password')
            }}>
                {typePassword == 'password' ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
        </div>

    )
}

export function Label(props) {
    const { children } = props
    return <label className='labelComponent'>
        {children}
    </label >
}

export function TextError({ children }) {
    return <p className='textErrorComponent'>{children}</p>
}


