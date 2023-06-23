import React from 'react'

interface MyButtonProps {
    message: string;
    buttonText: string;
}
export default function MyButton({ message, buttonText }: MyButtonProps) {

    return (
        <div>
            <button onClick={() => alert(message)}> {buttonText} </button>
        </div>
    );
}
