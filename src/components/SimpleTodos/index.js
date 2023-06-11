/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/require-render-return */
import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {TodoList: initialTodosList}

  onDelete = uniqueId => {
    const {TodoList} = this.state
    const ModifiedTodo = TodoList.filter(each => each.id !== uniqueId)
    this.setState({TodoList: ModifiedTodo})
  }

  render() {
    const {TodoList} = this.state
    return (
      <div className="bg-container">
        <div className="todo-container">
          <h1 className="title">Simple Todos</h1>

          <ul>
            {TodoList.map(each => (
              <TodoItem
                todoDetails={each}
                key={each.id}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
