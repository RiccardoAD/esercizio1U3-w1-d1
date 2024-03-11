
import './App.css';
import ButtonComponents from './Components/ButtonComponents'
import ImageComponent from './Components/ImageComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <ButtonComponents  name="invia"></ButtonComponents>


        <ImageComponent  src="https://placedog.net/200  " alt="imagcane"></ImageComponent>
        {/* <ImageComponent /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponents  name="iscriviti"></ButtonComponents>
      </header>
    </div>
  );
}

export default App;
