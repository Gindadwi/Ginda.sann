// Button.jsx
import React from 'react';

function Button(props) {
    const { btnStroke, onClick, name, type, className } = props;

    return (
        <button
            onClick={onClick}
            type={type}
            className={`rounded-lg border-[1px] px-4 py-1 font-medium transition-all duration-75 active:scale-95 ${btnStroke
                    ? 'bg-transparent text-primary outline-primary hover:outline hover:outline-[2px]'
                    : 'text-bg outline-primary hover:bg-opacity-90 hover:outline hover:outline-[2px]'
                } ${className}`}
        >
            {name}
        </button>
    );
}

export default Button;
