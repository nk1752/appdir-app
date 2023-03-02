'use client'

import { useState, useRef, useEffect } from 'react'

function About() {
    
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState(0);
    const count = useRef(0);


    useEffect(() => {
        count.current = count.current + 1;
        (count.current > 10) ? count.current=0 : count.current;
    });
   

    return (

    <>
      
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <h1>Input Value: {inputValue}</h1>
    
    </>

    );
}

export default About;