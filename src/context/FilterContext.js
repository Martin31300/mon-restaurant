import { createContext, useContext } from "react";

export const FilterContext = createContext(null)

export function useFilters() {
    return useContext(FilterContext)
}