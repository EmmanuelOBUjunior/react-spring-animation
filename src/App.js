import {React, Component} from 'react'
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

 export class App extends Component {
  state = {
    showComponent3 : false
  }

  toggle = e => this.setState({showComponent3: !this.state.showComponent3})

 render(){
  return (
    <div className="App">
     <Component1/>
     <Component2 toggle = {this.toggle}/>
     <Component3/>
    </div>
  );
}
}

export default App;


