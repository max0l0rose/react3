import React, {useState, useRef} from "react";
import {Alert} from "./Alert";

export function Main() {
    const [counter, setCounter] = useRef(
        {val : 0, date: Date.now()}
    )

    function inc() {
        setCounter({val : counter.val + 1})
    }

    return(
        <div className={'container mt-3 p-3 border border-danger'}>
            <Alert visible={false}/>
            <div className={'container mt-3 mb-3 p-3 border border-info'}>
                <pre>{JSON.stringify(counter)}</pre>
            </div>
            <button className={'btn btn-primary'} onClick={inc}>Inc</button>
        </div>
    )
}