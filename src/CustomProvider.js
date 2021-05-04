import React, { Component } from "react";
import MContext from './functions/MContext';

//export const MContext = React.createContext();  //exporting context object
class CustomProvider extends Component {
state = {message: "", array: []};
render() {
        return (
            <MContext.Provider value={
            {   state: this.state,
                setMessage: (value) => this.setState({
                            message: value }),
                setArray: (value) => this.setState({array: value})
                            }}>
            {this.props.children}
            </MContext.Provider>)
    }
}

export default CustomProvider;