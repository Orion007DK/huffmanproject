import React, { Component } from 'react';
import { Graphviz } from 'graphviz-react';
import Viz from 'viz.js';
import * as d3 from 'd3'
import * as d3Graphviz from 'd3-graphviz';
import { useTable } from "react-table";
import MContext from './MContext';



//<script src="https://unpkg.com/@hpcc-js/wasm/dist/index.min.js" type="application/javascript/"></script>

//const graph = Viz("digraph { a -> b;c; d -> c; a -> d; }", { format: "svg", scale: 2, engine: 'dot' });
//var dotSrc = 'digraph  {a -> b}';
//var x='xx';

var wordMap = new Map();
class TreeGenerator extends Component {

 constructor(props) {
    super(props);
    this.state = {
      input: "2",
      dot: 'digraph  {a -> b}',
      words: '',
      wordsSplit: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleWords = this.handleWords.bind(this);
	 }


	setGraph() {
    console.log('DOT source =', this.state.dot);
   // d3.select(".graph").graphviz()
   // .renderDot(this.state.dot);
   try{
    d3.select("#graph").graphviz()
    .transition(function() {
      return d3.transition().duration(1000)})
      .renderDot(this.state.dot);
    //.renderDot(this.state.dot);
   } catch(error) {
    console.log(error);
   }

/*
    d3.select(".graph").graphviz()
    .transition(d3.transition()
    .duration(2000)
    .ease(d3.easeLinear))
    .attributer(function(d) {
        if (d.tag == "ellipse") {
            d3.select(this)
                .attr("fill", "yellow");
            d.attributes.fill = "red";
        }
    })
    .renderDot(this.state.dot);
*/
	}

    
  async handleChange(event) {
    try {
    this.setState({input: event.target.value});
    let x = event.target.value
    
    await this.setState({dot: "digraph {a ->"+x+"}"});
    await this.setGraph();
   // this.x = event.target.value;
    event.preventDefault();
  } catch (error) {
    console.log(error);
  }  
  }

  async handleWords(event) {
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

  wordMap = await new Map([...wordMap.entries()].sort((a, b) => b[1] - a[1]));

    console.log("witam");
    console.log(this.state.words);
    console.log(this.state.wordsSplit);
    await console.log(wordMap);
    await this.createTable();
    
  }


  createTable(){
    console.log("map");
    console.log(wordMap);
    const data = Array.from(wordMap);


}
//	  <script src="https://unpkg.com/viz.js@1.8.0/viz.js" type="javascript/worker"></script>

/*

        <form>
            <label>
              Sygnał wejściowy:
              <input name="input" type="text" value={x}
                     onChange={this.handleChange}/>
            </label>
           <br />
            Wpis: {this.state.x}
        </form>

*/


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
       <input name="words" type="text" value={this.state.words} onChange={event => {this.handleWords(event); context.setMessage(wordMap)}}></input>
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
     /*    
     <MContext.Consumer>
     {(context) => (
       <input name="words" type="text" value={this.state.words} onChange={event => {this.handleWords(event); context.setMessage(wordMap)}}></input>
       )}</MContext.Consumer>
     */
     /*
     <input name="words" type="text" value={this.state.words} onChange={event => {this.handleWords(event)}}></input>
     <MContext.Consumer>
     {(context) => (
       <button onClick={()=> context.setMessage(wordMap)}>wygeneruj</button>
       )}</MContext.Consumer>
       */
}
        //  {(context) => (
       //   <button onClick={()=>{context.setMessage(this.state.input)}}>Send</button>
        //  )}
export default TreeGenerator;