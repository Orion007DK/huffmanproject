

import { render } from '@testing-library/react'
import { useContext, useMemo, useState, useEffect } from 'react'
import MContext from './MContext'
import Table from './Table'

function DisplayTable(props) {  

  const [dataX, setDataX] = useState([null])
  //setDataX(null)

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Znaki we wpisanym tekście",
        // First group columns
        columns: [
          {
            Header: "Znak",
            accessor: "sign"
          },
          {
            Header: "Powtórzenia",
            accessor: "count"
          },
          {
            Header: "Kod ASCII",
            accessor: "ascii"
          },
          {
            Header: "Kod Huffmana",
            accessor: "huffmanCode"
          }
        ]
      }
    ],
    []
  );
  
    const data = useMemo(
    () => [
        {
          "sign": 1,
          "count": 20
        },
        {
          "sign": 5,
          "count": 7 
        },
        {
          "sign": 4,
          "count": 1
        }
    ]
    );
const mcont = useContext(MContext)
let data2=null;

// const prepareData = () => {
  //  const map = new Map(mcont.state.message);
    const arr = mcont.state.array;
//    console.log("arr");
 //   console.log(arr);
 //   console.log("MAPA");
 //   console.log(map);
    data2='{"signs" : [\n'
  /*  map.forEach((value, key) => {
      console.log(String(key));
    data2=data2+'{\n\"sign\": '+'\"'+String(key)+'\"'+',\n\"count\": '+value+'\n},\n';
    });*/
    arr.forEach((row) => {
    data2=data2+'{\n\"sign\": '+'\"'+row[0]+'\"'+',\n\"count\": '+row[1]+',\n\"ascii\": '+row[2]+',\n\"huffmanCode\": '+row[3]+'\n},\n';
    });
    data2=data2.substring(0, data2.length-2)
    data2=data2+'\n]}'
 //   console.log(data2)
    try{
    data2 = JSON.parse(data2);
    //setDataX(data2)
 //   console.log(data2.signs[0].count)
 //   console.log(data2.signs[0].sign);
    } catch {
      //data2='{"signs" : [\n{\n\"sign\": 1,\n"count\": \n}]}'
    //  setDataX(null)
 //   console.log(data2.signs);
      data2=null;
      console.log("String to JSON conversion failed")
    }
  //  console.log("XX");



    //console.log("DATAX:", dataX);
/*
    return(
      render(
        <div>
        {dataX ? (
          <Table columns={columns} data={dataX.signs}/>
        ) : <p></p>
        }
        </div>
      )
    )*/


 // }

  //console.log(obj);
 // console.log(data)
  /*
  const renderThings = mcont => {
    return mcont.map( thing => {
        console.log({thing});
    })
  }*/

  //      {() =>prepareData()} 
  //       <button onClick={()=>prepareData()}>Wygeneruj tablicę</button>
    return (
      <div className="App">
        {data2 ? (
        <Table columns={columns} data={data2.signs}/>
      ) : <p>nic</p>}

      </div>
    );
        
  }
 // {renderThings(mcont)}
  export default DisplayTable;