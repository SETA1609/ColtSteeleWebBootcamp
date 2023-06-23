import React from 'react';
import ColorBlock from './ColorBlock/ColorBlock';
import'./Row.css';
interface colorArray {
    colors: string[]
}
function Row({colors}:colorArray) {
    return (
        <div className='Row'>
            <span><ColorBlock colors={colors}/></span>
            <span><ColorBlock colors={colors}/></span>
            <span><ColorBlock colors={colors}/></span>
            <span><ColorBlock colors={colors}/></span>
            <span><ColorBlock colors={colors}/></span>
        </div>
    );
}

export default Row;