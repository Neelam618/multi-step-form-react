import React, { Component } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme();

export class Confirm extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        const { values: {
            firstName, lastName, occupation, city, bio, email
        } } = this.props   //Or this.props.values
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
                                    Confirm User Data
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '2em auto' }}>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem >
                                    <ListItemText primary="First Name" secondary={firstName} />
                                </ListItem>
                                <ListItem >
                                    <ListItemText primary="Last Name" secondary={lastName} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Email" secondary={email} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="city" secondary={city} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="bio" secondary={bio} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Occupation" secondary={occupation} />
                                </ListItem>
                            </List>
                        </nav>
                    </Box>
                    <Button variant="contained" onClick={this.continue}>Confirm</Button>
                    <Button style={{ marginLeft: '1em' }} variant="contained" color="inherit" onClick={this.back}>Back</Button>
                </>
            </ThemeProvider>
        )
    }
}

export default Confirm