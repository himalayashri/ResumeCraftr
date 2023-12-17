import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);

    useEffect(function () {
        fetch('/api')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    return <DataContext.Provider value={{ data, setData }}>
        {children}
    </DataContext.Provider>
}

export { DataProvider, DataContext };
