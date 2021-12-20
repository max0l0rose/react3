import React, {useContext} from "react";
import {useMyAppContext} from "./AppContext";

export function Alert(props) {

    const context = useMyAppContext()

    console.log('alert in ' + JSON.stringify(context))

    if (!context.alertVisible)
        return null

    console.log('alert out')

    return(
        <div className={'alert alert-danger m-3 p-3 shadow'} onClick={e=>{context.alertToggle()}}>
            {context.text}
        </div>
    )
}