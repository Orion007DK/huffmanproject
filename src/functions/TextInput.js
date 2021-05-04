import React, { Component } from 'react';
import { Graphviz } from 'graphviz-react';
import Viz from 'viz.js';
import * as d3 from 'd3'
import * as d3Graphviz from 'd3-graphviz';
import { useTable } from "react-table";
import MContext from './MContext';


class TextInput extends Component {


    constructor(props) {
        super(props);
        this.state = {
          words: '',
          wordsSplit: ''
        };
    
        this.handleInput = this.handleInput.bind(this);
         }


    
    async handleInput(event) {
        this.setState({words: event.target.value});
        await this.setState({wordsSplit: event.target.value.split("")});
        wordMap=new Map();
        await this.state.wordsSplit.forEach((x) => {
          if(wordMap.has(x)){
            wordMap.set(x, wordMap.get(x)+1);
          } else {
            wordMap.set(x,1);
          }
      })

    
    render() {
		return (
      <div className="TreeGenerator">
              <script src="//d3js.org/d3.v5.min.js"/>
        <script src="https://unpkg.com/@hpcc-js/wasm@0.3.11/dist/index.min.js"/>
             <div id="graph">
               </div> 
                  <form>
            <label>
              Sygnał wejściowy:
              <input name="input" type="text" value={this.state.input}
                     onChange={this.handleChange}/>
            </label>
           <br />
            Wpis: {this.state.dot}

          <br />
          
          <MContext.Consumer>
     {(context) => (
       <input name="words" type="text" value={this.state.words} onChange={event => {this.handleInput(event); context.setMessage(wordMap)}}></input>
       )}</MContext.Consumer>
       
          <br />
            wynik: {this.state.wordsSplit}
        </form>
        <MContext.Consumer>
     {(context) => (
       <button onClick={()=> context.setMessage(wordMap)}>Odśwież</button>
       )}</MContext.Consumer>
        <button onClick={() => this.setGraph()}>
          {'Click me'}
        </button>
        


        

      </div>
	  );
	   }  

}

export default TextInput;
