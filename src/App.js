import React,{Component} from 'react';
import './App.css';
import TodoItems from './Component/TodoItems/TodoItems';
import AddItems from './Component/AddItems/AddItems';


class App extends Component{
  state = {
    items:[
      {id:1,name:'Ahmed',age:23},
      {id:2,name:'Tarek',age:43},
      {id:3,name:'Gamal',age:23}

    ]
  }
  deleteItem=(id)=>{
     let items = this.state.items.filter(item => {
       return item.id !== id;
     })
     this.setState({items});
  }

  addItem = (item)=>{
     item.id=Math.random();
    const items = this.state.items;
    items.push(item);
    this.setState({items});
  }
  render(){
    return(
      <div className="App container ">
       <h1 className="text-center">To dolist</h1>
        <TodoItems items = {this.state.items} deleteItem={this.deleteItem}/>
        <AddItems addItem={this.addItem}/>
      </div>
    );
  }

}
export default App;
