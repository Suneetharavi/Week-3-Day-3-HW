// step1: Import createContext and usestate
import { createContext, useState } from "react";

// 2. Import the data to be passed
import gifts from "../models/gifts";

//3.
export const GiftContext = createContext();

function AppContextProvider(props){

    const [present, setpresent] = useState(gifts)

    return(
        <GiftContext.Provider value={{
            present,
            setpresent,
        }}>
        {props.children}
        </GiftContext.Provider>
    );

}

export default AppContextProvider;