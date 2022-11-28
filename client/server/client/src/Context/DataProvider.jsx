import { createContext,useState } from "react";

export const DataContext= createContext(null);

export const DataProvider =({children})=>{

            // children ko use kre hai kynki App.js vali file main DataProvider main kuch already likha hua tha

    const [account, setAccount] = useState('');
    return (

        <DataContext.Provider value={
            {account,
            setAccount}
        }>
            {children}
        </DataContext.Provider>
    )
}