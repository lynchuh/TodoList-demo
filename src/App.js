import React, { Component } from 'react'

import './App.css'
import './reset.css'
import 'normalize.css'

import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      newTodo:'',
      todoList: [
       
      ]      
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index)=>{
      return (
      <li key={index}>
          <TodoItem todo={item}/>
      </li>)
    })

    return (
      <div className="App">
        <h1> 我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} onSubmit={this.addTodo}/>
        </div>
        <ol className="todoList">
          {todos}
        </ol>
      </div>
    )
  }
  addTodo(event){
    console.log('event')
    console.log(event)
    this.state.todoList.push({
      id:idMaker(),
      title: event.target.value,
      status:null,
      deleted:false
    })
    this.setstate({
      newTodo:'',
      todoList:this.state.todoList
    })
  }
}

export default App

let id=0
function idMaker(){
  id+=1
  return id
}