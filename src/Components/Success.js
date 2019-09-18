import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class Success extends Component {
    state = {  }
    continue = e => {
        e.preventDefault()

        //Process form here

        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() { 
        return ( 
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Success" />  
                     <h1>Thanks for your time dear</h1>
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
         );
    }
}

 
export default Success;