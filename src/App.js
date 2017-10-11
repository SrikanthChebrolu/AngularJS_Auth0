import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import './App.css';

class App extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return ( < div className="margine">
                    <AppBar position="static" >
                        <Toolbar >
                            <IconButton className="menuButton">
                                <MenuIcon /> 
                            </IconButton> 
                            <Typography type="title" color="inherit" className="flex" >
                                ASK - Sahayak 
                            </Typography> 
                            <Button className="btn-margin" onClick={ this.goTo.bind(this, 'home') } >
                                Home 
                            </Button> 
                            {!isAuthenticated() && ( 
                                <Button className="btn-margin" onClick={ this.login.bind(this) } >
                                    Log In 
                                </Button>
                            )} {
                            isAuthenticated() && ( <Button  className="btn-margin"
                                                    onClick={ this.logout.bind(this) } >
                                                    Log Out 
                                                    </Button>
                            )}
                        </Toolbar> 
                    </AppBar> 
                </div>);
        }
}

export default App;