import {
    AppBar,
    Box,
    Select,
    MenuItem,
    Button,
    Typography,
    Card,
    CardContent,
    CardActions,
    Chip,
    Dialog,
    DialogTitle,
    DialogActions,
    Container,
    Grid,
} from '@material-ui/core'
import React, { useState } from 'react'

const UserLanding = (props) => {
    let [integer, setInteger] = useState([12, '+', 9])
    let [equation, setEquation] = useState([])

    const inputNumber = (num) => {
        if (typeof num === 'number') {
            let lastArrItem = integer.length - 1
            if (typeof lastArrItem === 'number') {
                setInteger([integer[lastArrItem]])
            }
            console.log(num)
            // setInteger([...integer, concat])
        }

        if (typeof num === 'string') {
            setInteger([...integer, num])
        }

        // if (integer === 0) {
        //     if (num === '.') {
        //         setInteger(`${integer}` + `${num}`)
        //     } else {
        //         setInteger(num)
        //     }
        // } else {
        //     setInteger(`${integer}` + `${num}`)
        // }
    }

    const inputOperation = (integer) => {}

    const clear = () => {
        setInteger(0)
    }

    const consol = () => {
        console.log(integer)
    }

    return (
        <div>
            <h1>Calculator</h1>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid>
                    <Button
                        onClick={() => inputNumber('+')}
                        variant="contained"
                        color="primary"
                    >
                        +
                    </Button>
                    <Button
                        onClick={() => inputNumber('.')}
                        variant="contained"
                        color="primary"
                    >
                        .
                    </Button>
                    <Button
                        onClick={() => inputNumber(0)}
                        variant="contained"
                        color="primary"
                    >
                        0
                    </Button>
                    <Button
                        onClick={() => inputNumber(1)}
                        variant="contained"
                        color="primary"
                    >
                        1
                    </Button>
                    <Button
                        onClick={() => inputNumber(2)}
                        variant="contained"
                        color="primary"
                    >
                        2
                    </Button>
                    <Button
                        onClick={() => inputNumber(3)}
                        variant="contained"
                        color="primary"
                    >
                        3
                    </Button>
                    <Button
                        onClick={() => inputNumber(4)}
                        variant="contained"
                        color="primary"
                    >
                        4
                    </Button>
                    <Button
                        onClick={() => inputNumber(5)}
                        variant="contained"
                        color="primary"
                    >
                        5
                    </Button>
                    <Button
                        onClick={() => inputNumber(6)}
                        variant="contained"
                        color="primary"
                    >
                        6
                    </Button>
                    <Button
                        onClick={() => inputNumber(7)}
                        variant="contained"
                        color="primary"
                    >
                        7
                    </Button>
                    <Button
                        onClick={() => inputNumber(8)}
                        variant="contained"
                        color="primary"
                    >
                        8
                    </Button>
                    <Button
                        onClick={() => inputNumber(9)}
                        variant="contained"
                        color="primary"
                    >
                        9
                    </Button>
                </Grid>
                <h1>{integer}</h1>
                {/* <h2>{equation}</h2> */}
                <br />
                <Button onClick={clear} variant="contained" color="primary">
                    clear
                </Button>
                <Button onClick={consol} variant="contained" color="primary">
                    Console
                </Button>
                <Button
                    onClick={() => inputOperation(integer)}
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </Grid>
        </div>
    )
}

export default UserLanding
