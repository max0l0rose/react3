import React from "react";

export function Alert(props) {

    console.log('alert')

    if (!props.visible)
        return null

    return(
        <div className={'alert alert-danger mt-3 p-3 shadow'}>
            Alert!!!!!!!!!!!!!
        </div>
    )
}