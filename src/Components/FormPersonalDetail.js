import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormPersonalDetail extends Component {
    state = {  }

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() { 
        const {values, handleChange} = this.props
        return ( 
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Enter Personal Detaiiils" />
                        <TextField
                        hintText="Enter Occupation"
                        floatingLabelText="Occupation"
                         onChange={handleChange('occupation')}
                         defaultValue={values.occupation}/>
                         <br/>
                         <TextField
                        hintText="Enter City"
                        floatingLabelText="City"
                         onChange={handleChange('city')}
                         defaultValue={values.city}/>
                         <br/>
                         <TextField
                        hintText="Enter Bio"
                        floatingLabelText="Bio"
                         onChange={handleChange('bio')}
                         defaultValue={values.bio}/>
                         <br/>
                         <RaisedButton 
                            label="Continue"
                            primary={true}
                            styles={styles.button}
                            onClick={this.continue}
                          /> 
                          <RaisedButton 
                            label="Back"
                            primary={false}
                            styles={styles.button}
                            onClick={this.back}
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
 
export default FormPersonalDetail;