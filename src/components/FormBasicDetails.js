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

export class FormBasicDetails extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
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
                                    Enter User Details
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
                            label="First Name" variant="standard" hintText="Enter Your First Name" onChange={handleChange("firstName")} defaultValue={values.firstName}
                        />
                        <br />
                        <TextField
                            label="Last Name" variant="standard" hintText="Enter Your Last Name" onChange={handleChange("lasttName")} defaultValue={values.lastName}
                        />
                        <br />
                        <TextField
                            label="Email" variant="standard" hintText="Enter Your Email" onChange={handleChange("email")} defaultValue={values.email}
                        />
                        <br />
                    </Box>

                    <Button variant="contained" onClick={this.continue}>Continue</Button>

                </>
            </ThemeProvider>
        )
    }
}

export default FormBasicDetails