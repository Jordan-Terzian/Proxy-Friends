import React, { useState } from 'react';

const UseToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);
    const toggleValue = () => { setValue(prevState => !prevState) };
    const setTrue = () => { setValue(true) };
    const setFalse = () => { setValue(false) };
    return {
        value,
        toggleValue,
        setTrue,
        setFalse
    };
};

export default UseToggle;
