import logo from './logo.svg';
import './App.css';
import TreeGenerator from './functions/TreeGenerator';
import CreateTable from './functions/CreateTable';
import CustomProvider from './CustomProvider';
import DisplayTable from './functions/DisplayTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <CustomProvider>
            <TreeGenerator/>
            <DisplayTable/>
          </CustomProvider>
        </div>

      </header>
    </div>
  );
}
//<CreateTable dane="dzis"/> 
export default App;
