import React, {useState, useContext} from "react";

const MyAppContext = React.createContext()

export const useMyAppContext = () => {
    return useContext(MyAppContext)
}

export const MyAppContextProvider = ({children}) => {

    let [alertVisible, setAlertVisible] = useState(true)

    let [text, setText] = useState('no text')

    const alertToggle = () => {
        setAlertVisible(!alertVisible)
        console.log("toggle visible = " + alertVisible)
    }

    const alertSetText = (txt) => {
        setText(txt)
        console.log("alertSetText: " + text)
    }

    return (
        <MyAppContext.Provider value={ {alertVisible : alertVisible, alertToggle, text, alertSetText }}>
            {children}
        </MyAppContext.Provider>
    )
}