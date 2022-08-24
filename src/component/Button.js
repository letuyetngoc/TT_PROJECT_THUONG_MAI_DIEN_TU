import React from 'react'
import { useState } from 'react';

export default function Button(props) {

    const { bgColor, color, bgColorHover, icon, children, onClick, border, type, disabled } = props
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <button
            disabled={disabled || false}
            type={type}
            style={{
                backgroundColor: isHovering ? bgColorHover : bgColor,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                border: border || 'none',
                margin: 0,
                height: '40px',
                padding: '0 36px',
                color: color || 'white',
                fontSize: '1.6rem',
                lineHeight: '46px',
                borderRadius: '4px',
                textTransform: 'uppercase',
                fontWeight: 400,
                outline: 'none',
                transition: 'all 0.2s ease-in',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <span style={{
                fontSize: '2rem',
                marginRight: '10px',
                marginBottom: '4px',
            }}>{icon}</span>

            <span>{children}</span>

        </button >
    )
}
