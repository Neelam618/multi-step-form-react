import React, { Component } from 'react'
import FormBasicDetails from './FormBasicDetails'
import FormPersonalDetails from './FormPersonalDetails'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        bio: '',
        occupation: ''
    }

    //proceed to the next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    //proceed to the next step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    //handle input fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const { step, firstName, lastName, city, bio, email, occupation } = this.state
        const values = { firstName, lastName, city, bio, email, occupation }
        switch (step) {
            case 1:
                return (
                    <FormBasicDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                )
            case 2:
                return (
                    <FormPersonalDetails nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                )
            case 3:
                return (
                    <h2>Confirm</h2>
                    // <Confirm />
                )
        }
    }
}

export default UserForm