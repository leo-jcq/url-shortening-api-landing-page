import { Dispatch, SetStateAction, useEffect, useState } from 'react';

function useLocalStorage<T>(key: string, defaultVal: string): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(
        JSON.parse(localStorage.getItem(key)?.toString() ?? defaultVal) || defaultVal
    );

    useEffect(() => {
        localStorage.setItem('linkList', JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export default useLocalStorage;
