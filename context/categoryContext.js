import { createContext, useState } from "react";

export const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState('simple');

    return (
        <CategoryContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}