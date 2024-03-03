import React, { useState } from "react";

function useLocalStorage(defaultValue, key){

    const [value,SetValue] = useState(()=>{
        const localStorageValue = window.localStorage.getItem(key);

        return localStorageValue !== null ? JSON.parse(localStorageValue) : defaultValue;

    });

    React.useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, SetValue];
}

export default useLocalStorage;