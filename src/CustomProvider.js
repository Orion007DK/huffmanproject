import React, { Component } from "react";
import MContext from './functions/MContext';

//export const MContext = React.createContext();  //exporting context object
class CustomProvider extends Component {
state = {message: ""};
render() {
        return (
            <MContext.Provider value={
            {   state: this.state,
                setMessage: (value) => this.setState({
                            message: value })
                            }}>
            {this.props.children}
            </MContext.Provider>)
    }
}

export default CustomProvider;