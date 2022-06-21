import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

function App() {
  const state = {
    showComponent3 : false
  }

 const toggle = e => console.log(123)
  return (
    <div className="App">
     <Component1/>
     <Component2 toggle = {toggle}/>
    </div>
  );
}

export default App;
