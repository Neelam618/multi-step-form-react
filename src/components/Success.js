import React, { Component } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme();

export class Success extends Component {
    render() {
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
                                    Success
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <h1>Thank You For Your Submission</h1>
                    <p>You will get the email with further instructions</p>
                </>
            </ThemeProvider>
        )
    }
}

export default Success