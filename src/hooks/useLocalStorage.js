import React, { useState } from "react";

function useLocalStorage(defaultValue, key){

    const [value,setValue] = useState(()=>{
        const localStorageValue = window.localStorage.getItem(key);

        return localStorageValue !== null ? JSON.parse(localStorageValue) : defaultValue;

    });

    React.useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;