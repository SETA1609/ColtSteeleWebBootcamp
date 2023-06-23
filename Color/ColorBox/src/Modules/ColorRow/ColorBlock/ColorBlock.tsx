import React, { useState } from 'react';
import './ColorBlock.css';
interface colorArray {
    colors: string[]
}

function ColorBlock({ colors }: colorArray) {
    const randomNumber: number = Math.floor(Math.random() * colors.length);
    const randomColor: string = colors[randomNumber];
    const [num, setNum] = useState(randomNumber)

    return (
        <div className='ColorBox' onClick={() => setNum(Math.floor(Math.random() * colors.length))} style={{ backgroundColor: randomColor }}>

        </div>
    );
}

export default ColorBlock;