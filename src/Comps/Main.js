import React, {useState, useRef, useEffect} from "react";
import {useMyAppContext} from "./AppContext";

export function Main() {
    console.log('Main in')

    const [counter, setCounter] = useState(
        {val : 0, date: Date.now()}
    )

    let msg = useRef('loading...')

    const context = useMyAppContext()

    useEffect(() => {
        msg.current = 'useEffect ' + counter.val

        console.log("useEffect: context = " + JSON.stringify(context))


        // for(let i = 0; i < 5; i++) { // not var! wow
        //     setTimeout(function() {
        //         console.log(i);
        //     }, (i+1) * 1000);
        // }

    })

    return(
            <div className={'container mt-3 p-3 border border-danger'}>
                <p>msg={msg.current}</p>
                <div className={'container mt-3 mb-3 p-3 border border-info'}>
                    <pre>{JSON.stringify(counter)}</pre>
                </div>

                <button className={'btn btn-primary'}
                        onClick={() => {
                                //alert(111)
                                setCounter((prev) => {return {...prev, val: prev.val + 1}})
                                setCounter((prev) => {return {...prev, val: prev.val + 1}})
                            }
                        }>Inc
                </button>

                <button className={'btn btn-secondary ml-1'}
                        onClick={() => {context.alertToggle()}}>Toggle
                </button>
            </div>
    )
}