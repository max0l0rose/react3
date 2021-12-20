import React, {useState, useRef, useEffect} from "react";
import {useMyAppContext} from "./AppContext";
import {Button, ButtonGroup, Checkbox, FormControlLabel, TextField}
                                                    from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddPh from '@mui/icons-material/AddAPhoto';
import AddOutL from '@mui/icons-material/AddOutlined';
import DelOut from '@mui/icons-material/DeleteOutline';
import DelForever from '@mui/icons-material/DeleteForeverOutlined';
import Save from '@mui/icons-material/SaveOutlined';
import SaveAlt from '@mui/icons-material/SaveAlt';
import ArrBack from '@mui/icons-material/ArrowBack';
import ArrF from '@mui/icons-material/ArrowForward';
import {orange, grey, red, blue, white, black, green} from "@mui/material/colors";

const theme = createTheme({
    palette : {
        primary: {
            main: orange[500],
        }
    }
})

export function Main() {
    console.log('Main in')

    const [counter, setCounter] = useState(
        {val : 0, date: Date.now()}
    )

    let msgRef = useRef('loading...')

    const context = useMyAppContext()

    useEffect(() => {
        //msgRef.current = 'useEffect ' + counter.val

        console.log("useEffect: context = " + JSON.stringify(context))


        // for(let i = 0; i < 5; i++) { // not var! wow
        //     setTimeout(function() {
        //         console.log(i);
        //     }, (i+1) * 1000);
        // }

    })

    return(
        <ThemeProvider theme={theme}>
            <div className={'container mt-3 p-3 border border-danger'}>
                <p>msg={msgRef.current}</p>
                <div className={'container mt-3 mb-3 p-3 border border-info'}>
                    <pre>{JSON.stringify(counter)}</pre>
                </div>
                <input type="text" className={'m-1'} ref={msgRef} onChange={e=>{context.alertSetText(msgRef.current = e.target.value)}}/>

                <button className={'btn btn-primary'}
                        onClick={() => {
                                //alert(111)
                                setCounter((prev) => {return {...prev, val: prev.val + 1}})
                            }
                        }>Inc
                </button>

                <button className={'btn btn-secondary ml-1'}
                        onClick={() => {context.alertToggle()}}>Toggle
                </button>

                <hr/>

                {/*<LoginAnt/>*/}

                <ButtonGroup>
                    <Button color={"primary"} variant="contained" startIcon={<DelForever/>}>Hello</Button>
                    <Button color={"secondary"} variant="contained" endIcon={<DelOut/>}>Hello2</Button>
                    <Button color={"success"} variant="contained" startIcon={<SaveAlt/>}>Hello3</Button>
                </ButtonGroup>
                <ButtonGroup size={"small"}>
                    <Button color={"error"} variant="contained" startIcon={<Save/>}>Hello4</Button>
                    <Button color={"info"} variant="contained" startIcon={<ArrBack/>}>Hello5</Button>
                    <Button color={"warning"} variant="contained" startIcon={<ArrF/>}>Hello5</Button>
                </ButtonGroup>

                <hr/>

                <TextField variant={"standard"} label="Label:"
                           color={"warning"}
                           placeholder="Placeholder"
                />

                <hr/>

                <FormControlLabel labelPlacement={"start"}
                    control={
                        <TextField variant={"standard"}
                                   color={"warning"}
                                   value={"1234"}
                            // size={"small"}
                                   type={"date"}/>
                    } label="Enter date: "/>

                <hr/>

                <TextField fullWidth="true"
                    variant="outlined"
                    color="warning"
                    label="Color:"
                    type="color"/>

                <hr/>

                <TextField variant={"standard"}
                           color={"primary"}
                           value={"qqqq"}
                    // size={"small"}
                           label="Email:"
                           type="email"/>

                <hr/>

                <FormControlLabel control={
                    <Checkbox
                              checkedIcon={<DelForever/>}
                              icon={<DelOut/>}
                    />
                } label="Chchchchc"/>

                <hr/>

            </div>
        </ThemeProvider>
    )
}