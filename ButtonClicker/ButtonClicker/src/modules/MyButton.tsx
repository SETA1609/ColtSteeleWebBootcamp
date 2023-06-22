import React from 'react'

interface MyButtonProps {
    message: string;
    buttonText: string;
  }
export default function MyButton({ message, buttonText }: MyButtonProps) {
    const myClickHandler = () => {
        console.log(message);
    };

    return (
        <div>
            <button onClick={myClickHandler}>{buttonText}</button>
        </div>
    );
}
