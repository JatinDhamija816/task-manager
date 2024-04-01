import { createContext, useContext, useState } from "react";

export const DataContext = createContext()
export const useData = () => {
    return useContext(DataContext)
}
export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const addData = (newData) => {
        setData([...data, newData]);
    };

    const updateData = (id, updatedItem) => {
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, ...updatedItem } : item
        );
        setData(updatedData);
    };

    const deletedata = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    return (
        <DataContext.Provider value={{ data, addData, updateData, deletedata }}>
            {children}
        </DataContext.Provider>
    );
};