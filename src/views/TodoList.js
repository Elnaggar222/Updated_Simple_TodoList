import TodosForm from "../components/TodoList/TodosForm"
import Todos from "../components/TodoList/Todos"

const TodoList = () => {
    return (
        <div className="TodoList-parent">
            <TodosForm />
            <Todos />
        </div>
    )
}

export default TodoList