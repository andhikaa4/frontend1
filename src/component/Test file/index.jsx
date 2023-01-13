import React, { useState, useRef, useEffect } from 'react';

function DraggableDiv({ color, item, id, fontSize}) {
    const divRef = useRef(null);
    const [divStyle, setDivStyle] = useState({
        position: 'relative',
        top: '',
        left: '',
        color: '',
        fontSize: '',
    });

    useEffect(() => {
        setDivStyle({
            ...divStyle,
            color: color
        })
    },[color])

    useEffect(() => {
        setDivStyle({
            ...divStyle,
            fontSize: `${fontSize}px`
        })
    },[fontSize])

    const handleMouseDown = e => {
        e.preventDefault();
        const initialX = e.clientX - divStyle.left.slice(0, -2);
        const initialY = e.clientY - divStyle.top.slice(0, -2);

        const handleMouseMove = e => {
            setDivStyle({
                position: 'relative',
                top: `${e.clientY - initialY}px`,
                left: `${e.clientX - initialX}px`,
                color: color,
                fontSize: fontSize
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };

        document.addEventListener('mouseup', handleMouseUp);
    };
    

    return (
        <div>
            <div
                ref={divRef}
                id={id}
                style={divStyle}
                onMouseDown={handleMouseDown}
            >
                {item}
            </div>
        </div>
    );
}

export default DraggableDiv;