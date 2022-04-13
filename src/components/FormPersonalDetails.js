import React, { Component } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme();

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        const { values, handleChange } = this.props   //Or this.props.values
        return (
            <ThemeProvider theme={theme}>
                <>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Enter Personal Details
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            label="Occupation" variant="standard" hintText="Enter Your Occupation" onChange={handleChange("occupation")} defaultValue={values.occupation}
                        />
                        <br />
                        <TextField
                            label="City" variant="standard" hintText="Enter Your City" onChange={handleChange("city")} defaultValue={values.city}
                        />
                        <br />
                        <TextField
                            label="Bio" variant="standard" hintText="Enter Your Bio" onChange={handleChange("bio")} defaultValue={values.bio}
                        />
                        <br />
                    </Box>

                    <Button variant="contained" onClick={this.continue}>Continue</Button>
                    <Button style={{ marginLeft: '1em' }} variant="contained" color="inherit" onClick={this.back}>Back</Button>
                </>
            </ThemeProvider>
        )
    }
}

export default FormPersonalDetails