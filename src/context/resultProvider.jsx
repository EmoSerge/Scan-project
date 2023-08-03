import  ResultContext  from './createContext.jsx';
import { useState } from 'react';

const ResultProvider = ({ children }) => {
    const [generalData, setGeneralData] = useState(null)
    const [data, setData] = useState(null)
    const [detailsData, setDetailsData] = useState(null)

    return (
        <ResultContext.Provider value={{
            generalData, setGeneralData,
            data, setData,
            detailsData, setDetailsData
        }}>
            {children}
        </ResultContext.Provider>)
}

export { ResultProvider }