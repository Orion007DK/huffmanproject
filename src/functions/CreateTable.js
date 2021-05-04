import React, { Component, useMemo, useContext } from "react";
import MContext from './MContext';
import Table from './Table';
import DisplayTable from './DisplayTable'


let arrayData;
/*
const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Tablica wystąpień znaków",
        // First group columns
        columns: [
          {
            Header: "Znak",
            accessor: "show.Znak"
          },
          {
            Header: "Liczba wystąpień",
            accessor: "show.liczba"
          }
        ]
      },
    ],
    []
  );
*/
class CreateTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

showTable(data) {
 // CreateTable.contextType=MContext;
 //   let con = this.context.message;
 //DisplayTable();
 //   console.log(con);
    console.log("table ==========");
    //console.log(data);
    arrayData=Array.from(data);
    for(let j=0; j<arrayData.length; j++){
        console.log("liczba: "+arrayData[j][0]+", wystąpień: "+arrayData[j][1])
        }
    console.log("koniec");
/*
    for(let j=0; j<arrayData.length; j++){
      for(let i=0; i<arrayData[j].length; i++){
          console.log(j+"/"+i);
          console.log(arrayData[j][i])
      }}
*/
}
    
    render() {
		return (
            <div>
                CreateTable: {this.props.dane}
                <MContext.Consumer>
                    {(context) => { 
                      (<p>{context.state.message}</p>);
                     this.showTable(context.state.message)
                    }}
                </MContext.Consumer>

                
            </div>
       );
    }
}
//                <DisplayTable/>
//<Table data={arrayData}/>
 //                   {(context) => {
 //                       <p>witam {context.state.message}</p>
   //                     this.showTable(context.state.message)}}


export default CreateTable;