import './App.css';

function App() {
  return (
    <div className="App">
    <p>hi, <Person/></p>
    <Message/>
    <h2>this is a component</h2>
    </div>
    
  );
}

const Person = () => <h2>Isaac</h2>
const Message = () => {
  return(
    <h2>How are you doing today</h2>
  )
}



export default App;
