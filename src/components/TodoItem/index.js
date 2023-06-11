/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {title, id} = todoDetails
  const onDeleteTodo = () => {
    onDelete(id)
  }
  return (
    <li className="li">
      <div className="lists">
        <p className="todo"> {title}</p>

        <button className="button" type="button" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
