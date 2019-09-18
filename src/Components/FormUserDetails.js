import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormUserDetails extends Component {
    state = {  }

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() { 
        const {values, handleChange} = this.props
        return ( 
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Enter Detaiiils" />
                        <TextField
                        hintText="Enter First Name"
                        floatingLabelText="First Name"
                         onChange={handleChange('firstName')}
                         defaultValue={values.firstName}/>
                         <br/>
                         <TextField
                        hintText="Enter Last Name"
                        floatingLabelText="Last Name"
                         onChange={handleChange('lastName')}
                         defaultValue={values.lastName}/>
                         <br/>
                         <TextField
                        hintText="Enter Email"
                        floatingLabelText="Email"
                         onChange={handleChange('email')}
                         defaultValue={values.email}/>
                         <br/>
                         <RaisedButton 
                            label="Continue"
                            primary={true}
                            styles={styles.button}
                            onClick={this.continue}
                          /> 
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
         );
    }
}

const styles = {
    button: {
        margin: 15
    }
}
 
export default FormUserDetails;